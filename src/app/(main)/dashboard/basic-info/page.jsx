"use client";
import Button from "@/app/authentication/components/Button";
import Field from "@/app/authentication/components/Field";
import useForm from "@/app/authentication/hooks/useForm";
import { z } from "zod";
import { useAuthentication } from "@/app/contexts/Authentication";
import auth from "@/app/apis/auth";
import { toast } from "sonner";

const schema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  displayName: z.string().optional(),
});

const BasicInfoPage = () => {
  const { user, mutate } = useAuthentication();

  const { data, onChange, onSubmit, error, isSubmitted } = useForm({
    fields: ["fullName", "displayName"],
    schema,
    initialData: { fullName: user.fullName, displayName: user.displayName },
  });

  const handleSave = async () => {
    await auth.patch("/users/me", data);
    await mutate();
    await toast.success("Basic info update successfully");
  };

  return (
    <form onSubmit={onSubmit(handleSave)}>
      <h2 className="text-lg font-semibold text-gray-900 mb-6">Basic Info</h2>

      <Field
        label="Full Name"
        value={data.fullName}
        onChange={onChange("fullName")}
        error={isSubmitted && error.fullName}
        useSetting
      />
      <Field
        label="Display Name"
        placeholder="How your name appears in the app"
        value={data.displayName}
        onChange={onChange("displayName")}
        useSetting
      />

      <div className="w-[153px]">
        <Button>Save Basic Info</Button>
      </div>
    </form>
  );
};

export default BasicInfoPage;
