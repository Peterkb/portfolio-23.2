import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience'
import React from 'react'

import './index.css'
import './SiteHTML'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    {/* <SiteHTML /> */}
    
    <Canvas
      shadows
      camera={ {
          fov: 45,
          near: 0.1,
          far: 200,
          position: [ 0, 0, 6 ]
      } }
    >
      <Experience />
    </Canvas>

    {/* <App /> */}
  </React.StrictMode>
)
