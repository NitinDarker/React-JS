// Sharing data between components

import { useState } from "react";

/*
To make both MyButton components display the same count and update together,
you need to move the state from the individual buttons “upwards” to the closest component containing all of them.
*/

export default function StateUp() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h3>Buttons that share data with each other</h3>
      <MyButton count={count} setCount={setCount} />
      <MyButton count={count} setCount={setCount} />
      <MyButton count={count} setCount={setCount} />
    </>
  );
}

function MyButton(props) {
  return (
    <>
      <button onClick={() => props.setCount(props.count + 1)}>
        Count: {props.count}
      </button>
    </>
  );
}

/* 
The new count value is passed as a prop to each button, so they all show the new value. 
This is called “lifting state up”. By moving state up, you’ve shared it between components.
*/
