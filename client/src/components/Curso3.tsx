import React from "react";
import Image from "next/image";
import tumb from "../../public/listC.png";
import { IoStar } from "react-icons/io5";
import { GoPerson } from "react-icons/go";

export default function Curso3() {
  return (
    <div className="flex flex-col w-1/3 mb-3 text-xs">
      <div className="w-60">
        <Image src={tumb} alt="tumbnail" className="h-44" />
        <div className="p-2 space-y-1 border-2 border-t-0">
          <div className="flex justify-between">
            <p className="text-[8px] text-purple-800 bg-purple-100 p-0.5 px-1">
              MARKETING
            </p>
            <p className="text-orange-500">24.000kz</p>
          </div>
          <p>
            Arquiteto de soluções certificado pela AWS Ultimate Associate 2021
          </p>
        </div>
        <div className="flex justify-between border-2 border-t-0 p-2">
          <p className="flex items-center gap-2">
            <IoStar size={14} color="#FD8E1F" />
            4.1
          </p>
          <p className="flex items-center gap-2">
            <GoPerson size={14} color="#564FFD" /> 511,123 Estudantes
          </p>
        </div>
      </div>
    </div>
  );
}
