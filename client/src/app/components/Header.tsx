import Image from "next/image";
import logo from "../../../public/logo.svg";
import { Bell } from "@phosphor-icons/react/dist/ssr/Bell";
import { Heart } from "@phosphor-icons/react/dist/ssr/Heart";
import {
  ShoppingCart,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export default function Header(){
  return(
    <header className="flex flex-col justify-between text-xs">
        <nav className="flex justify-between p-4 bg-gray-800">
          <div>
            <Link className="p-4 text-gray-300 hover:text-orange-400" href={"/"}>Home</Link>
            <Link className="p-4 text-gray-300 hover:text-orange-400" href={"/CourseList"}>Cursos</Link>
            <Link className="p-4 text-gray-300 hover:text-orange-400" href={"/About"}>Sobre</Link>
            <Link className="p-4 text-gray-300 hover:text-orange-400" href={"BecomeInstructor"}>Torne-se um instrutor</Link>
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
              <input
                className="w-44 h-10 border-gray-800 border-2 outline-none pl-2"
                type="text"
                placeholder="Procurar"
              />
              <input
                className="w-72 h-10 border-gray-800 border-2 outline-none pl-2"
                type="text"
                placeholder="O que você quer aprender ..."
              />
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
                <Link className="text-sm font-semibold text-orange-500 text-center" href='/SignUp'>
                  Criar Conta
                </Link>
              </div>
              <div className="flex bg-orange-500 h-12 w-24 justify-center items-center">
                <Link className="text-sm text-white semi-bold text-center" href='/SignIn'>
                  Entrar
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
      )
}