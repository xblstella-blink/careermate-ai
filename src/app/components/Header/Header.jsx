import logo from "./assets/logo@2x.png";
import Image from "next/image";

const Header = () => (
  <div className="fixed p-8 bg-white z-1  ">
    <Image src={logo} alt="CareerMate AI" width={184} height={24} />
  </div>
);
export default Header;
