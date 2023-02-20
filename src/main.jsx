import ReactDOM from 'react-dom/client'
import React from 'react'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.jsx/'
import LoadingPage from './components/LoadingPage.jsx'
import './index.css'

import Lights from './world/Lights'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Canvas            
        shadows
        camera={ {
            fov: 45,
            near: 0.1,
            far: 200,
            position: [ 0, 0, 12 ]            
        } }
        >
        <Experience />
      </Canvas>
      {/* <LoadingPage /> */}
  </React.StrictMode>
)
