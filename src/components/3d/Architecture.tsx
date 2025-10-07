// src/components/Architecture.tsx
import type { Ref } from "react";
import { useEffect, useMemo } from "react";
import * as THREE from "three";
import { useBox } from "@react-three/cannon";
import { useLoader, useThree } from "@react-three/fiber";
import Logo from "../3d/Logo";
import CollectibleWord from "./CollectibleWord";
import useGame, { skillThemes } from "../../stores/useGame";
import type { DeviceProfile } from "../../hooks/useDeviceProfile";

function chunkArray<T extends string>(arr: readonly T[], size: number): T[][] {
  const result: T[][] = [];
  for (let i = 0; i < arr.length; i += size) result.push(arr.slice(i, i + size));
  return result;
}

function generatePosition(existing: [number, number, number][], minDist = 6): [number, number, number] {
  let pos: [number, number, number];
  let safe = false;
  while (!safe) {
    const angle = Math.random() * Math.PI * 2;
    const radius = 10 + Math.random() * 20;
    const x = Math.cos(angle) * radius;
    const z = Math.sin(angle) * radius;
    const y = Math.random() * 4 - 1;
    pos = [x, y, z];
    safe = existing.every(([ex, ey, ez]) => {
      const dx = ex - x, dy = ey - y, dz = ez - z;
      return Math.sqrt(dx * dx + dy * dy + dz * dz) >= minDist;
    });
  }
  return pos!;
}

type SkillChunk = { key: string; skills: readonly string[]; themeIndex: number };
type ArchitectureProps = { deviceProfile: DeviceProfile };

export default function Architecture({ deviceProfile }: ArchitectureProps) {
  const { isMobile, useSimpleMaterials } = deviceProfile;
  const unlockedClusterIndex = useGame((s) => s.unlockedClusterIndex);
  const setPlatformSurfaces = useGame((s) => s.setPlatformSurfaces);
  const activePlatformIndex = useGame((s) => s.activePlatformIndex);
  const grounded = useGame((s) => s.grounded);
  const { camera } = useThree();

  // Tilt camera down slightly to show planet
  useEffect(() => {
    camera.position.set(0, 30, 80);
    camera.lookAt(0, 0, 0);
  }, [camera]);

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
    () => positions.map((p, i) => ({ position: p, radius: logoScales[i] * 0.55, height: p[1] + 0.2, index: i })),
    [positions, logoScales]
  );

  useEffect(() => {
    setPlatformSurfaces(platformSurfaces);
    return () => setPlatformSurfaces([]);
  }, [platformSurfaces, setPlatformSurfaces]);

  const earthTexture = useLoader(THREE.TextureLoader, "/textures/earth_floor.jpg");
  useMemo(() => {
    earthTexture.colorSpace = THREE.SRGBColorSpace;
    earthTexture.wrapS = THREE.RepeatWrapping;
    earthTexture.wrapT = THREE.RepeatWrapping;
  }, [earthTexture]);

  return (
    <>
      {/* 🕯 Lighting */}
      <ambientLight intensity={0.35} color="#666666" />
      <directionalLight position={[50, 100, 30]} intensity={1.0} color="#b0c8ff" castShadow />
      <hemisphereLight args={["#bcd3ff", "#0a0a0a", 0.5]} />

      {/* 🌍 Textured Earth floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -20, 0]}>
        <planeGeometry args={[1000, 1000]} />
        <meshStandardMaterial
          map={earthTexture}
          normalMap={earthTexture}
          bumpMap={earthTexture}
          bumpScale={0.15}
          metalness={0.2}
          roughness={0.7}
          side={THREE.DoubleSide}
          fog={false}
          toneMapped={false}
          emissive="#333333"
          emissiveIntensity={0.25}
          envMapIntensity={0.5}
        />
      </mesh>

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
