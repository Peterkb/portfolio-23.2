import { Html, OrbitControls, useGLTF  } from "@react-three/drei"
import { Canvas, useFrame, useLoader } from "@react-three/fiber"
import { Suspense, useRef } from "react"
import { GitLogo as GitLogo, LinkedInLogo as LinkedInLogo  } from "./components/models/Logos"

import Lights from "./world/Lights"

export default function Experience()
{
    return <>
        {/* <Header /> */}        
            <Lights />
            <OrbitControls />

            <Html fullscreen>
                
                {/* Hero Section */}
                {/* <div className="container">
                    <h1 className="title">hello</h1>
                </div> */}

                {/* About Section */}
                    {/* About Me */}
                    {/* My Skills */}
                
                {/* Projects Section */}
                    {/* Full Stack */}
                    {/* Real World Projects */}
                    {/* Coding challenges */}

                {/* Contact Page */}

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