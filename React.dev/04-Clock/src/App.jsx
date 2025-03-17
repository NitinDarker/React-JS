import { useState } from 'react'
import './App.css'
import Clock from './components/Clock.jsx'

export default function App() {
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    setInterval(() => {
        setTime(new Date().toLocaleTimeString())
    }, 1000);

    let [color, setColor] = useState('white');
    const handleChange = (event) => {
        setColor(event.target.value);
    };

    return (
        <>
            <label htmlFor="colors">Pick a color: </label>
            <select id="colors" value='white' onChange={handleChange}>
                <option value="white">White</option>
                <option value="red">Red</option>
                <option value="blue">Blue</option>
                <option value="green">Green</option>
                <option value="yellow">Yellow</option>
                <option value="pink">Pink</option>
            </select>
            <Clock color={color} time={time}/>
            <p></p>
        </>
    )

    
}