import { Button } from "@/components/ui/button";
import React from "react";

const KYC = () => {
  return (
    <section className="w-full px-6 py-6 md:p-6 bg-white rounded-xl">
      <div className="grid gap-10">
        <h2 className="text-xl font-medium">KYC CHECKLIST</h2>
        <div className="grid gap-6 md:gap-10">
          <div className="relative grid grid-cols-3 md:flex items-start md:items-center justify-between w-full">
            {/* Step 1 */}
            <div className="relative flex flex-col items-start md:items-center gap-4 z-10">
              <p className="bg-green-400 text-white text-sm md:text-base font-semibold rounded-full p-2 px-4 w-fit">
                1
              </p>
              <p className="text-sm md:text-base font-medium">
                Personal Information
              </p>
            </div>

            {/* Progress Line */}
            <div className="absolute top-4 left-0 w-full h-[4px]">
              {/* Green progress from Step 1 to Step 2 */}
              <div className="h-full bg-green-400 absolute left-[10%] w-[40%]"></div>
              <div className="h-full bg-gray-400 absolute right-[10%] w-[35%]"></div>
            </div>

            {/* Step 2 */}
            <div className="relative flex flex-col items-center gap-4 z-10">
              <p className="bg-green-400 text-white text-sm md:text-base font-semibold rounded-full p-2 px-4 w-fit">
                2
              </p>
              <p className="text-sm md:text-base font-medium">Bank/BVN</p>
            </div>

            {/* Step 3 */}
            <div className="relative flex flex-col items-end md:items-center gap-4 z-10">
              <p className="bg-gray-500 text-white text-sm md:text-base font-semibold rounded-full p-2 px-4 w-fit">
                3
              </p>
              <p className="text-sm md:text-base font-medium text-gray-500 break-all">
                ID/Verification
              </p>
            </div>
          </div>

          <Button
            variant="link"
            className="justify-self-end w-fit text-lonestar-950"
          >
            Continue
          </Button>
        </div>
      </div>
    </section>
  );
};

export default KYC;
