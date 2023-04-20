import { Stats } from '@react-three/drei'
import { Physics, Debug } from '@react-three/rapier'
import { Level } from './Level.jsx'
import Player from './Player.jsx'

export default function Experience() {
    
    return <>
        <Physics gravity={[0, -2, 0]}>
            {/* <Debug />  */}
            {/* <Stats /> */}
            <Level />
            <Player />
        </Physics>
    </>
}