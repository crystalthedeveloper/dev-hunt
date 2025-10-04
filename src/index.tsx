import "./style.css";
import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import { KeyboardControls, Loader, Stars } from "@react-three/drei";
import * as THREE from "three";
import Interface from "./components/ui/Interface";
import useDeviceProfile from "./hooks/useDeviceProfile";

const Experience = lazy(() => import("./Experience"));

const container = document.getElementById("root");
if (!container) throw new Error("Root element not found: #root");

const root = ReactDOM.createRoot(container);

function App() {
  const deviceProfile = useDeviceProfile();

  return (
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
        shadows={!deviceProfile.isMobile}
        dpr={[1, deviceProfile.pixelRatio]}
        camera={{ fov: 45, near: 0.1, far: 300, position: [2, 3, 5] }}
        onCreated={({ gl, scene }) => {
          gl.outputColorSpace = THREE.SRGBColorSpace;
          gl.shadowMap.enabled = !deviceProfile.isMobile;
          gl.setPixelRatio(deviceProfile.pixelRatio);
          scene.background = new THREE.Color(0x050505);
          scene.fog = new THREE.FogExp2("#050505", deviceProfile.fogDensity);
        }}
      >
        <Suspense fallback={null}>
          <Experience deviceProfile={deviceProfile} />
        </Suspense>
        <Stars
          radius={30}
          depth={100}
          count={deviceProfile.starsCount}
          factor={deviceProfile.starsFactor}
          fade
          saturation={0}
        />
      </Canvas>
      <Interface deviceProfile={deviceProfile} />
      <Loader />
    </KeyboardControls>
  );
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
