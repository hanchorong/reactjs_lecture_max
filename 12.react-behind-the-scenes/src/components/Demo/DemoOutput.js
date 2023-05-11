import React from "react";

import MyText from "./MyText";

const DemoOutput = (props) => {
  console.log("DemoOutput running", props.show);
  return <MyText>{props.show ? "this is new!" : ""}</MyText>;
};
export default React.memo(DemoOutput);
