'use client'
import { Bell } from "@phosphor-icons/react/dist/ssr/Bell";
import Image from "next/image";
import logo from "../../../public/logo.svg";
import pfp from "../../../public/pfp.webp";
import course2 from "../../../public/course2.png";
import { Star, MagnifyingGlass, ArrowLeft, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import Button from "../../components/Button"
import Button2 from "../../components/Button2"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Tab from "../../components/Tab"
import ProfileInfo from "../../components/ProfileInfo"
import Curso1 from "../../components/CursoComecado"
import CursoNovo from "../../components/CursoNovo"

export default function Student() {
    return (

        <div>
            <Header aux=''/>

            <div className="flex flex-col bg-white justify-center items-center">

                <ProfileInfo></ProfileInfo>

                <Tab activeTab="Cursos"></Tab>

                <div className="flex flex-col w-3/4 bg-white mb-20">

                    <div className="mt-5">
                        <span className="text-lg font-bold">Cursos</span>
                        <span className="text-lg font-thin"> (951)</span>
                    </div>

                    <div className="flex mt-5 justify-between">
                        <div className="w-1/3">
                            <p className="text-gray-600 text-xs">Procurar:</p>
                            <div className="flex border border-gray-200 p-2 mt-1 items-center">
                                <MagnifyingGlass size={15} />
                                <input className="text-xs w-full" type="text" name="" id="" placeholder=" Procura nos teus cursos..." />
                            </div>
                        </div>

                        <div className="w-1/6">
                            <p className="text-gray-600 text-xs">Ordenar por:</p>
                            <select className="flex text-xs text-gray-500 mt-1 border border-gray-200 p-2 justify-center items-center" name="" id="">
                                <option className="text-xs text-gray-500 p-2" value="">Recentes</option>
                                <option className="text-xs text-gray-500 p-2" value="">Antigos</option>
                            </select>
                        </div>

                        <div>
                            <p className="text-gray-600 text-xs">Estado:</p>
                            <select className="flex text-xs text-gray-500 mt-1 p-2 border border-gray-200 justify-center items-center" name="" id="">
                                <option className="text-xs text-gray-500 p-2" value="">Todos os cursos</option>
                                <option className="text-xs text-gray-500 p-2" value="">Activos</option>
                                <option className="text-xs text-gray-500 p-2" value="">Inscritos</option>
                            </select>
                        </div>

                        <div>
                            <p className="text-gray-600 text-xs">Instrutores:</p>
                            <select className="flex text-xs text-gray-500 mt-1 p-2 border border-gray-200 justify-center items-center" name="" id="">
                                <option className="text-xs text-gray-500 p-2" value="">Todos os instrutores</option>
                                <option className="text-xs text-gray-500 p-2" value="">Design</option>
                                <option className="text-xs text-gray-500 p-2" value="">CSS</option>
                                <option className="text-xs text-gray-500 p-2" value="">Python</option>
                                <option className="text-xs text-gray-500 p-2" value="">UI/UX</option>
                            </select>
                        </div>

                    </div>

                    <div className="flex flex-wrap mt-5">

                        <Curso1></Curso1>
                        <CursoNovo/>
                        <Curso1></Curso1>
                        <Curso1></Curso1>
                        <Curso1></Curso1>
                        <CursoNovo/>
                        <CursoNovo/>


                    </div>



                    <div className="flex mt-10 justify-center items-center">

                        <div className="bg-orange-100 rounded-full p-3 mr-5">
                            <ArrowLeft size={15} color="orange" />
                        </div>

                        <div className="text-xs bg-white-500 rounded-full p-3 mr-5">
                            <p>01</p>
                        </div>

                        <div className="text-xs bg-orange-500 text-white rounded-full p-3 mr-5">
                            <p>02</p>
                        </div>

                        <div className="text-xs bg-white-500 rounded-full p-3 mr-5">
                            <p>03</p>
                        </div>

                        <div className="text-xs bg-orange-100 text-orange-500 rounded-full p-3 mr-5">
                            <p>04</p>
                        </div>

                        <div className="text-xs bg-white-500 rounded-full p-3 mr-5">
                            <p>05</p>
                        </div>


                        <div className="bg-orange-100 rounded-full p-3">
                            <ArrowRight size={15} color="orange" />
                        </div>

                    </div>

                </div>

            </div>

            <Footer></Footer>

        </div>
    );
}