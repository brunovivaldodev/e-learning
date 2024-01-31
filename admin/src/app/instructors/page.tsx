import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";
import course1 from "../../../public/course1.png";

import { Header } from "@/components/header";
import Image from "next/image";
import { api } from "@/lib/api";
import { cookies } from "next/headers";
import Link from "next/link";

export default async function Courses() {
  const res = await api.get("/admins/instructors", {
    headers: { Authorization: `Bearer ${cookies().get("token")?.value}` },
  });

  const instructors = res.data;

  return (
    <main className="flex flex-col space-y-8">
      <Header page="Instructores Pendentes" />
      <div className="flex flex-col mx-28 space-y-8">
        <section className="flex gap-2">
          <div className="flex flex-col">
            <label className="text-sm text-gray-900">Procurar :</label>
            <div className="flex items-center w-72 bg-slate-100 p-1">
              <MagnifyingGlass size={20} />
              <input
                className="bg-slate-100 p-2 w-72 h-10"
                type="text"
                placeholder="Procurar os seus instructores"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label className="text-sm text-gray-900">Ordenar por :</label>
            <select className="bg-slate-100 p-2 w-56 h-12">
              <option value="">Hoje</option>
              <option value="">Ontem</option>
            </select>
          </div>
        </section>
        <section>
          <div className="grid grid-cols-4 gap-4">
            {instructors.map((instructor) => {
              return (
                <Link href={`/instructors/profile/${instructor.id}`}>
                  <div className="flex flex-col w-75 gap-2 bg-white">
                    <div
                      style={{
                        position: "relative",
                        width: "100%",
                        height: "200px",
                      }}
                    >
                      <Image
                        fill={true}
                        objectFit="cover"
                        src={course1}
                        alt="course 1"
                      />
                    </div>
                    <div className="px-2">
                      <h5 className="font-medium mt-2">{instructor.name}</h5>
                    </div>
                    <div className="border"></div>
                    <div className="flex justify-between px-2">
                      <div className="flex gap-2 items-center">
                        {instructor.title}
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}
