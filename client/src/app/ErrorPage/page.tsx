import imagem from '../../../public/Error.png'
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/logo.svg";
import { IoPersonCircleOutline } from "react-icons/io5";
import {
     ShoppingCart, Bell, Heart
} from "@phosphor-icons/react/dist/ssr";

export default function ErrorPage() {
    return(
        <>
            <header className="flex flex-col justify-between text-xs">
                <nav className="flex justify-between p-4 bg-gray-800">
                <div>
                    <Link className="p-4 text-gray-300 hover:text-orange-400" href={"/"}>Home</Link>
                    <Link className="p-4 text-gray-300 hover:text-orange-400" href={"/CourseList"}>Cursos</Link>
                    <Link className="p-4 text-gray-300 hover:text-orange-400" href={"/About"}>Sobre</Link>
                    <Link className="p-4 text-gray-300 hover:text-orange-400" href={"BecomeInstructor"}>Torne-se um instrutor</Link>
                </div>
                <div>
                    <a className="p-4 text-gray-300">KZ</a>
                    <a className="p-4 text-gray-300">Português</a>
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
                    <div className="">
                        <IoPersonCircleOutline size={35} color='#FF6636'/>
                    </div>
                </div>
                </div>
            </header>
            <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen -mt-[5%]">
                <div className="flex justify-center items-center h-full  ">
                    <div className="w-[50%] space-y-6">
                        <h2 className="text-4xl text-gray-300">Error 404</h2>
                        <h2 className="text-4xl">Oops! Página não encontrada</h2>
                        <p className="text-gray-500 text-sm">Algo deu errado. Parece que sua solicitação não foi encontrada. Parece que o link está quebrado ou a página foi removida.</p>

                        <div className="flex mt-4 justify-between items-center text-gray-500"> 
                            <button className="text-white text-sm bg-laranja p-2 rounded-lg text-center px-10"><Link href={'/SignIn'}>Voltar</Link> </button>
                        </div>

                    </div>
                    
                </div>

                <div className="hidden md:flex items-center justify-center w-[80%]">
                    <image>
                        <Image src={imagem} alt='presentation' />
                    </image>
                </div>

            </div>

        </>
    )
        
}