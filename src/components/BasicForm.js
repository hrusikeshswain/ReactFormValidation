import React, { useState } from "react";

const BasicForm = (props) => {
  const [fname, setfName] = useState("");
  const [fnameTouched, setfNameTouched] = useState(false);
  const [lname, setlName] = useState("");
  const [lnameTouched, setlNameTouched] = useState(false);
  const [email, setEmail] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);

  const fnameIsvalid = fname.trim() !== "";
  const lnameIsvalid = lname.trim() !== "";
  const pattern = /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g;
  const emailIsvalid = email.trim() !== "" && pattern.test(email.trim());

  let formIsValid = false;
  if (fnameIsvalid && lnameIsvalid && emailIsvalid) {
    formIsValid = true;
  }

  // fname Handlers
  const fnameChangeHandler = (event) => {
    setfName(event.target.value);
  };
  const fnameBlurHandler = () => {
    setfNameTouched(true);
  };

//lname Handlers
const lnameChangeHandler = (event) => {
  setlName(event.target.value);
};
const lnameBlurHandler = () => {
  setlNameTouched(true);
};

//email Handlers
const emailChangeHandler = (event) => {
  setEmail(event.target.value);
};
const emailBlurHandler = () => {
  setEmailTouched(true);
};

 const submitHandler = (event) => {
    event.preventDefault();
    if ((!fnameIsvalid && fnameTouched) || (!lnameIsvalid && lnameTouched) || (!emailIsvalid && emailTouched)) {
      return;
    }
    //reset fname
    setfNameTouched(false);
    setfName("");

    //reset lname
    setlNameTouched(false);
    setlName("");

    //reset email
    setEmailTouched(false);
    setEmail("");
  };

  // console.log(fnameIsvalid);
  // console.log(fnameTouched);

  const validationStyleSheetFname =
    fnameTouched && !fnameIsvalid
      ? "form-control invalid"
      : " form-control";

  const validationStyleSheetLname =
    lnameTouched && !lnameIsvalid
      ? "form-control invalid"
      : " form-control";

  const validationStyleSheetEmail =
  emailTouched && !emailIsvalid
    ? "form-control invalid"
    : " form-control";    

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={validationStyleSheetFname}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            placeholder="first name"
            value={fname}
            onChange={fnameChangeHandler}
            onBlur={fnameBlurHandler}
          />
          {!fnameIsvalid &&  fnameTouched &&<p className="error-text">First name is invalid</p>}
        </div>
        <div className={validationStyleSheetLname}>
          <label htmlFor="name">Last Name</label>
          <input type="text" 
                 id="name"  
                 placeholder="last name"
                 onChange={lnameChangeHandler}
                 onBlur={lnameBlurHandler}
                 value={lname} />
           {!lnameIsvalid &&  lnameTouched &&<p className="error-text">Last name is invalid</p>}
        </div>
      </div>
      <div className={validationStyleSheetEmail}>
        <label htmlFor="name">E-Mail Address</label>
        <input type="text" 
               id="name"   
               placeholder="email"
               onBlur={emailBlurHandler}
               value={email}
               onChange={emailChangeHandler}/>
        {!emailIsvalid &&  emailTouched &&<p className="error-text">Email is invalid</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
