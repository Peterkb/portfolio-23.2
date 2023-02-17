import { useFrame } from "@react-three/fiber"
import { OrbitControls } from '@react-three/drei'
import { useRef } from "react"

export default function Experience()
{
    const cube = useRef()

    // var time = 0

    // useFrame((state, delta) => {
    //     time += delta
    //     cube.current.rotation.y += delta
    //     cube.current.position.x = Math.sin(time)
    // })

    return <>
        {/* <Perf position="top-left" /> */}

        <OrbitControls makeDefault />

        <directionalLight position={ [ 1, 2, 3 ] } intensity={ 1.5 } />
        
        <ambientLight intensity={ 0.5 } />

        <mesh
            ref={cube}
            position={[0, 0, -1]}
            scale={[18, 9, 1]}
        >
            <planeGeometry />
            <meshStandardMaterial color='#121212' />
        </mesh>

        <mesh ref={cube}>
            <boxBufferGeometry />
            <meshStandardMaterial color='mediumpurple' />
        </mesh>
    </>
}