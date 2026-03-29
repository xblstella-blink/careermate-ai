"use client";
import Button from "../components/Button";
import Field from "../components/Field";
import Header from "../components/Header";
import Hint from "../components/Hint";

const SignInPage = () => (
  <>
    <form className="w-[440px] mx-auto">
      <Header
        title={"Welcome Back"}
        subTitle={"Log in to continue your AI journey"}
      />
      <Field
        label="Email"
        placeholder="Email"
        //type="email"
        //value={email}
        //onChange={(event) => setEmail(event.target.value)}
        //error={isSubmitted && emailError}
      />
      <Field
        label="Password"
        placeholder="Password"
        type="password"
        //value={password}
        //onChange={(event) => setPassword(event.target.value)}
        //error={isSubmitted && passwordError}
      />
      <div>
        <Button>Login</Button>
        <Hint
          message="Don't have an account?"
          action={{ href: "/authentication/sign-up", text: "Sign up" }}
        />
      </div>
    </form>
  </>
);

export default SignInPage;
