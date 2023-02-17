import Loader from "./components/Loader";
import Home from "./pages/Home";
import { useState } from "react";

export default function SiteHTML()
{
    const [ loading ] = useState(true)

    return <>
        { loading ? <Loader /> : null }
        
        <Home />
    </>
}