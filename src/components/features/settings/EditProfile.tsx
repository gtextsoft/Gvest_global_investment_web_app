import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button"; // Ensure you have a button component
import Image from "next/image";
import joe from "../../../../public/images/joe.webp";

interface Field {
  label: string;
  value: string;
}

interface EditProfileProps {
  fields: Field[];
  isEditing: boolean;
  onSave: () => void; // Function to toggle back to profile view
}

const EditProfile: React.FC<EditProfileProps> = ({
  fields,
  isEditing,
  onSave,
}) => {
  // Define state type
  const [formData, setFormData] = useState<Record<string, string>>(
    fields.reduce((acc, field) => ({ ...acc, [field.label]: field.value }), {})
  );

  // Handle input changes
  const handleChange = (label: string, newValue: string) => {
    setFormData((prev) => ({ ...prev, [label]: newValue }));
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col sm:flex-row sm:items-center gap-2 md:pr-5">
        <Image src={joe} alt="avatar" className="size-40 border rounded-full" />
        <div className="flex flex-col px-2.5">
          <h4 className="text-xl font-medium text-black-950">Wade Warren</h4>
          <p className="text-base truncate text-black-800">wadewarrengmail@gmail.com</p>
        </div>
      </div>
      <div className="flex flex-col gap-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 gap-y-7">
          {fields.map(({ label }) => (
            <div key={label} className="flex flex-col gap-2">
              <Label>{label}</Label>
              <Input
                value={formData[label] || ""}
                onChange={(e) => handleChange(label, e.target.value)}
                readOnly={!isEditing}
              />
            </div>
          ))}
        </div>
        {/* Save Button */}
        <div className="flex flex-col gap-5 sm:flex-row">
          <Button
            onClick={onSave}
            className="sm:self-end bg-lonestar-950 text-white"
          >
            Save Changes
          </Button>
          <Button onClick={onSave} variant="secondary" className="sm:self-end">
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
