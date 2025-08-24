import "./style.css";
import Experience from "./Experience";
import Interface from "./Interface";
import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import { KeyboardControls, Loader, Environment, Sky, Stars } from "@react-three/drei";
import * as THREE from "three";

const container = document.getElementById("root");
if (!container) throw new Error("Root element not found: #root");

const root = ReactDOM.createRoot(container);

root.render(
  <KeyboardControls
    map={[
      { name: "forward", keys: ["ArrowUp", "KeyW"] },
      { name: "backward", keys: ["ArrowDown", "KeyS"] },
      { name: "leftward", keys: ["ArrowLeft", "KeyA"] },
      { name: "rightward", keys: ["ArrowRight", "KeyD"] },
      { name: "jump", keys: ["Space"] },
      { name: "shift", keys: ["ShiftLeft"] },
    ]}
  >
    <Canvas
      camera={{ fov: 45, near: 0.1, far: 300, position: [2, 3, 5] }}
      onCreated={({ gl, scene }) => {
        // ✅ New Three.js API
        gl.outputColorSpace = THREE.SRGBColorSpace;

        // ✅ Fog + background
        const fogColor = new THREE.Color(0x111111); // dark gray/black background
        scene.background = fogColor;

        // 👉 Use linear fog for atmosphere
        scene.fog = new THREE.Fog(fogColor, 10, 220);
      }}
    >
      {/* Game world */}
      <Experience />

      {/* Subtle atmospheric sky light */}
      <Environment>
        <Sky
          distance={450000}
          sunPosition={[10, 1, 0]}
          inclination={0}
          azimuth={-0.25}
        />
      </Environment>

      {/* ✨ Stars field */}
      <Stars
        radius={30}   // how far away the stars are
        depth={100}   // star field depth
        count={5000}  // number of stars
        factor={3}    // size factor
      />
    </Canvas>

    <Interface />
    <Loader />
  </KeyboardControls>
);
