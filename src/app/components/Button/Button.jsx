const Button = ({ children, onClick, variant = "primary" }) => {
  const variants = {
    primary:
      "bg-[linear-gradient(98deg,_#504ffd_12%,_#40c3fb_91%)] text-white ",
    secondary: "bg-white border border-black text-black",
    third: "bg-[#161616] text-white text-sm",
  };

  return (
    <button
      className={`flex gap-2 justify-center items-center h-12 w-full rounded-3xl hover:brightness-90 transition-all text-sm font-bold ${variants[variant]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
