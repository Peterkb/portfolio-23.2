import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience'
import React from 'react'
import { Center, Html } from '@react-three/drei'

import SiteHTML from './SiteHTML'
import './index.css'
import './SiteHTML'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <SiteHTML /> */}
    
    <Header />
    <Canvas
      shadows
      camera={ {
          fov: 45,
          near: 0.1,
          far: 200,
          position: [ 0, 0, 6 ]
      } }
    >
      <Center top left>
        <Html fullscreen>
          <SiteHTML />
        </Html>
      </Center>
      <Experience />

    </Canvas>
  </React.StrictMode>
)
