import ReactDOM from 'react-dom/client'
import React from 'react'
import { Suspense } from 'react'
import Experience from './Experience.jsx/'
import { Canvas } from '@react-three/fiber'
import zustand from 'zustand'

import Header from './components/Header'
import Loader from './components/Loader'

import './index.css'
import './SiteHTML'

import Lights from './world/Lights'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Header /> */}
    <Canvas
        shadows
        camera={ {
            fov: 45,
            near: 0.1,
            far: 200,
            position: [ 2.5, 4, 6 ]
        } }
    >
      <Lights />

      <Suspense fallback={null}>
        <Experience />
      </Suspense>

      {/* <Environment preset="sunset" /> */}
    </Canvas>
    <Loader />
  </React.StrictMode>
)
