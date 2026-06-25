import Image from "next/image";
import logo from "../Header/assets/logo@2x.png";

const AppShell = ({ sidebar, topRight, children }) => (
  <div className="flex h-screen">
    <aside className="w-52 shrink-0 flex flex-col border-r border-gray-100">
      <div className="p-6">
        <Image src={logo} alt="CareerMate AI" width={140} height={18} />
      </div>
      <div className="flex-1 flex flex-col px-4 overflow-y-auto">
        {sidebar}
      </div>
    </aside>

    <div className="flex-1 relative flex flex-col overflow-hidden">
      {topRight && (
        <div className="absolute top-4 right-4 z-10">
          {topRight}
        </div>
      )}
      {children}
    </div>
  </div>
);

export default AppShell;
