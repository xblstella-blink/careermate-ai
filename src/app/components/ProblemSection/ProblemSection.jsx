import { Clock3 } from "lucide-react";

const ProblemSection = () => {
  const problemStatements = [
    { key: "Your resume keeps getting ignored." },
    { key: "You don't know what interviewers expected." },
    { key: "You're unsure how to plan your career." },
  ];

  const rocket = (
    <svg width="200" height="220" viewBox="0 30 200 220">
      {/* Rocket Body */}
      <ellipse cx="100" cy="180" rx="35" ry="70" fill="rgba(255,255,255,0.9)" />
      {/* Rocket Window */}
      <circle cx="100" cy="160" r="20" fill="#6B8EFF" opacity="0.6" />
      {/* Rocket Nose */}
      <path d="M 65 110 Q 100 80 135 110" fill="rgba(255,255,255,0.9)" />
      {/* Rocket fins */}
      <path d="M 65 200 L 50 230 L 65 220 Z" fill="rgba(255,255,255,0.8)" />
      <path d="M 135 200 L 150 230 L 135 220 Z" fill="rgba(255,255,255,0.8)" />
      {/* Rocket Fire */}
      <ellipse cx="100" cy="250" rx="25" ry="15" fill="rgba(255,255,255,0.4)" />
      <ellipse cx="100" cy="245" rx="20" ry="12" fill="rgba(255,255,255,0.5)" />
      <ellipse cx="100" cy="240" rx="15" ry="10" fill="rgba(255,255,255,0.6)" />
    </svg>
  );

  return (
    <section id="problem" className="py-25 bg-[#fafafa]">
      <h2 className="text-center text-gray-800 font-bold text-5xl mb-20">
        Still Struggling with Job Application
      </h2>
      <div className="grid grid-cols-2 items-center gap-20 p-8 max-w-6xl mx-auto">
        <div className="text-lg text-gray-700 font-bold mb-12">
          {problemStatements.map((p) => (
            <div key={p.key} className="flex gap-5">
              <Clock3
                size={33}
                className="bg-black text-white rounded-full [&_circle]:stroke-black"
              />
              <p className="mb-12">{p.key}</p>
            </div>
          ))}
        </div>
        <div className="bg-[linear-gradient(135deg,rgb(91,126,244)_0%,rgb(75,165,244)_100%)] rounded-3xl relative min-h-[500px] shadow-xl">
          <h3 className="text-white p-12 text-[42px] font-extrabold leading-12">
            CareerMate
            <br />
            AI helps you <br />
            fix all of that <br /> -smartly
          </h3>
          {/* <Image
            src={rocket}
            alt="rocket"
            className="w-[164px] h-[310px] absolute bottom-0 right-0"
          /> */}
          <div className="absolute bottom-0 right-0 animate-rocketFloat">
            {rocket}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
