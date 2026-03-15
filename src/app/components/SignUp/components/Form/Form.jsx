"use client";
import { useState } from "react";
import Button from "./components/Button";
import Field from "./components/Field";
import LoginLink from "./components/LoginLink";
import fullNameError from "./utils/getFullNameError";
import emailError from "./utils/getEmailError";
import passwordError from "./utils/getPasseordError";
import getFullNameError from "./utils/getFullNameError";
import getEmailError from "./utils/getEmailError";
import getPasswordError from "./utils/getPasseordError";

const Form = () => {
  const [fullName, setFullName] = useState("");
  const fullNameError = getFullNameError(fullName);

  const [email, setEmail] = useState("");
  const emailError = getEmailError(email);

  const [password, setPassword] = useState("");
  const passwordError = getPasswordError(password);

  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <form className="px-[125px] my-auto">
      <div className="mb-16">
        <h1 className="font-black text-[40px] ">Create Your Account</h1>
        <p className="text-sm text-gray-700 mt-3">
          Join CareerMate AI and start your smart career journey
        </p>
      </div>
      <div className="space-y-6">
        <Field
          label="Full Name"
          placeholder="Your full name"
          type="text"
          value={fullName}
          onChange={(event) => setFullName(event.target.value)}
          error={isSubmitted && fullNameError}
        />
        <Field
          label="Email"
          placeholder="Your email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          error={isSubmitted && emailError}
        />
        <Field
          label="Password"
          placeholder="Create a password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          error={isSubmitted && passwordError}
        />
      </div>
      <div className="mt-10 ">
        <Button
          onClick={(event) => {
            event.preventDefault();
            setIsSubmitted(true);
            console.log({ fullName, email, password });
            console.log({ fullNameError });
          }}
        >
          Create Account
        </Button>
      </div>
      <div>
        <LoginLink />
      </div>
    </form>
  );
};
export default Form;
