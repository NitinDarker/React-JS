import { useState } from 'react'
import './App.css'
import Clock from './components/Clock.jsx'

export default function App() {
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    setInterval(() => {
        setTime(new Date().toLocaleTimeString())
    }, 1000);
    
    let color = "blue";
    return (
        <>
            <Clock color={color} time={time}/>
        </>
    )
}