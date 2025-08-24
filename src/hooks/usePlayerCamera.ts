import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useRef, useEffect } from "react";
import { PublicApi } from "@react-three/cannon";
import useGame from "../stores/useGame";

export default function usePlayerCamera(api: PublicApi) {
  const smoothedPos = useRef(new THREE.Vector3(5, 5, 5));
  const smoothedTarget = useRef(new THREE.Vector3());
  const desiredPos = useRef(new THREE.Vector3());
  const desiredTarget = useRef(new THREE.Vector3());

  const playerPos = useRef<[number, number, number]>([0, 0, 0]);

  const yaw = useGame((s) => s.yaw ?? 0);
  const phase = useGame((s) => s.phase); // ✅ read phase

  useEffect(() => {
    const unsub = api.position.subscribe((p) => (playerPos.current = p));
    return () => unsub();
  }, [api]);

  useFrame((state, delta) => {
    // ✅ STOP when finished
    if (phase === "finished") return;

    const [x, y, z] = playerPos.current;

    const distance = 6;
    const height = 2.5;

    const offsetX = Math.sin(yaw) * distance;
    const offsetZ = Math.cos(yaw) * distance;

    desiredPos.current.set(x - offsetX, y + height, z - offsetZ);
    desiredTarget.current.set(x, y + 1, z);

    smoothedPos.current.lerp(desiredPos.current, 3 * delta);
    smoothedTarget.current.lerp(desiredTarget.current, 4 * delta);

    state.camera.position.copy(smoothedPos.current);
    state.camera.lookAt(smoothedTarget.current);
  });
}
