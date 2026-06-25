import Button from "@/app/components/Button";
import { ArrowLeft, ArrowRight, ChevronDown } from "lucide-react";

const ROLES = [
  { value: "Student", label: "Student" },
  { value: "Other", label: "Other" },
];

const FIELDS = [
  { value: "FE", label: "Frontend" },
  { value: "BE", label: "Backend" },
];

const SelectField = ({ label, options, value, onChange }) => (
  <div className="w-full mb-6">
    <label className="text-sm text-gray-600 block mb-2">{label}</label>
    <div className="relative">
      <select
        value={value}
        onChange={onChange}
        className="w-full h-12 px-4 rounded-xl border border-gray-300 appearance-none bg-white"
      >
        <option value="" disabled>
          Selected
        </option>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
      <ChevronDown
        size={16}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
      />
    </div>
  </div>
);

const BasicInfoStep = ({ formData, onChange, onBack, onNext }) => (
  <div className="flex-1 flex flex-col justify-center max-w-sm mx-auto w-full">
    <h2 className="text-2xl font-semibold mb-8">Basic Information</h2>

    <SelectField
      label="Your Role"
      options={ROLES}
      value={formData.role}
      onChange={onChange("role")}
    />
    <SelectField
      label="Your Field"
      options={FIELDS}
      value={formData.field}
      onChange={onChange("field")}
    />

    <div className="w-full mb-6">
      <label className="text-sm text-gray-600 block mb-2">Your Goal</label>
      <input
        value={formData.goal}
        onChange={onChange("goal")}
        placeholder="Selected"
        className="w-full h-12 px-4 rounded-xl border border-gray-300"
      />
    </div>

    <div className="flex gap-4">
      <div className="w-28">
        <Button variant="secondary" onClick={onBack}>
          <ArrowLeft size={16} /> Back
        </Button>
      </div>
      <div className="flex-1">
        <Button variant="start" onClick={onNext}>
          Next <ArrowRight size={16} />
        </Button>
      </div>
    </div>
  </div>
);

export default BasicInfoStep;
