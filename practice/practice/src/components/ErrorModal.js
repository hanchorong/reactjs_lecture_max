import React from "react";

import classes from "./ErrorModal.module.css";

import Card from "./Card";
import Button from "./Button";

const ErrorModal = (props) => {
  return (
    <div>
      <div className={classes.backdrop}>
        <Card className={classes.modal}>
          <div className={classes.header}>
            <h2>{props.title}</h2>
          </div>
          <div className={classes.content}>{props.content}</div>
          <footer>
            <Button onClick={props.onConfirm}>Okay</Button>
          </footer>
        </Card>
      </div>
    </div>
  );
};

export default ErrorModal;
