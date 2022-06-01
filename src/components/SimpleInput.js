import React, { useState } from "react";
import useInput from "../hooks/user-input";


const SimpleInput = (props) => {

  const { value:nameValue,
    isTouched:isNameTouched,
    enteredValueIsValid:enteredNameIsValid,
    valueChangeHandler:nameChangeHandler,
    valueBlurHandler:nameBlurHandler,
    reset:resetName} = useInput(value => value.trim() !== '');

  
    const emailValidator = (emailValue) =>{
      const pattern = /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g;
      return emailValue.trim() !== '' && pattern.test(emailValue.trim());
    }

    const { value:emailValue,
      isTouched:isEmailTouched,
      enteredValueIsValid:enteredEmailValueIsValid,
      valueChangeHandler:emailChangeHandler,
      valueBlurHandler:emailBlurHandler,
      reset:resetEmail} = useInput(emailValidator);

  

  let formIsValid = false;
  if(enteredNameIsValid && enteredEmailValueIsValid){
    formIsValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();
  
    if(!enteredNameIsValid || !enteredEmailValueIsValid){
      return;
    }
   
    resetName();
    resetEmail();
  };



  const nameInputIsValid = (!enteredNameIsValid && isNameTouched)
    ? "form-control invalid"
    : "form-control";

    const emailInputIsValid = (!enteredEmailValueIsValid && isEmailTouched)
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputIsValid}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          placeholder="Name"
          onBlur={nameBlurHandler}
          value={nameValue}
          onChange={nameChangeHandler}
        />
        {!enteredNameIsValid && isNameTouched && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </div>
      <div className={emailInputIsValid}>
        <label htmlFor="email">Your Email</label>
        <input
          type="text"
          id="email"
          size="30"
          placeholder="Email"
          onBlur={emailBlurHandler}
          value={emailValue}
          onChange={emailChangeHandler}
        />
        {!enteredEmailValueIsValid && isEmailTouched && (
          <p className="error-text">Email must not be empty.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled ={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
