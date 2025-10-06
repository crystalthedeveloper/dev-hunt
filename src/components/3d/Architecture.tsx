// src/components/Architecture.tsx
import type { Ref } from "react";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { useBox } from "@react-three/cannon";
import { useFrame } from "@react-three/fiber";
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
    const radius = 10 + Math.random() * 20;
    const x = Math.cos(angle) * radius;
    const z = Math.sin(angle) * radius;

    let y: number;
    const roll = Math.random();
    if (roll < 0.5) y = Math.random() * 2 - 1;
    else if (roll < 0.8) y = 3 + Math.random() * 2;
    else y = 6 + Math.random() * 2;

    pos = [x, y, z];
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

  const positions = useMemo<[number, number, number][]>(() => {
    const generated: [number, number, number][] = [[0, 0, 0]];
    skillChunks.forEach(() => generated.push(generatePosition(generated, 8)));
    return generated;
  }, [skillChunks]);

  const logoScales = useMemo(
    () => positions.map((_, i) => (i === 0 ? (isMobile ? 2.6 : 3.2) : isMobile ? 2.2 : 2.6)),
    [positions, isMobile]
  );

  const platformSurfaces = useMemo(
    () =>
      positions.map((p, i) => ({
        position: p,
        radius: logoScales[i] * 0.55,
        height: p[1] + 0.2,
        index: i,
      })),
    [positions, logoScales]
  );

  useEffect(() => {
    setPlatformSurfaces(platformSurfaces);
    return () => setPlatformSurfaces([]);
  }, [platformSurfaces, setPlatformSurfaces]);

  const BOUNDARY_RADIUS = 120;

  // 🌌 Floating light orbs
  const floatingLights = useMemo(() => {
    const count = 25;
    return Array.from({ length: count }, (_, i) => {
      const x = (Math.random() - 0.5) * BOUNDARY_RADIUS * 1.6;
      const y = Math.random() * 30 - 10;
      const z = (Math.random() - 0.5) * BOUNDARY_RADIUS * 1.6;
      const phase = Math.random() * Math.PI * 2;
      const speed = 0.3 + Math.random() * 0.5;
      const scale = 0.4 + Math.random() * 0.6;
      return { basePosition: [x, y, z] as [number, number, number], phase, speed, scale };
    });
  }, []);

  const floatingGroupRef = useRef<THREE.Group>(null);
  useFrame(({ clock }) => {
    const group = floatingGroupRef.current;
    if (!group) return;
    group.children.forEach((child, index) => {
      const data = floatingLights[index];
      if (!data) return;
      child.position.y =
        data.basePosition[1] + Math.sin(clock.elapsedTime * data.speed + data.phase) * 0.3;
    });
  });

  // 🪨 Random “space rocks” (spheres + cubes)
  const spaceRocks = useMemo(() => {
    const count = 18;
    return Array.from({ length: count }, () => ({
      position: [
        (Math.random() - 0.5) * BOUNDARY_RADIUS * 1.4,
        Math.random() * 35 - 15,
        (Math.random() - 0.5) * BOUNDARY_RADIUS * 1.4,
      ] as [number, number, number],
      scale: 0.8 + Math.random() * 2,
      shape: Math.random() > 0.5 ? "sphere" : "box",
    }));
  }, []);

  const rocksGroup = useRef<THREE.Group>(null);
  useFrame(() => {
    if (!rocksGroup.current) return;
    rocksGroup.current.children.forEach((rock, i) => {
      rock.rotation.x += 0.002 + i * 0.0002;
      rock.rotation.y += 0.0015;
    });
  });

  return (
    <>
      {/* 🕯 Lighting */}
      <ambientLight intensity={isMobile ? 0.45 : 0.55} color="#ffffff" />
      <directionalLight
        position={[30, 60, 20]}
        intensity={isMobile ? 0.55 : 0.75}
        color="#f0f0f0"
        castShadow={!isMobile}
      />
      {!isMobile && (
        <directionalLight position={[-25, 40, -30]} intensity={0.4} color="#dcdcdc" />
      )}
      <hemisphereLight args={["#d9d9d9", "#0a0a0a", 0.3]} />

      {/* ✨ Floating Light Orbs */}
      <group ref={floatingGroupRef}>
        {floatingLights.map((item, index) => (
          <mesh key={`light-orb-${index}`} position={item.basePosition} scale={item.scale}>
            <sphereGeometry args={[0.8, 16, 16]} />
            <meshStandardMaterial
              emissive="#a6d4ff"
              emissiveIntensity={0.6 + Math.random() * 0.2}
              transparent
              opacity={0.3}
              depthWrite={false}
              depthTest={false}
              toneMapped={false}
            />
          </mesh>
        ))}
      </group>

      {/* 🪨 Floating Space Rocks */}
      <group ref={rocksGroup}>
        {spaceRocks.map((rock, i) => (
          <mesh
            key={`rock-${i}`}
            position={rock.position}
            scale={rock.scale}
            rotation={[Math.random() * Math.PI, Math.random() * Math.PI, 0]}
          >
            {rock.shape === "sphere" ? (
              <sphereGeometry args={[1, 12, 12]} />
            ) : (
              <boxGeometry args={[1.2, 1.2, 1.2]} />
            )}
            <meshStandardMaterial
              emissive="#a6d4ff"
              emissiveIntensity={0.4}
              transparent
              opacity={0.25}
              roughness={0.9}
              metalness={0.15}
              depthWrite={false}
              depthTest={false}
              toneMapped={false}
            />
          </mesh>
        ))}
      </group>

      {/* 🪐 Platforms */}
      {positions.map((pos, i) => {
        const scale = logoScales[i];
        const colliderHeight = isMobile ? 0.6 : 0.7;

        const [ref] = useBox(() => ({
          args: [scale * 1.15, colliderHeight, scale * 1.15],
          position: [pos[0], pos[1] + colliderHeight * 0.5 - 0.15, pos[2]],
          type: "Static",
        }));

        const chunk = i === 0 ? undefined : skillChunks[i - 1];
        const clusterIndex = chunk?.themeIndex ?? 0;
        const isUnlocked = i === 0 || clusterIndex <= unlockedClusterIndex;
        const isNextCluster = chunk && clusterIndex === unlockedClusterIndex + 1;
        const wordsHere = i === 0 || !isUnlocked ? [] : chunk?.skills ?? [];
        const isActive = grounded && activePlatformIndex === i;

        return (
          <group ref={ref as unknown as Ref<THREE.Group>} key={i} position={pos}>
            <group scale={isNextCluster ? 1.05 : 1}>
              <Logo scale={scale} simple={useSimpleMaterials} active={isActive} />
            </group>

            {wordsHere.map((word, idx) => {
              const radius = scale * 0.58;
              const angle = (idx / wordsHere.length) * Math.PI * 2;
              const x = Math.cos(angle) * radius;
              const z = Math.sin(angle) * radius;
              const y = 0.9;
              const rotationY = angle + Math.PI / 2;
              const rotationX = (Math.random() - 0.5) * 0.2;

              return (
                <group key={`${i}-${word}`} position={[x, y, z]} rotation={[rotationX, rotationY, 0]}>
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
