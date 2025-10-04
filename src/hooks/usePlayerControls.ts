import { useFrame } from "@react-three/fiber";
import useGame from "../stores/useGame";
import type { PlatformSurface } from "../stores/useGame";
import { useEffect, useRef } from "react";
import * as THREE from "three";

const SPAWN_POSITION = new THREE.Vector3(0, 1.6, 0);
const BASE_FORWARD_SPEED = 5.6;
const FORWARD_RESPONSE = 2.6;
const FORWARD_DECAY = 1.5;
const YAW_SPEED = Math.PI * 0.42; // radians per second
const VERTICAL_SPEED = 4.8;
const GRAVITY = -14;
const MAX_FALL_SPEED = -32;
const DEAD_ZONE = 0.06;
export const RESET_RADIUS = 90;
export const RESET_HEIGHT = 55;
const RESET_DURATION = 1.1;
const PLATFORM_RADIUS_PADDING = 0.75;
const LANDING_HEIGHT_TOLERANCE = 0.4;
const ASCENT_THRESHOLD = 0.5;
const FORWARD_BIAS = 0.12;
const NEUTRAL_SPEED_BOOST = 0.22;

const WORLD_UP = new THREE.Vector3(0, 1, 0);
const IDENTITY_QUATERNION = new THREE.Quaternion();

const noop = () => {};
const isDev = import.meta.env.DEV;

const getGameState = () =>
  (typeof useGame.getState === "function" ? useGame.getState() : undefined);

const warnMissing = (name: string, value: unknown) => {
  if (isDev && typeof value !== "function") {
    console.warn(`usePlayerControls: missing action for ${name}`, value);
  }
};

export default function usePlayerControls() {
  const restartSelector = useGame((s) => (s as any)?.restart);
  const restart = typeof restartSelector === "function" ? restartSelector : noop;
  const phase = useGame((s) => (s as any)?.phase ?? "playing");

  const orientation = useRef(new THREE.Quaternion());
  const position = useRef(SPAWN_POSITION.clone());
  const movement = useRef({ x: 0, y: 0 });
  const forwardAxis = useRef(new THREE.Vector3(0, 0, -1));
  const altitude = useRef(0);
  const touchActive = useRef(false);
  const forwardSpeed = useRef(0);
  const verticalVelocity = useRef(0);
  const yawQuat = useRef(new THREE.Quaternion());
  const resetTimer = useRef(0);
  const isResetting = useRef(false);
  const resetStartPosition = useRef(SPAWN_POSITION.clone());
  const resetStartOrientation = useRef(IDENTITY_QUATERNION.clone());
  const grounded = useRef(false);
  const platformSurfaces = useRef<readonly PlatformSurface[]>([]);
  const eyeHeightOffset = useRef(SPAWN_POSITION.y);

  useEffect(() => {
    touchActive.current = Boolean(getGameState()?.touchActive);
    const unsubMovement = useGame.subscribe(
      (state) => (state as any)?.movementVector,
      (vec) => {
        if (!vec) return;
        movement.current = vec;
      }
    );

    const unsubOrientation = useGame.subscribe(
      (state) => (state as any)?.orientation,
      (quat) => {
        if (!quat) return;
        orientation.current.set(quat[0], quat[1], quat[2], quat[3]).normalize();
      }
    );

    const unsubPosition = useGame.subscribe(
      (state) => (state as any)?.playerPosition,
      (pos) => {
        if (!pos) return;
        position.current.set(pos[0], pos[1], pos[2]);
      }
    );

    const unsubAltitude = useGame.subscribe(
      (state) => (state as any)?.altitudeInput,
      (value) => {
        if (typeof value !== "number") return;
        altitude.current = value;
      }
    );

    const unsubTouch = useGame.subscribe(
      (state) => (state as any)?.touchActive,
      (active) => {
        touchActive.current = Boolean(active);
      }
    );

    const currentSurfaces = getGameState()?.platformSurfaces ?? [];
    platformSurfaces.current = currentSurfaces;
    if (currentSurfaces.length > 0) {
      eyeHeightOffset.current = SPAWN_POSITION.y - currentSurfaces[0].height;
    }

    const unsubSurfaces = useGame.subscribe(
      (state) => (state as any)?.platformSurfaces,
      (surfaces) => {
        const data = Array.isArray(surfaces) ? (surfaces as readonly PlatformSurface[]) : [];
        platformSurfaces.current = data;
        if (data.length > 0) {
          eyeHeightOffset.current = SPAWN_POSITION.y - data[0].height;
        }
      }
    );

    return () => {
      unsubMovement();
      unsubOrientation();
      unsubPosition();
      unsubAltitude();
      unsubTouch();
      unsubSurfaces();
    };
  }, []);

  const startSmoothReset = () => {
    if (isResetting.current) return;
    resetStartPosition.current.copy(position.current);
    resetStartOrientation.current.copy(orientation.current);
    isResetting.current = true;
    resetTimer.current = 0;
    forwardSpeed.current = 0;
    verticalVelocity.current = 0;
    touchActive.current = false;
  };

  useFrame((_, delta) => {
    if (phase === "finished") return;

    const stateApi = getGameState();

    if (isResetting.current) {
      resetTimer.current += delta;
      const t = Math.min(resetTimer.current / RESET_DURATION, 1);
      const ease = t * t * (3 - 2 * t);

      position.current.lerpVectors(resetStartPosition.current, SPAWN_POSITION, ease);
      orientation.current.copy(resetStartOrientation.current).slerp(IDENTITY_QUATERNION, ease);
      orientation.current.normalize();

      stateApi?.setPlayerPosition?.([
        position.current.x,
        position.current.y,
        position.current.z,
      ] as [number, number, number]);
      stateApi?.setOrientation?.([
        orientation.current.x,
        orientation.current.y,
        orientation.current.z,
        orientation.current.w,
      ] as [number, number, number, number]);

      if (t >= 1) {
        forwardSpeed.current = 0;
        verticalVelocity.current = 0;
        isResetting.current = false;
        resetTimer.current = 0;
        position.current.copy(SPAWN_POSITION);
        orientation.current.copy(IDENTITY_QUATERNION);
        stateApi?.setPlayerPosition?.([
          SPAWN_POSITION.x,
          SPAWN_POSITION.y,
          SPAWN_POSITION.z,
        ] as [number, number, number]);
        stateApi?.setOrientation?.([0, 0, 0, 1] as [number, number, number, number]);
        restart();
      }
      return;
    }

    const inputX = Math.abs(movement.current.x) < DEAD_ZONE ? 0 : movement.current.x;
    const yawDelta = inputX * YAW_SPEED * delta;

    if (yawDelta !== 0) {
      yawQuat.current.setFromAxisAngle(WORLD_UP, -yawDelta);
      orientation.current.premultiply(yawQuat.current).normalize();
    }

    const setOrientation = stateApi?.setOrientation;
    warnMissing("setOrientation", setOrientation);
    setOrientation?.([
      orientation.current.x,
      orientation.current.y,
      orientation.current.z,
      orientation.current.w,
    ] as [number, number, number, number]);

    forwardAxis.current.set(0, 0, -1).applyQuaternion(orientation.current).normalize();

    const pointerStrength = Math.min(1, Math.max(0, movement.current.y + FORWARD_BIAS));
    const adjustedPointer = Math.pow(pointerStrength, 1.2);
    let speedBoost = 1 + NEUTRAL_SPEED_BOOST * (1 - Math.abs(movement.current.y));

    const desiredForward = touchActive.current
      ? BASE_FORWARD_SPEED * adjustedPointer * speedBoost
      : 0;
    const forwardDamp = touchActive.current ? FORWARD_RESPONSE : FORWARD_DECAY * 0.9;
    forwardSpeed.current = THREE.MathUtils.damp(
      forwardSpeed.current,
      desiredForward,
      forwardDamp,
      delta
    );

    if (!touchActive.current && Math.abs(forwardSpeed.current) < 0.05) {
      forwardSpeed.current = 0;
    }

    const targetVertical = touchActive.current ? altitude.current * VERTICAL_SPEED : 0;
    if (touchActive.current) {
      verticalVelocity.current = THREE.MathUtils.damp(verticalVelocity.current, targetVertical, 4.2, delta);
      grounded.current = false;
    } else {
      if (!grounded.current) {
        verticalVelocity.current = Math.max(verticalVelocity.current + GRAVITY * delta, MAX_FALL_SPEED);
      } else {
        verticalVelocity.current = 0;
      }
    }

    position.current.addScaledVector(forwardAxis.current, forwardSpeed.current * delta);
    position.current.y += verticalVelocity.current * delta;

    const surfaces = platformSurfaces.current;
    let snapped = false;
    let highestTarget = -Infinity;
    let bestSurfaceIndex = -1;

    if (surfaces.length > 0) {
      for (const surface of surfaces) {
        const [sx, sy, sz] = surface.position;
        const dx = position.current.x - sx;
        const dz = position.current.z - sz;
        const horizontalDistance = Math.hypot(dx, dz);
        const allowableRadius = surface.radius + PLATFORM_RADIUS_PADDING;
        if (horizontalDistance > allowableRadius) continue;

        const targetY = surface.height + eyeHeightOffset.current;
        const descending = verticalVelocity.current <= ASCENT_THRESHOLD;
        const withinLandingBand = position.current.y <= targetY + LANDING_HEIGHT_TOLERANCE;

        if (descending && withinLandingBand && targetY > highestTarget) {
          highestTarget = targetY;
          bestSurfaceIndex = surface.index ?? -1;
        }
      }

      if (highestTarget !== -Infinity) {
        if (position.current.y < highestTarget) {
          position.current.y = highestTarget;
        } else {
          position.current.y = THREE.MathUtils.damp(position.current.y, highestTarget, 12, delta);
        }
        verticalVelocity.current = 0;
        grounded.current = true;
        snapped = true;
        const setGrounded = stateApi?.setGrounded;
        warnMissing("setGrounded", setGrounded);
        setGrounded?.(true);
        const setActivePlatformIndex = stateApi?.setActivePlatformIndex;
        warnMissing("setActivePlatformIndex", setActivePlatformIndex);
        setActivePlatformIndex?.(bestSurfaceIndex);
      }
    }

    if (!snapped) {
      grounded.current = false;
      const setGrounded = stateApi?.setGrounded;
      warnMissing("setGrounded", setGrounded);
      setGrounded?.(false);
      const setActivePlatformIndex = stateApi?.setActivePlatformIndex;
      warnMissing("setActivePlatformIndex", setActivePlatformIndex);
      setActivePlatformIndex?.(-1);
    }

    const distanceFromStart = position.current.clone().sub(SPAWN_POSITION).length();
    const heightDelta = Math.abs(position.current.y - SPAWN_POSITION.y);

    if (distanceFromStart > RESET_RADIUS || heightDelta > RESET_HEIGHT) {
      const setTouchActive = stateApi?.setTouchActive;
      warnMissing("setTouchActive", setTouchActive);
      setTouchActive?.(false);
      startSmoothReset();
      return;
    }

    if (position.current.y < SPAWN_POSITION.y - RESET_HEIGHT) {
      const setTouchActive = stateApi?.setTouchActive;
      warnMissing("setTouchActive", setTouchActive);
      setTouchActive?.(false);
      startSmoothReset();
      return;
    }

    const setPlayerPosition = stateApi?.setPlayerPosition;
    warnMissing("setPlayerPosition", setPlayerPosition);
    setPlayerPosition?.([
      position.current.x,
      position.current.y,
      position.current.z,
    ] as [number, number, number]);
  });
}
