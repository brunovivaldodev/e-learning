'use client'

import Image from "next/image";
import pfp from "../../../public/pfp.webp";
import { Faders, Star, ArrowLeft, User, ArrowRight, MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";
import Header from "../components/Header"
import Footer from "../components/Footer"
import Curso from '../components/Curso'
import Link from 'next/link';

export default function Courses_List() {
    return (

        <div>
            <Header avatarUrl="none"/>

            <div className="bg-white justify-center">

                <div className="flex flex-col w-full justify-center items-center">

                    <div className="flex w-3/4 justify-between mt-5">

                        <div className="flex w-1/2">
                            <div className="p-2 border border-orange-100 w-1/4 m-1 flex justify-between items-center mr-3">
                                <Faders size={20} />
                                <Link href="list_filter">
                                    <p className="text-xs font-bold ml-2">Filtros</p>
                                </Link>
                                <p className="bg-orange-100 p-1 text-orange-500 ml-2 text-xs">3</p>
                            </div>

                            <div className="flex w-3/4 m-1 border border-gray-200 p-2 items-center">
                                <MagnifyingGlass size={15} />
                                <input className="text-xs w-full" type="text" name="" id="" placeholder=" Procura nos cursos..." />
                            </div>
                        </div>

                        <div className="flex items-center">
                            <p className="text-gray-600 text-xs mr-2">Ordenar por:</p>
                            <select className="flex text-xs text-gray-500 mt-1 border border-gray-200 p-2 justify-center items-center" name="" id="">
                                <option className="text-xs text-gray-500 p-2" value="">Cursos Terminados</option>
                                <option className="text-xs text-gray-500 p-2" value="">Cursos em progresso</option>
                            </select>
                        </div>

                    </div>

                    <div className="flex justify-end w-3/4 border-b pb-2 pt-2 border-grey-100 ">
                        <p className="text-xs text-gray-900 font-bold mr-1">1,234,567 resultados encontrados </p>
                        <p className="text-xs text-gray-500">"ui/ux design"</p>
                    </div>

                </div>

                <div className="flex justify-center">

                    <div className="flex flex-wrap mt-5 w-3/4">
                        <Curso></Curso>
                        <Curso></Curso>
                        <Curso></Curso>
                        <Curso></Curso>
                        <Curso></Curso>
                        <Curso></Curso>
                        <Curso></Curso>
                        <Curso></Curso>
                        <Curso></Curso>
                        <Curso></Curso>
                        <Curso></Curso>
                        <Curso></Curso>
                    </div>

                </div>


                <div className="flex mt-10 pb-10 justify-center items-center">

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

            <Footer></Footer>

        </div>
    );
}