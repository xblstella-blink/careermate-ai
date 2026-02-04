import user from "./assets/avatar.jpg";
import Image from "next/image";

const UserReview = () => (
  <div className="rounded-3xl bg-white p-5 w-46 mt-10 -ml-16 shadow-2xl">
    <div className="flex gap-3 items-center ">
      <Image src={user} alt="Username" className="size-9 rounded-full" />
      <div className="font-bold ">Username</div>
    </div>
    <div className="mt-3 font-inter-regular">
      Tried many, but this AI stands out!🔥
    </div>
  </div>
);
export default UserReview;
