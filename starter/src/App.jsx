import { useState } from "react";
import Clicker from "./Clicker.jsx";

export default function App() 
{

    const [ hasClicker, setHasClicker ] = useState(true);

    const toggleClickerClick = () => {
        setHasClicker(!hasClicker);
    }

    return (
        <>
            <h1>My Application</h1>
            <button onClick={toggleClickerClick}>{ hasClicker ? "Hide" : "Show" } Clicker</button>
            { hasClicker && <Clicker /> }
        </>
    )
}