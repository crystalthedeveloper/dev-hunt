import {
    useKeyboardControls,
    useAnimations,
    useGLTF,
    OrbitControls
} from '@react-three/drei'
import {
    useRef,
    useEffect
} from 'react'
import { RigidBody, Physics, RapierRigidBody } from '@react-three/rapier'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

let walkDirection = new THREE.Vector3();
let rotateAngle = new THREE.Vector3(0, 1, 0);
let rorareQuaternion = new THREE.Quaternion();
let cameraTarget = new THREE.Vector3();

export default function Player() {

    // Ref
    const rigidBodyplayer = useRef();
    const currentAction = useRef()
    const controlsRef = useRef(typeof OrbitControls);

    //player
    const player = useGLTF('./characterLogo.glb')

    //Animations
    const { actions } = useAnimations(player.animations, player.scene)

    //camera state
    const camera = useThree((state) => state.camera);

    // update Camera Target
    const updateCameraTarget = (moveX, moveZ) => {
        //move camera
        camera.position.x += moveX;
        camera.position.z += moveZ;
        //update camera target
        cameraTarget.x = player.scene.position.x;
        cameraTarget.y = player.scene.position.y;
        cameraTarget.z = player.scene.position.z;
        if (controlsRef.current) controlsRef.current.target = cameraTarget;
    }

    //Keyboard Controls
    const [subscribeKeys, getKeys] = useKeyboardControls()


    //Keyboard move direction
    const directionOffset = ({ forward, backward, leftward, rightward }) => {

        var directionOffset = 0; //w

        if (forward) {
            if (leftward) {
                directionOffset = Math.PI / 4; //w+a
            } else if (rightward) {
                directionOffset = -Math.PI / 4; //w+d
            }
        } else if (backward) {

            if (leftward) {
                directionOffset = Math.PI / 4 + Math.PI / 2; //s+a
            }
            else if (rightward) {
                directionOffset = -Math.PI / 4 - Math.PI / 2; //s+d
            } else {
                directionOffset = Math.PI; //s
            }
        } else if (leftward) {
            directionOffset = Math.PI / 2; //a
        } else if (rightward) {
            directionOffset = -Math.PI / 2; //d
        }
        return directionOffset;

    };


    // Cast Shadow to player 
    player.scene.traverse((object) => {
        if (object.isMesh) {
            object.castShadow = true;
        }
    })



    useFrame((state, delta) => {


        /**
         * keys
         */
        const { forward, backward, leftward, rightward, shift, jump } = getKeys()

        let action = "";

        if (forward || backward || leftward || rightward) {
            action = "walk";
            if (shift) {
                action = "run";
            }
        } else if (jump) {
            action = "jump"

        } else {
            action = "idle";

        }

        if (currentAction.current == "run" || currentAction.current == "walk") {

            // calculate towards camera direction
            let angleYCameraDirection = Math.atan2(
                camera.position.x - player.scene.position.x,
                camera.position.z - player.scene.position.z,
            );
            // diagonal movement angle offset
            let newDirectionOffset = directionOffset({
                forward,
                backward,
                leftward,
                rightward,
            })

            // rotate player
            rorareQuaternion.setFromAxisAngle(rotateAngle, angleYCameraDirection + newDirectionOffset);
            player.scene.quaternion.rotateTowards(rorareQuaternion, 0.2)

            // calculate direction
            camera.getWorldDirection(walkDirection);
            walkDirection.y = 0;
            walkDirection.normalize();
            walkDirection.applyAxisAngle(rotateAngle, newDirectionOffset);

            // run/walk velovity
            const runSpeed = 10
            const walkSpeed = 2
            const velocity = currentAction.current == "run" ? runSpeed : walkSpeed;

            // move model & camera 
            const moveX = walkDirection.x * velocity * delta;
            const moveZ = walkDirection.z * velocity * delta;
            player.scene.position.x += moveX;
            player.scene.position.z += moveZ;
            updateCameraTarget(moveX, moveZ);
            
           
            // Create a Kinematic rigid-body.
            rigidBodyplayer.current.setNextKinematicTranslation({
                x: cameraTarget.x += walkDirection.x * velocity * delta,
                y: cameraTarget.y += walkDirection.y * velocity * delta,
                z: cameraTarget.z +=  walkDirection.z * velocity * delta
                
            }, true);
            

        }

        if (currentAction.current != action) {
            const nextActionToPlay = actions[action];
            const current = actions[currentAction.current];
            current?.fadeOut(0.2);
            nextActionToPlay?.reset().fadeIn(0.2).play();
            currentAction.current = action;
        }


    })

    return <>
        <OrbitControls ref={controlsRef} />

        <RigidBody type="kinematicPosition"
            ref={rigidBodyplayer}>
            <primitive
                object={player.scene}
                position={[0, 0, 1]}
                rotation={[0, 0.5, 0]}
            />
        </RigidBody>

    </>
}
useGLTF.preload('./characterLogo.glb')
