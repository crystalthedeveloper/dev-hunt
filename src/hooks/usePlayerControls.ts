import { useFrame } from "@react-three/fiber";
import { useKeyboardControls } from "@react-three/drei";
import useGame from "../stores/useGame";
import { PublicApi } from "@react-three/cannon";
import { useEffect, useRef } from "react";

export default function usePlayerControls(api: PublicApi) {
  const [, getKeys] = useKeyboardControls();
  const restart = useGame((s) => s.restart);
  const setYaw = useGame((s) => s.setYaw);
  const phase = useGame((s) => s.phase); // ✅ read phase

  // Zustand mobile buttons
  const forwardBtn = useGame((s) => s.forwardButton);
  const backwardBtn = useGame((s) => s.backwardButton);
  const leftwardBtn = useGame((s) => s.leftwardButton);
  const rightwardBtn = useGame((s) => s.rightwardButton);

  const velocity = useRef<[number, number, number]>([0, 0, 0]);
  const position = useRef<[number, number, number]>([0, 0, 0]);

  const yaw = useRef(0);

  useEffect(() => {
    const unsubVel = api.velocity.subscribe((v) => (velocity.current = v));
    const unsubPos = api.position.subscribe((p) => (position.current = p));
    return () => {
      unsubVel();
      unsubPos();
    };
  }, [api]);

  useFrame((_, delta) => {
    // ✅ STOP when finished
    if (phase === "finished") return;

    const { forward, backward, leftward, rightward } = getKeys();

    const moveForward = forward || forwardBtn > 0;
    const moveBackward = backward || backwardBtn > 0;
    const turnLeft = leftward || leftwardBtn > 0;
    const turnRight = rightward || rightwardBtn > 0;

    const moveForce = 700 * delta;
    const verticalForce = 700 * delta;
    const turnSpeed = 2.5 * delta;

    if (turnLeft) yaw.current += turnSpeed;
    if (turnRight) yaw.current -= turnSpeed;

    setYaw(yaw.current);

    if (moveForward || moveBackward) {
      const dirX = Math.sin(yaw.current);
      const dirZ = Math.cos(yaw.current);

      if (moveForward) {
        api.applyForce([dirX * moveForce, verticalForce, dirZ * moveForce], [0, 0, 0]);
      }
      if (moveBackward) {
        api.applyForce([-dirX * moveForce, -verticalForce, -dirZ * moveForce], [0, 0, 0]);
      }
    }

    const [, py] = position.current;
    if (py < -5) restart();
  });
}
