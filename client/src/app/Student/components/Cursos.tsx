'use client'

import { Star, MagnifyingGlass, ArrowLeft, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import Curso from "../../components/CursoStudent"

export default function Cursos() {

    const cursos = [
        { thumbnail: "/thumb1.png", lessons: "31. Saiba mais sobre web design", percentage: 3, title: "Learn Ethical Hacking From Scratch" },
        { thumbnail: "/thumb1.png", lessons: "7. Adicionando conteúdo ao site", percentage: 95, title: "SQL for NEWBS: Weekender Crash Course" },
        { thumbnail: "/thumb1.png", lessons: "1. Apresentações", percentage: 0, title: "Premiere Pro CC for Beginners." },
        { thumbnail: "/thumb1.png", lessons: "17. Centralizar Elementos", percentage: 14, title: "Graphic Design Masterclass " },
        { thumbnail: "/thumb1.png", lessons: "93. Estilo de fonte em nosso site", percentage: 67, title: "Ultimate Google Ads Training 2020" },
        { thumbnail: "/thumb1.png", lessons: "1. Apresentações", percentage: 0, title: "SEO 2021: Complete SEO Training" },
    ];

    return (

        <div>
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

                {cursos.map((curso, index) => (
                    <Curso key={index} {...curso} />
                ))}

            </div>


        </div>

    );
}