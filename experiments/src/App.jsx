import { useState, memo } from "react";

function App() {
  return (
    <>
      <HeaderWithButton></HeaderWithButton>
      <Header title={"I am a static component"}></Header>
    </>
  );
}

function HeaderWithButton() {
  const [myTitle, changeTitle] = useState("Nitin");

  function titleFun() {
    changeTitle(Math.random());
  }

  return (
    <>
      <button onClick={titleFun}>Click me to change title</button>
      <Header title={"Title of this page is: " + myTitle}>Title of this page is:</Header>
    </>
  );
}

function Header({ title }) {
  return <div>{title}</div>;
}

export default App;