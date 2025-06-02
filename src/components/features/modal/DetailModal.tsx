import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

interface DetailModalProps {
  title: string;
  description: string;
  triggerText: string;
  children: React.ReactNode;
  viewMoreLink?: string;
}

const DetailModal: React.FC<DetailModalProps> = ({
  title,
  description,
  triggerText,
  children,
  viewMoreLink,
}) => {
  const router = useRouter();
console.log("viewMoreLink", viewMoreLink);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="h-9 px-4 text-sm font-medium text-gray-700 hover:bg-gray-50">
          {triggerText}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-4xl">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>

        <div className="space-y-4 mt-4">
          {children}
        </div>

        {viewMoreLink && (
          <div className="flex justify-end mt-6">
            <Button
              variant="outline"
              onClick={() => router.push(viewMoreLink)}
              className="text-sm font-medium"
            >
              View More Details
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default DetailModal; 