import { MoveRight } from "lucide-react";
import Button from "../Button";

const HeroSection = () => (
  <>
    <section id="hero" className="pb-25 bg-[#fafafa] pt-35 ">
      <div className="flex flex-col justify-center items-center gap-5 mx-auto max-w-[900px]">
        <h1 className="border border-gray-700 border-dashed rounded-3xl text-[64px] text-gray-800 font-black text-center leading-[1.6]">
          Your AI Career Practice Partner
        </h1>
        <p className="w-[599px] font-inter text-lg text-center text-[#666666]">
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
    </section>
  </>
);

export default HeroSection;
