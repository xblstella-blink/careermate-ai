import Link from "next/link";
import logo from "../Header/assets/logo@2x.png";
import Button from "../Button";
import Image from "next/image";

const HomeNav = () => (
  <div className="flex justify-between items-center px-12 py-6">
    <Image
      src={logo}
      alt="CareerMate AI"
      width={184}
      height={24}
      className="w-[184px] h-[24px] object-contain"
    />
    <div className="flex gap-8 text-sm">
      <Link href="#feature">Features</Link>
      <Link href="#demo">Demo</Link>
    </div>
    <div className="flex gap-4 items-center">
      <Link href="/authentication/sign-in" className="text-sm font-semibold">
        Sign In
      </Link>
      <div className="w-[122px] text-sm font-semibold">
        <Button variant="third">Start for Free</Button>
      </div>
    </div>
  </div>
);

export default HomeNav;
