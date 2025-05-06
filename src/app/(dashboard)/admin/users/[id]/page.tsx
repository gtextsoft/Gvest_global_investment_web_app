"use client"
import UserAvatar from '@/components/shared/UserAvatar'
import { Button } from '@/components/ui/button'
import { useUserDetail } from '@/hooks/adminHooks'
import Image from 'next/image'
import React from 'react'

const UserDetails = () => {
  const { data: user } = useUserDetail();
  console.log("data", data);
  
  return (
     <div className="flex flex-col gap-8">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 md:pr-5">
            {/* <Image src={joe} alt="avatar" className="size-40 border rounded-full" /> */}
            <Button
          variant="ghost"
          className="!p-0 hover:p-0 rounded-full w-fit hover:bg-none hover: overflow-hidden"
        >
          {profileImg ? (
            <Image
              src={profileImg}
              alt="user_profile"
              width={40}
              height={40}
              className="!size-10"
            />
          ) : (
            <UserAvatar size={40} />
          )}
        </Button>
            <div className="flex flex-col px-2.5">
              <h4 className="text-xl font-medium text-black-950">Wade Warren</h4>
              <p className="text-base truncate text-black-800">wadewarrengmail@gmail.com</p>
            </div>
          </div>
          </div>
  )
}

export default UserDetails
