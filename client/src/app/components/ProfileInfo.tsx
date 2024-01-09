import React from 'react';
import Image from "next/image";
import pfp from "../../../public/pfp.webp";

export default function ProfileInfo() {
    return (
        <div className="flex bg-orange-100 justify-center w-full">

            <div className="flex w-3/4 mt-10 p-5 items-center bg-white border border-orange-200 p-5">

                <image>
                    <Image className="rounded-full" style={{ width: '75px', height: '75px' }} src={pfp} alt="profile picture" />
                </image>

                <div className="ml-10">
                    <h1 className="font-bold text-sm">Kamila Gilbert</h1>
                    <p className="mt-2 text-gray-600 text-xs">Designer Web</p>
                </div>

            </div>

        </div>
    );
}
