import ReactDOM from 'react-dom/client'
import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.jsx/'
import LoadingPage from './components/LoadingPage.jsx'
import './index.css'

import Navbar from './components/Navbar'
// import Main from './pages/sections/Main'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <LoadingPage />
      <Navbar />
      {/* <Main /> */}
        <div className="canva">
          <Canvas
            shadows
            camera={ {
                fov: 70,
                near: 0.1,
                far: 200,
                position: [ 0, 0, 12 ]
            } }
            >
            <Suspense fallback={null}>
              <Experience />
            </Suspense>
          </Canvas>
        </div>
  </React.StrictMode>
)
