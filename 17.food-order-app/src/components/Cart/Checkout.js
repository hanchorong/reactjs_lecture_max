import React, { useRef } from "react";
import classes from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === "";
const isNotFiveCars = (value) => value.trim().length !== 5;

const Checkout = (props) => {
  const nameInput = useRef();
  const streetInput = useRef();
  const postalInput = useRef();
  const cityInput = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInput.current.value;
    const enteredStreet = streetInput.current.value;
    const enteredPostal = postalInput.current.value;
    const enteredCity = cityInput.current.value;

    const nameIsValid = !isEmpty(enteredName); //비어있지 않다면.
    const streetIsValid = !isEmpty(enteredStreet);
    const postalIsValid = isNotFiveCars(enteredPostal); //5자리숫자라면.
    const cityIsValid = !isEmpty(enteredCity);

    const inputAllValid =
      nameIsValid && streetIsValid && postalIsValid && cityIsValid;

    if (inputAllValid) {
      //submit the cart data
    }
  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={classes.control}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInput} />
      </div>
      <div className={classes.control}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ef={streetInput} />
      </div>
      <div className={classes.control}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ef={postalInput} />
      </div>
      <div className={classes.control}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ef={cityInput} />
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
