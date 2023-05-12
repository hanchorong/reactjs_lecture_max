import React, { useState, useCallback, useMemo } from "react";

import "./App.css";
import Button from "./components/UI/Button/Button";
// import DemoOutput from "./components/Demo/DemoOutput";
import DemoList from "./components/Demo/DemoList";

function App() {
  const [listTitle, setListTitle] = useState("My List");

  const changeTitleHandler = useCallback(() => {
    setListTitle("New Title");
  }, []);

  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);

  return (
    <div className="app">
      <DemoList title={listTitle} items={listItems} />
      <Button onClick={changeTitleHandler}>Change List Title</Button>
    </div>
  );
  // const [text, setText] = useState(false);
  // const [allowToggle, setAllowToggle] = useState(false);

  // console.log("app running");

  // const toggleShowTextHandler = useCallback(() => {
  //   if (allowToggle) {
  //     setText((prevShowText) => !prevShowText);
  //   }
  // }, [allowToggle]);

  // const allowToggleHandler = () => {
  //   setAllowToggle(true);
  // };
  // return (
  //   <div className="app">
  //     <h1>Hi there!</h1>
  //     <DemoOutput show={text} />
  //     <Button onClick={allowToggleHandler}>allow toggling</Button>
  //     <Button onClick={toggleShowTextHandler}>show text</Button>
  //   </div>
  // );
}

export default App;
