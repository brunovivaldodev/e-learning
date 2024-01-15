import Image from "next/image";
import logo from "../../../public/logo.svg";
import { Bell } from "@phosphor-icons/react/dist/ssr/Bell";
import { Heart } from "@phosphor-icons/react/dist/ssr/Heart";
import {
  ShoppingCartSimple, MagnifyingGlass, CaretDown
} from "@phosphor-icons/react/dist/ssr";
import Button from './Button'
import Button2 from './Button2'
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

        <div className="items-center">

          <select name="" id="" className="bg-gray-900 text-white text-[10px]">
            <option value="">USD</option>
            <option value="">AOA</option>
          </select>

          <select name="" id="" className="bg-gray-900 text-white text-[10px]">
            <option value="">Português</option>
            <option value="">English</option>
          </select>

        </div>

      </div>

      <div className="flex justify-between bg-white">

        <div className="flex bg-white items-center">
          <Image className="p-2 ml-3 w-1/8 mr-3" src={logo} alt="logo" />

          <div className="flex border border-gray-200 p-2 mt-1 items-center">
            <input className="text-xs w-full" type="text" name="" id="" placeholder=" Procurar" />
            <CaretDown size={15} />
          </div>

          <div className="flex border border-gray-200 p-2 mt-1 items-center ml-2">
            <MagnifyingGlass size={15} />
            <input className="text-xs w-full" type="text" name="" id="" placeholder=" O que quer aprender..." />
          </div>
        </div>

        <div className="flex justify-between items-center">

          <Bell size={18} className="mr-2" />
          <Heart size={18} className="mr-2" />
          <ShoppingCartSimple size={18} className="mr-2" />

          {avatarUrl != "none" ? (
            <Image className="rounded-full mr-3" width={35} height={35} src={avatarUrl} alt="profile picture" />
          ) : (

            <div className="flex">
              <Link href="SignUp"><Button buttonText="Criar Conta" /></Link>
              <Link href="SignIn"><Button2 buttonText="Entrar" /></Link> 
            </div>

          )}

        </div>

      </div>

    </header>
  )
}