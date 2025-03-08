import React from "react";
import { useState } from "react";

const InputName = (props) => {
  const [name, setName] = useState(props.value);
  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
        />
        <p>{name}</p>
        <a href="#">{name}</a>
      </div>
    </>
  );
};

export default InputName;
