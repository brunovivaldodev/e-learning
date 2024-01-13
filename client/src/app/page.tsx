import Image from "next/image";
import isptec from "../../public/Isptec.png";
import course1 from "../../public/course1.png";
import istructor1 from "../../public/inscrutor1.png";
import total from "../../public/total.png";
import chevron from "../../public/chevron.png";
import unitel from "../../public/unitel.png";
import sonangol from "../../public/sonangol.png";
import {
  Bank,
  Handshake,
  Receipt,
  Camera,
  FirstAidKit,
  Star,
  PaperPlaneRight,
} from "@phosphor-icons/react/dist/ssr";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header avatarUrl="none"/>
      <div>
        <section className="mx-3">
          <div className="flex justify-center gap-8">
            <div className="flex flex-col gap-8 justify-center mx-5">
              <h1 className="font-bold text-4xl w-[560px]">
                Aprenda com o isptec em qualquer lugar e momento
              </h1>
              <h4 className="w-96">
                A nossa missão é ajudar as pessoas a encontrar o melhor curso
                online e aprender com os especialistas a qualquer hora e em
                qualquer lugar
              </h4>
              <div className="flex bg-laranja h-12 w-24 items-center justify-center">
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

      <Footer />
    </main>
  );
}
