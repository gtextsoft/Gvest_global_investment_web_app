"use client";

import InvestorsProfile from "@/components/features/admin/InvestorsProfile";
import { PasswordSettings } from "@/components/features/settings/PasswordSettings";
import { ProfileSettings } from "@/components/features/settings/ProfileSettings";
import UserAvatar from "@/components/shared/UserAvatar";
import { useUserDetail } from "@/hooks/adminHooks";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useState } from "react";

const InvestorsDetails = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useUserDetail(id as string);

  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState<"profile" | "password" | "investment" | "transaction" | "files">("profile");

  if (isLoading) {
    return <div className="px-8 py-10">Loading investor details...</div>;
  }

  if (isError || !data) {
    return <div className="px-8 py-10 text-red-500">Failed to load investor details.</div>;
  }

  const investor = data.data?.user;

  const safeValue = (value: string | undefined, fallback = "Not Available") => value ?? fallback;

  const profileFields = investor ? [
    { label: "Name", value: `${safeValue(investor.first_name)} ${safeValue(investor.last_name)}` },
    { label: "Email", value: safeValue(investor.email) },
    { label: "Phone Number", value: safeValue(investor.phone) },
    { label: "Gender", value: safeValue(investor.gender) },
    { label: "Marital Status", value: safeValue(investor.marital_status) },
    { label: "Date of Birth", value: investor.date_birth ? new Date(investor.date_birth).toLocaleDateString() : "Not Available" },
    { label: "Employment Status", value: safeValue(investor.employment_status) },
    { label: "City", value: safeValue(investor.city) },
    { label: "State", value: safeValue(investor.state) },
    { label: "Country", value: safeValue(investor.country) },
  ] : [];

  return (
    <section className="flex flex-col w-full gap-2">
      <div className="flex flex-col gap-5 px-8 py-10">
        <div className="flex flex-col gap-2 md:pr-5">
          {/* Header Profile */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 md:pr-5">
            {investor?.profile_picture ? (
              <Image
                src={investor?.profile_picture}
                alt="user_profile"
                width={100}
                height={100}
                className="!size-40 rounded-full object-cover"
              />
            ) : (
              <UserAvatar size={100} />
            )}
            <div className="flex flex-col px-2.5">
              <h4 className="text-xl font-medium text-black-950 capitalize">
                {safeValue(investor?.first_name)} {safeValue(investor?.last_name)}
              </h4>
              <p className="text-base truncate text-black-800">
                {safeValue(investor?.email)}
              </p>
            </div>
          </div>

          {/* Tab Buttons */}
          <div className="flex w-full md:w-fit my-4 px-4 sm:px-5 flex-wrap">
            {["profile", "password", "investment", "transaction", "files"].map((tab) => (
              <button
                key={tab}
                className={`flex-1 w-full sm:w-fit md:px-4 py-3 text-center text-sm sm:text-base transition-all ${
                  activeTab === tab
                    ? "bg-lonestar-950 text-white"
                    : "bg-lonestar-100 text-lonestar-950"
                }`}
                onClick={() => setActiveTab(tab as typeof activeTab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="flex flex-col px-5">
            {activeTab === "profile" && (
              isEditing ? (
                <InvestorsProfile
                  fields={profileFields}
                  isEditing={isEditing}
                  onSave={() => setIsEditing(false)}
                />
              ) : (
                <ProfileSettings
                  fields={profileFields}
                  onToggleEdit={() => setIsEditing(true)}
                />
              )
            )}
            {activeTab === "password" && <PasswordSettings />}
            {activeTab === "investment" && <div>Investment Details Coming Soon...</div>}
            {activeTab === "transaction" && <div>Transaction History Coming Soon...</div>}
            {activeTab === "files" && <div>Uploaded Files Coming Soon...</div>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestorsDetails;
