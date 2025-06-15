import { useState } from "react";
import "./App.css";

/* 
If you render the same component multiple times, each will get its own state. 
Click each button separately: 
Notice how each button “remembers” its own count state and doesn’t affect other buttons.
*/

// Implementing two separate counters with their own memory
export default function Counters() {
    return (
        <>
            <h3>Separate Counters</h3>
            <MyCounter />
            <MyCounter />
        </>
    )
}

function MyCounter() {
    const [count, setCount] = useState(0);

    return (
        <button onClick={() => setCount((count) => count + 1)}>
            Counter: {count}
        </button>
    )
}