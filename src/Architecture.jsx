import * as THREE from 'three'; // Importing THREE library
import { RigidBody } from '@react-three/rapier'; // Importing RigidBody component from @react-three/rapier
import Logo from './Logo.jsx'; // Importing Logo component

// Constants
const rotationX = -Math.PI / 2; // Rotation for meshes
const circleGeometry = new THREE.CircleGeometry(1, 100); // Geometry for circles
const meshBasicMaterialColorWhite = "#ffffff"; // Material color for meshes

// Array of positions for each group
const positions = [
    [0, 0, 0],      // Start
    [0, -1, -20],   // Group 1
    [-4, 0, -10],   // Group 2
    [4, 1, -10],    // Group 3
    [-3, 4, -12],   // Group 4
    [6, 2, -40],    // Group 5
    [5, 0, -60],    // Group 6
    [-6, 3, -30]    // Group 7
];

// Array of scales for each group
const scales = [
    [1, 1, 1],  // Small
    [2, 2, 1]   // Big
];

// Render function
export default function Architecture() {
    return (
        <>
            {positions.map((position, index) => ( // Mapping over positions array to render each group
                <RigidBody key={index} type="fixed" position={position}> {/* RigidBody component */}
                    <mesh rotation-x={rotationX} geometry={circleGeometry} scale={scales[index % 2]}> {/* Mesh component */}
                        <meshBasicMaterial color={meshBasicMaterialColorWhite} opacity={0.6} transparent wireframe /> {/* Material for mesh */}
                    </mesh>
                    <Logo /> {/* Logo component */}
                </RigidBody>
            ))}
        </>
    );
}
