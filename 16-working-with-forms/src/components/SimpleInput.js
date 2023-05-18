import { useState, useRef, useEffect } from "react";

const SimpleInput = (props) => {
  const nameRef = useRef();
  const [entered, setEntered] = useState("");
  const [enteredValid, setEnteredValid] = useState(false);
  const [nameTouched, setNameTouched] = useState(false);

  const nameInputChangeHandler = (e) => {
    setEntered(e.target.value);

    if (entered.trim() !== "") {
      setEnteredValid(true);
    }
  };

  const nameBlurHandler = (e) => {
    setNameTouched(true);

    if (entered.trim() === "") {
      setEnteredValid(false);
      return;
    }
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    setNameTouched(true);

    if (entered.trim() === "") {
      setEnteredValid(false);
      return;
    }
    setEnteredValid(true);
    console.log(entered);

    const enteredValue = nameRef.current.value;
    console.log(enteredValue);

    setEntered("");
  };

  const nameInputValid = !enteredValid && nameTouched; //false && true

  const nameInputClasses = nameInputValid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameRef}
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          value={entered}
          onBlur={nameBlurHandler}
        />
        {nameInputValid && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
