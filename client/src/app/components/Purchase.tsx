'use client'

import React, { useState } from 'react';
import Image from "next/image";
import { PlayCircle, CurrencyDollarSimple, CreditCard, ArrowDown, ArrowUp, Star } from "@phosphor-icons/react/dist/ssr";

interface Curso {
    title: string;
    price: number;
    instructor: string;
    thumbnail: string;
    stars: number;
    students: number;
}

interface props {
    nCursos: number;
    data: string;
    cursos: Array<Curso>;
}

export default function Item({ nCursos, data, cursos }: props) {


    const [detailsVisible, setDetailsVisible] = useState(false);

    const toggleDetails = () => {
        setDetailsVisible(!detailsVisible);
    };

    const calculateTotalPrice = () => {
        return cursos.reduce((total, curso) => total + curso.price, 0);
    };

    const total = calculateTotalPrice();



    return (

        <div className='border border-gray-100 mb-3'>

            <div className='flex p-2 justify-between items-center border-b border-gray-100'>

                <div className=''>

                    <p className={detailsVisible ? 'text-sm text-orange-500' : 'text-sm text-black'} >{data}</p>

                    <div className='flex mt-2 mb-2'>

                        <div className='flex items-center mr-2'>
                            <PlayCircle size={20} color="indigo" />
                            <p className='text-xs text-gray-600 ml-1'>{nCursos} Cursos</p>
                        </div>

                        <div className='flex items-center mr-2'>
                            <CurrencyDollarSimple size={20} color="orange" />
                            <p className='text-xs text-gray-600 ml-1'>{total} AKZ</p>
                        </div>

                        <div className='flex items-center mr-2'>
                            <CreditCard size={20} color="green" />
                            <p className='text-xs text-gray-600 ml-1'>Cartão de Débito</p>
                        </div>

                    </div>

                </div>

                {detailsVisible ? (
                    <div className='p-2 bg-orange-500' style={{ cursor: 'pointer' }} onClick={toggleDetails}>

                        <ArrowUp size={20} weight="light" color="white" />
                    </div>

                ) : (
                    <div className='p-2 bg-gray-100' style={{ cursor: 'pointer' }} onClick={toggleDetails}>
                        <ArrowDown size={20} weight="light" />
                    </div>)}

            </div>

            {detailsVisible && (

                <div className='flex'>

                    <div className='flex w-2/4 flex-col border border-r border-gray-100'>

                        {cursos.map((curso, index) => (
                            <div key={index} className='flex justify-between p-2 '>
                                <image>
                                    <Image className="" width={120} height={100} src={curso.thumbnail} alt="course thumbnail" />
                                </image>
                                <div className='flex flex-col justify-between pl-2'>
                                    <div>
                                        <div className="flex items-center">
                                            <Star size={15} color="#FD8E1F" weight="fill" />
                                            <p className="font-bold p-1 text-xs">{curso.stars}</p>
                                            <p className='text-xs text-gray-700'>({curso.students} estudantes)</p>
                                        </div>
                                        <p className='text-sm font-bold'>{curso.title}</p>
                                    </div>
                                    <div className='flex'>
                                        <span className='text-xs text-gray-400'>Curso por: </span>
                                        <span className='text-xs text-gray-700 ml-1'>{curso.instructor}</span>
                                    </div>
                                </div>
                                <div className='flex items-center'>
                                    <p className='text-orange-600 font-bold'>{curso.price} AKZ</p>
                                </div>
                            </div>
                        ))}


                    </div>

                    <div className='flex w-2/4 flex-col items-center justify-center'>

                        <p className='text-lg'>{data}</p>

                        <div className='flex mt-2 mb-2'>

                            <div className='flex items-center mr-2'>
                                <PlayCircle size={20} color="indigo" />
                                <p className='text-xs text-gray-600 ml-1'>{nCursos} Cursos</p>
                            </div>

                            <div className='flex items-center mr-2'>
                                <CurrencyDollarSimple size={20} color="orange" />
                                <p className='text-xs text-gray-600 ml-1'>{total} AKZ</p>
                            </div>

                            <div className='flex items-center mr-2'>
                                <CreditCard size={20} color="green" />
                                <p className='text-xs text-gray-600 ml-1'>Cartão de Crédito</p>
                            </div>

                        </div>

                    </div>
                </div>

            )}



        </div>

    );
}