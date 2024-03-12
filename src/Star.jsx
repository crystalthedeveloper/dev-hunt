import * as THREE from 'three';
import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { RigidBody } from '@react-three/rapier';
import Logo from './Logo.jsx';

// Define geometries for elements
const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
const circleGeometry = new THREE.CircleGeometry(1, 100);

// Define ground positions and scale
const groundPositions = [
    [0, 0, 0],
    [0, 4, -10],
    [-4, 1, -20],
    [0, 5, -10],
    [-3, 1, -24],
    [6, 1, -80],
    [5, 1, -120],
    [-6, 1, -60],
];

const groundScale = [
    [50, 50, 2],
    [2, 2, 1],
    [1, 1, 1]
];

// Define material colors
const materialColors = {
    black: "#000000",
    white: "#ffffff",
    yellow: "#ffe600",
};

// Rotation configuration for ground elements
const rotationX = [-Math.PI / 2];

const getRandomPosition = (min, max) => [Math.random() * (max - min) + min, 0, Math.random() * (max - min) + min];

export function StarSpinner() {
    const obstacle = useRef();
    const [speed] = useState(() => (Math.random() + 0.1) * (Math.random() < 0.5 ? -1 : 1));
    const position = getRandomPosition(-50, 50);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        const rotation = new THREE.Quaternion();
        rotation.setFromEuler(new THREE.Euler(0, time * speed, 0));
        obstacle.current.setNextKinematicRotation(rotation);
    });

    return (
        <group>
            <RigidBody type="kinematicPosition" ref={obstacle} position={groundPositions[3]} restitution={0.2} friction={0}>
                <mesh geometry={boxGeometry}>
                    <meshBasicMaterial color={materialColors.white} wireframe />
                </mesh>
            </RigidBody>
            {/* STAR ELEMENTS GROUND */}
            <RigidBody type="fixed" position={groundPositions[1]}>
                <mesh rotation-x={rotationX} geometry={circleGeometry} scale={groundScale[1]}>
                    {/* Star Material */}
                    <meshBasicMaterial color={materialColors.white} opacity={0.6} transparent wireframe />
                </mesh>
                <Logo />
            </RigidBody>
        </group>
    );
}

