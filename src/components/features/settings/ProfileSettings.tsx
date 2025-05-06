import { Button } from "@/components/ui/button";
import Image from "next/image";
import joe from "../../../../public/images/joe.webp";
import { Edit3 } from "lucide-react";

interface ProfileField {
  label: string;
  value: string;
}
interface ProfileSettingsProps {
  fields: ProfileField[];
  onToggleEdit: () => void;
}
export const ProfileSettings: React.FC<ProfileSettingsProps> = ({
  fields,
  onToggleEdit,
}) => {
  return (
    <div className="grid gap-10">
      <div className="flex flex-wrap gap-6 items-start justify-between md:pr-5">
      
        <Button variant="outline" className="w-fit !px-5" onClick={onToggleEdit}>
          Edit
          <Edit3 />
        </Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10">
        {fields.map((field) => (
          <div
            key={field.label}
            className="flex flex-wrap flex-col w-full gap-1"
          >
            <span className="font-normal text-black-800 w-full">{field.label} : </span>
            <span className="text-black-950 font-medium truncate w-full">{field.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
