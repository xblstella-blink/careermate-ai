import { useAuthentication } from "@/app/contexts/Authentication";

const UserProfile = () => {
  const { user } = useAuthentication();

  return (
    <div className="flex items-center gap-6 py-5 px-8 border border-gray-100 rounded-3xl">
      <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center text-xl font-bold text-grey-600 shrink-0">
        {user?.fullName[0].toUpperCase()}
      </div>
      <div className="flex-1">
        <div className="flex gap-4 items-center">
          <div className="text-[#161616]">{user?.fullName}</div>
          <div className="text-sm text-gray-600 bg-gray-200 px-2 py-1 rounded-md">
            {user?.email}
          </div>
        </div>
        <div className="text-sm text-[#161616] mt-3">
          {[user?.goal, user?.field].filter(Boolean).join(" · ")}
        </div>
      </div>
      <button
        type="button"
        className="text-sm text-[#161616] px-4 py-2 bg-gray-200 rounded-3xl hover:bg-gray-100"
      >
        Upload Now
      </button>
    </div>
  );
};

export default UserProfile;
