const Button = ({ children, onClick, variant = "primary" }) => {
  const variants = {
    primary:
      "bg-[linear-gradient(98deg,_#504ffd_12%,_#40c3fb_91%)] text-white h-12 hover:-translate-y-2",
    secondary:
      "bg-white border-2 border-[#e5e5e5] text-black h-12 hover:-translate-y-2 hover:text-[#4285f4] hover:border-[#4285f4]",
    start: "bg-[#161616] text-white text-sm h-10 hover:-translate-y-2",
  };

  return (
    <button
      className={`flex gap-2 justify-center items-center  w-full rounded-3xl transition-all text-sm font-bold ${variants[variant]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
