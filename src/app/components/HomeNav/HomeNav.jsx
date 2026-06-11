import Link from "next/link";
import logo from "../Header/assets/logo@2x.png";
import Button from "../Button";
import Image from "next/image";

const HomeNav = () => {
  const linkClass = "hover:text-[#4285f4] transition-colors";

  return (
    <div className="flex justify-between items-center px-8 py-6 mx-30 text-sm">
      <Image
        src={logo}
        alt="CareerMate AI"
        width={184}
        height={24}
        className="w-[184px] h-[24px] object-contain"
      />
      <div className="flex gap-8 {linkClass}">
        <Link href="#feature" className={linkClass}>
          Features
        </Link>
        <Link href="#demo" className={linkClass}>
          Demo
        </Link>
      </div>
      <div className="flex gap-6 items-center font-semibold">
        <Link href="/authentication/sign-in" className={linkClass}>
          Sign In
        </Link>
        <div className="w-[122px]">
          <Button variant="start">Start for Free</Button>
        </div>
      </div>
    </div>
  );
};

export default HomeNav;
