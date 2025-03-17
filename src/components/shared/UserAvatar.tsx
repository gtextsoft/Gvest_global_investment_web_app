import React from "react";
import { UserRound } from "lucide-react";
import Image from "next/image";

interface AvatarProps {
  src?: string; // Optional image source
  alt?: string; // Alt text for the image
  size?: number; // Avatar size (default: 40px)
}

const UserAvatar: React.FC<AvatarProps> = ({
  src,
  alt = "User",
  size = 40,
}) => {
  return (
    <div
      className="rounded-full overflow-hidden flex items-center justify-center bg-gray-100"
      style={{ width: size, height: size }}
    >
      {src ? (
        <Image src={src} alt={alt} className="w-full h-full object-cover" />
      ) : (
        <UserRound size={size * 0.6} className="text-lonestar-950 size-10/12 p-1" />
      )}
    </div>
  );
};

export default UserAvatar;
