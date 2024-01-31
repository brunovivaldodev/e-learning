"use client";
import Image from "next/image";
import logo from "../../public/logo.svg";
import { Bell } from "@phosphor-icons/react/dist/ssr/Bell";
import { Heart } from "@phosphor-icons/react/dist/ssr/Heart";
import { ShoppingCartSimple } from "@phosphor-icons/react";
import Button from "./Button";
import Button2 from "./Button2";
import Link from "next/link";
import { deleteCookie } from "cookies-next";
import { useRouter } from "next/navigation";

interface Props {
  user: any;
}

export default function Header({ user }: Props) {
  const router = useRouter();

  function logout() {
    deleteCookie("token");
    router.replace("/");
  }

  return (
    <header className="border-b border-gray-200">
      <div className="flex justify-between bg-gray-900 items-center">
        <nav className="p-2">
          <Link
            href="/"
            className="text-[10px] text-white hover:text-orange-400 m-2"
          >
            Home
          </Link>
          <Link
            href="/courses/list"
            className="text-[10px] text-white hover:text-orange-400 m-2"
          >
            Cursos
          </Link>
          <Link
            href="/about"
            className="text-[10px] text-white hover:text-orange-400 m-2"
          >
            Sobre
          </Link>
          <Link
            href="/instructor/become"
            className="text-[10px] text-white hover:text-orange-400 m-2"
          >
            Torna-se Instructor
          </Link>
          {user ? (
            <Link
              href="/student"
              className="text-[10px] text-white hover:text-orange-400 m-2"
            >
              Meu Perfil
            </Link>
          ) : (
            <></>
          )}
        </nav>
      </div>

      <div className="flex justify-between bg-white">
        <div className="flex bg-white items-center">
          <Image className="p-2 ml-3 w-1/8 mr-3" src={logo} alt="logo" />
        </div>

        <div className="flex justify-between items-center">
          <Bell size={18} className="mr-2" />
          <Heart size={18} className="mr-2" />
          <ShoppingCartSimple size={18} className="mr-2" />
          {user ? (
            <button onClick={logout}>
              <Button2 buttonText="Sair" />
            </button>
          ) : (
            <div className="flex">
              <Link href="/sign-up">
                <Button buttonText="Criar Conta" />
              </Link>
              <Link href="/sign-in">
                <Button2 buttonText="Entrar" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
