import { useGLTF } from "@react-three/drei";

export function GitLogo()
{
    const gitlogo = useGLTF('./models/github-logo.glb')

    return <>
        <primitive
            object={gitlogo.scene}
            rotation-x={Math.PI * 0.5}
            scale={0.3}
            position={[4, -2, 0]}
        />
    </>
}

export function LinkedInLogo()
{
    const linklogo = useGLTF('./models/linkedIn-logo.glb')

    return <>
        <primitive
            object={linklogo.scene}
            rotation-x={Math.PI * 0.5}
            scale={0.3}
            position={[5, -2, 0]}
        />
    </>
}