import React, { useRef, useState } from "react";

import classes from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === "";
const isFiveChars = (value) => value.trim().length === 5;

const Checkout = (props) => {
  const [formInputValidate, setFormInputValidate] = useState({
    name: true,
    street: true,
    postal: true,
    city: true,
  });

  const nameRef = useRef();
  const streetRef = useRef();
  const postalRef = useRef();
  const cityRef = useRef();

  const conformSubmitHandler = (e) => {
    e.preventDefault();

    const nameValue = nameRef.current.value;
    const streetValue = streetRef.current.value;
    const postalValue = postalRef.current.value;
    const cityValue = cityRef.current.value;

    const nameValid = !isEmpty(nameValue);
    const streetValid = !isEmpty(streetValue);
    const postalValid = isFiveChars(postalValue);
    const cityValid = !isEmpty(cityValue);

    setFormInputValidate({
      name: nameValid,
      street: streetValid,
      postal: postalValid,
      city: cityValid,
    });

    const inputAllValid = nameValid && streetValid && postalValid && cityValid;

    if (!inputAllValid) {
      return;
    }

    props.onConfirm({
      name: nameValue,
      street: streetValue,
      postal: postalValue,
      city: cityValue,
    });
  };

  const nameClasses = `${classes.control} ${
    formInputValidate.name ? "" : classes.invalid
  }`;
  const streetClasses = `${classes.control} ${
    formInputValidate.street ? "" : classes.invalid
  }`;
  const postalClasses = `${classes.control} ${
    formInputValidate.postal ? "" : classes.invalid
  }`;
  const cityClasses = `${classes.control} ${
    formInputValidate.city ? "" : classes.invalid
  }`;

  return (
    <form className={classes.form} onSubmit={conformSubmitHandler}>
      <div className={nameClasses}>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" ref={nameRef} />
        {!formInputValidate.name && (
          <p className={classes.error}>Please enter a valid name!</p>
        )}
      </div>
      <div className={streetClasses}>
        <label htmlFor="street">Street</label>
        <input id="street" type="text" ref={streetRef} />
        {!formInputValidate.street && (
          <p className={classes.error}>Please enter a valid name!</p>
        )}
      </div>
      <div className={postalClasses}>
        <label htmlFor="postal">Postal Code</label>
        <input id="postal" type="text" ref={postalRef} />
        {!formInputValidate.postal && (
          <p className={classes.error}>
            Please enter a valid postal code(only 5 characters)!
          </p>
        )}
      </div>
      <div className={cityClasses}>
        <label htmlFor="city">City</label>
        <input id="city" type="text" ref={cityRef} />
        {!formInputValidate.name && (
          <p className={classes.error}>Please enter a valid city!</p>
        )}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onClose}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};
export default Checkout;
