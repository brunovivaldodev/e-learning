import React from "react";
import Image from "next/image";
import User from "../../public/user.png";

interface ProfileInfoProps {
  pfp: string;
  name: string;
  description: string;
}

export default function ProfileInfo({
  pfp,
  name,
  description,
}: ProfileInfoProps) {
  return (
    <div
      className="flex justify-center w-full"
      style={{ backgroundColor: "#FFEEE8" }}
    >
      <div className="flex w-3/4 mt-10 items-center bg-white border border-orange-200 p-5">
        <Image
          className="rounded-full"
          width={75}
          height={75}
          src={pfp ? User : User}
          alt="profile picture"
        />

        <div className="ml-10">
          <h1 className="font-bold text-sm">{name}</h1>
          <p className="mt-2 text-gray-600 text-xs">{description}</p>
        </div>
      </div>
    </div>
  );
}
