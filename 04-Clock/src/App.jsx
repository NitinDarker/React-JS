import { useState } from 'react'
import Clock from './components/Clock.jsx'
import './App.css'

export default function App() {
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    let [color, setColor] = useState('white');

    const iid = setInterval(() => {
        setTime(new Date().toLocaleTimeString())
    }, 1000);

    const handleChange = (event) => {
        setColor(event.target.value);
    };

    return (
        <>
            <label htmlFor="colors">Pick a color: </label>
            <select id="colors" onChange={handleChange}>
                <option value="white">White</option>
                <option value="red">Red</option>
                <option value="blue">Blue</option>
                <option value="green">Green</option>
                <option value="yellow">Yellow</option>
                <option value="pink">Pink</option>
            </select>
            <Clock color={color} time={time}/>
            {/* <button onClick={onClickHandler}>Stop</button> */}
        </>
    )
}