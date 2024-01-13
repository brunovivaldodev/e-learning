'use client'

import React from 'react';
import Image from "next/image";
import thumb1 from "../../../../public/thumb1.png";
import thumb2 from "../../../../public/thumb2.png";
import thumb3 from "../../../../public/thumb3.png";
import { PlayCircle, CurrencyDollarSimple, CreditCard, ArrowDown, ArrowUp, Star } from "@phosphor-icons/react/dist/ssr";


export default function Student() {

    return (

        <div >

            <p className="text-lg font-bold mt-5 mb-5">Histórico de compra</p>

            <div className='flex border border-gray-100 p-2 justify-between items-center mb-5'>

                <div>

                    <p className='text-sm'>1 de Setembro, 2023 às 11:30</p>

                    <div className='flex mt-2'>

                        <div className='flex items-center mr-2'>
                            <PlayCircle size={20} color="indigo" />
                            <p className='text-xs text-gray-600 ml-1'>1 Curso</p>
                        </div>

                        <div className='flex items-center mr-2'>
                            <CurrencyDollarSimple size={20} color="orange" />
                            <p className='text-xs text-gray-600 ml-1'>35000 AKZ</p>
                        </div>

                        <div className='flex items-center mr-2'>
                            <CreditCard size={20} color="green" />
                            <p className='text-xs text-gray-600 ml-1'>Cartão de Crédito</p>
                        </div>

                    </div>

                </div>

                <div className='p-2 bg-gray-100' style={{ cursor: 'pointer' }}>
                    <ArrowDown size={20} weight="light" />
                </div>

            </div>

            <div className='border border-gray-100'>

                <div className='flex p-2 justify-between items-center border-b border-gray-100'>

                    <div className=''>

                        <p className='text-sm text-orange-500'>30 de Janeiro, 2023 às 21:53</p>

                        <div className='flex mt-2 mb-2'>

                            <div className='flex items-center mr-2'>
                                <PlayCircle size={20} color="indigo" />
                                <p className='text-xs text-gray-600 ml-1'>3 Cursos</p>
                            </div>

                            <div className='flex items-center mr-2'>
                                <CurrencyDollarSimple size={20} color="orange" />
                                <p className='text-xs text-gray-600 ml-1'>85000 AKZ</p>
                            </div>

                            <div className='flex items-center mr-2'>
                                <CreditCard size={20} color="green" />
                                <p className='text-xs text-gray-600 ml-1'>Cartão de Crédito</p>
                            </div>

                        </div>

                    </div>

                    <div className='p-2 bg-orange-500' style={{ cursor: 'pointer' }}>
                        <ArrowUp size={20} weight="light" color="white" />
                    </div>

                </div>

                <div className='flex'>

                    <div className='flex w-2/4 flex-col border border-r border-gray-100'>

                        <div className='flex justify-between p-2 '>

                            <image>
                                <Image className="" style={{ width: '120px', height: '100px' }} src={thumb1} alt="course thumbnail" />
                            </image>

                            <div className='flex flex-col justify-between pl-2'>

                                <div >
                                    <div className="flex items-center">
                                        <Star size={15} color="#FD8E1F" weight="fill" />
                                        <p className="font-bold p-1 text-xs">3.3</p>
                                        <p className='text-xs text-gray-700'>(1270 críticas)</p>
                                    </div>

                                    <p className='text-sm font-bold'>Learn Ethical Hacking from Scratch</p>
                                </div>

                                <div className='flex'>
                                    <span className='text-xs text-gray-400'>Curso por: </span>
                                    <span className='text-xs text-gray-700 ml-1'> Daniel Sofrimento</span>
                                </div>

                            </div>

                            <div className='flex items-center'>
                                <p className='text-orange-600 font-bold'>45000 AKZ</p>
                            </div>

                        </div>

                        <div className='flex justify-between p-2'>

                            <image>
                                <Image className="" style={{ width: '120px', height: '100px' }} src={thumb2} alt="course thumbnail" />
                            </image>

                            <div className='flex flex-col justify-between'>

                                <div >
                                    <div className="flex items-center">
                                        <Star size={15} color="#FD8E1F" weight="fill" />
                                        <p className="font-bold p-1 text-xs">5.0</p>
                                        <p className='text-xs text-gray-700'>(200 críticas)</p>
                                    </div>

                                    <p className='text-sm font-bold'>Mega Digital Marketing Course</p>
                                </div>

                                <div className='flex'>
                                    <span className='text-xs text-gray-400'>Curso por: </span>
                                    <span className='text-xs text-gray-700 ml-1'> Bunga Teca</span>
                                </div>

                            </div>

                            <div className='flex items-center'>
                                <p className='text-orange-600 font-bold'>20000 AKZ</p>
                            </div>

                        </div>

                        <div className='flex justify-between p-2'>

                            <image>
                                <Image className="" style={{ width: '120px', height: '100px' }} src={thumb1} alt="course thumbnail" />
                            </image>

                            <div className='flex flex-col justify-between'>

                                <div >
                                    <div className="flex items-center">
                                        <Star size={15} color="#FD8E1F" weight="fill" />
                                        <p className="font-bold p-1 text-xs">5.0</p>
                                        <p className='text-xs text-gray-700'>(200 críticas)</p>
                                    </div>

                                    <p className='text-sm font-bold'>iPhone Photography</p>
                                </div>

                                <div className='flex'>
                                    <span className='text-xs text-gray-400'>Curso por: </span>
                                    <span className='text-xs text-gray-700 ml-1'> Francisca Tungumuna</span>
                                </div>

                            </div>

                            <div className='flex items-center'>
                                <p className='text-orange-600 font-bold'>20000 AKZ</p>
                            </div>

                        </div>


                    </div>

                    <div className='flex w-2/4 flex-col items-center justify-center'>

                        <p className='text-lg'>30 de Janeiro, 2023 às 21:53</p>

                        <div className='flex mt-2 mb-2'>

                            <div className='flex items-center mr-2'>
                                <PlayCircle size={20} color="indigo" />
                                <p className='text-xs text-gray-600 ml-1'>3 Cursos</p>
                            </div>

                            <div className='flex items-center mr-2'>
                                <CurrencyDollarSimple size={20} color="orange" />
                                <p className='text-xs text-gray-600 ml-1'>85000 AKZ</p>
                            </div>

                            <div className='flex items-center mr-2'>
                                <CreditCard size={20} color="green" />
                                <p className='text-xs text-gray-600 ml-1'>Cartão de Crédito</p>
                            </div>

                        </div>

                    </div>
                </div>

            </div>

            <div className='flex border border-gray-100 p-2 justify-between items-center mt-5'>

                <div className=''>

                    <p className='text-sm'>1 de Agosto, 2022 às 11:30</p>

                    <div className='flex mt-2'>

                        <div className='flex items-center mr-2'>
                            <PlayCircle size={20} color="indigo" />
                            <p className='text-xs text-gray-600 ml-1'>1 Curso</p>
                        </div>

                        <div className='flex items-center mr-2'>
                            <CurrencyDollarSimple size={20} color="orange" />
                            <p className='text-xs text-gray-600 ml-1'>35000 AKZ</p>
                        </div>

                        <div className='flex items-center mr-2'>
                            <CreditCard size={20} color="green" />
                            <p className='text-xs text-gray-600 ml-1'>Cartão de Crédito</p>
                        </div>

                    </div>

                </div>

                <div className='p-2 bg-gray-100' style={{ cursor: 'pointer' }}>
                    <ArrowDown size={20} weight="light" />
                </div>

            </div>
        </div>



    );
}