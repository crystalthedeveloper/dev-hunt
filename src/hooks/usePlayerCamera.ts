
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { useEffect, useRef } from "react";
import useGame from "../stores/useGame";

const MAX_PITCH = THREE.MathUtils.degToRad(45);
const PITCH_DAMP = 6;
const X_AXIS = new THREE.Vector3(1, 0, 0);

export default function usePlayerCamera() {
  const camera = useThree((state) => state.camera);
  const phase = useGame((s) => (s as any)?.phase ?? "playing");
  const positionRef = useRef(new THREE.Vector3(0, 1.6, 0));
  const orientationRef = useRef(new THREE.Quaternion());
  const altitudeInputRef = useRef(0);
  const pitchRef = useRef(0);
  const pitchQuatRef = useRef(new THREE.Quaternion());

  useEffect(() => {
    const unsubPosition = useGame.subscribe(
      (state) => (state as any)?.playerPosition,
      (pos) => {
        if (!pos) return;
        positionRef.current.set(pos[0], pos[1], pos[2]);
      }
    );

    const unsubOrientation = useGame.subscribe(
      (state) => (state as any)?.orientation,
      (quat) => {
        if (!quat) return;
        orientationRef.current
          .set(quat[0], quat[1], quat[2], quat[3])
          .normalize();
      }
    );

    const unsubAltitude = useGame.subscribe(
      (state) => (state as any)?.altitudeInput,
      (value) => {
        if (typeof value !== "number") return;
        altitudeInputRef.current = THREE.MathUtils.clamp(value, -1, 1);
      }
    );

    return () => {
      unsubPosition();
      unsubOrientation();
      unsubAltitude();
    };
  }, []);

  useFrame((_, delta) => {
    camera.position.copy(positionRef.current);

    const targetPitch = THREE.MathUtils.clamp(altitudeInputRef.current * MAX_PITCH, -MAX_PITCH, MAX_PITCH);
    pitchRef.current = THREE.MathUtils.damp(pitchRef.current, targetPitch, PITCH_DAMP, delta);
    pitchQuatRef.current.setFromAxisAngle(X_AXIS, pitchRef.current);

    if (phase === "finished") {
      camera.quaternion.copy(orientationRef.current);
      return;
    }

    camera.quaternion.copy(orientationRef.current).multiply(pitchQuatRef.current);
  });
}
