import React, { useState } from "react";

import Card from "./Card";
import Button from "./Button";

import classes from "./AddUser.module.css";
import ErrorModal from "./ErrorModal";

const AddUser = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();

  const AddUserHandler = (e) => {
    e.preventDefault();
    if (username.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid input",
      });
      return;
    }
    if (+age < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age",
      });
      return;
    }

    props.onAdd(username, age);

    setUsername("");
    setAge("");
  };
  const onChangeName = (e) => {
    setUsername(e.target.value);
  };
  const onChangeAge = (e) => {
    setAge(e.target.value);
  };
  const modalHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          content={error.message}
          onConfirm={modalHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={AddUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            onChange={onChangeName}
            value={username}
          ></input>
          <label htmlFor="age">Age (Year)</label>
          <input
            id="age"
            type="number"
            onChange={onChangeAge}
            value={age}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};
export default AddUser;
