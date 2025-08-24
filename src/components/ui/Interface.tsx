// src/Interface.tsx
import { useKeyboardControls } from "@react-three/drei";
import useGame, { skills } from "../../stores/useGame";

// Controls mapping: logic → icon
const buttonMap = {
  forward: "🚀",
  backward: "⬇️",
  leftward: "⬅️",
  rightward: "➡️",
} as const;

export default function Interface() {
  const restart = useGame((s) => s.restart);   // ✅ use restart instead of resetAll/onRestartPlayer
  const hasWon = useGame((s) => s.hasWon);
  const allCollected = useGame((s) => s.allCollected);

  // Controls from drei
  const controls = {
    forward: useKeyboardControls((s) => s.forward),
    backward: useKeyboardControls((s) => s.backward),
    leftward: useKeyboardControls((s) => s.leftward),
    rightward: useKeyboardControls((s) => s.rightward),
  };

  return (
    <div className="interface">
      {/* ✅ WIN SCREEN */}
      {hasWon && (
        <div onClick={restart} className="winner">
          <div className="winnerHit active">
            🎉 CONGRATS!
            <div className="winnerCopy">
              You collected all <strong>{skills.length}</strong> skills!
            </div>
            <img src="/texture/fireworks.gif" alt="fireworks" />
            <div className="restartHint">(click anywhere to restart)</div>
          </div>
        </div>
      )}

      {/* Collected Skills Progress */}
      <div className="collect">
        <div className="collectHitStar">
          ⭐ {allCollected} / {skills.length}
        </div>
        {skills.map((skill) => {
          const value = useGame((s) => s[`increment${skill}` as const]);
          return (
            <div
              key={skill}
              className={`collectHit ${value ? "active" : ""}`}
            >
              {skill.replace(/([A-Z])/g, " $1")}
            </div>
          );
        })}
      </div>

      {/* Controls HUD */}
      <div className="controls">
        {Object.entries(buttonMap).map(([name, icon]) => {
          const active = controls[name as keyof typeof controls];
          const press = useGame((s) => s[`press${name}` as const]);
          const release = useGame((s) => s[`release${name}` as const]);

          return (
            <div
              key={name}
              onTouchStart={press}
              onTouchEnd={release}
              className={`key ${active ? "active" : ""}`}
            >
              <span className="icon">{icon}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
