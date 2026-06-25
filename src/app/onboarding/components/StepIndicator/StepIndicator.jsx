const STEPS = ["Welcome", "Basic Information", "Finish"];

const StepIndicator = ({ currentStep }) => (
  <div className="space-y-3 mt-4">
    {STEPS.map((label, i) => {
      const isCompleted = i <= currentStep;

      return (
        <div key={label} className="flex items-center gap-3 text-sm">
          <div
            className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium ${
              isCompleted
                ? "bg-blue-600 text-white"
                : "border border-gray-300 text-gray-400"
            }`}
          >
            {i + 1}
          </div>
          <span
            className={
              isCompleted ? "text-blue-600 font-medium" : "text-gray-400"
            }
          >
            {label}
          </span>
        </div>
      );
    })}
  </div>
);

export default StepIndicator;
