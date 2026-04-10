import Header from "../components/Header";

const MainLayout = ({ children }) => (
  <>
    <Header authentication={{ name: "Alice" }} />
    {children}
  </>
);

export default MainLayout;
