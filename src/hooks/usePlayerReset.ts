// src/hooks/usePlayerReset.ts
import { PublicApi } from "@react-three/cannon";
import useGame from "../stores/useGame";

export default function usePlayerReset(api: PublicApi) {
  const resetAll = useGame((s) => s.resetAll);

  const resetPlayer = () => {
    // Clear old forces
    api.sleep?.();

    // Move back to spawn
    api.position.set(0, 3, 0); // ✅ safe spawn height
    api.velocity.set(0, 0, 0);
    api.angularVelocity.set(0, 0, 0);
    api.rotation?.set(0, 0, 0);

    // Wake physics on next frame
    setTimeout(() => api.wakeUp?.(), 0);

    // Reset game state (words, counters, win state)
    resetAll();
  };

  return resetPlayer;
}
