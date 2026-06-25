import Link from "next/link";

const Hint = ({ message, action }) => (
  <p className="mt-6 text-center text-sm">
    <span className="text-gray-700">{message}</span>&nbsp;
    <Link
      href={action.href}
      className="text-blue-500 hover:text-blue-700 transition-colors"
    >
      {action.text}
    </Link>
  </p>
);

export default Hint;
