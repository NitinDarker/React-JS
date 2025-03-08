import React from "react";
import { useState } from "react";

const Counter = (props) => {
  const [count, setCount] = useState(props.value);
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>
          Click me to increment
        </button>
        <button onClick={() => setCount(count - 1)}>
          Click me to decrement
        </button>
      </div>
    </>
  );
};

export default Counter;
