// Developer.jsx
import { Text3D } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier'; 

export function BlockDeveloper({ position = [0, 0, 0], text = "Visual Studio Code" }) {
  // Text3D properties
  const sizeText3D = 0.1;
  const fontText3D = "Cinzel ExtraBold_Regular.json";
  const bevelThicknessText3D = 0;
  const bevelSizeText3D = 0;
  const heightText3D = [0.03];
  const positionVisualStudioCodeText3D = [-5.5, 1, -9];

  return (
    <RigidBody type="fixed" name="studio" position={[0, 0, 0]}>
      {/* Display dynamic text */}
      <Text3D
        bevelEnabled
        font={fontText3D}
        size={sizeText3D}
        height={heightText3D}
        bevelThickness={bevelThicknessText3D}
        bevelSize={bevelSizeText3D}
        position={positionVisualStudioCodeText3D}
      >
        {text}
        <meshBasicMaterial color="#ffffff" />
      </Text3D>
    </RigidBody>
  );
}

export function Developer() {
  // You can fetch this text from your Django backend and pass it as a prop
  const textFromBackend = "Text from Django Backend";

  return (
    <>
      <BlockDeveloper text={textFromBackend} />
    </>
  );
}
