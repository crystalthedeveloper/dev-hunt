// src/Experience.tsx
import { Physics } from "@react-three/cannon";
import Player from "./components/3d/Player";
import Architecture from "./components/3d/Architecture";
import type { DeviceProfile } from "./hooks/useDeviceProfile";

type ExperienceProps = {
  deviceProfile: DeviceProfile;
};

export default function Experience({ deviceProfile }: ExperienceProps) {
  return (
    <Physics
      gravity={[0, -9.81, 0]}
      iterations={deviceProfile.physicsIterations}
      stepSize={deviceProfile.physicsStep}
      broadphase="SAP"
      allowSleep={deviceProfile.isMobile}
    >
      <Player />
      <Architecture deviceProfile={deviceProfile} />
    </Physics>
  );
}
