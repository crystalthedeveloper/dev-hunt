// src/Experience.tsx
import { Debug, Physics } from "@react-three/cannon";
import Player from "./Player";
import Architecture from "./components/Architecture";
import { useRef } from "react";
import { Group } from "three";

export default function Experience() {
  const playerRef = useRef<Group>(null);

  return (
    <Physics gravity={[0, -9.81, 0]}>
      <Player ref={playerRef} />
      <Debug />
      {/* Pass playerRef down so words can detect overlaps */}
      <Architecture playerRef={playerRef} />
    </Physics>
  );
}
