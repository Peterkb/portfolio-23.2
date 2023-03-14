import * as THREE from 'three'
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function Model({modelPath, position=[0, 0, 0], link='#', rotation=[Math.PI * 0.5, 0, 0]})
{
    const model = useGLTF(modelPath)
    let icon = useRef()

    const TextMattYellow = new THREE.MeshStandardMaterial({ color: '#F6C207', metalness: 0, roughness: 0 })

    const iconHover = (e) =>
    {
        document.body.style.cursor = 'pointer'
        // console.log(icon.current.material);
    }

    const iconUnHover = (e) =>
    {
        document.body.style.cursor = 'default'
    }

    useFrame((state, delta) => {        
        // icon.current.position.x -= delta * 0.1
    })

    return <>
        <primitive
            ref={icon}
            onClick={ (e) =>
            {
                window.open(link, '_blank')
            }}
            onPointerEnter={ iconHover }
            onPointerLeave={ iconUnHover }

            onmouseenter
            object={model.scene}
            rotation={rotation}
            scale={0.2}
            position={position}
        />
    </>
}