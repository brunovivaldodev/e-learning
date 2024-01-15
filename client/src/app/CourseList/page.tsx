import Header from "@/app/components/Header";
import tumb from '../../../public/listC.png' 
import Image from "next/image";
import { IoStar } from "react-icons/io5";
import { GoPerson } from "react-icons/go";
import Footer from "@/app/components/Footer";
import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";
import Link from "next/link";
import Curso from "../components/Curso";
import Curso3 from "../components/Curso3";
import {
    Faders,  MagnifyingGlass
} from "@phosphor-icons/react/dist/ssr";

export default function CourseList() {
    return(
        <>
            <Header/>
            <hr />
            <section className="flex flex-col justify-between text-xs mx-48 pt-10 mb-20">
            <div className="flex flex-col w-full justify-center items-center">

                <div className="flex w-full justify-between mt-5">

                    <div className="flex w-1/2">
                        <div className="p-2 border border-orange-600 w-1/4 m-1 flex justify-between items-center mr-3">
                            <Faders size={20} className="text-orange-600" />
                            <p className="text-xs font-bold ml-2 text-orange-600 pr-1">Filtros</p>
                        </div>

                        <div className="flex w-3/4 m-1 border border-gray-200 p-2 items-center">
                            <MagnifyingGlass size={15} />
                            <input className="text-xs w-full outline-none" type="text" name="" id="" placeholder=" Procura nos cursos..." />
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

                <div className="flex justify-end w-full border-b pb-2 pt-2 border-grey-100 ">
                    <p className="text-xs text-gray-900 font-bold mr-1">1,234,567 resultados encontrados </p>
                    <p className="text-xs text-gray-500">"ui/ux design"</p>
                </div>

            </div>

                <hr className="mb-6"/>

                <div className="grid grid-cols-4 gap-2 justify-center">
                    <Curso3/>
                    <Curso3/>
                    <Curso3/>
                    <Curso3/>
                    <Curso3/>
                    <Curso3/>
                    <Curso3/>
                    <Curso3/>
                    <Curso3/>
                    <Curso3/>
                    <Curso3/>
                    <Curso3/>
                </div>

                <div className="flex justify-center space-x-6 mt-10 text-base items-center">
                    <div className='hover:bg-peach hover:rounded-full p-4'>
                        <GoArrowLeft color='FF6636'/>
                    </div>
                    <ul className="flex space-x-3">
                        <li className="bg-peach rounded-full p-2 px-4 hover:bg-orange-500">1</li>
                        <li className="bg-peach rounded-full p-2 px-4 hover:bg-orange-500">2</li>
                        <li className="bg-peach rounded-full p-2 px-4 hover:bg-orange-500">3</li>
                        <li className="bg-peach rounded-full p-2 px-4 hover:bg-orange-500">4</li>
                        <li className="bg-peach rounded-full p-2 px-4 hover:bg-orange-500">5</li>
                    </ul>
                    <div className='hover:bg-peach hover:rounded-full p-4'>
                        <GoArrowRight color='FF6636'/>
                    </div>
                    
                </div>
            </section>
            <Footer/>

        </>
    )
}



                    