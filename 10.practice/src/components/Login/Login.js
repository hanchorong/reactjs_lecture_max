import React, { useState, useReducer, useEffect, useContext } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import AuthContext from "../../store/auth-context";
import Input from "../Input/Input";

const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.includes("@") };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.includes("@") };
  }
  return { value: "", isValid: false };
};

const passwordReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.trim().length > 6 };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }
  return { value: "", isValid: false };
};

const Login = () => {
  const [submitValid, setSubmitValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  });

  const authCtx = useContext(AuthContext);

  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = emailState;

  useEffect(() => {
    const inputValid = setTimeout(() => {
      setSubmitValid(emailIsValid && passwordIsValid);
    }, 500);
    return () => {
      clearTimeout(inputValid);
    };
  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = (e) => {
    dispatchEmail({ type: "USER_INPUT", val: e.target.value });
  };
  const validateEmailHandler = () => {
    dispatchEmail({ type: "INPUT_BLUR" });
  };
  const passwordChangeHandler = (e) => {
    dispatchPassword({ type: "USER_INPUT", val: e.target.value });
  };
  const validatePasswordHandler = () => {
    dispatchPassword({ type: "INPUT_BLUR" });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    authCtx.onLogin(emailState.value, passwordState.value);
    console.log(authCtx);
  };
  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          id="email"
          label="E-Mail"
          type="email"
          isValid={emailState.isValid}
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        <Input
          id="password"
          label="Password"
          type="password"
          isValid={passwordState.isValid}
          value={passwordState.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!submitValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
