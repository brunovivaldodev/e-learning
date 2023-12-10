import {
  DotsThree,
  MagnifyingGlass,
  Star,
  User,
} from "@phosphor-icons/react/dist/ssr";
import course1 from "../../../public/course1.png";

import { Header } from "@/components/header";
import Image from "next/image";
import { Pagination } from "@nextui-org/react";

export default function Courses() {
  return (
    <main className="flex flex-col space-y-8">
      <Header page="Meus Cursos" />
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
          <div className="flex flex-col">
            <label className="text-sm text-gray-900">Classificação</label>
            <select className="bg-slate-100 p-2 w-60 h-12">
              <option value="">Mais de 4 estrelas</option>
              <option value="">3 estrelas</option>
            </select>
          </div>
        </section>
        <section>
          <div className="grid grid-cols-4 gap-4">
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
                <div className="bg-blue-200 text-blue-600 inline-flex">
                  <p className="text-sm p-1">Design</p>
                </div>
                <h5 className="font-medium mt-2">
                  Machine Leaning "A-Z": Python Prático e R em dados
                </h5>
              </div>
              <div className="border"></div>
              <div className="flex justify-between px-2">
                <div className="flex gap-2 items-center">
                  <Star size={18} color="#e3cc36" weight="fill" />
                  <p>5.0</p>
                </div>
                <div className="flex gap-2 items-center">
                  <User size={18} color="#2564eb" />
                  <p>300</p>
                  <p>Estudantes</p>
                </div>
              </div>
              <div className="border"></div>
              <div className="flex justify-between px-2">
                <div className="flex   gap-2 items-center text-orange-500">
                  <p className="font-medium">AOA 24.000</p>
                </div>
                <div className="flex gap-2 items-center">
                  <DotsThree size={32} />
                </div>
              </div>
            </div>
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
                <div className="bg-blue-200 text-blue-600 inline-flex">
                  <p className="text-sm p-1">Design</p>
                </div>
                <h5 className="font-medium mt-2">
                  Machine Leaning "A-Z": Python Prático e R em dados
                </h5>
              </div>
              <div className="border"></div>
              <div className="flex justify-between px-2">
                <div className="flex gap-2 items-center">
                  <Star size={18} color="#e3cc36" weight="fill" />
                  <p>5.0</p>
                </div>
                <div className="flex gap-2 items-center">
                  <User size={18} color="#2564eb" />
                  <p>300</p>
                  <p>Estudantes</p>
                </div>
              </div>
              <div className="border"></div>
              <div className="flex justify-between px-2">
                <div className="flex   gap-2 items-center text-orange-500">
                  <p className="font-medium">AOA 24.000</p>
                </div>
                <div className="flex gap-2 items-center">
                  <DotsThree size={32} />
                </div>
              </div>
            </div>
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
                <div className="bg-blue-200 text-blue-600 inline-flex">
                  <p className="text-sm p-1">Design</p>
                </div>
                <h5 className="font-medium mt-2">
                  Machine Leaning "A-Z": Python Prático e R em dados
                </h5>
              </div>
              <div className="border"></div>
              <div className="flex justify-between px-2">
                <div className="flex gap-2 items-center">
                  <Star size={18} color="#e3cc36" weight="fill" />
                  <p>5.0</p>
                </div>
                <div className="flex gap-2 items-center">
                  <User size={18} color="#2564eb" />
                  <p>300</p>
                  <p>Estudantes</p>
                </div>
              </div>
              <div className="border"></div>
              <div className="flex justify-between px-2">
                <div className="flex   gap-2 items-center text-orange-500">
                  <p className="font-medium">AOA 24.000</p>
                </div>
                <div className="flex gap-2 items-center">
                  <DotsThree size={32} />
                </div>
              </div>
            </div>
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
                <div className="bg-blue-200 text-blue-600 inline-flex">
                  <p className="text-sm p-1">Design</p>
                </div>
                <h5 className="font-medium mt-2">
                  Machine Leaning "A-Z": Python Prático e R em dados
                </h5>
              </div>
              <div className="border"></div>
              <div className="flex justify-between px-2">
                <div className="flex gap-2 items-center">
                  <Star size={18} color="#e3cc36" weight="fill" />
                  <p>5.0</p>
                </div>
                <div className="flex gap-2 items-center">
                  <User size={18} color="#2564eb" />
                  <p>300</p>
                  <p>Estudantes</p>
                </div>
              </div>
              <div className="border"></div>
              <div className="flex justify-between px-2">
                <div className="flex   gap-2 items-center text-orange-500">
                  <p className="font-medium">AOA 24.000</p>
                </div>
                <div className="flex gap-2 items-center">
                  <DotsThree size={32} />
                </div>
              </div>
            </div>
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
                <div className="bg-blue-200 text-blue-600 inline-flex">
                  <p className="text-sm p-1">Design</p>
                </div>
                <h5 className="font-medium mt-2">
                  Machine Leaning "A-Z": Python Prático e R em dados
                </h5>
              </div>
              <div className="border"></div>
              <div className="flex justify-between px-2">
                <div className="flex gap-2 items-center">
                  <Star size={18} color="#e3cc36" weight="fill" />
                  <p>5.0</p>
                </div>
                <div className="flex gap-2 items-center">
                  <User size={18} color="#2564eb" />
                  <p>300</p>
                  <p>Estudantes</p>
                </div>
              </div>
              <div className="border"></div>
              <div className="flex justify-between px-2">
                <div className="flex   gap-2 items-center text-orange-500">
                  <p className="font-medium">AOA 24.000</p>
                </div>
                <div className="flex gap-2 items-center">
                  <DotsThree size={32} />
                </div>
              </div>
            </div>
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
                <div className="bg-blue-200 text-blue-600 inline-flex">
                  <p className="text-sm p-1">Design</p>
                </div>
                <h5 className="font-medium mt-2">
                  Machine Leaning "A-Z": Python Prático e R em dados
                </h5>
              </div>
              <div className="border"></div>
              <div className="flex justify-between px-2">
                <div className="flex gap-2 items-center">
                  <Star size={18} color="#e3cc36" weight="fill" />
                  <p>5.0</p>
                </div>
                <div className="flex gap-2 items-center">
                  <User size={18} color="#2564eb" />
                  <p>300</p>
                  <p>Estudantes</p>
                </div>
              </div>
              <div className="border"></div>
              <div className="flex justify-between px-2">
                <div className="flex   gap-2 items-center text-orange-500">
                  <p className="font-medium">AOA 24.000</p>
                </div>
                <div className="flex gap-2 items-center">
                  <DotsThree size={32} />
                </div>
              </div>
            </div>
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
                <div className="bg-blue-200 text-blue-600 inline-flex">
                  <p className="text-sm p-1">Design</p>
                </div>
                <h5 className="font-medium mt-2">
                  Machine Leaning "A-Z": Python Prático e R em dados
                </h5>
              </div>
              <div className="border"></div>
              <div className="flex justify-between px-2">
                <div className="flex gap-2 items-center">
                  <Star size={18} color="#e3cc36" weight="fill" />
                  <p>5.0</p>
                </div>
                <div className="flex gap-2 items-center">
                  <User size={18} color="#2564eb" />
                  <p>300</p>
                  <p>Estudantes</p>
                </div>
              </div>
              <div className="border"></div>
              <div className="flex justify-between px-2">
                <div className="flex   gap-2 items-center text-orange-500">
                  <p className="font-medium">AOA 24.000</p>
                </div>
                <div className="flex gap-2 items-center">
                  <DotsThree size={32} />
                </div>
              </div>
            </div>
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
                <div className="bg-blue-200 text-blue-600 inline-flex">
                  <p className="text-sm p-1">Design</p>
                </div>
                <h5 className="font-medium mt-2">
                  Machine Leaning "A-Z": Python Prático e R em dados
                </h5>
              </div>
              <div className="border"></div>
              <div className="flex justify-between px-2">
                <div className="flex gap-2 items-center">
                  <Star size={18} color="#e3cc36" weight="fill" />
                  <p>5.0</p>
                </div>
                <div className="flex gap-2 items-center">
                  <User size={18} color="#2564eb" />
                  <p>300</p>
                  <p>Estudantes</p>
                </div>
              </div>
              <div className="border"></div>
              <div className="flex justify-between px-2">
                <div className="flex   gap-2 items-center text-orange-500">
                  <p className="font-medium">AOA 24.000</p>
                </div>
                <div className="flex gap-2 items-center">
                  <DotsThree size={32} />
                </div>
              </div>
            </div>
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
                <div className="bg-blue-200 text-blue-600 inline-flex">
                  <p className="text-sm p-1">Design</p>
                </div>
                <h5 className="font-medium mt-2">
                  Machine Leaning "A-Z": Python Prático e R em dados
                </h5>
              </div>
              <div className="border"></div>
              <div className="flex justify-between px-2">
                <div className="flex gap-2 items-center">
                  <Star size={18} color="#e3cc36" weight="fill" />
                  <p>5.0</p>
                </div>
                <div className="flex gap-2 items-center">
                  <User size={18} color="#2564eb" />
                  <p>300</p>
                  <p>Estudantes</p>
                </div>
              </div>
              <div className="border"></div>
              <div className="flex justify-between px-2">
                <div className="flex   gap-2 items-center text-orange-500">
                  <p className="font-medium">AOA 24.000</p>
                </div>
                <div className="flex gap-2 items-center">
                  <DotsThree size={32} />
                </div>
              </div>
            </div>
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
                <div className="bg-blue-200 text-blue-600 inline-flex">
                  <p className="text-sm p-1">Design</p>
                </div>
                <h5 className="font-medium mt-2">
                  Machine Leaning "A-Z": Python Prático e R em dados
                </h5>
              </div>
              <div className="border"></div>
              <div className="flex justify-between px-2">
                <div className="flex gap-2 items-center">
                  <Star size={18} color="#e3cc36" weight="fill" />
                  <p>5.0</p>
                </div>
                <div className="flex gap-2 items-center">
                  <User size={18} color="#2564eb" />
                  <p>300</p>
                  <p>Estudantes</p>
                </div>
              </div>
              <div className="border"></div>
              <div className="flex justify-between px-2">
                <div className="flex   gap-2 items-center text-orange-500">
                  <p className="font-medium">AOA 24.000</p>
                </div>
                <div className="flex gap-2 items-center">
                  <DotsThree size={32} />
                </div>
              </div>
            </div>
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
                <div className="bg-blue-200 text-blue-600 inline-flex">
                  <p className="text-sm p-1">Design</p>
                </div>
                <h5 className="font-medium mt-2">
                  Machine Leaning "A-Z": Python Prático e R em dados
                </h5>
              </div>
              <div className="border"></div>
              <div className="flex justify-between px-2">
                <div className="flex gap-2 items-center">
                  <Star size={18} color="#e3cc36" weight="fill" />
                  <p>5.0</p>
                </div>
                <div className="flex gap-2 items-center">
                  <User size={18} color="#2564eb" />
                  <p>300</p>
                  <p>Estudantes</p>
                </div>
              </div>
              <div className="border"></div>
              <div className="flex justify-between px-2">
                <div className="flex   gap-2 items-center text-orange-500">
                  <p className="font-medium">AOA 24.000</p>
                </div>
                <div className="flex gap-2 items-center">
                  <DotsThree size={32} />
                </div>
              </div>
            </div>
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
                <div className="bg-blue-200 text-blue-600 inline-flex">
                  <p className="text-sm p-1">Design</p>
                </div>
                <h5 className="font-medium mt-2">
                  Machine Leaning "A-Z": Python Prático e R em dados
                </h5>
              </div>
              <div className="border"></div>
              <div className="flex justify-between px-2">
                <div className="flex gap-2 items-center">
                  <Star size={18} color="#e3cc36" weight="fill" />
                  <p>5.0</p>
                </div>
                <div className="flex gap-2 items-center">
                  <User size={18} color="#2564eb" />
                  <p>300</p>
                  <p>Estudantes</p>
                </div>
              </div>
              <div className="border"></div>
              <div className="flex justify-between px-2">
                <div className="flex   gap-2 items-center text-orange-500">
                  <p className="font-medium">AOA 24.000</p>
                </div>
                <div className="flex gap-2 items-center">
                  <DotsThree size={32} />
                </div>
              </div>
            </div>
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
                <div className="bg-blue-200 text-blue-600 inline-flex">
                  <p className="text-sm p-1">Design</p>
                </div>
                <h5 className="font-medium mt-2">
                  Machine Leaning "A-Z": Python Prático e R em dados
                </h5>
              </div>
              <div className="border"></div>
              <div className="flex justify-between px-2">
                <div className="flex gap-2 items-center">
                  <Star size={18} color="#e3cc36" weight="fill" />
                  <p>5.0</p>
                </div>
                <div className="flex gap-2 items-center">
                  <User size={18} color="#2564eb" />
                  <p>300</p>
                  <p>Estudantes</p>
                </div>
              </div>
              <div className="border"></div>
              <div className="flex justify-between px-2">
                <div className="flex   gap-2 items-center text-orange-500">
                  <p className="font-medium">AOA 24.000</p>
                </div>
                <div className="flex gap-2 items-center">
                  <DotsThree size={32} />
                </div>
              </div>
            </div>
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
                <div className="bg-blue-200 text-blue-600 inline-flex">
                  <p className="text-sm p-1">Design</p>
                </div>
                <h5 className="font-medium mt-2">
                  Machine Leaning "A-Z": Python Prático e R em dados
                </h5>
              </div>
              <div className="border"></div>
              <div className="flex justify-between px-2">
                <div className="flex gap-2 items-center">
                  <Star size={18} color="#e3cc36" weight="fill" />
                  <p>5.0</p>
                </div>
                <div className="flex gap-2 items-center">
                  <User size={18} color="#2564eb" />
                  <p>300</p>
                  <p>Estudantes</p>
                </div>
              </div>
              <div className="border"></div>
              <div className="flex justify-between px-2">
                <div className="flex   gap-2 items-center text-orange-500">
                  <p className="font-medium">AOA 24.000</p>
                </div>
                <div className="flex gap-2 items-center">
                  <DotsThree size={32} />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="justify-center place-self-center">
          <Pagination showControls color="warning" total={10} initialPage={1} />
        </section>
      </div>
    </main>
  );
}
