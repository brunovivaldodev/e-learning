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

export default function CourseList() {
    return(
        <>
            <Header/>
            <hr />
            <section className="flex flex-col justify-between text-xs mx-48 pt-10 mb-20">
                <nav className="flex justify-between p-4 mb-4">
                    <div className="space-x-6">
                        <Link href='/Courses/list_filter' className="text-center w-36 h-10 border-orange-500 border-2 outline-none p-2.5">Filtros</Link>

                        <input
                            className="w-72 h-10 border-2 outline-none pl-2"
                            type="text"
                            placeholder="UI/UX Design"
                        />
                    </div>
                    <div className="flex space-x-4 items-center">
                        <p>Procura por:</p>
                        <input
                            className="w-36 h-10 border-2 outline-none pl-2"
                            type="text"
                            placeholder="Treino"
                        />
                    </div>
                </nav>

                <hr className="mb-6"/>

                <div className="grid grid-cols-4 gap-4 justify-center">
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



                    