"use client";
import Button from "@/app/components/Button";
import Field from "@/app/authentication/components/Field";
import useForm from "@/app/authentication/hooks/useForm";
import SelectField from "./components/SelectField";
import { z } from "zod";
import { useAuthentication } from "@/app/contexts/Authentication";
import auth from "@/app/apis/auth";
import { toast } from "sonner";

const schema = z.object({ goal: z.string().optional() });

const roles = [
  { value: "Student", label: "Student" },
  { value: "Other", label: "Other" },
];

const fields = [
  { value: "Frontend", label: "Frontend" },
  { value: "Backend", label: "Backend" },
];

const CareerLearningPage = () => {
  const { user, mutate } = useAuthentication();

  const { data, onChange, onSubmit } = useForm({
    fields: ["goal", "role", "field"],
    schema,
    initialData: { goal: user.goal, role: user.role, field: user.field },
  });

  const handleSave = async () => {
    await auth.patch("/users/me", data);
    await mutate();
    toast.success("Career settings updated successfully");
  };

  return (
    <form onSubmit={onSubmit(handleSave)}>
      <h2 className="text-lg font-semibold text-gray-900 mb-6">
        Career & Learning
      </h2>
      <SelectField
        label="Your Role"
        options={roles}
        value={data.role}
        onChange={onChange("role")}
      />
      <SelectField
        label="Your Field"
        options={fields}
        value={data.field}
        onChange={onChange("field")}
      />
      <Field
        label="Your Goal"
        placeholder="What are you looking for?"
        onChange={onChange("goal")}
        useSetting
        value={data.goal}
      />
      <div className="w-[193px]">
        <Button>Save Career Settings</Button>
      </div>
    </form>
  );
};

export default CareerLearningPage;
