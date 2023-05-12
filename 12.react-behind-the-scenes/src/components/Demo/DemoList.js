import React, { useMemo } from "react";

import classes from "./DemoList.module.css";

const DemoList = (props) => {
  const { items } = props;

  const sortedList = useMemo(() => {
    console.log("items sorted");
    return items.sort((a, b) => a - b);
  }, [items]);
  console.log("DemoList Running");

  return (
    <div className={classes.list}>
      <ul>
        <h2>{props.title}</h2>
        {sortedList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
export default DemoList;
