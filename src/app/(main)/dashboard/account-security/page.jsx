"use client";

import Button from "@/app/authentication/components/Button";
import Field from "@/app/authentication/components/Field";
import useForm from "@/app/authentication/hooks/useForm";
import z from "zod";

const schema = z
  .object({
    currentPassword: z.string().min(1, "Current password is required"),
    newPassword: z
      .string()
      .min(8, "At least 8 characters")
      .regex(/[a-zA-Z]/, "Password must contain at least one letter")
      .regex(/[0-9]/, "Password must contain at lease one number"),
    confirmNewPassword: z.string().min(1, "Please confirm your password"),
  })
  .refine((data) => data.newPassword === data.confirmNewPassword, {
    path: ["confirmNewPassword"],
    message: "Password do not match",
  });

const AccountSecurityPage = () => {
  const { data, onChange, onSubmit, error, isSubmitted } = useForm({
    fields: ["email", "currentPassword", "newPassword", "confirmNewPassword"],
    schema,
    initialData: { email: "alice@example.com" },
  });

  const handleSave = () => {
    //TODO: addToast('Saved successfully)
  };

  return (
    <form onSubmit={onSubmit(handleSave)}>
      <h2 className="text-lg font-semibold text-gray-900 mb-6">
        Account & Security
      </h2>
      <div>
        <Field
          label="Login Email"
          hint="Your email cannot be charged here, Contact support is needed"
          readOnly
          value={data.email}
          useSetting
        />
      </div>
      <div className="py-3 mb-4 border-b border-gray-100">
        <h3 className="text-sm font-bold text-[#161616]">Change Password</h3>
      </div>
      <Field
        label="Current Password"
        value={data.currentPassword}
        onChange={onChange("currentPassword")}
        type="password"
        placeholder="Enter your current password"
        useSetting
        error={isSubmitted && error.currentPassword}
      />
      <Field
        label="New Password"
        placeholder="At least 8 characters,letters and numbers"
        value={data.newPassword}
        type="password"
        onChange={onChange("newPassword")}
        useSetting
        error={isSubmitted && error.newPassword}
      />
      <Field
        label="Confirm New Password"
        placeholder="Re-enter new password"
        value={data.confirmNewPassword}
        onChange={onChange("confirmNewPassword")}
        useSetting
        type="password"
        error={isSubmitted && error.confirmNewPassword}
      />

      <div className="w-[169px]">
        <Button>Update Password</Button>
      </div>
    </form>
  );
};

export default AccountSecurityPage;
