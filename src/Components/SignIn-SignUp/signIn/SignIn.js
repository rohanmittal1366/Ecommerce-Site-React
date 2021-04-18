import React, { useState } from "react";
import CustomButton from "../../custom-button/CustomButton";
import FormInput from "../form-input/FormInput";
import "./signIn.scss";

const SignIn = () => {
  const [value, setValue] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(value, pass);
    const state = {
      email: value,
      password: pass,
    };
  };
  return (
    <div className="signIn">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          value={value}
          label="Email"
          required
          onChange={(event) => setValue(event.target.value)}
        />

        <FormInput
          name="password"
          type="password"
          value={pass}
          label="Password"
          required
          onChange={(event) => setPass(event.target.value)}
        />
        <CustomButton type="submit">SignIn</CustomButton>
      </form>
    </div>
  );
};

export default SignIn;