"use client";
import Button from "@/app/authentication/components/Button";
import Field from "@/app/authentication/components/Field";
import useForm from "@/app/authentication/hooks/useForm";
import SelectField from "./components/SelectField";
import { z } from "zod";
import { useAuthentication } from "@/app/contexts/Authentication";
import auth from "@/app/apis/auth";

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

  const { data, onChange, onSubmit, error, isSubmitted } = useForm({
    fields: ["goal", "role", "field"],
    schema,
    initialData: { goal: user.goal, role: user.role, field: user.field },
  });

  const handleSave = async () => {
    console.log(data);
    await auth.patch("/users/me", data);
    await mutate();
  };

  return (
    <form onSubmit={onSubmit(handleSave)}>
      <h2 className="text-lg font-semibold text-gray-900 mb-6">
        Career & Learning
      </h2>
      <SelectField
        label="Yor Role"
        options={roles}
        value={data.role}
        onChange={onChange("role")}
      />

      <SelectField
        label="Yor Field"
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
        <Button>Save Career Setting</Button>
      </div>
    </form>
  );
};

export default CareerLearningPage;
