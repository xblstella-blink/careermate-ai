"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import AppShell from "@/app/components/AppShell";
import StepIndicator from "./components/StepIndicator";
import WelcomeStep from "./components/WelcomeStep";
import BasicInfoStep from "./components/BasicInfoStep";
import FinishStep from "./components/FinishStep";
import auth from "@/app/apis/auth";
import { useAuthentication } from "@/app/contexts/Authentication";
import { toast } from "sonner";

const OnboardingPage = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({ role: "", field: "", goal: "" });
  const { mutate, user } = useAuthentication();
  const router = useRouter();

  const handleChange = (field) => (e) =>
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));

  const handleBasicInfoNext = async () => {
    if (!formData.role || !formData.field) {
      toast.error("Please select your role and field");

      return;
    }

    const payload = {
      fullName: user.fullName,
      ...Object.fromEntries(
        Object.entries(formData).filter(([, v]) => v !== ""),
      ),
    };
    try {
      await auth.patch("/users/me", payload);
      await mutate();
      setStep(2);
    } catch (err) {
      toast.error(err.response?.data?.message ?? "Something went wrong");
    }
  };

  const handleFinish = () => router.push("/dashboard");

  const renderStep = () => {
    if (step === 0) return <WelcomeStep onNext={() => setStep(1)} />;
    if (step === 1)
      return (
        <BasicInfoStep
          formData={formData}
          onChange={handleChange}
          onBack={() => setStep(0)}
          onNext={handleBasicInfoNext}
        />
      );

    return <FinishStep onFinish={handleFinish} />;
  };

  return (
    <AppShell sidebar={<StepIndicator currentStep={step} />}>
      {renderStep()}
    </AppShell>
  );
};

export default OnboardingPage;
