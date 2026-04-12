"use client";
import Button from "@/app/authentication/components/Button";
import Field from "@/app/authentication/components/Field";
import useForm from "@/app/authentication/hooks/useForm";
import getFullnameError from "./utils/getFullnameError";

const BasicInfoPage = () => {
  const { data, onChange, onSubmit, error, isSubmitted } = useForm({
    fields: ["fullName", "displayName"],
    validation: { fullName: getFullnameError },
    initialData: { fullName: "Alice Wang" },
  });

  const handleSave = () => {
    //TODO: addToast('Saved successfully)
  };

  return (
    <form onSubmit={onSubmit(handleSave)}>
      <h2 className="text-lg font-semibold text-gray-900 mb-6">Basic Info</h2>

      <Field
        label="Full Name"
        value={data.fullName}
        onChange={onChange("fullName")}
        error={isSubmitted && error.fullName}
      />
      <Field
        label="Display Name"
        placeholder="How your name appears in the app"
        value={data.displayName}
        onChange={onChange("displayName")}
      />

      <div className="w-[153px]">
        <Button>Save Basic Info</Button>
      </div>
    </form>
  );
};

export default BasicInfoPage;
