import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button/Button";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (e) => {
    e.preventDefault();
    if (userName.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name",
      });
      return;
    }

    if (+age < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age( > 0)",
      });
      return;
    }

    props.onAddUser(userName, age); //부모 함수에 전달.

    setUserName("");
    setAge("");
  };

  const usernameChangeHandler = (e) => {
    setUserName(e.target.value);
  };
  const ageChangeHandler = (e) => {
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
          message={error.message}
          onConfirm={modalHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            onChange={usernameChangeHandler}
            value={userName}
          />
          <label htmlFor="age">Age (Year)</label>
          <input
            id="age"
            type="number"
            onChange={ageChangeHandler}
            value={age}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};
export default AddUser;
