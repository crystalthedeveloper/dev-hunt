// src/components/3d/Player.tsx
import { useEffect, useRef } from "react";
import useGame from "../../stores/useGame";
import usePlayerControls from "../../hooks/usePlayerControls";
import usePlayerCamera from "../../hooks/usePlayerCamera";

const SPAWN_POSITION: [number, number, number] = [0, 1.6, 0];
const IDENTITY_QUATERNION: [number, number, number, number] = [0, 0, 0, 1];
const noop = () => {};
const isDev = import.meta.env.DEV;

export default function Player() {
  useEffect(() => {
    const applySpawn = () => {
      const state = typeof useGame.getState === "function" ? useGame.getState() : undefined;
      if (!state) {
        if (isDev) {
          console.warn("Player: useGame.getState() returned undefined");
        }
        return;
      }

      state.setPlayerPosition?.([...SPAWN_POSITION] as [number, number, number]);
      state.resetMovementVector?.();
      state.setOrientation?.([
        ...IDENTITY_QUATERNION,
      ] as [number, number, number, number]);
    };

    applySpawn();
    const state = typeof useGame.getState === "function" ? useGame.getState() : undefined;
    const action = state?.setOnRestartPlayer;
    if (typeof action === "function") {
      action(() => {
        applySpawn();
      });
    } else if (isDev) {
      console.warn("Player: setOnRestartPlayer missing", action);
    }
  }, []);

  usePlayerControls();
  usePlayerCamera();

  return null;
}
