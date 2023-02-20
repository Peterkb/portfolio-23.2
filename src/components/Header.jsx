import useSite from '../stores/useSite'

export default function Header()
{
    const state = useSite((state) => state.phase)

    console.log(state);
    return <>
        <p>1</p>
        
    </>
}