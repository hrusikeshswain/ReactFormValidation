import React, { useState } from "react";

const useInput = (validateValue) =>{
    const [value, setValue] = useState("");
    const [isTouched, setIsTouched] = useState(false);
    const enteredValueIsValid = validateValue(value);

    const valueChangeHandler = (event) => {
        console.log(event.target.value);
        setValue(event.target.value);
      };

      const valueBlurHandler = () =>{
        setIsTouched(true);
     }

     const reset =()=>{
        setValue('');
        setIsTouched(false);
     }

    return{
        value,
        isTouched,
        enteredValueIsValid,
        valueChangeHandler,
        valueBlurHandler,
        reset
    }

}



export default useInput;