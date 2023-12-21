'use client'
import { useState } from 'react';
import { PlayCircle, Trophy, CheckSquareOffset, Users, ArrowRight, ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import Tab from "../../components/Tab"
import ProfileInfo from "../../components/ProfileInfo"
import CursoNovo from "../../components/CursoNovo"
import CursoComecado from "../../components/CursoComecado"


export default function Student() {

    const [currentIndex, setCurrentIndex] = useState(0);

    const totalCursos = 5;
    const cursosPorPagina = 4;

    const cursos = Array.from({ length: totalCursos }, (_, index) => {
        return index % 2 === 0 ? <CursoNovo key={index} /> : <CursoComecado key={index} />;
    });

    const cursosExibidos = Array.from({ length: cursosPorPagina }, (_, index) => {
        const cursoIndex = (currentIndex + index) % totalCursos;
        return cursos[cursoIndex];
    });

    const proximoCurso = () => {
        setCurrentIndex((prevIndex) => {
            const nextIndex = (prevIndex + 1) % totalCursos;
            return nextIndex === 0 ? prevIndex : nextIndex;
        });
    };

    const cursoAnterior = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex > 0 ? prevIndex - 1 : prevIndex
        );
    };

    return (

        <div >

            <div className="flex flex-col bg-white justify-center items-center">

                <ProfileInfo></ProfileInfo>

                <Tab activeTab="Painel"></Tab>

                <div className="flex flex-col w-3/4 bg-white mb-20">

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

                        <p className="text-lg font-bold">Comece a aprender, Kamila</p>

                        <div className="flex">

                            <div className="bg-orange-100 p-2 mr-3" onClick={cursoAnterior}>
                                <ArrowLeft size={20} color="orange" />
                            </div>
                            <div className="bg-orange-100 p-2" onClick={proximoCurso}>
                                <ArrowRight size={20} color="orange" />
                            </div>

                        </div>

                    </div>

                    <div className="flex flex-wrap justify-between">

                        {cursosExibidos}

                    </div>

                </div>

            </div>

        </div>
    );
}