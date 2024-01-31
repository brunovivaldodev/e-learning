import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";

import { Header } from "@/components/header";
import Image from "next/image";
import { api } from "@/lib/api";
import { cookies } from "next/headers";
import Link from "next/link";

export default async function Courses() {
  const res = await api.get("/admins/courses", {
    headers: { Authorization: `Bearer ${cookies().get("token")?.value}` },
  });

  const courses = res.data;

  return (
    <main className="flex flex-col space-y-8">
      <Header page="Cursos Pendentes" />
      <div className="flex flex-col mx-28 space-y-8">
        <section className="flex gap-2">
          <div className="flex flex-col">
            <label className="text-sm text-gray-900">Procurar :</label>
            <div className="flex items-center w-72 bg-slate-100 p-1">
              <MagnifyingGlass size={20} />
              <input
                className="bg-slate-100 p-2 w-72 h-10"
                type="text"
                placeholder="Procurar os seus cursos"
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
          <div className="flex flex-col">
            <label className="text-sm text-gray-900">Categoria</label>
            <select className="bg-slate-100 p-2 w-60 h-12">
              <option value="">Todas as categorias</option>
              <option value="">Desenvolvimento</option>
            </select>
          </div>{" "}
        </section>
        <section>
          <div className="grid grid-cols-4 gap-4">
            {courses.map((course) => {
              return (
                <Link href={`courses/single/${course.id}`}>
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
                        src={`${api.getUri()}/${course.thumbnail}`}
                        alt="course 1"
                      />
                    </div>
                    <div className="px-2">
                      <div className="bg-blue-200 text-blue-600 inline-flex">
                        <p className="text-sm p-1">{course.categories}</p>
                      </div>
                      <h5 className="font-medium mt-2">{course.title}</h5>
                    </div>
                    <div className="flex justify-center px-2">
                      <div className="flex   gap-2 items-center text-orange-500">
                        <p className="font-medium">AOA {course.price}</p>
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
