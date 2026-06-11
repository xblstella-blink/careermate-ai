import FeatureCard from "./components/FeatureCard";

const FeatureSection = () => {
  const FEATURES = [
    {
      icon: (
        <svg width="80" height="80" viewBox="0 0 80 80">
          <circle cx="60" cy="20" r="4" fill="#E8F2FF" />
          <circle cx="20" cy="60" r="3" fill="#E8F2FF" />
          <circle cx="40" cy="40" r="12" fill="#4285F4" />
          <circle cx="25" cy="30" r="6" fill="#667EEA" opacity="0.6" />
          <circle cx="55" cy="50" r="8" fill="#5B7EF4" opacity="0.6" />
        </svg>
      ),
      subtitle: "AI Mock Interview",
      desc: "Practice with AI-powered realistic interview scenarios and get instant feedback",
    },
    {
      icon: (
        <svg width="80" height="80" viewBox="0 0 80 80">
          <circle cx="15" cy="15" r="4" fill="#E8F2FF" />
          <circle cx="65" cy="65" r="3" fill="#E8F2FF" />
          <rect
            x="28"
            y="20"
            width="24"
            height="32"
            rx="2"
            fill="none"
            stroke="#4285F4"
            strokeWidth="2"
          />
          <line
            x1="32"
            y1="28"
            x2="48"
            y2="28"
            stroke="#4285F4"
            strokeWidth="2"
          />
          <line
            x1="32"
            y1="36"
            x2="44"
            y2="36"
            stroke="#4285F4"
            strokeWidth="2"
          />
          <line
            x1="32"
            y1="44"
            x2="48"
            y2="44"
            stroke="#4285F4"
            strokeWidth="2"
          />
        </svg>
      ),
      subtitle: "Resume Analysis",
      desc: "Get AI-powered analysis and personalized recommendations to improve your resume",
    },
    {
      icon: (
        <svg width="80" height="80" viewBox="0 0 80 80">
          <circle cx="20" cy="20" r="3" fill="#E8F2FF" />
          <circle cx="60" cy="60" r="4" fill="#E8F2FF" />
          <circle cx="40" cy="40" r="14" fill="#4285F4" />
          <circle
            cx="40"
            cy="40"
            r="20"
            fill="none"
            stroke="#667EEA"
            strokeWidth="2"
            opacity="0.5"
          />
          <circle
            cx="40"
            cy="40"
            r="26"
            fill="none"
            stroke="#5B7EF4"
            strokeWidth="2"
            opacity="0.3"
          />
        </svg>
      ),
      subtitle: "Career Habit Advice",
      desc: "Develop professional habits and routines that accelerate your career growth",
    },
    {
      icon: (
        <svg width="80" height="80" viewBox="0 0 80 80">
          <circle cx="65" cy="20" r="3" fill="#E8F2FF" />
          <circle cx="15" cy="65" r="4" fill="#E8F2FF" />
          <circle cx="25" cy="50" r="5" fill="#667EEA" />
          <circle cx="40" cy="35" r="5" fill="#4285F4" />
          <circle cx="55" cy="25" r="5" fill="#5B7EF4" />
          <line
            x1="25"
            y1="50"
            x2="40"
            y2="35"
            stroke="#4285F4"
            strokeWidth="2"
          />
          <line
            x1="40"
            y1="35"
            x2="55"
            y2="25"
            stroke="#4285F4"
            strokeWidth="2"
          />
          <line
            x1="20"
            y1="60"
            x2="60"
            y2="60"
            stroke="#E5E5E5"
            strokeWidth="2"
          />
        </svg>
      ),
      subtitle: "Project Resume",
      desc: "Build and showcase a portfolio that highlights your best projects and achievements",
    },
  ];

  return (
    <section className="py-20">
      <h2 className="text-gray-800 font-bold text-5xl mb-20 text-center">
        Everything You Need to Grow Your Career
      </h2>
      <div className=" grid grid-cols-2 gap-8 max-w-[1000px] mx-auto">
        {FEATURES.map((f) => (
          <FeatureCard
            key={f.subtitle}
            icon={f.icon}
            subtitle={f.subtitle}
            description={f.desc}
          />
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;
