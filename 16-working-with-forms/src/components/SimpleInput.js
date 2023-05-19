import { useState } from "react";

import useInput from "../hooks/usd-input";

const SimpleInput = (props) => {
  // const {
  //   value: nameValue,
  //   hasError: nameInputHasError,
  //   valueChangeHandler: nameInputChangeHandler,
  //   inputBlurHandler: nameBlurHandler,
  // } = useInput((value) => value.trim() !== "");

  const [emailValue, setEmailValue] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);

  const emailValid = emailValue.includes("@");
  const emailInputIsValid = !emailValid && emailTouched;

  let formValid = false;
  if (nameValid && emailValid) {
    formValid = true;
  }

  const nameInputChangeHandler = (e) => {
    setNameValue(e.target.value);
  };
  const nameBlurHandler = (e) => {
    setNameTouched(true);
  };
  const emailInputChangeHandler = (e) => {
    setEmailValue(e.target.value);
  };
  const emailBlurHandler = (e) => {
    setEmailTouched(true);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    setNameTouched(true);

    if (!nameValid) return;
    if (!emailValid) return;

    setNameValue("");
    setNameTouched(false);

    setEmailValue("");
    setEmailTouched(false);
  };

  const nameInputClasses = nameInputIsValid
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailInputIsValid
    ? "form-control invalid"
    : "form-control";
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          value={nameValue}
          onBlur={nameBlurHandler}
        />
        {nameInputIsValid && <p className="error-text">Do not Empty</p>}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Your Name</label>
        <input
          type="email"
          id="email"
          onChange={emailInputChangeHandler}
          value={emailValue}
          onBlur={emailBlurHandler}
        />
        {emailInputIsValid && (
          <p className="error-text">Please enter a valid email</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
