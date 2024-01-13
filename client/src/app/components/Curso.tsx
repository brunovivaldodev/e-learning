import React from 'react';
import Image from "next/image";
import { Star, User } from "@phosphor-icons/react/dist/ssr";
import course from "../../../public/course4.png";
import { IoStar } from 'react-icons/io5';
import { GoPerson } from 'react-icons/go';

export default function Curso() {
    return (

        <div className='flex w-1/4 flex-col mb-3'>

            <div className='m-1.5 border bg-white border-gray-100'>
                <Image className="w-full p-0" src={course} alt="course" />

                <div className='flex justify-between p-2 items-center justify-center'>
                    <p className='text-[10px] bg-red-100 p-1'>Programação</p>
                    <p className='text-sm text-orange-500 font-bold'>24000 AKZ</p>
                </div>

                <p className='text-[12px] p-2 font-bold'>Estrutura de Dados e Algoritmos (2021)</p>

                <div className='flex p-3 justify-between border border-gray-100'>

                    <div className='flex items-center'>
                        <IoStar size={14} color='#FD8E1F' />
                        <p className='text-xs pl-1 text-gray-700'>4.7</p>
                    </div>

                    <div className='flex items-center'>
                        <GoPerson size={14} color='#564FFD' />                        <span className='text-xs pl-1 text-gray-700'>451,444</span>
                        <span className='text-xs pl-1 text-gray-500'>students</span>
                    </div>

                </div>
            </div>

        </div>

    );
}
