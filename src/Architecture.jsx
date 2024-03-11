import * as THREE from 'three';
import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { RigidBody } from '@react-three/rapier';
import { BoxGeometry, CircleGeometry } from 'three'; // Imported only necessary geometries
import Logo from './Logo.jsx';

// Helper function to generate random positions within a given range
const getRandomPosition = (min, max) => [Math.random() * (max - min) + min, 0, Math.random() * (max - min) + min];

const materialColors = {
    white: "#ffffff",
};

const boxGeometry = new BoxGeometry(2, 2, 2);
const circleGeometry = new CircleGeometry(1, 100);

const rotationX = [-Math.PI / 2];

const groundPositions = [
    [0, 0, 0],
    [0, 1, -40],
    [-4, 1, -20],
    [4, 1, -20],
    [-3, 1, -24],
    [6, 1, -80],
    [5, 1, -120],
    [-6, 1, -60],
];

const groundScale = [
    [100, 100, 2],
    [2, 2, 1],
    [1, 1, 1]
];

const minCloudPosition = -50;
const maxCloudPosition = 50;

const getRandomCloudPosition = () => getRandomPosition(minCloudPosition, maxCloudPosition);

const getRandomNonOverlappingCloudPosition = () => {
    let position;
    do {
        position = getRandomCloudPosition();
    } while (groundPositions.some(groundPos => position.some((coord, index) => Math.abs(coord - groundPos[index]) < 10)));
    return position;
}

const randomCircleGroundPositions = Array.from({ length: groundPositions.length - 1 }, () => getRandomCloudPosition());

const CloudElement = ({ type, position, rotationFn, translationFn, cloudProps }) => {
    const obstacle = useRef();
    const [timeOffset] = useState(() => Math.random() * Math.PI * (type === 'limbo' ? 1 : 2));

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        if (rotationFn) {
            const rotation = new THREE.Quaternion();
            rotation.setFromEuler(new THREE.Euler(0, time * rotationFn(time), 0));
            obstacle.current.setNextKinematicRotation(rotation);
            console.log(`Rotation: ${rotation.toArray().join(', ')}`); // Added
        }
        if (translationFn) {
            const translation = translationFn(time, timeOffset);
            obstacle.current.setNextKinematicTranslation(translation);
            console.log(`Translation: ${Object.values(translation).join(', ')}`); // Added
        }
    });

    return (
        <group position={position}>
            <RigidBody type="kinematicPosition" ref={obstacle} position={position} {...cloudProps}>
                {type === 'spinner' && (
                    <mesh geometry={boxGeometry}>
                        <meshBasicMaterial color={materialColors.white} wireframe />
                    </mesh>
                )}
                {type === 'limbo' && (
                    <Cloud opacity={0.5} speed={0.4} width={10} depth={1.5} segments={20} color={materialColors.white} />
                )}
                {type === 'axe' && (
                    <Cloud
                        opacity={0.5}
                        speed={0.4}
                        width={10}
                        depth={1.5}
                        segments={30}
                        colliders={false}
                        color={materialColors.white}
                    />
                )}
            </RigidBody>
        </group>
    );
}

const Architecture = () => (
    <>
        {/* GROUND ELEMENTS */}
        {groundPositions.map((position, index) => (
            <RigidBody key={index} type="fixed" position={randomCircleGroundPositions[index]}>
                {index === 0 ? (
                    <mesh rotation-x={rotationX} geometry={boxGeometry} scale={groundScale[0]}>
                        <meshBasicMaterial color={materialColors.white} opacity={0.3} transparent />
                    </mesh>
                ) : (
                    <mesh rotation-x={rotationX} geometry={circleGeometry} scale={groundScale[1]}>
                        <meshBasicMaterial color={materialColors.white} opacity={0.6} transparent wireframe />
                    </mesh>
                )}
                <Logo />
            </RigidBody>
        ))}

        {/* CLOUD ELEMENTS */}
        <CloudElement type="spinner" position={getRandomNonOverlappingCloudPosition()} rotationFn={(time, speed) => time * speed} cloudProps={{ restitution: 0.2, friction: 0 }} />
        <CloudElement type="limbo" position={getRandomNonOverlappingCloudPosition()} translationFn={(time, offset) => ({ x: 0, y: Math.sin(time + offset) + 1.30, z: 0 })} cloudProps={{ restitution: 0.2, friction: 0, colliders: false }} />
        <CloudElement type="axe" position={getRandomNonOverlappingCloudPosition()} translationFn={(time, offset) => ({ x: 0, y: 0, z: Math.sin(time + offset) * 3 })} cloudProps={{ restitution: 0.2, friction: 0, colliders: false }} />
    </>
);

export default Architecture;
