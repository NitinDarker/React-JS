import {BrowserRouter, Routes, Route} from 'react-router-dom'


export default function App() {
    return (
        <>
            <a href='https://www.google.com'>go to google</a>
            <link to="https://www.google.com" />
        </>
    )
};

function Landing() {
    return <div>
        Welcome to Allen
    </div>
}

function Neet() {
    return <div>
        You are on Neet route
    </div>
}