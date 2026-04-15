"use client";
import { useState } from "react";
import Button from "../components/Button";
import Field from "../components/Field";
import getFullNameError from "./utils/getFullNameError";
import getEmailError from "./utils/getEmailError";
import getPasswordError from "./utils/getPasswordError";
import ServerError from "./components/ServerError";
import RegisteredSuccess from "../components/RegisteredSuccess";
import { useRouter } from "next/navigation";
import Header from "../components/Header";
import Hint from "../components/Hint";
import useForm from "../hooks/useForm";
import auth from "@/app/apis/auth";
import { email, z } from "zod";

const schema = z.object({
  fullName: z.string().min(1, "Name is required"),
  email: z.string().min(1, "Email is required").email("Invalid email format"),
  password: z
    .string()
    .min(8, "At least 8 characters")
    .regex(/[a-zA-Z]/, "Password must contain at least one letter")
    .regex(/[0-9]/, "Password must contain at lease one number"),
});

const SignUpPage = () => {
  const { onChange, data, onSubmit, isSubmitted, error } = useForm({
    fields: ["fullName", "email", "password"],
    schema,
  });

  const [serverError, setServerError] = useState();

  const router = useRouter();

  return (
    <>
      <form className="w-[440px] mx-auto">
        <Header
          title="Create Your Account"
          subTitle="Join Career Mate AI and start your smart journey"
        />

        <Field
          label="Full Name"
          placeholder="Your full name"
          type="text"
          value={data.fullName}
          onChange={onChange("fullName")}
          error={isSubmitted && error.fullName}
        />
        <Field
          label="Email"
          placeholder="Your email"
          type="email"
          value={data.email}
          onChange={onChange("email")}
          error={isSubmitted && error.email}
        />
        <Field
          label="Password"
          placeholder="Create a password"
          type="password"
          value={data.password}
          onChange={onChange("password")}
          error={isSubmitted && error.password}
        />

        <div>
          <Button
            onClick={onSubmit(async () => {
              try {
                const response = await auth.post("/auth/register", data);
                const { accessToken } = response.data.data;
                localStorage.setItem("token", accessToken);
                router.push("/dashboard");
              } catch (err) {
                setServerError(err);

                return;
              }
            })}
          >
            Create Account
          </Button>{" "}
          <Hint
            message="Already have an account"
            action={{ href: "/authentication/sign-in", text: "Login" }}
          />
        </div>
      </form>
      {serverError && (
        <ServerError
          status={serverError.response?.status}
          onClose={() => setServerError(null)}
        />
      )}
    </>
  );
};

export default SignUpPage;
