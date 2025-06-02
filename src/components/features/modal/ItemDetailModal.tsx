import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

interface ItemDetailModalProps {
  title: string;
  description: string;
  children: React.ReactNode;
  viewMoreLink?: string;
  isOpen: boolean;
  onClose: () => void;
}

const ItemDetailModal: React.FC<ItemDetailModalProps> = ({
  title,
  description,
  children,
  viewMoreLink,
  isOpen,
  onClose,
}) => {
  const router = useRouter();

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-4xl px-5 sm:px-6">
        <DialogHeader className="text-left md:text-center">
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>

        <div className="space-y-4 mt-4">
          {children}
        </div>

        {viewMoreLink && (
          <div className="flex sm:justify-end mt-6">
            <Button
              variant="outline"
              onClick={() => {
                onClose();
                router.push(viewMoreLink);
              }}
              className="text-sm font-medium"
            >
              View Full Details
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ItemDetailModal; 