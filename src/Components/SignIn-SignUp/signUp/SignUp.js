import React, { useState } from "react";
import { auth, createUserProfileDocument } from "../../../Firebase/Firebase";
import CustomButton from "../../custom-button/CustomButton";
import FormInput from "../form-input/FormInput";
import "./signUp.scss";

function SignUp() {
  //   const [state, setstate] = useState({
  //   displayName: "",
  //   email: "",
  //   Password: "",
  //   confirmPassword: "",
  //   });

  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [Password, setPassword] = useState("");
  const [Email, setEmail] = useState("");
  const [displayName, setdisplayName] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (Password !== ConfirmPassword) {
      alert("Password don't match");
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        Email,
        Password
      );
      // console.log(user);
      await createUserProfileDocument(user, { displayName });
    } catch (error) {
      console.error(error);
    }
    setdisplayName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="sign-up">
      <div className="title">I do not have a account</div>
      <span>Sign up with your email and passsword</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={(event) => setdisplayName(event.target.value)}
          label="Display Name"
          required
        />

        <FormInput
          type="text"
          name="email"
          value={Email}
          onChange={(event) => setEmail(event.target.value)}
          label="Email"
          required
        />

        <FormInput
          type="password"
          name="Password"
          value={Password}
          onChange={(event) => setPassword(event.target.value)}
          label="Password"
          required
        />

        <FormInput
          type="password"
          name="confirmPassword"
          value={ConfirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
          label="Confirm Password"
          required
        />
        <CustomButton type="submit" onClick="handleSubmit">
          SIGN UP
        </CustomButton>
      </form>
    </div>
  );
}

export default SignUp;
