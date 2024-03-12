import * as THREE from 'three';
import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { RigidBody } from '@react-three/rapier';
import { Cloud } from '@react-three/drei';

const materialColors = {
    black: "#000000",
    white: "#ffffff",
    yellow: "#ffe600",
};

const getRandomPosition = (min, max) => [Math.random() * (max - min) + min, 0, Math.random() * (max - min) + min];


export function CloudLimbo() {
    const obstacle = useRef();
    const [timeOffset] = useState(() => Math.random() * Math.PI * 1);
    const position = getRandomPosition(-50, 50);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        const y = Math.sin(time + timeOffset) + 1.30;
        obstacle.current.setNextKinematicTranslation({ x: position[0], y: position[1] + y, z: position[2] });
    });

    return (
        <group position={position}>
            <RigidBody type="kinematicPosition" ref={obstacle} position={position} restitution={0.2} friction={0} colliders={false}>
                <Cloud opacity={0.5} speed={0.4} width={10} depth={1.5} segments={20} color={materialColors.white} />
            </RigidBody>
        </group>
    );
}

export function CloudAxe() {
    const obstacle = useRef();
    const [timeOffset] = useState(() => Math.random() * Math.PI * 2);
    const position = getRandomPosition(-50, 50);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        const z = Math.sin(time + timeOffset) * 3;
        obstacle.current.setNextKinematicTranslation({ x: position[0], y: position[1], z: position[2] + z });
    });

    return (
        <group position={position}>
            <RigidBody type="kinematicPosition" ref={obstacle} colliders={false} position={position} restitution={0.2} friction={0}>
                <Cloud
                    opacity={0.5}
                    speed={0.4}
                    width={10}
                    depth={1.5}
                    segments={30}
                    colliders={false}
                    color={materialColors.white}
                />
            </RigidBody>
        </group>
    );
}
