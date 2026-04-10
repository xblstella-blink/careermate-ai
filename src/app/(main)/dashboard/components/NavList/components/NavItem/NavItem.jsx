import Link from "next/link";
import { twMerge } from "tailwind-merge";

const NavItem = ({ href, icon, label, isActive }) => (
  <Link
    href={href}
    className={twMerge(
      "flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium",
      isActive ? "text-blue-500 bg-gray-100" : "text-gray-600 hover:bg-gray-50",
    )}
  >
    {icon}
    {label}
  </Link>
);

export default NavItem;
