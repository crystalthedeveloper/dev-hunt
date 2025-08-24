// src/components/Logo.tsx
import { Clone, useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { Object3D, Material, Group } from "three";
import { useBox } from "@react-three/cannon";
import { Ref } from "react";

type GLTFResult = GLTF & {
  nodes: Record<string, Object3D>;
  materials: Record<string, Material>;
};

const LOGO_PATH = "/Logo.glb";

export default function Logo() {
  const logo = useGLTF(LOGO_PATH) as GLTFResult;

  // Physics collider
  const [ref] = useBox(() => ({
    args: [1.2, 1.2, 1.2], // make collider match the bigger size
    type: "Static",
  }));

  return (
    <group ref={ref as Ref<Group>}>
      {/* make GLB slightly larger */}
      <Clone object={logo.scene} scale={[1.3, 1.3, 3]} position={[0, 0, 0.5]}/> 
    </group>
  );
}

useGLTF.preload(LOGO_PATH);
