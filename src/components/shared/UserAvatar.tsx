import React from "react";
import { UserCircle } from "lucide-react";

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
      className="rounded-full overflow-hidden flex items-center justify-center bg-gray-200"
      style={{ width: size, height: size }}
    >
      {src ? (
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      ) : (
        <UserCircle size={size * 0.6} className="text-gray-600" />
      )}
    </div>
  );
};


export default UserAvatar