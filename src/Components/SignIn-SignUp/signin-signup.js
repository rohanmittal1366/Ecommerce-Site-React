import React from "react";
import SignIn from "./signIn/SignIn";
import SignUp from "./signUp/SignUp";
import "./signin-signup.scss";

const signinsignup = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default signinsignup;
