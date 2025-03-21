"use client";
import React, { useState } from "react";
import { PasswordSettings } from "@/components/features/settings/PasswordSettings";
import { ProfileSettings } from "@/components/features/settings/ProfileSettings";
import EditProfile from "@/components/features/settings/EditProfile";

const profileFields = [
  { label: "Name", value: "Wade Warren" },
  { label: "Email", value: "wadewarrengmail@gmail.com" },
  { label: "Phone Number", value: "+111-1212121121" },
  { label: "Gender", value: "Male" },
  { label: "Marital Status", value: "Single" },
  { label: "Date of Birth", value: "01/01/2025" },
  { label: "Employment Status", value: "Employed" },
  { label: "City", value: "Lekki" },
  { label: "State", value: "Lagos" },
  { label: "Country", value: "Nigeria" },
];

const Settings: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState<"profile" | "password">("profile");

  return (
    <section className="flex flex-col w-full gap-2">
      <div className="flex flex-col gap-10 px-5">
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
      </div>
    </section>
  );
};

export default Settings;
