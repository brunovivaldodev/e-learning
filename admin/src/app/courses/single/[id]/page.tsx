import { IoPeopleCircleOutline } from "react-icons/io5";
import { GoArrowRight } from "react-icons/go";
import { MdVerified } from "react-icons/md";
import { IoPersonCircleSharp } from "react-icons/io5";
import { IoPlayCircleSharp } from "react-icons/io5";
import { BsPeople } from "react-icons/bs";
import { CiClock2 } from "react-icons/ci";
import { MdSignalCellularAlt } from "react-icons/md";
import { PiNotebook } from "react-icons/pi";
import Link from "next/link";
import { api } from "@/lib/api";
import { cookies } from "next/headers";
import { Breadcrums } from "@/components/breadcrumbs";
import { Sections } from "@/components/sections";

export default async function SingleCourse({
  params,
}: {
  params: { id: string };
}) {
  const res = await api.get(`/admins/courses/${params.id}`, {
    headers: { Authorization: `Bearer ${cookies().get("token")?.value}` },
  });

  const course = res.data;

  return (
    <div className="flex flex-col space-y-8 mx-20">
      <div>
        <div className="flex flex-col space-y-8">
          <div className="flex">
            <div>
              <div className="pt-14 space-y-4">
                <Breadcrums
                  categorie={course.categories}
                  course={course.title}
                />
                <div className="flex justify-between">
                  <h1 className="text-4xl font-semibold">{course.title}</h1>

                  <Link
                    href={`/courses/watch/${course.id}`}
                    className="bg-orange-500 text-white text-sm bg-laranja p-2 rounded-lg flex justify-between items-center gap-2 px-10"
                  >
                    Visualizar Curso <GoArrowRight />
                  </Link>
                </div>
                <div className="text-gray-600 text-sm">{course.subtitle}</div>
                <div className="flex justify-between items-center">
                  <div className="flex justify-between items-center space-x-2">
                    <IoPeopleCircleOutline size={35} />
                    <div>
                      <p className="text-xs text-gray-500">Criado por:</p>
                      <p className="text-sm">{course.instructor.name}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 w-full">
          <video
            className="w-[1086px] h-[450px]"
            src={`${api.getUri()}/${course.trailer}`}
            controls
          ></video>
        </div>

        <div className="space-y-8 pr-32 pt-4">
          <div className="flex space-x-10 text-gray-700 pt-2 justify-center">
            <a
              className="hover:border-b-2 hover:border-orange-500 pb-3 p-3 text-center"
              href="#Visão"
            >
              Visão geral
            </a>
            <a
              className="hover:border-b-2 hover:border-orange-500 pb-3 p-3 text-center"
              href="#Currículo"
            >
              Currículo
            </a>
            <a
              className="hover:border-b-2 hover:border-orange-500 pb-3 p-3 text-center"
              href="#Instrutor"
            >
              Instrutor
            </a>
          </div>
          <div className="mt-10 space-y-4">
            <h2 className="text-2xl " id="Visão">
              Descrição
            </h2>
            <p className="text-sm text-gray-600">{course.description}</p>
          </div>
          <div className="bg-[#E1F7E3] p-5">
            <h2 className="text-2xl mb-3">O que você aprenderá neste curso</h2>
            <div className="grid grid-cols-2 gap-6">
              {course.lessons.map((lesson) => {
                return (
                  <div key={lesson} className="flex">
                    <MdVerified size={30} color={"green"} />
                    <p className="text-sm text-gray-600">{lesson}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="">
            <h2 className="text-2xl mb-2">Para quem é este curso</h2>
            <ul className="space-y-2 text-sm text-gray-500">
              {course.target_audience.map((audience) => {
                return (
                  <li key={audience} className="flex items-center gap-2">
                    <GoArrowRight color="FF6636" />
                    {audience}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="">
            <h2 className="text-2xl mb-2">Requisitos para o curso</h2>
            <ul className="text-gray-500 text-sm list-disc ml-8 space-y-2">
              {course.requirements.map((requirements) => {
                return <li>{requirements}</li>;
              })}
            </ul>
          </div>

          <div>
            <div className="flex justify-between items-center">
              <h2 className="text-2xl mb-2" id="Currículo">
                Currículo
              </h2>
            </div>
            <Sections sections={course.course_section} />
          </div>

          <div>
            <div className="flex items-center" id="Instrutor">
              <h2 className="text-2xl">Instrutor do curso</h2>
            </div>
            <div className="mt-4 mb-4 border-2 border-gray-200 flex space-x-2 p-2">
              <IoPersonCircleSharp size={150} />
              <div className="space-y-2">
                <h1 className="">{course.instructor.name}</h1>
                <p className="text-gray-500 text-xs">
                  {course.instructor.title}
                </p>
                <ul className="text-xs text-gray-500 flex items-center space-x-4">
                  <li className="flex gap-2 items-center">
                    <BsPeople size={18} color={"#564FFD"} />
                    236,568 estudantes
                  </li>
                  <li className="flex gap-2 items-center">
                    <IoPlayCircleSharp size={18} color={"#FF6636"} /> 09 Cursos
                  </li>
                </ul>
                <p className="text-xs text-gray-500">
                  {course.instructor.description}
                </p>
              </div>
            </div>
          </div>
          <div className="mb-8">
            <div className="border-2 border-gray-300 space-y-4 p-6 bg-white ">
              <div className="flex justify-between">
                <div className="flex gap-2 items-center">
                  <h2>{course.price}</h2>
                </div>
              </div>
              <ul className="text-xs space-y-2 text-gray-500">
                <li className="flex justify-between items-center">
                  <p className=" flex items-center gap-1">
                    <CiClock2 />
                    Duração do curso
                  </p>
                  <p>{course.duration}</p>
                </li>
                <li className="flex justify-between items-center">
                  <p className=" flex items-center gap-1">
                    <MdSignalCellularAlt />
                    Nivel do Curso
                  </p>
                  <p>{course.level}</p>
                </li>
                <li className="flex justify-between items-center">
                  <p className="flex items-center gap-1">
                    <BsPeople />
                    Alunos matriculados
                  </p>
                  <p>69,419,618</p>
                </li>
                <li className="flex justify-between items-center">
                  <p className="flex items-center gap-1">
                    <PiNotebook />
                    Idioma
                  </p>
                  <p>{course.language}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
