import Image from "next/image";
import pfp from "../../../public/pfp.webp";
import { IoPersonCircleOutline, IoPlayCircleSharp, IoStar } from "react-icons/io5";
import { BsPeople, BsWhatsapp } from "react-icons/bs";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { HiOutlineSquare2Stack } from "react-icons/hi2";
import Curso3 from "../components/Curso3";
import { IoIosArrowDown } from "react-icons/io";
import { RiLoader2Fill } from "react-icons/ri";
import Footer from "../components/Footer";
import {
    ShoppingCart,
} from "@phosphor-icons/react/dist/ssr";
import { Bell } from "@phosphor-icons/react/dist/ssr/Bell";
import { Heart } from "@phosphor-icons/react/dist/ssr/Heart";
import logo from "../../../public/logo.svg";
import Link from "next/link";


export default function InstructorProfile() {
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
            <div className="flex bg-peach justify-center w-full">

                <div className="flex w-3/4 mt-10 items-center bg-white border border-orange-200 p-5">

                    <image>
                        <Image className="rounded-full" style={{ width: '75px', height: '75px' }} src={pfp} alt="profile picture" />
                    </image>

                    <div className="ml-10 space-y-3">
                        <h1 className="font-bold text-sm">Francisca Tungumuna</h1>
                        <p className="text-gray-500 text-xs">Web Designer e instrutor mais vendido</p>
                        <div className="flex justify-between items-center gap-64">
                            <ul className="text-xs text-gray-500 flex items-center space-x-4">
                                <li className="flex gap-2 items-center"><IoStar size={15} color='#FD8E1F'/>4.9 Classificação do curso</li>
                                <li className="flex gap-2 items-center"><BsPeople size={18}  color={'#564FFD'}/>236,568 estudantes</li>
                                <li className="flex gap-2 items-center"><IoPlayCircleSharp size={18} color={'#FF6636'}/> 09 Cursos</li>
                            </ul>
                            <ul className="flex items-center gap-2">
                                <li className="bg-gray-100 p-2"><BsWhatsapp /></li>
                                <li className="bg-gray-100 p-2"><FaFacebookF /></li>
                                <li className="bg-gray-100 p-2"><FaTwitter /></li> 
                            </ul>
                        </div>
                        
                    </div>

                </div>
            </div>
            <div className="flex mt-6 justify-center">
                <div className="gap-2 w-3/4 flex">
                    <div className="w-[30%]">
                        <div className="border-2 border-gray-200 p-2 h-auto">
                            <h2>SOBRE MIM</h2>
                            <p className="text-gray-500 text-xs">Um dia, Vako se cansou da rotina das 9 às 5, ou mais, das 9 às 9, no caso dele, e largou o emprego, ou mais como foi demitido de sua própria startup. <br /><br />

                            Ele decidiu realizar seu sonho: ser seu próprio patrão, viajar pelo mundo, fazer apenas o trabalho que gosta e ganhar muito mais dinheiro no processo. Chega de implorar por dias de férias e viver de salário em salário. Depois de experimentar de tudo, desde lojas de comércio eletrônico até pôquer profissional, seu golpe de sorte veio quando ele começou como designer freelance. Vako se apaixonou pela área que lhe proporciona o estilo de vida dos seus sonhos. <br /> <br />

                            Vako percebe que quem faz cursos na Udemy quer transformar suas vidas. Hoje, com seus cursos e mentorias, Vako está ajudando milhares de pessoas a transformar suas vidas, assim como ele fez uma vez.
                            </p>
                        </div>
                    </div>
                    
                    <div>
                        <div className="flex space-x-10 text-gray-700">
                            <a className="hover:border-b-2 hover:border-orange-500 pb-3 p-3 text-center" href="#Cursos">Cursos</a>
                            <a className="hover:border-b-2 hover:border-orange-500 pb-3 p-3 text-center" href="#Análise">Análise</a>
                        </div>
                        <div className="space-y-3" id="Cursos">
                            <h2 className="text-xl"><b>Tungumuna Cursos</b> (02)</h2>
                            <div className="grid grid-cols-3 gap-2 w-full">
                            <Curso3 />
                            <Curso3 />
                            <Curso3 />
                            <Curso3 />
                            <Curso3/>
                            <Curso3/>
                            </div>
                        </div>

                    </div>
                    
                    
                </div>
                
            </div>
            <div className="flex justify-center mb-10 p-6" id="Análise">
                <div className="space-y-3 w-3/4">
                <div className="flex justify-between items-center">
                            <h1 className="text-2xl font-semibold">Feedback dos alunos</h1>
                            <button className="border-2 border-gray-300 flex justify-between space-x-2 p-2 text-xs items-center text-gray-500">
                                <p>Avaliação de 5 estrelas</p>
                                <IoIosArrowDown />
                            </button>
                            
                            
                        </div>
                        <div className="mb-4 space-y-2">
                            <div className="flex space-x-2">
                                <IoPersonCircleOutline size={35}/>
                                <div>
                                    <div className="flex gap-2 items-center mb-1">
                                        <p className="text-sm">Malcolm Silva</p>
                                        <p className="text-[10px] text-gray-500">Há uma semana</p>
                                    </div>
                                    <div className="flex space-x-0.5">
                                                <IoStar size={13} color='#FD8E1F'/>
                                                <IoStar size={13} color='#FD8E1F'/>
                                                <IoStar size={13} color='#FD8E1F'/>
                                                <IoStar size={13} color='#FD8E1F'/>
                                                <IoStar size={13} color='#FD8E1F'/>
                                    </div>
                                </div>
                            </div>
                            <p className="text-sm text-gray-600 mb-2 ml-10">Agradeço os vídeos curtos e precisos (10 minutos ou menos cada) porque vídeos excessivamente longos tendem a me fazer perder o foco. O instrutor tem muito conhecimento em Web Design e isso fica evidente ao compartilhar seu conhecimento. Esses foram meus melhores 6 meses de treinamento. Obrigado, Vako.</p>
                        </div>
                        <hr />
                        <button className="bg-peach text-[#FF6636] p-3 text-sm flex justify-between items-center gap-2">Carregue mais <RiLoader2Fill color={'#FF6636'}/></button>
                    </div>
                </div>
                        
            <Footer/>
        </>
    )
}