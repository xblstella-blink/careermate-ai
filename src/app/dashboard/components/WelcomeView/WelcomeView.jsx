import { useAuthentication } from "@/app/contexts/Authentication";

const WelcomeView = () => {
  const { user } = useAuthentication();
  const firstName = user?.fullName?.split(" ")[0] ?? "there";

  return (
    <div className="flex flex-col items-center justify-center flex-1 gap-3 text-center px-4">
      <h2 className="text-xl font-semibold text-gray-800">
        Hi, {firstName} 👋
      </h2>
      <p className="text-sm text-gray-400 max-w-xs">
        I&apos;m here to help with your resume, interviews, and career planning.
      </p>
    </div>
  );
};

export default WelcomeView;
