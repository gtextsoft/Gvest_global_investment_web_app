import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const PasswordSettings: React.FC = () => {
  const passwordFields = [
    { label: "Current Password", placeholder: "********" },
    { label: "New Password", placeholder: "Enter new password" },
    { label: "Confirm Password", placeholder: "Confirm new password" },
  ];

  return (
    <div className="grid gap-6 mt-4">
      {passwordFields.map(({ label, placeholder }) => (
        <div key={label} className="flex flex-col gap-3">
          <Label>{label}</Label>
          <Input type="password" placeholder={placeholder} />
        </div>
      ))}
      <Button className="mt-4 text-base py-6">Update Password</Button>
    </div>
  );
};
