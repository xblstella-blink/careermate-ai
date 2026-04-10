import logo from "./assets/logo@2x.png";
import Image from "next/image";

const Header = ({ ghost = false, authentication }) => (
  <div
    className={`bg-white flex justify-between items-center ${ghost ? "fixed p-6 left-0 right-0 top-0" : "p-4 border-b border-gray-200"}`}
  >
    <Image src={logo} alt="CareerMate AI" width={184} height={24} />
    {authentication && (
      <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center ">
        {authentication.name?.[0].toUpperCase()}
      </div>
    )}
  </div>
);

export default Header;
