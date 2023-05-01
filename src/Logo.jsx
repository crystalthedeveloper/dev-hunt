
import { Clone, useGLTF, } from "@react-three/drei"

export default function Logo() {

    const logo = useGLTF('./Logo.glb')

    return <Clone object={logo.scene} />
     
}
useGLTF.preload('./Logo.glb')