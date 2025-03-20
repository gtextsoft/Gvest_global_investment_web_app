import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import joe from "../../../../public/images/joe.webp";
import { Edit3 } from "lucide-react";

interface ProfileField {
  label: string;
  value: string;
}
interface ProfileSettingsProps {
  fields: ProfileField[];
  isEditing: boolean;
  onToggleEdit: () => void;
}
export const ProfileSettings: React.FC<ProfileSettingsProps> = ({
  fields,
  isEditing,
  onToggleEdit,
}) => {
  return (
    <div className="grid gap-10 mt-4">
      <div className="flex items-center justify-between md:pr-5">
        <div className="flex items-center gap-2">
          <Image
            src={joe}
            alt="avatar"
            className="size-40 border rounded-full"
          />
          <div className="flex flex-col px-2.5 gap-1">
            <h4 className="text-xl font-medium text-black-950">Wade Warren</h4>
            <p className="text-base text-black-800">
              wadewarrengmail@gmail.com
            </p>
          </div>
        </div>
        <Button className="w-fit">
          Edit
          <Edit3 />
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 gap-y-7">
        {fields.map(({ label, value }) => (
          <div key={label} className="flex flex-col gap-2">
            <Label>{label}</Label>
            <Input value={value} readOnly={!isEditing} />
          </div>
        ))}
      </div>
      <Button className="mt-4 text-base py-6" onClick={onToggleEdit}>
        {isEditing ? "Save" : "Edit"}
      </Button>
    </div>
  );
};
