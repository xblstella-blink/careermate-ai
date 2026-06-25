import Button from "@/app/components/Button";
import { ArrowRight } from "lucide-react";

const FinishStep = ({ onFinish }) => (
  <div className="flex-1 flex flex-col items-center justify-center text-center">
    <h1 className="text-4xl font-semibold mb-4">Setup Complete !</h1>
    <p className="text-gray-500 mb-10">
      You&apos;re all set to start your AI career journey.
    </p>
    <div className="w-52">
      <Button onClick={onFinish}>
        Go to Dashboard <ArrowRight size={16} />
      </Button>
    </div>
  </div>
);

export default FinishStep;
