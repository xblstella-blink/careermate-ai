import ShowCase from "./components/ShowCase";

const AuthenticationLayout = ({ children }) => (
  <div className="flex *:flex-1 p-8 min-h-dvh  ">
    <div className="my-auto">{children}</div>
    <ShowCase />
  </div>
);

export default AuthenticationLayout;
