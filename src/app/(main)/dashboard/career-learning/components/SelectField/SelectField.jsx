import { ChevronDown } from "lucide-react";
import { useId } from "react";

const SelectField = ({ label, options }) => {
  const id = useId();

  return (
    <div className="mb-6">
      <label className="text-grey-700 mb-2 text-sm block" htmlFor="role">
        {label}
      </label>
      <div className="relative">
        <select
          id={id}
          className="px-4 h-12 rounded-xl border border-gray-300 w-full appearance-none"
        >
          <option>--Select--</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div
          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300 pointer-event-none"
          size={16}
          strokeWidth={0.5}
        >
          <ChevronDown />
        </div>
      </div>
    </div>
  );
};

export default SelectField;
