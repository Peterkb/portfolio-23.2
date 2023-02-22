import { useGLTF } from "@react-three/drei";
import { useRef } from "react";

export default function Model({modelPath, position=[0, 0, 0]})
{
    const model = useGLTF(modelPath)

    return <>
        <primitive
            onClick={(e) => {console.log('object');}}
            object={model.scene}
            rotation-x={Math.PI * 0.5}
            scale={0.2}
            position={position}
        />
    </>
}