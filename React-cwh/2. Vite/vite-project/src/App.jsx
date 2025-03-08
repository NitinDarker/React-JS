import { useState } from "react";
import React from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./Components/counter";
import inputName from "./Components/inputName";
import InputName from "./Components/inputName";

function App() {
  const [count, setCount] = useState(69);
  const [name, setName] = useState("Superman");

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Nitin Sharma</h1>
      <div className="things" style={{ display: "flex", gap: "100px" }}>
        <Counter value={count} />
        <InputName value={name}/>
      </div>
    </>
  );
}

export default App;
