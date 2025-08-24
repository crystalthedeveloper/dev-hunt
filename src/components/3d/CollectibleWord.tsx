// src/components/CollectibleWord.tsx
import { Text } from "@react-three/drei";
import useGame from "../../stores/useGame";
import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function CollectibleWord({ word, position = [0, 0, 0], playerRef }) {
  const collectedWords = useGame((s) => s.collectedWords);
  const collectWord = useGame((s) => s.collectWord);

  const normalized = word.toLowerCase();
  const ref = useRef(null);

  const isCollected = collectedWords.includes(normalized);

  // 🎲 random subtle rotation & tilt for variety
  const randomRotation: [number, number, number] = useMemo(
    () => [
      (Math.random() - 0.5) * 0.4,   // tilt X
      Math.random() * Math.PI * 2,   // spin Y
      0,                             // Z
    ],
    []
  );

  // check overlap each frame
  useFrame(() => {
    if (!playerRef.current || !ref.current) return;

    const playerBox = new THREE.Box3().setFromObject(playerRef.current);
    const wordBox = new THREE.Box3().setFromObject(ref.current);

    if (playerBox.intersectsBox(wordBox) && !isCollected) {
      collectWord(normalized);
    }
  });

  return (
    <group
      ref={ref}
      position={position as [number, number, number]}
      rotation={randomRotation}
      visible={!isCollected}
    >
      {/* Invisible hitbox */}
      <mesh visible={false}>
        <boxGeometry args={[0.8, 0.8, 0.2]} />
        <meshStandardMaterial opacity={0} transparent />
      </mesh>

      {/* Visible text */}
      <Text fontSize={0.25} color="white" anchorX="center" anchorY="middle">
        {word}
      </Text>
    </group>
  );
}
