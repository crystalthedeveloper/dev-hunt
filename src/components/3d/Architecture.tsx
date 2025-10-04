// src/components/Architecture.tsx
import type { Ref } from "react";
import { useEffect, useMemo } from "react";
import * as THREE from "three";
import { useBox } from "@react-three/cannon";
import Logo from "../3d/Logo";
import CollectibleWord from "./CollectibleWord";
import useGame, { skillThemes } from "../../stores/useGame";
import type { DeviceProfile } from "../../hooks/useDeviceProfile";

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

type SkillChunk = {
  key: string;
  skills: readonly string[];
  themeIndex: number;
};

type ArchitectureProps = {
  deviceProfile: DeviceProfile;
};

export default function Architecture({ deviceProfile }: ArchitectureProps) {
  const { isMobile, useSimpleMaterials } = deviceProfile;
  const unlockedClusterIndex = useGame((state) => state.unlockedClusterIndex);
  const setPlatformSurfaces = useGame((state) => state.setPlatformSurfaces);
  const activePlatformIndex = useGame((state) => state.activePlatformIndex);
  const grounded = useGame((state) => state.grounded);

  const skillChunks = useMemo<SkillChunk[]>(() => {
    return skillThemes.flatMap((theme, themeIndex) =>
      chunkArray(theme.skills, 3).map((skills, tierIndex) => ({
        key: `${theme.id}-${tierIndex}`,
        skills,
        themeIndex,
      }))
    );
  }, []);

  // ✅ Positions: 1 start platform + enough for words
  const positions = useMemo<[number, number, number][]>(() => {
    const generated: [number, number, number][] = [[0, 0, 0]];
    skillChunks.forEach(() => {
      generated.push(generatePosition(generated, 8));
    });
    return generated;
  }, [skillChunks]);

  const logoScales = useMemo(
    () =>
      positions.map((_, index) => {
        if (index === 0) return isMobile ? 2.6 : 3.2;
        return isMobile ? 2.2 : 2.6;
      }),
    [positions, isMobile]
  );

  const platformSurfaces = useMemo(
    () =>
      positions.map((position, index) => ({
        position,
        radius: logoScales[index] * 0.55,
        height: position[1] + 0.2,
        index,
      })),
    [positions, logoScales]
  );

  useEffect(() => {
    setPlatformSurfaces(platformSurfaces);
    return () => {
      setPlatformSurfaces([]);
    };
  }, [platformSurfaces, setPlatformSurfaces]);

  const BOUNDARY_RADIUS = 120;

  return (
    <>
      <ambientLight intensity={isMobile ? 0.35 : 0.45} color="#ffffff" />
      <directionalLight
        position={[30, 60, 20]}
        intensity={isMobile ? 0.55 : 0.7}
        color="#f0f0f0"
        castShadow={!isMobile}
      />
      {!isMobile && <directionalLight position={[-25, 40, -30]} intensity={0.35} color="#cfcfcf" />}
      <hemisphereLight args={["#d9d9d9", "#0a0a0a", 0.2]} />

      {/* Invisible boundary dome used for visual reference */}
      <mesh scale={BOUNDARY_RADIUS}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial color="white" transparent opacity={0} depthWrite={false} />
      </mesh>

      {/* Platforms */}
      {positions.map((position, platformIndex) => {
        const scale = logoScales[platformIndex];
        const colliderHeight = isMobile ? 0.6 : 0.7;

        const [ref] = useBox(() => ({
          args: [scale * 1.15, colliderHeight, scale * 1.15],
          position: [position[0], position[1] + colliderHeight * 0.5 - 0.15, position[2]],
          type: "Static",
        }));

        const chunk = platformIndex === 0 ? undefined : skillChunks[platformIndex - 1];
        const clusterIndex = chunk?.themeIndex ?? 0;
        const isUnlocked = platformIndex === 0 || clusterIndex <= unlockedClusterIndex;
        const isNextCluster = chunk && clusterIndex === unlockedClusterIndex + 1;
        const wordsHere = platformIndex === 0 || !isUnlocked ? [] : chunk?.skills ?? [];
        const isActive = grounded && activePlatformIndex === platformIndex;

        return (
          <group ref={ref as unknown as Ref<THREE.Group>} key={platformIndex} position={position}>
            {/* Logo platform */}
            <group scale={isNextCluster ? 1.05 : 1}>
              <Logo scale={scale} simple={useSimpleMaterials} active={isActive} />
            </group>

            {/* Words around logo */}
            {wordsHere.map((word, i) => {
              const radius = scale * 0.58;
              const angle = (i / wordsHere.length) * Math.PI * 2;

              const x = Math.cos(angle) * radius;
              const z = Math.sin(angle) * radius;
              const y = 0.9;

              const rotationY = angle + Math.PI / 2;
              const rotationX = (Math.random() - 0.5) * 0.2;

              return (
                <group key={`${platformIndex}-${word}`} position={[x, y, z]} rotation={[rotationX, rotationY, 0]}>
                  <CollectibleWord word={word} />
                </group>
              );
            })}
          </group>
        );
      })}
    </>
  );
}
