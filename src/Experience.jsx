import { Html, OrbitControls, useGLTF, Text3D  } from "@react-three/drei"
import { Canvas, useFrame, useLoader } from "@react-three/fiber"
import { Suspense, useRef } from "react"
import { GitLogo as GitLogo, LinkedInLogo as LinkedInLogo  } from "./components/models/Logos"

import Lights from "./world/Lights"

export default function Experience()
{
    return <>
            <Lights />
            <OrbitControls />

            <Html fullscreen>
                
                {/* Hero Section */}
                
                <div className="container">
                    <h1 className="title">Full Stack Developer</h1>                    
                </div>

                {/* About Section */}
                <div className="container">                    
                    
                </div>
                
                {/* Projects Section */}
                <div className="container">
                    
                    {/* Full Stack */}
                    <h2>Full Stack Projects</h2>

                    {/* Real World Projects */}
                    <h2>Real World Projects</h2>

                    {/* Coding challenges */}
                    <h2>Coding Challenges</h2>
                </div>

                <div className="container">
                    {/* Contact Page */}
                    <h2>Contact Me</h2>
                </div>

            </Html>

            <mesh
                position={[0, 0, 0]}
            >
                <boxBufferGeometry />
                <meshStandardMaterial color='mediumpurple' />
            </mesh>

            <LinkedInLogo />
            <GitLogo />

        {/* <LoadingPage /> */}
    </>
}