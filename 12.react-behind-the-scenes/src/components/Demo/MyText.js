import React from "react";

const MyText = (props) => {
  console.log("MyText running");
  return <p>{props.children}</p>;
};
export default MyText;
