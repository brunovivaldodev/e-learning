import Image from "next/image";
import logo from "../../public/logo.svg";
import isptec from "../../public/Isptec.png";
import course1 from "../../public/course1.png";
import course2 from "../../public/course3.png";
import istructor1 from "../../public/inscrutor1.png";
import istructor2 from "../../public/inscrutor2.png";
import istructor3 from "../../public/inscrutor3.png";
import total from "../../public/total.png";
import chevron from "../../public/chevron.png";
import unitel from "../../public/unitel.png";
import sonangol from "../../public/sonangol.png";

import { Bell } from "@phosphor-icons/react/dist/ssr/Bell";
import { Heart } from "@phosphor-icons/react/dist/ssr/Heart";
import {
  ShoppingCart,
  Bank,
  Handshake,
  Megaphone,
  Receipt,
  Camera,
  FirstAidKit,
  Star,
  PaperPlaneRight,
  MetaLogo,
  InstagramLogo,
  LinkedinLogo,
  TwitterLogo,
  YoutubeLogo,
} from "@phosphor-icons/react/dist/ssr";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <header className="flex flex-col justify-between">
        <nav className="flex justify-between p-4 bg-gray-800">
          <div>
            <a className="p-4 text-gray-300">Home</a>
            <a className="p-4 text-gray-300">Cursos</a>
            <a className="p-4 text-gray-300">Sobre</a>
            <a className="p-4 text-gray-300">Torne-se um instrutor</a>
          </div>
          <div>
            <a className="p-4 text-gray-300">USD</a>
            <a className="p-4 text-gray-300">English</a>
          </div>
        </nav>
        <div className="flex p-3 justify-between">
          <div className="flex">
            <image className="mr-8">
              <Image src={logo} alt="logo" />
            </image>
            <div className="flex gap-4">
              <div className="border border-stone-600 w-44 h-10">
                <input
                  className="w-44 h-10 bg-gray-300 border-none"
                  type="text"
                  placeholder="Procurar"
                />
              </div>
              <div className="border border-stone-600 w-72 h-10">
                <input
                  className="w-72 h-10 bg-gray-300"
                  type="text"
                  placeholder="O que você quer aprender ..."
                />
              </div>
            </div>
          </div>
          <div className="flex justify-between gap-4">
            <div className="flex gap-4 items-center">
              <Bell size={22} />
              <Heart size={22} />
              <ShoppingCart size={22} />
            </div>
            <div className="flex gap-2">
              <div className="flex bg-orange-300 h-12 w-24 justify-center items-center">
                <a className="text-sm font-semibold text-orange-500 text-center">
                  Criar Conta
                </a>
              </div>
              <div className="flex bg-orange-500 h-12 w-24 justify-center items-center">
                <a className="text-sm text-white semi-bold text-center">
                  Entrar
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div>
        <section className="mx-8">
          <div className="flex justify-center gap-8">
            <div className="flex flex-col gap-8 justify-center">
              <h1 className="font-bold text-4xl w-[560px]">
                Aprenda com o isptec em qualquer lugar e momento
              </h1>
              <h4 className="w-96">
                A nossa missão é ajudar as pessoas a encontrar o melhor curso
                online e aprender com os especialistas a qualquer hora e em
                qualquer lugar
              </h4>
              <div className="flex bg-orange-500 h-12 w-24 items-center justify-center">
                <a className="text-sm text-white semi-bold text-center">
                  Criar Conta
                </a>
              </div>
            </div>
            <div className="flex">
              <Image src={isptec} alt="isptec" />
            </div>
          </div>
        </section>
        <section className="flex flex-col items-center gap-8 mt-8">
          <h2 className="font-semibold text-3xl">
            Categorias mais selecionadas
          </h2>
          <div className="grid grid-cols-4 gap-4">
            <div className="flex w-75 bg-blue-100 items-center p-4">
              <div className="flex items-center justify-center w-14 h-14 bg-cyan-50 ">
                <Bank size={28} />
              </div>
              <div className="ml-4">
                <h5>Finanças e Contabilidade</h5>
                <p>20 cursos</p>
              </div>
            </div>
            <div className="flex w-75 bg-blue-100 items-center p-4">
              <div className="flex items-center justify-center w-14 h-14 bg-cyan-50 ">
                <Handshake size={28} />
              </div>
              <div className="ml-4">
                <h5>Negócios</h5>
                <p>20 cursos</p>
              </div>
            </div>
            <div className="flex w-75 bg-blue-100 items-center p-4">
              <div className="flex items-center justify-center w-14 h-14 bg-cyan-50 ">
                <Receipt size={28} />
              </div>
              <div className="ml-4">
                <h5>IT Software</h5>
                <p>20 cursos</p>
              </div>
            </div>
            <div className="flex w-75 bg-blue-100 items-center p-4">
              <div className="flex items-center justify-center w-14 h-14 bg-cyan-50 ">
                <Camera size={28} />
              </div>
              <div className="ml-4">
                <h5>Fotografia e & Video</h5>
                <p>20 cursos</p>
              </div>
            </div>
            <div className="flex w-75 bg-blue-100 items-center p-4">
              <div className="flex items-center justify-center w-14 h-14 bg-cyan-50 ">
                <FirstAidKit size={28} />
              </div>
              <div className="ml-4">
                <h5>Saude e Desporto</h5>
                <p>20 cursos</p>
              </div>
            </div>
            <div className="flex w-75 bg-blue-100 items-center p-4">
              <div className="flex items-center justify-center w-14 h-14 bg-cyan-50 ">
                <FirstAidKit size={28} />
              </div>
              <div className="ml-4">
                <h5>Saude e Desporto</h5>
                <p>20 cursos</p>
              </div>
            </div>
            <div className="flex w-75 bg-blue-100 items-center p-4">
              <div className="flex items-center justify-center w-14 h-14 bg-cyan-50 ">
                <FirstAidKit size={28} />
              </div>
              <div className="ml-4">
                <h5>Saude e Desporto</h5>
                <p>20 cursos</p>
              </div>
            </div>
            <div className="flex w-75 bg-blue-100 items-center p-4">
              <div className="flex items-center justify-center w-14 h-14 bg-cyan-50 ">
                <FirstAidKit size={28} />
              </div>
              <div className="ml-4">
                <h5>Saude e Desporto</h5>
                <p>20 cursos</p>
              </div>
            </div>
          </div>

          <div className="flex">
            Temos mais categorias e subcategorias. {""}
            <p className="text-orange-500"> Ver mais -{">"}</p>
          </div>
        </section>
        <section className="flex flex-col items-center gap-8 mt-8">
          <h2 className="font-semibold text-3xl">Cursos em alta</h2>
          <div className="bg-blue-100">
            <div className="grid grid-cols-4 gap-4 p-8 mx-24">
              <div className="flex flex-col w-75 gap-4  bg-white p-4">
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
                <div className="p-2">
                  <div className="flex justify-between">
                    <h5>Design</h5>
                    <h5>$54</h5>
                  </div>
                  <h5 className="font-semibold mt-2">
                    Machine Leaning "A-Z": Python Prático e R em dados
                  </h5>
                  <div className="flex justify-between mt-8">
                    <div className="flex gap-2 items-center">
                      <Star size={18} />
                      <p>5.0</p>
                    </div>
                    <div className="flex gap-2 items-center">
                      <p>300</p>
                      <p>Estudantes</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-75 gap-4  bg-white p-4">
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
                <div className="p-2">
                  <div className="flex justify-between">
                    <h5>Design</h5>
                    <h5>$54</h5>
                  </div>
                  <h5 className="font-semibold mt-2">
                    Machine Leaning "A-Z": Python Prático e R em dados
                  </h5>
                  <div className="flex justify-between mt-8">
                    <div className="flex gap-2 items-center">
                      <Star size={18} />
                      <p>5.0</p>
                    </div>
                    <div className="flex gap-2 items-center">
                      <p>300</p>
                      <p>Estudantes</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-75 gap-4  bg-white p-4">
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
                <div className="p-2">
                  <div className="flex justify-between">
                    <h5>Design</h5>
                    <h5>$54</h5>
                  </div>
                  <h5 className="font-semibold mt-2">
                    Machine Leaning "A-Z": Python Prático e R em dados
                  </h5>
                  <div className="flex justify-between mt-8">
                    <div className="flex gap-2 items-center">
                      <Star size={18} />
                      <p>5.0</p>
                    </div>
                    <div className="flex gap-2 items-center">
                      <p>300</p>
                      <p>Estudantes</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-75 gap-4  bg-white p-4">
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
                <div className="p-2">
                  <div className="flex justify-between">
                    <h5>Design</h5>
                    <h5>$54</h5>
                  </div>
                  <h5 className="font-semibold mt-2">
                    Machine Leaning "A-Z": Python Prático e R em dados
                  </h5>
                  <div className="flex justify-between mt-8">
                    <div className="flex gap-2 items-center">
                      <Star size={18} />
                      <p>5.0</p>
                    </div>
                    <div className="flex gap-2 items-center">
                      <p>300</p>
                      <p>Estudantes</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-75 gap-4  bg-white p-4">
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
                <div className="p-2">
                  <div className="flex justify-between">
                    <h5>Design</h5>
                    <h5>$54</h5>
                  </div>
                  <h5 className="font-semibold mt-2">
                    Machine Leaning "A-Z": Python Prático e R em dados
                  </h5>
                  <div className="flex justify-between mt-8">
                    <div className="flex gap-2 items-center">
                      <Star size={18} />
                      <p>5.0</p>
                    </div>
                    <div className="flex gap-2 items-center">
                      <p>300</p>
                      <p>Estudantes</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-75 gap-4  bg-white p-4">
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
                <div className="p-2">
                  <div className="flex justify-between">
                    <h5>Design</h5>
                    <h5>$54</h5>
                  </div>
                  <h5 className="font-semibold mt-2">
                    Machine Leaning "A-Z": Python Prático e R em dados
                  </h5>
                  <div className="flex justify-between mt-8">
                    <div className="flex gap-2 items-center">
                      <Star size={18} />
                      <p>5.0</p>
                    </div>
                    <div className="flex gap-2 items-center">
                      <p>300</p>
                      <p>Estudantes</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-75 gap-4  bg-white p-4">
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
                <div className="p-2">
                  <div className="flex justify-between">
                    <h5>Design</h5>
                    <h5>$54</h5>
                  </div>
                  <h5 className="font-semibold mt-2">
                    Machine Leaning "A-Z": Python Prático e R em dados
                  </h5>
                  <div className="flex justify-between mt-8">
                    <div className="flex gap-2 items-center">
                      <Star size={18} />
                      <p>5.0</p>
                    </div>
                    <div className="flex gap-2 items-center">
                      <p>300</p>
                      <p>Estudantes</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-75 gap-4  bg-white p-4">
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
                <div className="p-2">
                  <div className="flex justify-between">
                    <h5>Design</h5>
                    <h5>$54</h5>
                  </div>
                  <h5 className="font-semibold mt-2">
                    Machine Leaning "A-Z": Python Prático e R em dados
                  </h5>
                  <div className="flex justify-between mt-8">
                    <div className="flex gap-2 items-center">
                      <Star size={18} />
                      <p>5.0</p>
                    </div>
                    <div className="flex gap-2 items-center">
                      <p>300</p>
                      <p>Estudantes</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="flex flex-col items-center gap-8 bg-white">
          <h2 className="font-semibold text-3xl p-8">
            Cursos recentemente adicionados
          </h2>
          <div className="grid grid-cols-4 mx-24">
            <div className="flex flex-col w-75 gap-4  bg-white p-4">
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
              <div className="p-2">
                <div className="flex justify-between">
                  <h5>Design</h5>
                  <h5>$54</h5>
                </div>
                <h5 className="font-semibold mt-2">
                  Machine Leaning "A-Z": Python Prático e R em dados
                </h5>
                <div className="flex justify-between mt-8">
                  <div className="flex gap-2 items-center">
                    <Star size={18} />
                    <p>5.0</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <p>300</p>
                    <p>Estudantes</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-75 gap-4  bg-white p-4">
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
              <div className="p-2">
                <div className="flex justify-between">
                  <h5>Design</h5>
                  <h5>$54</h5>
                </div>
                <h5 className="font-semibold mt-2">
                  Machine Leaning "A-Z": Python Prático e R em dados
                </h5>
                <div className="flex justify-between mt-8">
                  <div className="flex gap-2 items-center">
                    <Star size={18} />
                    <p>5.0</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <p>300</p>
                    <p>Estudantes</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-75 gap-4  bg-white p-4">
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
              <div className="p-2">
                <div className="flex justify-between">
                  <h5>Design</h5>
                  <h5>$54</h5>
                </div>
                <h5 className="font-semibold mt-2">
                  Machine Leaning "A-Z": Python Prático e R em dados
                </h5>
                <div className="flex justify-between mt-8">
                  <div className="flex gap-2 items-center">
                    <Star size={18} />
                    <p>5.0</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <p>300</p>
                    <p>Estudantes</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-75 gap-4  bg-white p-4">
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
              <div className="p-2">
                <div className="flex justify-between">
                  <h5>Design</h5>
                  <h5>$54</h5>
                </div>
                <h5 className="font-semibold mt-2">
                  Machine Leaning "A-Z": Python Prático e R em dados
                </h5>
                <div className="flex justify-between mt-8">
                  <div className="flex gap-2 items-center">
                    <Star size={18} />
                    <p>5.0</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <p>300</p>
                    <p>Estudantes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex bg-orange-300 h-8 w-44 justify-center items-center mb-8">
            <a className="text-sm font-semibold text-orange-500 text-center">
              Ver todos os cursos -{">"}
            </a>
          </div>
        </section>

        <section className="flex flex-col bg-blue-100 p-8">
          <div className="flex flex-col items-center gap-8 bg-white m-8 p-8">
            <h2 className="font-semibold text-3xl ">Instructores do Mês</h2>
            <div className="grid grid-cols-5 gap-4">
              <div className="">
                <image className="flex flex-col justify-center items-center">
                  <Image src={istructor1} alt="Instructor 1" />
                  <figcaption className="flex flex-col justify-center items-center">
                    <strong>Devon Lane</strong>
                    <p>Senior Developer</p>
                  </figcaption>
                </image>
                <div className="flex justify-between mt-7">
                  <div className="flex gap-2">
                    <Star size={18} />
                    <p>5.0</p>
                  </div>
                  <div className="flex gap-2">
                    <strong>300</strong>
                    <p>Estudantes</p>
                  </div>
                </div>
              </div>
              <div className="">
                <image className="flex flex-col justify-center items-center">
                  <Image src={istructor1} alt="Instructor 1" />
                  <figcaption className="flex flex-col justify-center items-center">
                    <strong>Devon Lane</strong>
                    <p>Senior Developer</p>
                  </figcaption>
                </image>
                <div className="flex justify-between mt-7">
                  <div className="flex gap-2">
                    <Star size={18} />
                    <p>5.0</p>
                  </div>
                  <div className="flex gap-2">
                    <strong>300</strong>
                    <p>Estudantes</p>
                  </div>
                </div>
              </div>{" "}
              <div className="">
                <image className="flex flex-col justify-center items-center">
                  <Image src={istructor1} alt="Instructor 1" />
                  <figcaption className="flex flex-col justify-center items-center">
                    <strong>Devon Lane</strong>
                    <p>Senior Developer</p>
                  </figcaption>
                </image>
                <div className="flex justify-between mt-7">
                  <div className="flex gap-2">
                    <Star size={18} />
                    <p>5.0</p>
                  </div>
                  <div className="flex gap-2">
                    <strong>300</strong>
                    <p>Estudantes</p>
                  </div>
                </div>
              </div>{" "}
              <div className="">
                <image className="flex flex-col justify-center items-center">
                  <Image src={istructor1} alt="Instructor 1" />
                  <figcaption className="flex flex-col justify-center items-center">
                    <strong>Devon Lane</strong>
                    <p>Senior Developer</p>
                  </figcaption>
                </image>
                <div className="flex justify-between mt-7">
                  <div className="flex gap-2">
                    <Star size={18} />
                    <p>5.0</p>
                  </div>
                  <div className="flex gap-2">
                    <strong>300</strong>
                    <p>Estudantes</p>
                  </div>
                </div>
              </div>
              <div className="">
                <image className="flex flex-col justify-center items-center">
                  <Image src={istructor1} alt="Instructor 1" />
                  <figcaption className="flex flex-col justify-center items-center">
                    <strong>Devon Lane</strong>
                    <p>Senior Developer</p>
                  </figcaption>
                </image>
                <div className="flex justify-between mt-7">
                  <div className="flex gap-2">
                    <Star size={18} />
                    <p>5.0</p>
                  </div>
                  <div className="flex gap-2">
                    <strong>300</strong>
                    <p>Estudantes</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex">
              Mais de 32.000k estundantes esperando por um instructor.Começe a
              ensinar e ganhe agora.{" "}
              <p className="text-orange-500">Tornar-se um instructor -{">"}</p>
            </div>
          </div>
        </section>

        <section className="flex items-center gap-8 mt-8 mx-24">
          <div className="w-96">
            <h2 className="font-semibold text-3xl mb-4">
              6.3k companhias confiam
            </h2>
            <p>
              Venha aprender com os instructores de muitas dessas companhias, e
              capacitar os seus colaboradores com os melhores profissionais do
              mercado
            </p>
          </div>
          <div className="flex-1 grid grid-cols-4 gap-4">
            <image>
              <Image src={total} alt="total" />
            </image>
            <image>
              <Image src={chevron} alt="chevron" />
            </image>
            <image>
              <Image src={sonangol} alt="sonangol" />
            </image>
            <image>
              <Image src={unitel} alt="unitel" />
            </image>
            <image>
              <Image src={total} alt="total" />
            </image>
            <image>
              <Image src={chevron} alt="chevron" />
            </image>
            <image>
              <Image src={sonangol} alt="sonangol" />
            </image>
            <image>
              <Image src={unitel} alt="unitel" />
            </image>
          </div>
        </section>

        <section className="bg-blue-100 p-8 mt-8">
          <div className="flex flex-col justify-center items-center mx-20 p-8">
            <h2 className="font-semibold text-3xl mb-4">Contacte-nos</h2>
            <div className="flex gap-16">
              <div className="flex flex-col gap-4 justify-center">
                <h4>
                  Entre em contaco connosco para obter mais informações sobre o
                  nosssos serviços
                </h4>
                <div className="flex gap-8">
                  <h4 className="w-44 text-orange-500">Endereço</h4>
                  <div className="">
                    <p>Avenida Olímpica 1702</p>
                    <p>Santa Mónica</p>
                  </div>
                </div>
                <div className="flex gap-8">
                  <h4 className="w-44 text-orange-500">Número de telefone</h4>
                  <div>
                    <p>(40) 555-01334</p>
                    <p>(219) 555-0421</p>
                  </div>
                </div>
                <div className="flex gap-8">
                  <h4 className="w-44 text-orange-500">Endereço De Email</h4>
                  <div>
                    <p>isptec@gmail.com</p>
                    <p>ispete2@fdf.comc</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4 bg-white p-8">
                <h4 className="font-medium text-xl">Entrar em contacto</h4>
                <p className="text-slate-500">
                  Sinta-se a vontade para entrar em contacto connosco,adoramos
                  fazer novos parceiros e amigos
                </p>
                <form className="flex flex-col gap-2" action="">
                  <label htmlFor="">Nome</label>
                  <input className="p-1" type="text" placeholder="Nome" />
                  <label htmlFor="">Email</label>
                  <input className="p-1" type="text" placeholder="Email" />
                  <label htmlFor="">Assunto Da Mensagem</label>
                  <input
                    className="p-1"
                    type="text"
                    placeholder="Descreve o assunto da mensagem"
                  />
                  <label htmlFor="">Mensagem</label>
                  <textarea className="p-1" placeholder="mensagem" />
                </form>
                <div className="flex gap-1 bg-orange-500 w-48 p-2 text-white">
                  <a>Enviar Mensagem</a>
                  <PaperPlaneRight size={22} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer className="bg-gray-800 ">
        <section className="flex items-center gap-16 mx-20 p-8">
          <div className="flex flex-col gap-2 text-white justify-center items-center">
            <h2 className="font-semibold text-3xl w-96">
              Vamos começar a impactar no aprendizado de centenas de estudantes
              no Isptec
            </h2>
            <div className="flex gap-2">
              <div className="flex bg-orange-500 w-40 h-10 p-2 text-white">
                <a href="">Junta-se à família</a>
              </div>
              <div className="flex bg-gray-700 w-48 h-10 p-2 text-white">
                <a href="">Visualizar todos cursos</a>
              </div>
            </div>
          </div>
          <div className="flex flex-1 gap-8">
            <div>
              <h4 className="font-medium text-3xl text-white">6.3k</h4>
              <p className="text-slate-500">Cursos online</p>
            </div>
            <div>
              <h4 className="font-medium text-3xl text-white">26k</h4>
              <p className="text-slate-500">Instructores Certificados</p>
            </div>
            <div>
              <h4 className="font-medium text-3xl text-white">99.9%</h4>
              <p className="text-slate-500">Taxa de sucesso</p>
            </div>
          </div>
        </section>

        <section className="flex mx-20 text-slate-500 p-8">
          <div className="flex flex-col">
            <div className="flex gap-16">
              <div className="flex flex-col gap-4 w-96">
                <Image src={logo} alt="logo" />
                <h4>
                  A nossa missão é ajudar as pessoas a encontrar o melhor curso
                  online e aprender com os especialistas a qualquer hora e em
                  qualquer lugar
                </h4>
                <div className="flex gap-2">
                  <div>
                    <MetaLogo size={20} />
                  </div>
                  <div>
                    <InstagramLogo size={20} />
                  </div>
                  <div>
                    <LinkedinLogo size={20} />
                  </div>
                  <div>
                    <TwitterLogo size={20} />
                  </div>
                  <div>
                    <YoutubeLogo size={20} />
                  </div>
                </div>
              </div>
              <div className="flex flex-1">
                <div className="w-56">
                  <h2 className="text-white">Top 4 Categorias</h2>
                  <div className="flex flex-col gap-2">
                    <a href="">Desenvolvimento</a>
                    <a href="">Contabilidade e Finanças</a>
                    <a href="">Design</a>
                    <a href="">Negócios</a>
                  </div>
                </div>
                <div className="w-56">
                  <h2 className="text-white">Links Rápidos</h2>
                  <div className="flex flex-col gap-2">
                    <a href="">Sobre</a>
                    <a href="">Se torne um instructor -{">"}</a>
                    <a href="">Contactos</a>
                    <a href="">Carreira</a>
                  </div>
                </div>
                <div className="w-56">
                  <h2 className="text-white">Suporte</h2>
                  <div className="flex flex-col gap-2">
                    <a href="">Centro De Ajudas</a>
                    <a href="">FAQs</a>
                    <a href="">Termos e Condições</a>
                    <a href="">Politicas de Privacidade</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-around p-4">
              <p>&copy; {new Date().getFullYear()} - Isptec</p>
              <select name="" id="">
                <option value="">English</option>
              </select>
            </div>
          </div>
        </section>
      </footer>
    </main>
  );
}
