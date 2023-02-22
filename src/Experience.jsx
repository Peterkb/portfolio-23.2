import * as THREE from 'three'
import { Html, OrbitControls, useGLTF, Text3D, Center, Float, PivotControls, ScrollControls, Scroll, useIntersect, Sparkles  } from "@react-three/drei"
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber"
import { useEffect, useRef } from "react"
import Model from "./components/models/Model"

import Main from './pages/sections/Main'
import Lights from "./world/Lights"

export default function Experience()
{
    // const { width, height } = useThree((state) => state.viewport)
    const { width, height, top } = useThree((state) => state.size)
    

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
            letterSpacing={-0.02}
            lineHeight={0.6}
            rotation={rotation}
            scale={scale}
        >
            {'Full Stack\nDeveloper'}
        </Text3D>
    }

    const offset = 0.15

    useFrame((state, delta) => {
        console.log(`W: ${width} / H: ${height} / T: ${top}`);
    })

    useEffect(() => {
        
    },[])

    return <>
            <Lights />
            {/* <OrbitControls /> */}

            {/* <PivotControls scale={3}> */}
                <ScrollControls pages={5}>                    
                    <Scroll>
                        {/* Page 1 */}
                        <Float
                            speed={0.5}
                            rotationIntensity={0.5}
                            floatIntensity={0.5}
                        >
                            <Center
                            position={[-3, 0, 1]}
                            rotation={[-0.30, 0.35, 0.25]}
                            >
                                <group scale={2}>
                                    <StackText material={textMattBlue} offset={[0, 0, offset]} scale={[1, 1, 0.2]} />
                                    <StackText material={TextMattOrange} offset={[0, 0, 0]} scale={[1.0, 1.0, 0.5]} />
                                    <StackText material={TextMattYellow} offset={[0, 0, -offset + 0.04]} scale={[1, 1, 0.2]} />
                                </group>
                            </Center>
                        </Float>
                        
                        <Sparkles
                            size={ 6 }
                            scale={ [20, 15, 5] }
                            position-y={ 0 }
                            speed={ 0.3 }
                            count={ 100 }
                        />

                        <Sparkles
                            size={ 10 }
                            scale={ [15, 6, 5] }
                            position={ [-4, 0, 0] }
                            speed={ 0.4 }
                            count={ 100 }
                            rotation={[-0.30, 0.35, 0.25]}
                        />
                        
                        <group position={[6, -3, 7]}>
                            <Model
                                link='https://github.com/Peterkb'
                                modelPath='./models/github-logo.glb'
                                position={[-0.8, 0, 0]}
                                rotation={[1.5, 0, 0.1]}
                                />
                            <Model
                                link='https://www.linkedin.com/in/pkbredell/'
                                modelPath='./models/linkedIn-logo.glb'
                                rotation={[1.5, 0, 0.1]}/>
                        </group>
                        {/* Page 2 - About */}

                        
                        {/* Page 3 - Skills */}


                        {/* Page 4 - Projects*/}


                        {/* Page 5 - Contact*/}


                    </Scroll>

                    <Scroll html style={{width: '100%'}}>
                        {/* Page 1 */}
                        <Main />
                        
                        {/* Page 2 - About */}

                        
                        {/* Page 3 - Skills */}


                        {/* Page 4 - Projects*/}


                        {/* Page 5 - Contact*/}


                    </Scroll>

                    
                    
                        {/* <Html>
                            
                        </Html> */}
                </ScrollControls>

                {/* <points>
                    <PointMaterial transparent vertexColors size={15} sizeAttenuation={false} depthWrite={false} />
                </points> */}

            {/* </PivotControls> */}

            {/* <mesh position={[0, -5, 0]} >
                <boxBufferGeometry />
                <meshStandardMaterial color='mediumpurple' />
            </mesh> */}
    </>
}

