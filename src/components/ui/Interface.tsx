// src/Interface.tsx
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { CSSProperties, PointerEvent as ReactPointerEvent } from "react";
import { useShallow } from "zustand/react/shallow";
import useGame, { skills, skillThemes } from "../../stores/useGame";
import type { GameState } from "../../stores/useGame";
import type { DeviceProfile } from "../../hooks/useDeviceProfile";
import { RESET_HEIGHT, RESET_RADIUS } from "../../hooks/usePlayerControls";
import { MathUtils, Color } from "three";

const TRACKPAD_SIZE = 160;
const TRACKPAD_RADIUS = TRACKPAD_SIZE / 2;
const TRACKPAD_THUMB_SIZE = 72;
const TRACKPAD_THUMB_RADIUS = TRACKPAD_THUMB_SIZE / 2;

const EMPTY_WORDS: readonly string[] = [];
const isDev = import.meta.env.DEV;

const chunkArray = <T,>(arr: readonly T[], size: number): T[][] => {
  const result: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

type PadVisualState = {
  visible: boolean;
  x: number;
  y: number;
  dx: number;
  dy: number;
};

type InterfaceProps = {
  deviceProfile: DeviceProfile;
};

export default function Interface({ deviceProfile }: InterfaceProps) {
  const {
    restart: restartAction,
    hasWon,
    phase,
    unlockedClusterIndex,
    collectedWords,
    resetMovementVector: resetMovementVectorFn,
    setMovementVector: setMovementVectorFn,
    setAltitudeInput: setAltitudeInputFn,
    setTouchActive: setTouchActiveFn,
    orientation,
    playerPosition,
    platformSurfaces,
    activePlatformIndex,
  } = useGame(
    useShallow((state: GameState) => ({
      restart: state.restart,
      hasWon: state.hasWon ?? false,
      phase: state.phase ?? "playing",
      unlockedClusterIndex: state.unlockedClusterIndex ?? 0,
      collectedWords: state.collectedWords ?? EMPTY_WORDS,
      resetMovementVector: state.resetMovementVector,
      setMovementVector: state.setMovementVector,
      setAltitudeInput: state.setAltitudeInput,
      setTouchActive: state.setTouchActive,
      orientation: state.orientation,
      playerPosition: state.playerPosition,
      platformSurfaces: state.platformSurfaces,
      activePlatformIndex: state.activePlatformIndex,
    }))
  );

  const restart = useCallback(() => {
    if (typeof restartAction === "function") restartAction();
    else if (isDev) console.warn("Interface: restart action is missing on store", restartAction);
  }, [restartAction]);

  const setMovementVector = useCallback(
    (vec: { x: number; y: number }) => {
      if (typeof setMovementVectorFn === "function") setMovementVectorFn(vec);
    },
    [setMovementVectorFn]
  );

  const resetMovementVector = useCallback(() => {
    if (typeof resetMovementVectorFn === "function") resetMovementVectorFn();
  }, [resetMovementVectorFn]);

  const setAltitudeInput = useCallback(
    (value: number) => {
      if (typeof setAltitudeInputFn === "function") setAltitudeInputFn(value);
    },
    [setAltitudeInputFn]
  );

  const setTouchActive = useCallback(
    (value: boolean) => {
      if (typeof setTouchActiveFn === "function") setTouchActiveFn(value);
    },
    [setTouchActiveFn]
  );

  const pointerId = useRef<number | null>(null);
  const origin = useRef({ x: 0, y: 0 });
  const [pad, setPad] = useState<PadVisualState>({
    visible: false,
    x: 0,
    y: 0,
    dx: 0,
    dy: 0,
  });
  const movementFrame = useRef<number | null>(null);
  const queuedMovement = useRef<{
    vector: { x: number; y: number };
    altitude: number;
  } | null>(null);
  const isMobile = deviceProfile.isMobile;
  const [openClusterId, setOpenClusterId] = useState<string | null>(null);
  const lastCollectedCount = useRef(collectedWords.length);
  const grounded = useGame((state) => state.grounded);
  const [showLandingCue, setShowLandingCue] = useState(false);
  const landingCueTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const miniMap = useMemo(() => {
    const range = 60;
    const radius = 50;
    const quat = orientation ?? [0, 0, 0, 1];
    const [qx, qy, qz, qw] = quat;
    const siny = 2 * (qw * qy + qx * qz);
    const cosy = 1 - 2 * (qy * qy + qz * qz);
    const yaw = Math.atan2(siny, cosy);
    const cosYaw = Math.cos(-yaw);
    const sinYaw = Math.sin(-yaw);
    const centerX = playerPosition?.[0] ?? 0;
    const centerZ = playerPosition?.[2] ?? 0;

    let nearestIndex = -1;
    let nearestDistance = Infinity;
    const markers: Array<{
      key: string;
      x: number;
      y: number;
      active: boolean;
      index: number;
      distance: number;
      severity: number;
    }> = [];

    platformSurfaces.forEach((surface) => {
      const [sx, sy, sz] = surface.position;
      const dx = sx - centerX;
      const dz = sz - centerZ;
      const distance = Math.hypot(dx, dz);
      if (distance > range) return;

      const heightDelta = Math.abs((playerPosition?.[1] ?? 0) - (sy + 0.2));
      const distanceRatio = distance / RESET_RADIUS;
      const heightRatio = heightDelta / RESET_HEIGHT;
      const severity = Math.min(1, Math.max(distanceRatio, heightRatio));

      const rx = dx * cosYaw - dz * sinYaw;
      const rz = dx * sinYaw + dz * cosYaw;

      const x = (rx / range) * radius;
      const y = (-rz / range) * radius;

      markers.push({
        key: `${surface.index}-${sx}-${sz}`,
        x,
        y,
        active: surface.index === activePlatformIndex,
        index: surface.index,
        distance,
        severity,
      });

      if (distance < nearestDistance) {
        nearestDistance = distance;
        nearestIndex = surface.index;
      }
    });

    const worstSeverity = markers.reduce((max, marker) => Math.max(max, marker.severity), 0);

    const baseColor = new Color(0xdedede);
    const alertColor = new Color(0xffffff);
    const color = baseColor.clone();

    if (worstSeverity > 0.7) {
      const pct = Math.min(1, (worstSeverity - 0.7) / 0.3);
      color.lerp(alertColor, pct);
    }

    return {
      headingDeg: (-yaw * 180) / Math.PI,
      markers: markers.map((marker) => ({
        ...marker,
        nearest: marker.index === nearestIndex,
      })),
      severity: worstSeverity,
      colorHex: `#${color.getHexString()}`,
    };
  }, [orientation, playerPosition, platformSurfaces, activePlatformIndex]);

  const handleClusterToggle = useCallback(
    (clusterId: string) => {
      setOpenClusterId((current) => (current === clusterId ? null : clusterId));
    },
    []
  );

  useEffect(() => {
    if (phase !== "playing") {
      if (movementFrame.current !== null) {
        cancelAnimationFrame(movementFrame.current);
        movementFrame.current = null;
      }
      queuedMovement.current = null;
      pointerId.current = null;
      setPad({ visible: false, x: 0, y: 0, dx: 0, dy: 0 });
      resetMovementVector();
      setAltitudeInput(0);
      setTouchActive(false);
    }
  }, [phase, resetMovementVector, setAltitudeInput, setTouchActive]);

  useEffect(() => {
    return () => {
      if (movementFrame.current !== null) {
        cancelAnimationFrame(movementFrame.current);
      }
      queuedMovement.current = null;
    };
  }, []);

  const flushQueuedMovement = useCallback(() => {
    if (!queuedMovement.current) return;
    const payload = queuedMovement.current;
    queuedMovement.current = null;
    setMovementVector(payload.vector);
    setAltitudeInput(payload.altitude ?? 0);
  }, [setAltitudeInput, setMovementVector]);

  const scheduleMovementUpdate = useCallback(
    (vector: { x: number; y: number }, altitude: number) => {
      queuedMovement.current = { vector, altitude };
      if (movementFrame.current !== null) return;
      movementFrame.current = requestAnimationFrame(() => {
        movementFrame.current = null;
        flushQueuedMovement();
      });
    },
    [flushQueuedMovement]
  );

  useEffect(() => {
    setOpenClusterId(null);
  }, [isMobile]);

  useEffect(() => {
    if (collectedWords.length <= lastCollectedCount.current) {
      lastCollectedCount.current = collectedWords.length;
      return;
    }
    lastCollectedCount.current = collectedWords.length;
    if (!openClusterId && !isMobile) {
      const latest = collectedWords[collectedWords.length - 1];
      if (!latest) return;
      const match = skillThemes.find((theme) =>
        theme.skills.some((skill) => skill.toLowerCase() === latest)
      );
      if (match) {
        setOpenClusterId(match.id);
      }
    }
  }, [collectedWords, openClusterId, isMobile]);

  useEffect(() => {
    if (landingCueTimeout.current) {
      clearTimeout(landingCueTimeout.current);
      landingCueTimeout.current = null;
    }
    if (grounded) {
      setShowLandingCue(true);
      landingCueTimeout.current = setTimeout(() => setShowLandingCue(false), 1600);
    } else {
      setShowLandingCue(false);
    }
    return () => {
      if (landingCueTimeout.current) {
        clearTimeout(landingCueTimeout.current);
        landingCueTimeout.current = null;
      }
    };
  }, [grounded]);

  const updateVector = useCallback(
    (clientX: number, clientY: number) => {
      const dx = clientX - origin.current.x;
      const dy = clientY - origin.current.y;

      const distance = Math.hypot(dx, dy);
      const maxDistance = TRACKPAD_RADIUS;
      const scale = distance > 0 ? Math.min(distance, maxDistance) / distance : 0;

      const limitedDx = dx * scale;
      const limitedDy = dy * scale;

      setPad((prev) => ({
        ...prev,
        dx: limitedDx,
        dy: limitedDy,
      }));

      const normalizedX = limitedDx / maxDistance;
      const normalizedY = -(limitedDy / maxDistance);
      const pointerStrength = Math.min(1, Math.hypot(limitedDx, limitedDy) / maxDistance);

      scheduleMovementUpdate(
        {
          x: normalizedX,
          y: pointerStrength,
        },
        normalizedY
      );
    },
    [scheduleMovementUpdate]
  );

  const releasePad = useCallback(() => {
    pointerId.current = null;
    setPad((prev) => ({ ...prev, visible: false, dx: 0, dy: 0 }));
    if (movementFrame.current !== null) {
      cancelAnimationFrame(movementFrame.current);
      movementFrame.current = null;
    }
    queuedMovement.current = null;
    resetMovementVector();
    setAltitudeInput(0);
    setTouchActive(false);
  }, [resetMovementVector, setAltitudeInput, setTouchActive]);

  const collectedSet = useMemo(() => new Set(collectedWords), [collectedWords]);

  const skillTree = useMemo(
    () =>
      skillThemes.map((theme, themeIndex) => {
        const rows = chunkArray(theme.skills, 3);
        const normalizedSkills = theme.skills.map((skill) => skill.toLowerCase());
        const isUnlocked = themeIndex <= unlockedClusterIndex;
        const isCompleted = normalizedSkills.every((name) => collectedSet.has(name));
        const isNext = themeIndex === unlockedClusterIndex + 1;
        const collectedCount = normalizedSkills.reduce(
          (acc, name) => acc + (collectedSet.has(name) ? 1 : 0),
          0
        );
        return {
          ...theme,
          rows,
          themeIndex,
          isUnlocked,
          isCompleted,
          isNext,
          collectedCount,
          total: normalizedSkills.length,
        };
      }),
    [collectedSet, unlockedClusterIndex]
  );

  const handlePointerDown = useCallback(
    (event: ReactPointerEvent<HTMLDivElement>) => {
      if (phase !== "playing") return;
      if (pointerId.current !== null) return;
      if (event.pointerType === "mouse" && event.button !== 0) return;

      event.preventDefault();

      pointerId.current = event.pointerId;
      origin.current = { x: event.clientX, y: event.clientY };

      setPad({
        visible: true,
        x: event.clientX,
        y: event.clientY,
        dx: 0,
        dy: 0,
      });

      scheduleMovementUpdate({ x: 0, y: 0 }, 0);
      setTouchActive(true);
      event.currentTarget.setPointerCapture(event.pointerId);
    },
    [phase, scheduleMovementUpdate, setTouchActive]
  );

  const handlePointerMove = useCallback(
    (event: ReactPointerEvent<HTMLDivElement>) => {
      if (pointerId.current !== event.pointerId) return;
      event.preventDefault();
      updateVector(event.clientX, event.clientY);
    },
    [updateVector]
  );

  const handlePointerEnd = useCallback(
    (event: ReactPointerEvent<HTMLDivElement>) => {
      if (pointerId.current !== event.pointerId) return;
      event.preventDefault();
      try {
        event.currentTarget.releasePointerCapture(event.pointerId);
      } catch {
        /* pointer capture already released */
      }
      releasePad();
    },
    [releasePad]
  );

  return (
    <div className="interface">
      {showLandingCue && <div className="landingCue">Standing</div>}
      <div
        className="radar"
        aria-hidden="true"
        style={{
          borderColor: miniMap.colorHex,
          boxShadow:
            miniMap.severity > 0.6
              ? `0 0 ${10 + miniMap.severity * 40}px ${miniMap.colorHex}70`
              : "0 0 12px rgba(255, 255, 255, 0.08)",
        }}
      >
        <div className="radarBackdrop" />
        <div
          className="radarRing"
          style={{
            boxShadow:
              miniMap.severity > 0.6
                ? `inset 0 0 ${10 + miniMap.severity * 40}px ${miniMap.colorHex}`
                : "none",
          }}
        >
          {miniMap.markers.map((marker) => (
            <div
              key={marker.key}
              className={`radarDot${marker.active ? " radarDot--active" : ""}${marker.nearest ? " radarDot--nearest" : ""}`}
              style={{
                transform: `translate(${marker.x}px, ${marker.y}px)`,
                backgroundColor: marker.nearest ? miniMap.colorHex : undefined,
                boxShadow: marker.nearest
                  ? `0 0 20px ${miniMap.colorHex}`
                  : marker.active
                  ? `0 0 16px ${miniMap.colorHex}aa`
                  : undefined,
              }}
            />
          ))}
          <div
            className="radarPlayer"
            style={{ transform: `translate(-50%, -50%) rotate(${miniMap.headingDeg}deg)` }}
          />
        </div>
      </div>
      {/* ✅ WIN SCREEN */}
      {hasWon && (
        <div onClick={restart} className="winnerOverlay" role="presentation">
          <div className="winnerShell">
            <div className="winnerShell__halo" />
            <div className="winnerShell__panel">
              <div className="winnerBadge">mission accomplished</div>
              <h2 className="winnerTitle">All Skills Secured</h2>
              <div className="winnerCopy">
                <span className="winnerMetric">{skills.length}</span>
                <span className="winnerMetricLabel">Total Skills Collected</span>
              </div>
              <div className="winnerDivider" />
              <div className="winnerHint">Tap or click anywhere to deploy again</div>
            </div>
          </div>
        </div>
      )}

      {/* Floating trackpad */}
      <div
        className="trackpadOverlay"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerEnd}
        onPointerCancel={handlePointerEnd}
        onPointerLeave={handlePointerEnd}
        style={{ pointerEvents: phase === "playing" ? "auto" : "none" }}
      >
        <div
          className={`trackpadBase ${pad.visible ? "active" : ""}`}
          style={{
            width: TRACKPAD_SIZE,
            height: TRACKPAD_SIZE,
            top: pad.y - TRACKPAD_RADIUS,
            left: pad.x - TRACKPAD_RADIUS,
            opacity: pad.visible ? 1 : 0,
          }}
        >
          <div
            className="trackpadThumb"
            style={{
              width: TRACKPAD_THUMB_SIZE,
              height: TRACKPAD_THUMB_SIZE,
              top: TRACKPAD_RADIUS + pad.dy - TRACKPAD_THUMB_RADIUS,
              left: TRACKPAD_RADIUS + pad.dx - TRACKPAD_THUMB_RADIUS,
            }}
          />
        </div>
      </div>

      {/* Skill Tree */}
      <div className="skillTree">
        {skillTree.map((cluster) => {
          const isOpen = openClusterId === cluster.id;
          const clusterSkills = cluster.rows.flat();
          const clusterClasses = [
            "skillCluster",
            cluster.isCompleted
              ? "completed"
              : cluster.isUnlocked
              ? "unlocked"
              : cluster.isNext
              ? "next"
              : "locked",
            isOpen ? "skillCluster--open" : "skillCluster--closed",
          ]
            .filter(Boolean)
            .join(" ");

          const clusterStyle = {
            borderColor: cluster.color,
            "--cluster-color": cluster.color,
          } as CSSProperties;

          return (
            <div
              key={cluster.id}
              className={clusterClasses}
              style={clusterStyle}
            >
              <button
                type="button"
                className="skillClusterHeader"
                onClick={() => handleClusterToggle(cluster.id)}
                aria-expanded={isOpen}
              >
                <span className="skillClusterLabel">{cluster.label}</span>
                <span className="skillClusterCount">
                  {cluster.collectedCount}/{cluster.total}
                </span>
              </button>
              <div className="skillClusterBody" aria-hidden={!isOpen}>
                <div className="skillClusterGrid">
                  {clusterSkills.map((skill) => {
                    const normalizedSkill = skill.toLowerCase();
                    const collected = collectedSet.has(normalizedSkill);
                    const unlocked = cluster.isUnlocked;
                    const skillClasses = [
                      "skillNode",
                      unlocked ? "skillNode--unlocked" : "skillNode--locked",
                      collected ? "skillNode--collected" : "",
                      !collected && unlocked ? "skillNode--available" : "",
                      !unlocked && cluster.isNext ? "skillNode--next" : "",
                    ]
                      .filter(Boolean)
                      .join(" ");

                    return (
                      <div key={skill} className={skillClasses}>
                        <span className="skillNodeLabel">{skill}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
