import { User } from "@nextui-org/react";

import { Header } from "@/components/header";
import Image from "next/image";
import { Breadcrums } from "@/components/breadcrumbs";
import { Card } from "@/components/card";
import { AreaChart } from "@/components/area-chart";
import { LineChart } from "@/components/line-chart";
import { api } from "@/lib/api";
import { cookies } from "next/headers";
import { dataTransformation } from "@/helpers";
import { Checks, Clock } from "@phosphor-icons/react/dist/ssr";

export default async function Courses({ params }: { params: { id: string } }) {
  const res = await api.get(`/instructors/courses/${params.id}`, {
    headers: { Authorization: `Bearer ${cookies().get("token")?.value}` },
  });

  const course = res.data;

  return (
    <main className="flex flex-col space-y-8">
      <Header page="Meus Cursos" />
      <div className="flex flex-col mx-28 space-y-8">
        <section className="flex gap-2">
          <Breadcrums categorie={course.categories} course={course.title} />
        </section>
        <section className="bg-white p-4">
          <div className="flex w-75 gap-2 bg-white">
            <div
              style={{
                position: "relative",
                width: "30%",
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
            <div className="flex flex-1 flex-col gap-2">
              <div className="px-2">
                <div className="flex">
                  <p className="text-sm p-1 text-slate-400">
                    Disponibilizado: {dataTransformation(course.created_at)}
                  </p>
                  <p className="text-sm p-1 text-slate-400">
                    Actualizado: {dataTransformation(course.updated_at)}
                  </p>
                </div>
                <h5 className="font-medium"> {course.title}</h5>
                <h5 className="text-sm  text-slate-400">{course.subtitle}</h5>
              </div>
              <div className="flex justify-between px-2">
                <div className="flex gap-2 items-center">
                  <div className="flex">
                    <User
                      name=""
                      avatarProps={{
                        src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
                      }}
                    />
                    <div>
                      <p className="text-sm text-slate-400">Criado por</p>
                      <strong className="text-sm">
                        {course.instructor.name}
                      </strong>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border"></div>
              <div className="flex justify-between px-2">
                <div className="flex justify-between gap-6">
                  <div className="flex flex-col">
                    <p className="">
                      <strong>AOA</strong> {course.price}
                    </p>
                    <p className="text-sm text-slate-400">Preço do curso</p>
                  </div>
                  <div className="flex flex-col">
                    <p>
                      <strong>AOA</strong> 245.000
                    </p>
                    <p className="text-sm text-slate-400">Vendas Total</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    {course.decision === "Pendente" ? (
                      <Clock size={20} />
                    ) : (
                      <Checks size={20} />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="flex justify-center gap-6">
          <div className="grid grid-cols-2 gap-4">
            <Card title="Alunos matriculados" total={35.0} />
            <Card title="Total de comentários" total={35.0} />
            <Card title={course.level} option={"Idioma do curso"} />
            <Card title={course.language} option={"Língua do curso"} />
            <Card title="Total de vendas" total={5000} />
            <Card title={course.duration} option={"Duração do curso"} />
          </div>
        </section>
        <section className="flex gap-6">
          <div className="flex flex-col w-96 bg-white">
            <div className="h-12 flex items-center p-2 justify-between ">
              <h4>Receita</h4>
              <select className="bg-white ">
                <option value="">Hoje</option>
                <option value="">Ontem</option>
              </select>
            </div>
            <div className="border"></div>

            <AreaChart />
          </div>
          <div className="flex flex-1 flex-col  bg-white">
            <div className="h-12 flex items-center p-2 justify-between ">
              <h4>Visão geral do curso</h4>
              <select className="bg-white ">
                <option value="">Esta semana</option>
                <option value="">Ontem</option>
              </select>
            </div>
            <div className="border"></div>
            <LineChart />
          </div>
        </section>
      </div>
    </main>
  );
}
