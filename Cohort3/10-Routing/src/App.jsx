import {BrowserRouter, Routes, Route} from 'react-router-dom'

export default function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Landing />}/>
                    <Route path="/neet" element={<Neet />}/>
                </Routes>
            </BrowserRouter>
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