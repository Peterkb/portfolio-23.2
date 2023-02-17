import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience'
import React from 'react'

import './index.css'
import SiteHTML from './SiteHTML'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <SiteHTML />
    
    {/* <Canvas>
      <Experience />
    </Canvas> */}

    {/* <App /> */}
  </React.StrictMode>
)
