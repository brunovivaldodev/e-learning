'use client'
import { useState } from 'react';
import { PlayCircle, Trophy, CheckSquareOffset, Users, ArrowRight, ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import Curso from "../../components/CursoStudent";

interface props{
    name: string;
}

export default function Dashboard({name}:props) {

    const cursos = [
        { thumbnail: "/thumb1.png", lessons: "31. Saiba mais sobre web design", percentage: 3, title: "Learn Ethical Hacking From Scratch" },
        { thumbnail: "/thumb1.png", lessons: "7. Adicionando conteúdo ao site", percentage: 95, title: "SQL for NEWBS: Weekender Crash Course" },
        { thumbnail: "/thumb1.png", lessons: "1. Apresentações", percentage: 0, title: "Premiere Pro CC for Beginners." },
        { thumbnail: "/thumb1.png", lessons: "17. Centralizar Elementos", percentage: 14, title: "Graphic Design Masterclass " },
        { thumbnail: "/thumb1.png", lessons: "93. Estilo de fonte em nosso site", percentage: 67, title: "Ultimate Google Ads Training 2020" },
        { thumbnail: "/thumb1.png", lessons: "1. Apresentações", percentage: 0, title: "SEO 2021: Complete SEO Training" },
        { thumbnail: "/thumb1.png", lessons: "1. Considerações Finais", percentage: 99, title: "SEO 2021: Complete SEO Training" },

    ];

    const [startIndex, setStartIndex] = useState(0);

    const cursosToShow = cursos.slice(startIndex, startIndex + 4);

    const proximoCurso = () => {
        setStartIndex((prevIndex) => Math.min(prevIndex + 1, cursos.length - 4));
    };

    const cursoAnterior = () => {
        setStartIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    };

    return (

        <div >

            <p className="text-lg font-bold mt-5 mb-5">Painel</p>

            <div className="flex flex-col md:flex-row justify-between">

                <div className="flex bg-red-100 p-4 items-center">

                    <div className="bg-white p-3">
                        <PlayCircle size={25} color="red" weight="duotone" />
                    </div>

                    <div className="ml-5 pr-6">
                        <p className="text-xl">957</p>
                        <p className="text-xs text-gray-700 mt-1">Cursos Inscritos</p>
                    </div>

                </div>

                <div className="flex bg-indigo-100 p-4 items-center">

                    <div className="bg-white p-3">
                        <CheckSquareOffset size={25} color="blue" weight="duotone" />
                    </div>

                    <div className="ml-5 pr-6">
                        <p className="text-xl">6</p>
                        <p className="text-xs text-gray-700 mt-1">Cursos Activos</p>
                    </div>

                </div>

                <div className="flex bg-green-100 p-4 items-center">

                    <div className="bg-white p-3">
                        <Trophy size={25} color="green" weight="duotone" />
                    </div>

                    <div className="ml-5 pr-6">
                        <p className="text-xl">951</p>
                        <p className="text-xs text-gray-700 mt-1">Cursos Completos</p>
                    </div>

                </div>

                <div className="flex bg-orange-100 p-4 items-center">

                    <div className="bg-white p-3">
                        <Users size={25} color="orange" weight="duotone" />
                    </div>

                    <div className="ml-5 pr-8">
                        <p className="text-xl">241</p>
                        <p className="text-xs text-gray-700 mt-1">Instrutores</p>
                    </div>

                </div>

            </div>

            <div className="flex justify-between mt-5 mb-5">

                <p className="text-lg font-bold">Comece a aprender, {name}</p>

                <div className="flex">

                    <div className="bg-orange-100 p-2 mr-3" style={{ cursor: "pointer" }} onClick={cursoAnterior}>
                        <ArrowLeft size={20} color="orange" />
                    </div>
                    <div className="bg-orange-100 p-2" style={{ cursor: "pointer" }} onClick={proximoCurso}>
                        <ArrowRight size={20} color="orange" />
                    </div>

                </div>

            </div>

            <div className="flex flex-wrap justify-between">

            {cursosToShow.map((curso, index) => (
                    <Curso key={index} {...curso} />
                ))}

            </div>

        </div>


    );
}