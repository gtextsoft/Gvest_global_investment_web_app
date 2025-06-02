import React from "react";
import { Button } from "@/components/ui/button";
import { useUserProfile } from "@/hooks/userProfileHook";

const KYC = () => {
  const { data } = useUserProfile();

  const user = data?.data?.user;

  const steps = [
    {
      label: "Personal Information",
      complete: user?.account_verification,
    },
    {
      label: "Bank/BVN",
      complete: user?.bvn_verification,
    },
    {
      label: "ID/Verification",
      complete: user?.identity_verification,
    },
  ];

  const completedSteps = steps.filter((s) => s.complete).length;
  const progressPercent = (completedSteps / steps.length) * 100;

  // Find first incomplete step index for the "Continue" button
  const nextStepIndex = steps.findIndex((step) => !step.complete);

  console.log('data', data);
  console.log("user", user);
  console.log("steps", steps);
  console.log("completedSteps", completedSteps);
  console.log("progressPercent", progressPercent);
  console.log("nextStepIndex", nextStepIndex);

  return (
    <>
      {nextStepIndex !== -1 && (
        <section className="w-full px-6 py-6 md:p-6 bg-white rounded-xl">
          <div className="grid gap-10">
            <h2 className="text-xl font-medium">KYC CHECKLIST</h2>
            <div className="grid gap-6 md:gap-10">
              <div className="relative grid grid-cols-3 md:flex items-start md:items-center justify-between w-full">
                {/* Progress Bar Background */}
                <div className="absolute top-4 left-0 w-full h-[4px] bg-gray-300 z-0" />
                {/* Progress Bar Filled */}
                <div
                  className="absolute top-4 left-0 h-[4px] bg-green-500 z-0 transition-all duration-500"
                  style={{ width: `${progressPercent}%` }}
                />

                {/* Steps */}
                {steps.map((step, i) => (
                  <div
                    key={i}
                    className={`relative flex flex-col items-${
                      i === 0 ? "start" : i === 2 ? "end" : "center"
                    } md:items-center gap-4 z-10`}
                  >
                    <p
                      className={`text-white text-sm md:text-base font-semibold rounded-full p-2 px-4 w-fit ${
                        step.complete ? "bg-green-500" : "bg-gray-400"
                      }`}
                    >
                      {i + 1}
                    </p>
                    <p
                      className={`text-sm md:text-base font-medium break-all ${
                        step.complete ? "text-black" : "text-gray-500"
                      }`}
                    >
                      {step.label}
                    </p>
                  </div>
                ))}
              </div>

              {nextStepIndex !== -1 ? (
                <Button
                  variant="link"
                  className="justify-self-end w-fit text-lonestar-950"
                  onClick={() => {
                    // Add custom routing/logic here
                    console.log("Go to step:", nextStepIndex + 1);
                  }}
                >
                  Continue to {steps[nextStepIndex].label}
                </Button>
              ) : (
                <p className="text-green-600 text-sm md:text-base font-medium text-right">
                  ✅ All KYC steps completed
                </p>
              )}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default KYC;
