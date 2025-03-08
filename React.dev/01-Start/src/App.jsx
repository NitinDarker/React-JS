import { useState } from "react";
import "./App.css";

// Built in react jsx component from vite
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="card">
        <h3>Counter</h3>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
