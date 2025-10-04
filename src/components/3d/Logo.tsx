// src/components/Logo.tsx
import { Clone, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { GLTF } from "three-stdlib";
import { MathUtils, Object3D, Mesh, MeshStandardMaterial, Material } from "three";
import { useEffect, useMemo, useRef } from "react";

type GLTFResult = GLTF & {
  nodes: Record<string, Object3D>;
  materials: Record<string, Material>;
};

const LOGO_PATH = "/Logo.glb";
const DEFAULT_SCALE = 2.5;
const BASE_COLOR = "#dcdcdc";
const EMISSIVE_COLOR = "#1a1a1a";
const BASE_ROUGHNESS = 0.35;
const BASE_METALNESS = 0.2;

type LogoProps = {
  scale?: number | [number, number, number];
  position?: [number, number, number];
  rotation?: [number, number, number];
  simple?: boolean;
  active?: boolean;
};

export default function Logo({ scale, position, rotation, simple = false, active = false }: LogoProps) {
  const logo = useGLTF(LOGO_PATH) as GLTFResult;
  const materialsRef = useRef<MeshStandardMaterial[]>([]);

  const templateMaterial = useMemo(() => {
    const material = new MeshStandardMaterial({
      color: simple ? "#d0d0d0" : BASE_COLOR,
      emissive: simple ? "#161616" : EMISSIVE_COLOR,
      emissiveIntensity: simple ? 0.22 : 0.35,
      roughness: simple ? 0.5 : BASE_ROUGHNESS,
      metalness: simple ? 0.08 : BASE_METALNESS,
    });
    return material;
  }, [simple]);

  useEffect(() => () => templateMaterial.dispose(), [templateMaterial]);

  useEffect(() => {
    const materials: MeshStandardMaterial[] = [];
    logo.scene.traverse((child) => {
      if ((child as Mesh).isMesh) {
        const mesh = child as Mesh;
        if (Array.isArray(mesh.material)) {
          mesh.material = mesh.material.map(() => {
            const clone = templateMaterial.clone();
            materials.push(clone);
            return clone;
          });
        } else {
          const clone = templateMaterial.clone();
          mesh.material = clone;
          materials.push(clone);
        }
        mesh.castShadow = !simple;
        mesh.receiveShadow = true;
      }
    });
    materialsRef.current = materials;
    return () => {
      materials.forEach((mat) => mat.dispose());
      materialsRef.current = [];
    };
  }, [logo.scene, templateMaterial, simple]);

  const baseIntensity = simple ? 0.22 : 0.35;
  const activeIntensity = simple ? 0.38 : 0.6;

  useFrame((_, delta) => {
    const target = active ? activeIntensity : baseIntensity;
    materialsRef.current.forEach((material) => {
      material.emissiveIntensity = MathUtils.damp(material.emissiveIntensity, target, 4, delta);
    });
  });

  const resolvedScale = useMemo<[number, number, number]>(() => {
    if (Array.isArray(scale)) return scale;
    if (typeof scale === "number") return [scale, scale, scale];
    return [DEFAULT_SCALE, DEFAULT_SCALE, DEFAULT_SCALE];
  }, [scale]);

  return (
    <group position={position} rotation={rotation ?? [-Math.PI / 2, 0, 0]}>
      <Clone object={logo.scene} scale={resolvedScale} />
    </group>
  );
}

useGLTF.preload(LOGO_PATH);
