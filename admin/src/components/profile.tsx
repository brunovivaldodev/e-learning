"use client";
import { api } from "@/lib/api";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { BsWhatsapp } from "react-icons/bs";
import { FaFacebookF, FaTwitter } from "react-icons/fa";

type Props = {
  id: string;
  instructor: any;
  token: string;
};

export function Profile({ id, instructor, token }: Props) {
  const router = useRouter();
  function Aprove() {
    const res = api.post(
      `/admins/instructors/${id}`,
      {
        decision: "Aprovado",
      },

      { headers: { Authorization: `Bearer ${token}` } }
    );

    router.replace("/instructors");
  }

  function Reject() {
    const res = api.post(
      `/admins/instructors/${id}`,
      {
        decision: "Rejeitado",
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    router.replace("/instructors");
  }

  return (
    <>
      <div className="flex bg-peach justify-center w-full">
        <div className="flex w-3/4 mt-10 items-center bg-white border border-orange-200 p-5">
          <Image
            className="rounded-full"
            width={75}
            height={75}
            src={`${api.getUri()}/${instructor.avatarUrl}`}
            alt="profile picture"
          />

          <div className="ml-10 space-y-3">
            <h1 className="font-bold text-sm">{instructor.name}</h1>
            <p className="text-gray-500 text-xs">{instructor.title}</p>
            <div className="flex w-full justify-end">
              <ul className="flex items-center gap-2">
                <li className="bg-gray-100 p-2">
                  <BsWhatsapp />
                </li>
                <li className="bg-gray-100 p-2">
                  <FaFacebookF />
                </li>
                <li className="bg-gray-100 p-2">
                  <FaTwitter />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex mt-6 justify-center">
        <div className="gap-2 w-3/4 flex">
          <div className="w-full">
            <div className="border-2 border-gray-200 p-2 h-auto">
              <h2>SOBRE MIM</h2>
              <p className="text-gray-500 text-xs">{instructor.description}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full gap-2 mt-80 justify-center">
        <div className="flex justify-between gap-20">
          <button
            onClick={Reject}
            className="flex bg-orange-300 h-12 w-24 justify-center items-center"
          >
            Rejeitar
          </button>
          <button
            onClick={Aprove}
            className="flex bg-orange-500 h-12 w-36 justify-center items-center"
          >
            Aprovar
          </button>
        </div>
      </div>
    </>
  );
}
