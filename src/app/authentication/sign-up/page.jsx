"use client";
import { useState } from "react";
import Button from "../components/Button";
import Field from "../components/Field";
import getFullNameError from "./utils/getFullNameError";
import getEmailError from "./utils/getEmailError";
import getPasswordError from "./utils/getPasswordError";
import axios from "axios";
import ServerError from "./components/ServerError";
import RegisteredSuccess from "../components/RegisteredSuccess";
import { useRouter } from "next/navigation";
import Header from "../components/Header";
import Hint from "../components/Hint";

const SignUpPage = () => {
  const [fullName, setFullName] = useState("");
  const fullNameError = getFullNameError(fullName);

  const [email, setEmail] = useState("");
  const emailError = getEmailError(email);

  const [password, setPassword] = useState("");
  const passwordError = getPasswordError(password);

  const [isSubmitted, setIsSubmitted] = useState(false);

  const [serverError, setServerError] = useState();
  const [isRegistered, setIsRegistered] = useState(false);

  const router = useRouter();

  return (
    <>
      <form className="w-[440px] mx-auto">
        <Header
          title={"Create Your Account"}
          subTitle={"Join Career Mate AI and start your smart journey"}
        />

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

        <div>
          <Button
            onClick={async (event) => {
              event.preventDefault();
              setIsSubmitted(true);

              const invalid = [fullNameError, emailError, passwordError].some(
                (value) => !!value,
              );

              if (invalid) {
                return;
              }

              try {
                //throw new Error("register failed");
                await axios.post("http://localhost:8000/v1/auth/register", {
                  fullName,
                  email,
                  password,
                });
              } catch (err) {
                setServerError(err);
                console.error("register fail", err);
                return;
              }

              setIsRegistered(true);
              router.push("/dashboard");
            }}
          >
            Create Account
          </Button>{" "}
          <Hint
            message={"Already have an account"}
            action={{ href: "/authentication/sign-in", text: "Login" }}
          />
        </div>
      </form>
      {serverError && <ServerError status={serverError.response?.status} />}
      {isRegistered && <RegisteredSuccess />}
    </>
  );
};
export default SignUpPage;
