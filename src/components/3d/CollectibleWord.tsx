// src/components/CollectibleWord.tsx
import { Text } from "@react-three/drei";
import useGame, { skillThemes } from "../../stores/useGame";
import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { useShallow } from "zustand/react/shallow";
import * as THREE from "three";

type CollectibleProps = {
  word: string;
  position?: [number, number, number];
};

const noop = () => {};
const EMPTY_WORDS: readonly string[] = [];
const DEFAULT_PLAYER_POSITION: readonly [number, number, number] = [0, 0, 0];

const skillClusterLookup = new Map<string, number>();
skillThemes.forEach((theme, themeIndex) => {
  theme.skills.forEach((skill) => {
    skillClusterLookup.set(skill.toLowerCase(), themeIndex);
  });
});

export default function CollectibleWord({ word, position = [0, 0, 0] }: CollectibleProps) {
  const {
    collectedWords,
    collectWord: collectWordAction,
    playerPosition,
    unlockedClusterIndex,
  } = useGame(
    useShallow((state) => ({
      collectedWords: (state as any)?.collectedWords ?? EMPTY_WORDS,
      collectWord: (state as any)?.collectWord,
      playerPosition: (state as any)?.playerPosition ?? DEFAULT_PLAYER_POSITION,
      unlockedClusterIndex: (state as any)?.unlockedClusterIndex ?? 0,
    }))
  );
  const collectWord = useMemo(
    () => (typeof collectWordAction === "function" ? collectWordAction : noop),
    [collectWordAction]
  );

  const normalized = word.toLowerCase();
  const clusterIndex = skillClusterLookup.get(normalized) ?? 0;
  const isUnlocked = clusterIndex <= unlockedClusterIndex;
  const ref = useRef(null);
  const worldPos = useRef(new THREE.Vector3());

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
    if (!ref.current || isCollected || !isUnlocked) return;

    const [px, py, pz] = playerPosition;
    (ref.current as THREE.Object3D).getWorldPosition(worldPos.current);
    const { x: wx, y: wy, z: wz } = worldPos.current;

    const dx = px - wx;
    const dy = py - wy;
    const dz = pz - wz;

    const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);
    if (distance < 1.2) {
      collectWord(normalized);
    }
  });

  return (
    <group
      ref={ref}
      position={position as [number, number, number]}
      rotation={randomRotation}
      visible={isUnlocked && !isCollected}
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
