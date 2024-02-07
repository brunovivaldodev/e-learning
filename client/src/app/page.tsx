import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";
import Button2 from "../components/Button2";
import Instrutor from "../components/Instrutor";
import Categoria from "../components/Categoria";
import Curso from "../components/Curso";
import isptec from "../../public/Isptec.png";
import Image from "next/image";
import total from "../../public/total.png";
import chevron from "../../public/chevron.png";
import unitel from "../../public/unitel.png";
import sonangol from "../../public/sonangol.png";
import baker from "../../public/bakerhughes.png";
import sistec from "../../public/sistec.png";
import ncr from "../../public/ncr.png";
import bai from "../../public/bai.png";
import { api } from "@/lib/api";
import TrendingCourse from "@/components/trending-course";
import { ArrowRight, PaperPlaneRight } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { getStudent } from "@/contexts/auth";

export default async function LandingPage() {
  const userAuth = getStudent();

  const res = await api.get("/students/courses/recents");

  const courses = res.data;

  const categories = [
    { categoria: "Desenvolvimento", color: "blue", icon: "Cpu", nCursos: 20 },
    { categoria: "Negócios", color: "red", icon: "Handshake", nCursos: 10 },
    { categoria: "Finanças", color: "green", icon: "CreditCard", nCursos: 15 },
    {
      categoria: "IT & Software",
      color: "orange",
      icon: "ChartBarHorizontal",
      nCursos: 19,
    },
    {
      categoria: "Produtividade",
      color: "purple",
      icon: "BugDroid",
      nCursos: 17,
    },
    {
      categoria: "Desenvolvimento Pessoal ",
      color: "purple",
      icon: "Receipt",
      nCursos: 5,
    },
    { categoria: "Design", color: "red", icon: "PenNib", nCursos: 10 },
    { categoria: "Marketing", color: "green", icon: "Megaphone", nCursos: 28 },
    { categoria: "Fotografia", color: "orange", icon: "Package", nCursos: 21 },
    { categoria: "Música", color: "blue", icon: "Camera", nCursos: 22 },
    { categoria: "Saúde", color: "indigo", icon: "Headset", nCursos: 24 },
    { categoria: "Economia", color: "blue", icon: "FirstAidKit", nCursos: 100 },
  ];

  return (
    <div>
      <Header user={userAuth}></Header>

      <div
        className="flex justify-between mr-3 items-center"
        style={{ backgroundColor: "#F5F7FA" }}
      >
        <div className="w-1/2 justify-center items-center ml-4">
          <h1 className="font-bold text-5xl mb-6">
            Aprenda com o isptec em qualquer lugar e momento
          </h1>

          <div className="w-2/3 mb-5">
            <p className="text-base mt-3 text-gray-700">
              A nossa missão é ajudar as pessoas a encontrar o melhor curso
              online e aprender com os especialistas a qualquer hora e em
              qualquer lugar.
            </p>
          </div>

          <div className="w-1/5">
            {userAuth ? (
              <></>
            ) : (
              <Link href="/sign-up">
                <Button buttonText="Criar Conta"></Button>
              </Link>
            )}
          </div>
        </div>

        <div className="flex w-1/2">
          <Image src={isptec} alt="isptec" />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center mt-5">
        <p className="text-3xl font-semibold mb-5">
          Categorias mais selecionadas
        </p>

        <div className="flex m-2 flex-wrap w-3/4">
          {categories.map((categoria, index) => (
            <Categoria key={index} {...categoria} />
          ))}
        </div>

        <p className="text-3xl font-semibold mt-5 mb-5">Cursos em Alta</p>
      </div>

      <div
        className="flex w-full items-center flex-col pb-10"
        style={{ backgroundColor: "#F5F7FA" }}
      >
        <div className="flex flex-wrap w-3/4">
          <TrendingCourse
            title="Curso De Python"
            categorie="Desenvolvimento"
            coments={50}
            price={70000}
            students={77}
            thumb="course"
          ></TrendingCourse>
          <TrendingCourse
            title="Curso De Java"
            categorie="Desenvolvimento"
            coments={50}
            price={60000}
            students={93}
            thumb="course"
          ></TrendingCourse>{" "}
          <TrendingCourse
            title="Curso de Marketing"
            categorie="Marketing"
            coments={50}
            price={25000}
            students={70}
            thumb="course"
          ></TrendingCourse>{" "}
          <TrendingCourse
            title="Curso De Design"
            categorie="Design"
            coments={50}
            price={35000}
            students={70}
            thumb="course"
          ></TrendingCourse>{" "}
          <TrendingCourse
            title="Curso De Contabilidade"
            categorie="Contabilidade"
            coments={8}
            price={50000}
            students={70}
            thumb="course"
          ></TrendingCourse>{" "}
          <TrendingCourse
            title="Curso De Go"
            categorie="Desenvolvimento"
            coments={25}
            price={45000}
            students={70}
            thumb="course"
          ></TrendingCourse>{" "}
          <TrendingCourse
            title="Curso De Estatisitica"
            categorie="Estatisitica"
            coments={10}
            price={25000}
            students={150}
            thumb="course"
          ></TrendingCourse>{" "}
          <TrendingCourse
            title="Curso De Modelação"
            categorie="Diverso"
            coments={5}
            price={25000}
            students={30}
            thumb="course"
          ></TrendingCourse>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center mt-5">
        <p className="text-3xl font-semibold mb-5">
          Cursos recentemente adicionados
        </p>

        <div className="flex">
          {courses.map((course) => {
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

        <Link href="/courses/list">
          <Button2 buttonText="Ver Todos Os Cursos"></Button2>
        </Link>
      </div>

      <div
        className="flex flex-col justify-center items-center mt-5 mx-20"
        style={{ backgroundColor: "#F5F7FA" }}
      >
        <div className="flex w-full flex-col bg-white items-center">
          <p className="text-3xl font-semibold mb-5 mt-10">
            Melhores instrutores do Mês
          </p>

          <div className="flex w-full mx-20 items-center justify-center">
            <Instrutor
              avatarUrl="/instrutor.png"
              name="Sediangani Sofrimento"
              description="Desenvolvedor Web"
              stars={5.0}
              students={100}
            />
            <Instrutor
              avatarUrl="/inscrutor3.png"
              name="Francisca Tungumuna"
              description="Empreendedora"
              stars={4.9}
              students={134}
            />
            <Instrutor
              avatarUrl="/inscrutor2.png"
              name="Judson Paiva"
              description="Desenvolvedor Mobile"
              stars={4.0}
              students={187}
            />
          </div>

          <div className="flex items-center mb-4">
            <p className="text-[10px] mr-2 text-gray-700">
              Milhares de estudantes à espera de um instrutor. Comece a ensinar
              e ganhar agora!
            </p>
            <Link href="/instructor/become">
              <p className="text-[10px] mr-1" style={{ color: "#FF6636" }}>
                Torne-se um instrutor
              </p>
            </Link>
            <ArrowRight size={10} style={{ color: "#FF6636" }}></ArrowRight>
          </div>
        </div>
      </div>

      <div className="flex w-full mb-5 justify-center">
        <div className="flex w-3/4 items-center  mt-5">
          <div className="flex justify-center w-1/2 flex-col">
            <h2 className="text-3xl mb-4 font-bold">
              Queremos crescer com o apoio de várias empresas
            </h2>
            <p className="text-sm">
              Venha aprender com os instructores de muitas dessas empresas, e
              capacite-se com os melhores profissionais do mercado.
            </p>
          </div>

          <div className="flex items-center ml-4  w-1/2 grid grid-cols-4 gap-4">
            <Image src={total} alt="total" />
            <Image src={chevron} alt="google" />
            <Image src={sonangol} alt="google" />
            <Image src={unitel} alt="unitel" />
            <Image src={baker} alt="total" />
            <Image src={sistec} alt="google" />
            <Image src={ncr} alt="google" />
            <Image src={bai} alt="unitel" />
          </div>
        </div>
      </div>

      <div
        className="flex w-full items-center justify-center flex-col pb-10"
        style={{ backgroundColor: "#F5F7FA" }}
      >
        <div className="flex flex-col  flex-wrap w-3/4">
          <div className="flex justify-center">
            <p className="text-3xl font-semibold mb-5 mt-5">Contacte-nos</p>
          </div>

          <div className="flex">
            <div className="flex w-1/2 flex-col gap-4">
              <h4>
                Entre em contaco connosco para obter mais informações sobre o
                nossos serviços.
              </h4>
              <div className="flex gap-8">
                <h4 className="w-44 text-orange-500">Endereço</h4>
                <div className="">
                  <p>Bellas, ISPTEC, Bloco ADM, 3º andar</p>
                  <p>Luanda</p>
                </div>
              </div>
              <div className="flex gap-8">
                <h4 className="w-44 text-orange-500">Número de telefone</h4>
                <div>
                  <p>912345678</p>
                  <p>987654321</p>
                </div>
              </div>
              <div className="flex gap-8">
                <h4 className="w-44 text-orange-500">Endereço De Email</h4>
                <div>
                  <p>20190303@isptec.co.ao</p>
                </div>
              </div>
            </div>

            <div className="flex w-1/2 flex-col gap-4 bg-white p-8">
              <h4 className="font-medium text-xl">Entrar em contacto</h4>
              <p className="text-gray-400 font-light">
                Sinta-se a vontade para entrar em contacto connosco, adoramos
                fazer novos parceiros e amigos.
              </p>
              <form className="flex flex-col gap-2" action="">
                <label htmlFor="">Nome</label>
                <input
                  className="p-2 border border-gray-200"
                  type="text"
                  placeholder="Nome"
                />
                <label htmlFor="">Email</label>
                <input
                  className="p-2 border border-gray-200"
                  type="text"
                  placeholder="Email"
                />
                <label htmlFor="">Assunto Da Mensagem</label>
                <input
                  className="p-2 border border-gray-200"
                  type="text"
                  placeholder="Descreve o assunto da mensagem"
                />
                <label htmlFor="">Mensagem</label>
                <textarea
                  className="p-2 border border-gray-200"
                  style={{ resize: "none" }}
                  placeholder="Mensagem"
                />
              </form>
              <div
                className="flex items-center justify-center gap-1 w-48 p-2 text-white"
                style={{ backgroundColor: "#FF6636" }}
              >
                <a>Enviar Mensagem</a>
                <PaperPlaneRight size={22} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}
