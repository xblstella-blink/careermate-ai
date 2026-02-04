import { ArrowUpRight } from "lucide-react";

const Card = ({ title, children }) => (
  <div className="rounded-3xl bg-white/50 border border-white p-6">
    <div className="flex gap-4">
      <div className="text-lg font-bold">{title}</div>
      <div>
        <div className="size-8 rounded-full flex bg-white justify-center items-center ml-2 ">
          <ArrowUpRight />
        </div>
      </div>
    </div>
    {children}
  </div>
);

export default Card;
