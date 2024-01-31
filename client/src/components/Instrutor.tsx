import Image from "next/image";

import { IoStar } from "react-icons/io5";
import { GoPerson } from "react-icons/go";

interface props {
  avatarUrl: string;
  name: string;
  description: string;
  stars: number;
  students: number;
}

export default function Instrutor({
  avatarUrl,
  name,
  description,
  stars,
  students,
}: props) {
  return (
    <div className="flex flex-col w-1/4 mb-3">
      <div className="flex flex-col m-1 border border-gray-200">
        <Image
          className="w-full"
          src={avatarUrl}
          width={250}
          height={300}
          alt="course"
        />

        <div className="flex flex-col items-center justify-center">
          <p className="p-1" style={{ fontSize: "15px" }}>
            {name}
          </p>
          <p className="text-gray-500 mb-1" style={{ fontSize: "10px" }}>
            {description}
          </p>
        </div>

        <div className="border-t">
          <div className="flex flex-row p-2 justify-between">
            <div className="flex items-center justify-center">
              <IoStar size={14} color="#FD8E1F" />
              <p
                className="text-gray-700 ml-1 text-xs"
                style={{ fontSize: "10px" }}
              >
                {stars}
              </p>
            </div>

            <div className="flex items-center justify-center">
              <GoPerson size={14} color="#564FFD" />
              <p
                className="text-gray-700 pr-1 text-xs"
                style={{ fontSize: "10px" }}
              >
                {students}{" "}
              </p>
              <p className="text-gray-500 text-xs" style={{ fontSize: "10px" }}>
                {" "}
                estudantes
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
