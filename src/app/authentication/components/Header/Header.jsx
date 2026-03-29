const Header = ({ title, subTitle }) => (
  <div className="mb-14 mt-16">
    <h1 className="font-black text-[40px] ">{title}</h1>
    <p className="text-sm text-gray-700 mt-3">{subTitle}</p>
  </div>
);

export default Header;
