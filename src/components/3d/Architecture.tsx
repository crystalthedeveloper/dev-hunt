// src/components/Architecture.tsx
import React from "react";
import * as THREE from "three";
import { useBox, usePlane } from "@react-three/cannon";
import Logo from "../3d/Logo";
import CollectibleWord from "./CollectibleWord";
import { skills } from "../../stores/useGame";

type Props = {
  playerRef: React.RefObject<THREE.Group>;
};

// ✅ Split into groups of 3
function chunkArray<T extends string>(arr: readonly T[], size: number): T[][] {
  const result: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

// 🎯 Helper: generate a position not too close to existing ones
function generatePosition(existing: [number, number, number][], minDist = 6): [number, number, number] {
  let pos: [number, number, number];
  let safe = false;

  while (!safe) {
    const angle = Math.random() * Math.PI * 2;
    const radius = 10 + Math.random() * 20; // spread out
    const x = Math.cos(angle) * radius;
    const z = Math.sin(angle) * radius;

    // random tiered heights
    let y: number;
    const roll = Math.random();
    if (roll < 0.5) y = Math.random() * 2 - 1;
    else if (roll < 0.8) y = 3 + Math.random() * 2;
    else y = 6 + Math.random() * 2;

    pos = [x, y, z];

    // check distance from all existing
    safe = existing.every(([ex, ey, ez]) => {
      const dx = ex - x;
      const dy = ey - y;
      const dz = ez - z;
      return Math.sqrt(dx * dx + dy * dy + dz * dz) >= minDist;
    });
  }

  return pos!;
}

export default function Architecture({ playerRef }: Props) {
  const chunkedSkills = chunkArray(skills, 3);

  // ✅ Positions: 1 start platform + enough for words
  const positions: [number, number, number][] = [];
  positions.push([0, 0, 0]); // start at origin

  chunkedSkills.forEach(() => {
    positions.push(generatePosition(positions, 8)); // min 8 units apart
  });

  const scales: [number, number, number][] = positions.map(() => [1.8, 1.8, 1]);

  // ✅ Invisible reset floor
  const [floorRef] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, -6, 0],
    args: [250, 250],
    type: "Static",
    userData: { isResetFloor: true },
  }));

  return (
    <>
      {/* Safety floor */}
      <mesh ref={floorRef as unknown as React.Ref<THREE.Mesh>}>
        <planeGeometry args={[250, 250]} />
        <meshStandardMaterial transparent opacity={0} depthWrite={false} colorWrite={false} />
      </mesh>

      {/* Platforms */}
      {positions.map((position, platformIndex) => {
        const scale = scales[platformIndex];
        const [px, py, pz] = position;

        const [ref] = useBox(() => ({
          args: [scale[0] * 2, 0.3, scale[2] * 2],
          position,
          type: "Static",
        }));

        const wordsHere = platformIndex === 0 ? [] : chunkedSkills[platformIndex - 1] ?? [];

        return (
          <group ref={ref as unknown as React.Ref<THREE.Group>} key={platformIndex} position={position}>
            {/* Platform base */}
            <mesh rotation={[-Math.PI / 2, 0, 0]} scale={scale}>
              <circleGeometry args={[1, 128]} />
              <meshBasicMaterial color="white" opacity={0.35} transparent wireframe />
            </mesh>

            {/* Center logo */}
            <Logo />

            {/* Words around logo */}
            {wordsHere.map((word, i) => {
              const radius = 1.2;
              const angle = (i / wordsHere.length) * Math.PI * 2;

              const x = Math.cos(angle) * radius;
              const z = Math.sin(angle) * radius;
              const y = 0.9;

              const rotationY = angle + Math.PI / 2;
              const rotationX = (Math.random() - 0.5) * 0.2;

              return (
                <group key={`${platformIndex}-${word}`} position={[x, y, z]} rotation={[rotationX, rotationY, 0]}>
                  <CollectibleWord word={word} playerRef={playerRef} />
                </group>
              );
            })}
          </group>
        );
      })}
    </>
  );
}
