"use client";
import Button from "@/app/authentication/components/Button";
import Field from "@/app/authentication/components/Field";
import useForm from "@/app/authentication/hooks/useForm";

const CareerLearningPage = () => {
  const { data, onChange, onSubmit, error, isSubmitted } = useForm({
    fields: ["goal"],
    validation: {},
    initialData: { goal: "Looking for internship" },
  });

  return (
    <form>
      <h2 className="text-lg font-semibold text-gray-900 mb-6">
        Career & Learning
      </h2>
      <Field
        label="Your Goal"
        placeholder="What are you looking for?"
        onChange={onChange("goal")}
      />
      <div className="w-[193px]">
        <Button>Save Career Setting</Button>
      </div>
    </form>
  );
};

export default CareerLearningPage;
