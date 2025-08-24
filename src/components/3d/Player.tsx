// src/Player.tsx
import { useSphere, PublicApi } from "@react-three/cannon";
import { useGLTF } from "@react-three/drei";
import usePlayerControls from "../../hooks/usePlayerControls";
import usePlayerCamera from "../../hooks/usePlayerCamera";
import usePlayerReset from "../../hooks/usePlayerReset";
import useGame from "../../stores/useGame"; // ✅ import game store
import {
  Group,
  Box3,
  Vector3,
  Mesh,
  MeshStandardMaterial,
  Texture,
  SRGBColorSpace,
} from "three";
import {
  forwardRef,
  useImperativeHandle,
  useMemo,
  useEffect,
} from "react";

const CHARACTER_PATH = "/characterLogo.glb";

const Player = forwardRef<Group>((_, ref) => {
  const { scene } = useGLTF(CHARACTER_PATH);
  const phase = useGame((s) => s.phase);
  const setOnRestartPlayer = useGame((s) => s.setOnRestartPlayer);

  // 🔧 fix textures
  useEffect(() => {
    if (!scene) return;
    scene.traverse((child) => {
      if ((child as Mesh).isMesh) {
        const mesh = child as Mesh;
        const applyColorSpace = (mat: MeshStandardMaterial) => {
          const tex: Texture | null | undefined = mat.map;
          if (tex) tex.colorSpace = SRGBColorSpace;
        };
        if (Array.isArray(mesh.material)) {
          mesh.material.forEach((mat) =>
            applyColorSpace(mat as MeshStandardMaterial)
          );
        } else if (mesh.material) {
          applyColorSpace(mesh.material as MeshStandardMaterial);
        }
      }
    });
  }, [scene]);

  // bounding box → auto radius + offset
  const { radius, offset } = useMemo(() => {
    if (!scene) return { radius: 0.5, offset: new Vector3() };
    const box = new Box3().setFromObject(scene);
    const size = new Vector3();
    const center = new Vector3();
    box.getSize(size);
    box.getCenter(center);
    return {
      radius: Math.max(size.x, size.y, size.z) / 2,
      offset: new Vector3(-center.x, -center.y, -center.z),
    };
  }, [scene]);

  const [physicsRef, api] = useSphere<Group>(() => ({
    mass: 1,
    args: [radius],
    position: [0, radius + 0.5, 0], // ✅ spawn point
    linearDamping: 0.8,
    angularDamping: 0.5,
    name: "Player",
    onCollide: (e) => {
      if (e.body?.userData?.isResetFloor) resetPlayer();
    },
  }));

  const resetPlayer = usePlayerReset(api as PublicApi);

  // ✅ link restart → reset player
  useEffect(() => {
    setOnRestartPlayer(resetPlayer);
  }, [resetPlayer, setOnRestartPlayer]);

  // ✅ Pause physics on win
  useEffect(() => {
    if (!api) return;
    if (phase === "finished") {
      api.velocity.set(0, 0, 0);
      api.angularVelocity.set(0, 0, 0);
      api.mass.set(0); // freeze as static
    } else {
      api.mass.set(1); // restore when playing
    }
  }, [phase, api]);

  useImperativeHandle(ref, () => physicsRef.current!, [physicsRef]);

  // Hooks
  usePlayerControls(api as PublicApi);
  usePlayerCamera(api as PublicApi);

  return (
    <group ref={physicsRef}>
      {scene ? (
        <primitive object={scene} scale={1.0} position={offset} />
      ) : (
        <mesh>
          <sphereGeometry args={[radius, 16, 16]} />
          <meshBasicMaterial color="hotpink" wireframe />
        </mesh>
      )}
    </group>
  );
});

export default Player;
