'use client'

import { Star, MagnifyingGlass, ArrowLeft, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import Instrutor from "../../components/Instrutor";
import pfp from "../../../../public/instrutor.png";

export default function Instrutores() {

    const instrutores = [
        { avatarUrl: "/instrutor.png", name: "Sediangani Sofrimento", description: "Desenvolvedor Web", stars: "0.0", students: "10000" },
        { avatarUrl: "/instrutor.png", name: "Stephen Strange", description: "Mestre das Artes Místicas", stars: "5.0", students: "100000" },
        { avatarUrl: "/instrutor.png", name: "Wanda Maximoff", description: "Chaos Witch?", stars: "1.2", students: "10000" },
        { avatarUrl: "/instrutor.png", name: "Stephen Strange", description: "Mestre das Artes Místicas", stars: "5.0", students: "100000" },
        { avatarUrl: "/instrutor.png", name: "Sediangani Sofrimento", description: "Desenvolvedor Web", stars: "0.0", students: "10000" },
        { avatarUrl: "/instrutor.png", name: "Stephen Strange", description: "Mestre das Artes Místicas", stars: "5.0", students: "100000" },
        { avatarUrl: "/instrutor.png", name: "Stephen Strange", description: "Mestre das Artes Místicas", stars: "5.0", students: "100000" },
        { avatarUrl: "/instrutor.png", name: "Stephen Strange", description: "Mestre das Artes Místicas", stars: "5.0", students: "100000" }

    ]
    return (

        <div >

            <div className="mt-5">
                <span className="text-lg font-bold">Instrutores</span>
                <span className="text-lg font-thin"> (241)</span>
            </div>

            <div className="flex mt-5 justify-between">

                <div className="w-1/2">
                    <p className="text-gray-600 text-xs">Procurar:</p>
                    <div className="flex border border-gray-200 p-2 mt-1 items-center">
                        <MagnifyingGlass size={15} />
                        <input className="text-xs w-full" type="text" name="" id="" placeholder=" Procura nos teus instrutores..." />
                    </div>
                </div>

                <div>
                    <p className="text-gray-600 text-xs">Cursos:</p>
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

            <div className="flex flex-wrap mt-5 justify-between">

                {instrutores.map((instrutor, index) => (
                    <Instrutor key={index} {...instrutor} />
                ))}

            </div>


        </div>


    );
}