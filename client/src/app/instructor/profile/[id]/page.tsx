import Image from "next/image";
import pfp from "../../../../../public/pfp.webp";
import {
  IoPersonCircleOutline,
  IoPlayCircleSharp,
  IoStar,
} from "react-icons/io5";
import { BsPeople, BsWhatsapp } from "react-icons/bs";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import Footer from "../../../../components/Footer";
import Header from "../../../../components/Header";
import { api } from "@/lib/api";
import { ChatText } from "@phosphor-icons/react/dist/ssr";
import Curso from "@/components/Curso";
import { getStudent } from "@/contexts/auth";

export default async function InstructorProfile({
  params,
}: {
  params: { id: string };
}) {
  const userAuth = getStudent();

  const res = await api.get(`/students/instructor/${params.id}`);

  const instrucor = res.data;
  return (
    <>
      <Header user={userAuth}></Header>
      <div className="flex bg-peach justify-center w-full">
        <div className="flex w-3/4 mt-10 items-center bg-white border border-orange-200 p-5">
          <Image
            className="rounded-full"
            style={{ width: "75px", height: "75px" }}
            src={pfp}
            alt="profile picture"
          />

          <div className="ml-10 space-y-3">
            <h1 className="font-bold text-sm">{instrucor.name}</h1>
            <p className="text-gray-500 text-xs">{instrucor.title}</p>
            <div className="flex justify-between items-center gap-64">
              <ul className="text-xs text-gray-500 flex items-center space-x-4">
                <li className="flex gap-2 items-center">
                  <ChatText size={25} color="#FD8E1F" />
                  50 Comentários em cursos
                </li>
                <li className="flex gap-2 items-center">
                  <BsPeople size={18} color={"#564FFD"} />
                  236,568 estudantes
                </li>
                <li className="flex gap-2 items-center">
                  <IoPlayCircleSharp size={18} color={"#FF6636"} />{" "}
                  {instrucor.Courses.length} Cursos
                </li>
              </ul>
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
        <div className="gap-2 flex">
          <div className="w-[30%]">
            <div className="border-2 border-gray-200 p-2 h-auto">
              <h2>SOBRE MIM</h2>
              <p className="text-gray-500 text-xs">{instrucor.description}</p>
            </div>
          </div>

          <div className="flex flex-col space-y-3" id="Cursos">
            <h2 className="text-xl">
              <b>Cursos</b> {instrucor.Courses.length}
            </h2>
            <div className="grid grid-cols-2 gap-2">
              {instrucor.Courses.map((course) => {
                return (
                  <Curso
                    key={course.id}
                    id={course.id}
                    categorie={course.categories}
                    title={course.title}
                    price={course.price}
                    coments={25}
                    students={23}
                    thumb={course.thumbnail}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mb-10 p-6" id="Análise">
        <div className="space-y-3 w-3/4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-semibold">Feedback dos alunos</h1>
          </div>
          <div className="mb-4 space-y-2">
            <div className="flex space-x-2">
              <IoPersonCircleOutline size={35} />
              <div>
                <div className="flex gap-2 items-center mb-1">
                  <p className="text-sm">Malcolm Silva</p>
                  <p className="text-[10px] text-gray-500">Há uma semana</p>
                </div>
                <div className="flex space-x-0.5">
                  <IoStar size={13} color="#FD8E1F" />
                  <IoStar size={13} color="#FD8E1F" />
                  <IoStar size={13} color="#FD8E1F" />
                  <IoStar size={13} color="#FD8E1F" />
                  <IoStar size={13} color="#FD8E1F" />
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-2 ml-10">
              Agradeço os vídeos curtos e precisos (10 minutos ou menos cada)
              porque vídeos excessivamente longos tendem a me fazer perder o
              foco. O instrutor tem muito conhecimento em Web Design e isso fica
              evidente ao compartilhar seu conhecimento. Esses foram meus
              melhores 6 meses de treinamento. Obrigado, Vako.
            </p>
          </div>
          <hr />
        </div>
      </div>

      <Footer />
    </>
  );
}
