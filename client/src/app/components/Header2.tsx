import Image from "next/image";
import logo from "../../../public/logo.svg";
import { Bell } from "@phosphor-icons/react/dist/ssr/Bell";
import { Heart } from "@phosphor-icons/react/dist/ssr/Heart";
import {
  ShoppingCartSimple, MagnifyingGlass, CaretDown
} from "@phosphor-icons/react/dist/ssr";

interface HeaderProps {
  avatarUrl: string;

}

export default function Header({ avatarUrl }: HeaderProps) {
  return (

    <header>

      <div className="flex justify-between bg-gray-900 items-center">

        <nav className="p-2">
          <a href="" className="text-[10px] text-gray-500 m-2">Home</a>
          <a href="" className="text-[10px] text-gray-500 m-2">Cursos</a>
          <a href="" className="text-[10px] text-gray-500 m-2">Sobre</a>
          <a href="" className="text-[10px] text-gray-500 m-2">Contactos</a>
        </nav>

        <div className="items-center">

          <select name="" id="" className="bg-gray-900 text-gray-500 text-[10px]">
            <option value="">USD</option>
            <option value="">AOA</option>
          </select>

          <select name="" id="" className="bg-gray-900 text-gray-500 text-[10px]">
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
          <Image className="rounded-full mr-3" width={35} height={35} src={avatarUrl} alt="profile picture" />

        </div>

      </div>

    </header>
  )
}