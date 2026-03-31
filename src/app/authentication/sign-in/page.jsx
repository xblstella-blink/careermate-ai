"use client";
import axios from "axios";
import Button from "../components/Button";
import Field from "../components/Field";
import Header from "../components/Header";
import Hint from "../components/Hint";
import useForm from "../hooks/useForm";
import getEmailError from "./utils/getEmailError";
import getPasswordError from "./utils/getPasswordError";
import { useState } from "react";
import { useRouter } from "next/navigation";
import ServerError from "./components/ServerError";

const SignInPage = () => {
  const { onChange, data, onSubmit, isSubmitted, error } = useForm({
    fields: ["email", "password"],
    validation: {
      email: getEmailError,
      password: getPasswordError,
    },
  });

  const [serverError, setServerError] = useState(false);

  const router = useRouter();

  return (
    <>
      <form className="w-[440px] mx-auto">
        <Header
          title={"Welcome Back"}
          subTitle={"Log in to continue your AI journey"}
        />
        {serverError && <ServerError status={serverError.response?.status} />}
        <Field
          value={data.email}
          label="Email"
          placeholder="Email"
          onChange={onChange("email")}
          error={isSubmitted && error.email}
          //type="email"
          //value={email}
          //onChange={(event) => setEmail(event.target.value)}
          //error={isSubmitted && emailError}
        />
        <Field
          value={data.password}
          label="Password"
          placeholder="Password"
          type="password"
          onChange={onChange("password")}
          error={isSubmitted && error.password}
          //value={password}
          //onChange={(event) => setPassword(event.target.value)}
          //error={isSubmitted && passwordError}
        />
        <div>
          <Button
            onClick={(event) => {
              onSubmit(async () => {
                try {
                  await axios.post("http://localhost:8000/v1/auth/login", data);
                } catch (error) {
                  setServerError(error);
                  return;
                }
                router.push("/dashboard");
              }, event);
            }}
          >
            Login
          </Button>
          <Hint
            message="Don't have an account?"
            action={{ href: "/authentication/sign-up", text: "Sign up" }}
          />
        </div>
      </form>
    </>
  );
};

export default SignInPage;
