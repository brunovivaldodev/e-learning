'use client'

import { useState } from 'react';
import { Bell } from "@phosphor-icons/react/dist/ssr/Bell";
import { Heart } from "@phosphor-icons/react/dist/ssr/Heart";
import {
    Faders, Star, ArrowLeft, User, ArrowRight, MagnifyingGlass, Cpu, Handshake, CreditCard,
    ChartBarHorizontal, BugDroid, PenNib, Megaphone, Package, Camera, Headset, FirstAidKit,
    CaretDown, CaretUp, Receipt, ShoppingCart
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
import { BsDownload } from "react-icons/bs";
import { HiOutlineDocumentText } from "react-icons/hi2";
import imagem from '../../../public/watch.png'
import Input from '../components/Input';
import { IoChatbubblesOutline } from "react-icons/io5";


export default function Watch_Course() {

    const [duracaoVisible, setDuracaoVisible] = useState(true);


    const duracoes = [
        { id: 0, name: '6-12 meses', isChecked: false, students: 200 },
        { id: 1, name: '3-6 meses', isChecked: false, students: 100 },
        { id: 2, name: '1-3 meses', isChecked: false, students: 750 },
        { id: 3, name: '1-4 semanas', isChecked: false, students: 25 },
        { id: 4, name: '1-7 dias', isChecked: false, students: 25 },
    ];

    const [duracoesStates, setDuracaoStates] = useState(duracoes);

    const handleToggleDuracoes = (id) => {
        setDuracaoStates((prevStates) => {
            const newStates = prevStates.map((state) => ({
                ...state,
                isChecked: state.id === id,
            }));
            return newStates;
        });
    };

    const toggleDuracao = () => {
        setDuracaoVisible(!duracaoVisible);
    };

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
                        <div className='hover:bg-laranja rounded-full p-2'>
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
                    <button className="bg-laranja p-3 text-sm text-white">Próxima leitura</button>
                </div>

            </div>
            <div className="flex p-5 gap-3">
                {/*Esquerdo*/}
                <div className="h-40 w-[70%] ">
                    <div className="space-y-2">
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
                    
                    <div className="flex space-x-10 text-gray-700">
                        <a className="hover:border-b-2 hover:border-orange-500 pb-3 p-3 text-center" href="#Descrição">Descrição</a>
                        <a className="hover:border-b-2 hover:border-orange-500 pb-3 p-3 text-center" href="#Notas">Notas da aula</a>
                        <a className="hover:border-b-2 hover:border-orange-500 pb-3 p-3 text-center" href="#File">Anexa arquivo</a>
                        <a className="hover:border-b-2 hover:border-orange-500 pb-3 p-3 text-center" href="#Comment">Comentários</a>
                    </div>

                    <div className="mt-10 space-y-4">
                        <h2 className="text-2xl font-semibold" id="Descrição">Descrição das palestras</h2>
                        <p className="text-sm text-gray-600">We cover everything you need to build your first website. From creating your first page through to uploading your website to the internet. We’ll use the world’s most popular (and free) web design tool called Visual Studio Code. There are exercise files you can download and then work along with me. At the end of each video I have a downloadable version of where we are in the process so that you can compare your project with mine. This will enable you to see easily where you might have a problem. We will delve into all the good stuff such as how to create your very own mobile burger menu from scratch learning some basic JavaScript and jQuery.</p>
                    </div>

                    <div className="mt-10 space-y-4">
                        <div className="flex justify-between items-center">
                            <h2 className="text-2xl font-semibold" id="Notas">Notas da aula </h2>
                            <button className="bg-peach p-3 text-sm text-orange-500 flex gap-2 items-center"><BsDownload color={'#FF6636'} /> <p>Baixar notas</p></button>
                        </div>
                        <p className="text-gray-600 text-sm">Nullam non quam a lectus finibus varius nec a orci. Aliquam efficitur sem cursus elit efficitur      lacinia
                            Morbi sit amet pretium tellus. Donec blandit fermentum tincidunt.
                            Proin iaculis sem et imperdiet tristique. Nam varius ac nisl id sodales. Donec iaculis interdum mattis.
                            Curabitur posuere ultricies diam in egestas.
                            Donec id diam et lacus pharetra vestibulum a id est. Mauris vestibulum massa quis elit feugiat, dictum maximus ipsum                               pellentesque.
                            Sed elementum, libero id lacinia aliquet, purus nibh consectetur mauris, eget interdum mi lacus vitae sem.
                            In ut aliquet ante. Curabitur mollis tincidunt turpis, sed aliquam mauris finibus vel. Praesent eget mi in mi maximus egestas. Mauris eget ipsum in justo bibendum pellentesque. Sed id arcu in arcu ullamcorper eleifend condimentum quis diam. Phasellus tempus, urna ut auctor mattis, nisi nunc tincidunt lorem, eu egestas augue lectus sit amet sapien. Maecenas tristique aliquet massa, a venenatis augue tempor in. Aliquam turpis urna, imperdiet in lacus a, posuere suscipit augue.
                        </p>
                    </div>

                    <div className="space-y-4 mt-10">
                        <h2 className="text-2xl font-semibold" id="File">Anexar arquivos</h2>
                        <div className="mt-5 p-4 bg-gray-100 flex justify-between items-center text-sm">
                            <div className="flex items-center space-x-4"><HiOutlineDocumentText color={'#FF6636'} size={35}/>
                                <div>
                                    <p>Crie uma conta em webflow.pdf</p>
                                    <p className="text-gray-500 text-xs">12.6 MB</p>
                                </div>
                                
                            </div>
                            <button className="bg-laranja p-2 text-white">Fazer Download Do Arquivo</button>
                        </div>
                    </div>

                    <div className="mt-10 ml-5">
                        <div className="flex items-center mb-5">
                            <h3 className="text-xl font-semibold" id="Comment">Comentários</h3>
                            <h3 className="text-xl ml-2"> (154)</h3>
                        </div>
                        <div className="flex space-x-2 mb-4">
                            <IoPersonCircleOutline size={35}/>
                            <div>
                                <div className="flex gap-2 items-center mb-1">
                                    <p className="text-sm">Malcolm Silva</p>
                                    <p className="text-[10px] text-gray-500">Há uma semana</p>
                                </div>
                                <p className="text-sm text-gray-600 mb-2">Gostei da aula, bem explicita</p>
                                <div className="flex gap-2 text-gray-600 items-center">
                                    <IoChatbubblesOutline size={18}/>
                                    <p className="text-xs">RESPONDER</p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    
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
                        <div className="border border-gray-100 mt-5">

                                <div className="flex justify-between items-center p-2" onClick={toggleDuracao} >
                                    <p className="flex items-center gap-1"><GrDown /> Começando</p><p className="flex items-center gap-1 text-gray-500"><LuPlayCircle color='#564FFD'/> 4 leituras <TbClockHour3 color='#FF6636' className='ml-2'/> 51m</p>
                                    {duracaoVisible ? <CaretUp size={20} /> : <CaretDown size={20} />}
                                </div>

                                {duracaoVisible && (

                                    <div id="duracao" className='p-2'>

                                        {duracoesStates.map(({ id, name, isChecked, students }) => (
                                            <div key={id} className='flex justify-between items-center mb-2'>
                                                <div className='flex'>
                                                    <Input id={id} name={name} isChecked={isChecked} onToggle={handleToggleDuracoes} />
                                                    <p className='text-xs text-gray-700 ml-2'>{name}</p>
                                                </div>
                                                <p className='text-xs text-gray-500'>{students}</p>
                                            </div>
                                        ))}

                                    </div>
                                )}
                        </div>
                    </div>
                </div>
                
            </div>
            
            
            
        </>
    )
}


