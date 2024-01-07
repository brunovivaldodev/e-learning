import React from 'react';
import Image from "next/image";
import course2 from "../../../public/course2.png";
import Button from "./Button"
import Button2 from "./Button2"

export default function Curso1() {
    return (

        <div className='flex flex-col w-1/4 mb-3'>

            <div className="flex flex-col m-1 border border-gray-100">

                <Image className="w-full p-0" src={course2} alt="course" />

                <p className="text-gray-500 text-xs p-2">Reiki Nível I, II e Programa Mestre/Professor</p>

                <p className="pl-2 pb-2 text-xs font-bold">1. Introdução</p>

                <div className="flex items-center justify-center justify-between border border-gray-100">
                    <Button2 buttonText="Assistir Aula"></Button2>
                    <p className="text-xs p-1.5 text-green-500">12% Completo</p>
                </div>

            </div>

        </div>

    );
}
