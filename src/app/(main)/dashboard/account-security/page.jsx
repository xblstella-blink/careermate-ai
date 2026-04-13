"use client";

import Button from "@/app/authentication/components/Button";
import Field from "@/app/authentication/components/Field";
import useForm from "@/app/authentication/hooks/useForm";

const AccountSecurityPage = () => {
  const { data, onChange, onSubmit, error, isSubmitted } = useForm({
    fields: ["email", "currentPassword", "newPassword", "confirmNewPassword"],
    validation: {},
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
      />
      <Field
        label="New Password"
        placeholder="At least 8 characters,letters and numbers"
        value={data.newPassword}
        type="password"
        onChange={onChange("newPassword")}
        useSetting
      />
      <Field
        label="Confirm New Password"
        placeholder="Re-enter new password"
        value={data.confirmNewPassword}
        onChange={onChange("confirmNewPassword")}
        useSetting
        type="password"
      />

      <div className="w-[169px]">
        <Button>Update Password</Button>
      </div>
    </form>
  );
};

export default AccountSecurityPage;
