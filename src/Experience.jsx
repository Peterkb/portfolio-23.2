import * as THREE from 'three'
import { Html, OrbitControls, useGLTF, Text3D, Center, Float  } from "@react-three/drei"
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber"
import { Suspense, useRef } from "react"
import Model from "./components/models/Model"

import Main from './pages/sections/Main'
import Lights from "./world/Lights"

export default function Experience()
{
    const { width, height } = useThree((state) => state.viewport)
    console.log(width, height);


    const textMattBlue = new THREE.MeshStandardMaterial({ color: '#4C9BF6', metalness: 0, roughness: 0 })
    const TextMattOrange = new THREE.MeshStandardMaterial({ color: '#F64B07', metalness: 0, roughness: 0 })
    const TextMattYellow = new THREE.MeshStandardMaterial({ color: '#F6C207', metalness: 0, roughness: 0 })

    const StackText = ({ material, offset = [0,0,0], rotation=[0, 0, 0], scale=[1, 1, 0.25] }) => {
        return <Text3D
            font={'./fonts/Poppins_Medium_Regular.json'}
            bevelEnabled
            curveSegments={12}
            material={material}
            position={offset}
            letterSpacing={-0.06}
            lineHeight={0.6}
            rotation={rotation}
            scale={scale}
        >
            {'Full Stack\nDeveloper'}
        </Text3D>
    }

    const offset = 0.15

    return <>
            <Lights />
            {/* <OrbitControls /> */}

            <Float>
                <Center scale={2.5}>
                    <StackText material={textMattBlue} offset={[0, 0, offset]} scale={[1, 1, 0.2]} />
                    <StackText material={TextMattOrange} offset={[0, 0, 0]} scale={[1.0, 1.0, 0.5]} />
                    <StackText material={TextMattYellow} offset={[0, 0, -offset + 0.04]} scale={[1, 1, 0.2]} />
                    <Center bottom right position={[5.2, -1.7, 0]}>
                        <Model modelPath='./models/linkedIn-logo.glb' />
                        {/* <Model modelPath='./models/github-logo.glb' position={[-0.8, 0, 0]} /> */}
                        <mesh
                            onClick={() => {console.log('clickedy click');}}
                            position={[0, -2, -2]}
                        >
                            <boxBufferGeometry />
                            <meshStandardMaterial color='mediumpurple' />
                        </mesh>
                    </Center>
                </Center>
                <Html>
                    <Main />
                </Html>
            </Float>

            <mesh
                position={[0, -5, 0]}
            >
                <boxBufferGeometry />
                <meshStandardMaterial color='mediumpurple' />
            </mesh>

            {/* <LinkedInLogo />
            <GitLogo /> */}
    </>
}

