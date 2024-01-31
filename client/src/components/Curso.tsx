import React from "react";
import Image from "next/image";
import course from "../../public/course4.png";
import { ChatText, Users } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

type Props = {
  title: string;
  thumb: string;
  categorie: string;
  price: number;
  students: number;
  coments: number;
  id: string;
};
export default function Curso({
  title,
  categorie,
  price,
  students,
  thumb,
  coments,
  id,
}: Props) {
  return (
    <Link href={`/courses/single/${id}`} className="">
      <div className="m-1.5 border bg-white border-gray-100">
        <Image src={course} alt="course" />

        <div className="flex justify-between p-2 items-center">
          <p className="text-xs bg-red-100 p-1">{categorie}</p>
          <p className="text-sm text-orange-500 font-bold">{price} AKZ</p>
        </div>

        <p className="text-[12px] p-2 font-bold">{title}</p>

        <div className="flex p-3 justify-between border border-gray-100">
          <div className="flex items-center">
            <ChatText size={20} color="#FD8E1F" />
            <p className="text-xs pl-1 text-gray-700">{coments}</p>
          </div>

          <div className="flex items-center">
            <Users size={20} color="#564FFD" />{" "}
            <span className="text-xs pl-1 text-gray-700">{students}</span>
            <span className="text-xs pl-1 text-gray-500">Estudantes</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
