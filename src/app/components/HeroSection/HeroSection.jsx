import { MoveRight } from "lucide-react";
import Button from "../Button";

const HeroSection = () => (
  <>
    <div className="flex flex-col justify-center items-center mt-16 gap-5">
      <h1 className="p-8 border border-gray-300 border-dashed rounded-3xl text-6xl font-black font-inter-regular text-center">
        Your AI Career Practice Partner
      </h1>
      <p className="w-[599px] font-inter text-lg text-center text-[#161616]">
        Get job-ready with AI - from resumes to interviews,
        <br /> CareerMate AI coaches you step by step
      </p>
    </div>
    <div className="flex justify-center items-center gap-5 mt-12">
      <div className="w-[183px]">
        <Button>
          Start for free <MoveRight />
        </Button>
      </div>
      <div className="w-[180px]">
        <Button variant="secondary">
          Watch Demo <MoveRight />
        </Button>
      </div>
    </div>
  </>
);

export default HeroSection;
