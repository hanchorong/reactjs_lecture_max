import React, { useState, useCallback } from "react";

import "./App.css";
import Button from "./components/UI/Button/Button";
import DemoOutput from "./components/Demo/DemoOutput";

function App() {
  const [text, setText] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  console.log("app running");

  const toggleShowTextHandler = useCallback(() => {
    if (allowToggle) {
      setText((prevShowText) => !prevShowText);
    }
  }, [allowToggle]);

  const allowToggleHandler = () => {
    setAllowToggle(true);
  };
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={text} />
      <Button onClick={allowToggleHandler}>allow toggling</Button>
      <Button onClick={toggleShowTextHandler}>show text</Button>
    </div>
  );
}

export default App;
