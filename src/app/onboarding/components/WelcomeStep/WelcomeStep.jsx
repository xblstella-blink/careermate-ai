import Button from "@/app/components/Button";
import { ArrowRight } from "lucide-react";

const WelcomeStep = ({ onNext }) => (
  <div className="flex-1 flex flex-col items-center justify-center text-center">
    <h1 className="text-4xl font-semibold mb-4">Welcome to CareerMate AI !</h1>
    <p className="text-gray-500 mb-10">
      Let AI guide your job preparation and growth.
    </p>
    <div className="w-48">
      <Button onClick={onNext}>
        Start Setup <ArrowRight size={16} />
      </Button>
    </div>
  </div>
);

export default WelcomeStep;
