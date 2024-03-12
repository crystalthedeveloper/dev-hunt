import * as THREE from 'three';
import React from 'react';
import { RigidBody } from '@react-three/rapier';
import Logo from './Logo.jsx';
import { CloudLimbo, CloudAxe } from './Cloud.jsx';
import {StarSpinner} from './Star.jsx'

// Define ground positions and scale
const groundPositions = [
    [0, 0, 0],
    [0, 4, -10],
    [-4, 1, -20],
    [4, 1, -20],
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

// Number Of Additional Circles
const numberOfAdditionalCircles = 20;

// Rotation configuration for ground elements
const rotationX = [-Math.PI / 2];

// Define geometries for elements
const boxGeometry = new THREE.BoxGeometry(2, 2, 2);
const circleGeometry = new THREE.CircleGeometry(1, 100);

// Function to generate random positions with spacing to prevent overlapping
const getRandomPositionWithSpacing = (min, max, existingPositions, minDistance) => {
    let position;
    // Generate random position and ensure it doesn't overlap with existing ones
    do {
        position = [
            Math.random() * (max - min) + min,
            Math.random() * 10,
            Math.random() * (max - min) + min,
        ];
    } while (
        existingPositions.some(
            (existingPosition) => distanceBetween(existingPosition, position) < minDistance
        )
    );
    return position;
};

// Function to calculate the distance between two positions
const distanceBetween = (pos1, pos2) =>
    Math.sqrt(
        Math.pow(pos2[0] - pos1[0], 2) +
        Math.pow(pos2[1] - pos1[1], 2) +
        Math.pow(pos2[2] - pos1[2], 2)
    );

// Generate random positions for circle ground elements with spacing
const randomCircleGroundPositions = Array.from({ length: numberOfAdditionalCircles }, (_, index) =>
    getRandomPositionWithSpacing(-50, 50, [], 3)
);

// Main Architecture component
export default function Architecture() {
    return (
        <>
            {/* GROUND ELEMENTS */}
            <RigidBody type="fixed" position={groundPositions[0]}>
                <mesh rotation-x={rotationX} geometry={boxGeometry} scale={groundScale[0]}>
                    {/* Ground Material */}
                    <meshBasicMaterial color={materialColors.white} opacity={0.2} transparent />
                </mesh>
                <Logo />
            </RigidBody>


            {/* CIRCLE GROUND ELEMENTS */}
            {Array.from({ length: numberOfAdditionalCircles }, (_, index) => (
                <RigidBody key={index + groundPositions.length} type="fixed" position={randomCircleGroundPositions[index]}>
                    <mesh rotation-x={rotationX} geometry={circleGeometry} scale={groundScale[2]}>
                        {/* Circle Material */}
                        <meshBasicMaterial color={materialColors.white} opacity={0.6} transparent wireframe />
                    </mesh>
                    <Logo />
                </RigidBody>
            ))}

            {/* Render cloud elements */}

            <StarSpinner />
            <CloudAxe />
            <CloudLimbo />
        </>
    );
}