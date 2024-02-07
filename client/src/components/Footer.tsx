import Image from "next/image";
import logo from "../../public/logo.svg";
import {
  MetaLogo,
  InstagramLogo,
  LinkedinLogo,
  TwitterLogo,
  YoutubeLogo,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800 ">
      <section className="flex items-center gap-16 mx-20 p-8">
        <div className="flex flex-col gap-2 text-white justify-center items-center">
          <h2 className="font-semibold text-3xl w-96">
            Vamos começar a impactar no aprendizado de centenas de estudantes no
            Isptec
          </h2>
          <div className="flex gap-2">
            <div className="flex bg-laranja w-40 h-10 p-2 text-white">
              <Link href="/instructor/become">Junta-se à família</Link>
            </div>
            <div className="flex bg-gray-700 w-48 h-10 p-2 text-white">
              <Link href="/courses/list">Todos cursos</Link>
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
                  <p>Desenvolvimento</p>
                  <p>Contabilidade e Finanças</p>
                  <p>Design</p>
                  <p>Negócios</p>
                </div>
              </div>
              <div className="w-56">
                <h2 className="text-white">Links Rápidos</h2>
                <div className="flex flex-col gap-2">
                  <Link href="/about" className="hover:text-orange-500">
                    Sobre
                  </Link>
                  <Link
                    href="/instructor/become"
                    className="hover:text-orange-500"
                  >
                    Se torne um instructor -{">"}
                  </Link>
                  <p>Contactos</p>
                  <p>Carreira</p>
                </div>
              </div>
              <div className="w-56">
                <h2 className="text-white">Suporte</h2>
                <div className="flex flex-col gap-2">
                  <p>Centro De Ajudas</p>
                  <p>FAQs</p>
                  <p>Termos e Condições</p>
                  <p>Politicas de Privacidade</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-around p-4">
            <p>&copy; {new Date().getFullYear()} - Isptec</p>
          </div>
        </div>
      </section>
    </footer>
  );
}
