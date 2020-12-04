import React from "react";

import SignIn from "../../Components/Sign in/sign-in.component";
import SignUp from "../../Components/Sign up/sign-up.component";

import "./sign-in and sign-up.styles.scss";

const SignInAndSignUp = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInAndSignUp;
