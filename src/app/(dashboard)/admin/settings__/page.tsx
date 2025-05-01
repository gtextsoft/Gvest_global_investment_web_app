"use client";
import React, { useState } from "react";
import { PasswordSettings } from "@/components/features/settings/PasswordSettings";
import { ProfileSettings } from "@/components/features/settings/ProfileSettings";
import EditProfile from "@/components/features/settings/EditProfile";
import { useUserProfile } from "@/hooks/userProfileHook";

const Settings: React.FC = () => {
  const { data: user, isLoading, isError } = useUserProfile();
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState<"profile" | "password">("profile");

    // Fallback function to return a safe value for missing data
    const safeValue = (value: string | undefined, fallback: string = "Not Available") => value ?? fallback;

    // Ensure user data is loaded before rendering profileFields
    const profileFields = user
      ? [
          { label: "Name", value: `${safeValue(user?.data?.user?.first_name)} ${safeValue(user?.data?.user?.last_name)}` },
          { label: "Email", value: safeValue(user?.data?.user?.email) },
          { label: "Phone Number", value: safeValue(user?.data?.user?.phone) },
          { label: "Gender", value: safeValue(user?.data?.user?.gender) },
          { label: "Marital Status", value: safeValue(user?.data?.user?.marital_status) },
          { label: "Date of Birth", value: user?.data?.user?.date_birth ? new Date(user?.data?.user?.date_birth).toLocaleDateString() : "Not Available" },
          { label: "Employment Status", value: safeValue(user?.data?.user?.employment_status) },
          { label: "City", value: safeValue(user?.data?.user?.city) },
          { label: "State", value: safeValue(user?.data?.user?.state) },
          { label: "Country", value: safeValue(user?.data?.user?.country) },
        ]
      : [];

  return (
    <section className="flex flex-col w-full gap-2">
      <div className="flex flex-col gap-10 px-5">
        {isLoading ? (
          <div className="flex justify-center items-center py-8">
            <span className="text-md md:text-lg text-gray-500">
              Loading User Info...
            </span>
          </div>
        ) : isError ? (
          <div className="flex justify-center items-center py-8">
            <span className="text-md md:text-lg text-red-500">
              Failed to load user data. Please try again later.
            </span>
          </div>
        ) : (
          <div className="flex flex-col gap-5 sm:px-6 py-5 pb-8 md:p-6 md:pb-14 bg-white rounded-xl shadow-md my-10">
            {/* Tab Switch */}
            <div className="flex w-full md:w-fit my-4 px-4 sm:px-5">
              {["profile", "password"].map((tab) => (
                <button
                  key={tab}
                  className={`flex-1 w-full sm:w-fit md:px-8 py-3 text-center text-sm sm:text-base transition-all ${
                    activeTab === tab
                      ? "bg-lonestar-950 text-white"
                      : "bg-lonestar-100 text-lonestar-950"
                  }`}
                  onClick={() => setActiveTab(tab as "profile" | "password")}
                >
                  {tab === "profile" ? "Profile" : "Password"}
                </button>
              ))}
            </div>
            <div className="flex flex-col px-5">
              {/* Tab Content */}
              {activeTab === "profile" ? (
                isEditing ? (
                  <EditProfile
                    fields={profileFields}
                    isEditing={isEditing}
                    onSave={() => setIsEditing(false)} // Switch back to ProfileSettings
                  />
                ) : (
                  <ProfileSettings
                    fields={profileFields}
                    onToggleEdit={() => setIsEditing(true)}
                  />
                )
              ) : (
                <PasswordSettings />
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Settings;
