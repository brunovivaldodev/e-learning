import { Bell } from "@phosphor-icons/react/dist/ssr/Bell";
import { Heart } from "@phosphor-icons/react/dist/ssr/Heart";
import {
  ShoppingCart,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import logo from "../../../public/logo.svg";
import Image from 'next/image'
import { IoPersonCircleOutline } from "react-icons/io5";
import { GoArrowLeft } from "react-icons/go";
import { FaRegFolderOpen } from "react-icons/fa";
import { LuPlayCircle } from "react-icons/lu";
import { TbClockHour3 } from "react-icons/tb";
import { GrDown } from "react-icons/gr";
import { IoPeopleCircleOutline } from "react-icons/io5";
import imagem from '../../../public/watch.png'


export default function Watch_Course() {
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
                    <div className="">
                        <IoPersonCircleOutline size={35} color='#FF6636'/>
                    </div>
                </div>
                </div>
            </header>
            <div className="flex justify-between items-center bg-gray-100 p-3">

                <div>
                    <div className="flex space-x-3 items-center">
                        <div className='hover:bg-orange-500 rounded-full p-2'>
                            <GoArrowLeft size={20}/>
                        </div>

                        <div className="space-y-2">
                            <p className="text-sm">Design responsivo de site completo: do Figma ao Webflow e ao design do site</p>
                            <div className="flex space-x-3 text-xs text-gray-500">
                                <ul className="text-xs flex items-center gap-1"><FaRegFolderOpen color='#FF6636'/> 6 secções</ul>
                                <ul className="text-xs flex items-center gap-1"><LuPlayCircle color='#564FFD'/> 202 leituras</ul>
                                <ul className="text-xs flex items-center gap-1"><TbClockHour3 color='#FF6636'/> 19h 37m</ul>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="space-x-3">
                    <button className="text-orange-500 bg-white p-3 text-sm">Escreva um crítica</button>
                    <button className="bg-orange-500 p-3 text-sm text-white">Próxima leitura</button>
                </div>

            </div>
            <div className="flex p-5 gap-3">
                {/*Esquerdo*/}
                <div className="h-40 w-[70%] space-y-3">
                    <Image src={imagem} alt="vídeo"/>
                    <h2 className="text-xl">2. Cadastre-se Webflow</h2>
                    <div className="flex justify-between">
                        <div className="flex items-center gap-1">
                            <IoPeopleCircleOutline size={35}/>
                            <div>
                                <p className="text-sm">502</p>
                                <p className="text-xs text-gray-500">Estudantes a assistir</p>
                            </div>
                        </div>
                        <div className="flex gap-3 text-xs text-gray-500">
                            <p>última actualização: Abril 23,2023</p>
                            <p>Comentários: 154</p>
                        </div>
                    </div>
                    <hr />
                </div>

                {/*Direito*/}
                <div className="w-[30%] space-y-3">
                    <div className="flex items-center justify-between">
                        <h2 className="text-lg font-semibold">Conteúdos do curso</h2>
                        <p className="text-sm text-green-600">15% completo</p>
                    </div>
                    <div className="flex">
                        <div className="w-[15%] border-2 border-green-600"></div>
                        <div className="w-[85%] border-2 border-gray-300"></div>
                    </div> 
                    <div>
                        <ul className="flex justify-between p-3 text-xs border-gray-300 border-[1px]"><p className="flex items-center gap-1"><GrDown /> Começando</p><p className="flex items-center gap-1 text-gray-500"><LuPlayCircle color='#564FFD'/> 4 leituras <TbClockHour3 color='#FF6636' className='ml-2'/> 51m</p></ul>
                        <ul className="flex justify-between p-3 text-xs border-gray-300 border-[1px]"><p className="flex items-center gap-1"><GrDown /> Segredo do Bom Desing</p><p className="flex items-center gap-1 text-gray-500"><LuPlayCircle color='#564FFD'/> 52 leituras <TbClockHour3 color='#FF6636' className='ml-2'/> 5h 5m</p></ul>
                        <ul className="flex justify-between p-3 text-xs border-gray-300 border-[1px]"><p className="flex items-center gap-1"><GrDown /> Pratique design como artista</p><p className="flex items-center gap-1 text-gray-500"><LuPlayCircle color='#564FFD'/> 43 leituras <TbClockHour3 color='#FF6636' className='ml-2'/>51m</p></ul>
                        <ul className="flex justify-between p-3 text-xs border-gray-300 border-[1px]"><p className="flex items-center gap-1"><GrDown /> Desenvolvimento Web</p><p className="flex items-center gap-1 text-gray-500"><LuPlayCircle color='#564FFD'/> 172 leituras <TbClockHour3 color='#FF6636' className='ml-2'/> 10h 6m</p></ul> 
                        <ul className="flex justify-between p-3 text-xs border-gray-300 border-[1px]"><p className="flex items-center gap-1"><GrDown /> Segredos para ser freelancer</p><p className="flex items-center gap-1 text-gray-500"><LuPlayCircle color='#564FFD'/> 21 leituras <TbClockHour3 color='#FF6636' className='ml-2'/> 38m</p></ul>
                        <ul className="flex justify-between p-3 text-xs border-gray-300 border-[1px]"><p className="flex items-center gap-1"><GrDown /> Avançada</p><p className="flex items-center gap-1 text-gray-500"><LuPlayCircle color='#564FFD'/> 39 leituras <TbClockHour3 color='#FF6636' className='ml-2'/> 1h 31m</p></ul>
                        <ul className="flex justify-between p-3 text-xs border-gray-300 border-[1px]"><p className="flex items-center gap-1"><GrDown /> Qual é o próximo</p><p className="flex items-center gap-1 text-gray-500"><LuPlayCircle color='#564FFD'/> 7 leituras <TbClockHour3 color='#FF6636' className='ml-2'/> 1h 17m</p></ul>
                    </div>
                </div>
            </div>
        </>
    )
}