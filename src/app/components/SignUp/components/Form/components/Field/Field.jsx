import { Eye, EyeClosed } from "lucide-react";
import { useId } from "react";
import { twMerge } from "tailwind-merge";
import { useState } from "react";

const Field = ({ label, type, placeholder, value, onChange, error }) => {
  const id = useId();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <div className="mb-2">
        <label className="text-grey-700 mb-2 text-sm block " htmlFor={id}>
          {label}
        </label>
        <div className="relative">
          <input
            id={id}
            className={twMerge(
              "px-4 h-12 rounded-3xl border border-gray-300 w-full",
              error && "border-red-500",
            )} //{border-red-500 : error}
            type={showPassword ? "text" : type}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
          />
          {type === "password" && (
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-0 top-0 bottom-0 flex items-center px-4 cursor-pointer text-gray-300"
            >
              {showPassword ? <Eye /> : <EyeClosed />}
            </button>
          )}
        </div>
      </div>
      <div className="text-sm text-red-600 mt-1 pl-4 h-[1em]">{error}</div>
    </div>
  );
};
export default Field;
