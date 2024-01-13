'use client'

import React from 'react';
import Image from "next/image";
import pfp from "../../../../public/pfp.webp";
import instrutor from "../../../../public/inscrutor1.png";
import Link from 'next/link';
import { Plus, MagnifyingGlass, DotsThree, PencilLine, PaperPlaneRight } from "@phosphor-icons/react/dist/ssr";
import Button from "../../components/Button"
import Button2 from "../../components/Button2"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Tab from "../../components/Tab"
import ProfileInfo from "../../components/ProfileInfo"


export default function Student() {

    return (

        <>
        <Header></Header>
        <div >

            <div className="flex flex-col bg-white justify-center items-center">

                <ProfileInfo></ProfileInfo>

                <Tab activeTab="Mensagens"></Tab>

                <div className="flex  w-3/4 bg-white mb-20 mt-5">

                    <div className="flex flex-col w-1/4 border border-gray-100">

                        <div className='p-2 '>

                            <div className='flex justify-between items-center justify-center mb-2'>

                                <div className='text-sm font-bold'>Mensagens</div>

                                <div className='flex bg-indigo-100 p-2'>
                                    <Plus className="text-indigo-600" size={15} />
                                    <div className='text-xs text-indigo-600 font-bold ml-1'>Escrever</div>
                                </div>

                            </div>

                            <div className="flex border border-gray-200 p-2 mt-1 items-center">
                                <MagnifyingGlass size={15} />
                                <input className="text-xs w-4/5" type="text" name="" id="" placeholder=" Search" />
                            </div>

                        </div>

                        <div className='flex flex-col'>

                            <div className='flex bg-orange-200 p-2 justify-between'>

                                <div className='flex items-center justify-center justify-between'>
                                    <div className='w-1/3'>
                                        <Image className="rounded-full" style={{ width: '40px', height: '40px' }} src={pfp} alt="profile picture" />
                                    </div>

                                    <div className='w-2/3 ml-2'>
                                        <p className='text-xs'>Francisca T.</p>
                                        <p className='text-xs mt-1 text-gray-700'>Claro</p>
                                    </div>
                                </div>
                                <div className=''>
                                    <p className='text-xs text-gray-700'>Agora mesmo</p>
                                </div>
                            </div>

                            <div className='flex p-2 justify-between'>

                                <div className='flex items-center justify-center justify-between'>
                                    <div className='w-1/3'>
                                        <Image className="rounded-full" style={{ width: '40px', height: '40px' }} src={instrutor} alt="profile picture" />
                                    </div>

                                    <div className='w-2/3 ml-2'>
                                        <p className='text-xs'>Daniel S.</p>
                                        <p className='text-xs mt-1 text-gray-700'>Sala 1, 16h</p>
                                    </div>
                                </div>
                                <div className=''>
                                    <p className='text-xs text-gray-700'>2d</p>
                                </div>
                            </div>

                            <div className='flex p-2 justify-between'>

                                <div className='flex items-center justify-center justify-between'>
                                    <div className='w-1/3'>
                                        <Image className="rounded-full" style={{ width: '40px', height: '40px' }} src={pfp} alt="profile picture" />
                                    </div>

                                    <div className='w-2/3 ml-2'>
                                        <p className='text-xs'>Caleta C.</p>
                                        <p className='text-xs mt-1 text-gray-700'>0 valores</p>
                                    </div>
                                </div>
                                <div className=''>
                                    <p className='text-xs text-gray-700'>Agora mesmo</p>
                                </div>
                            </div>



                        </div>




                    </div>

                    <div className='w-3/4 border border-gray-100 ml-3'>

                        <div className='flex p-4 border-b justify-between'>

                            <div className='flex items-center'>

                                <div className=''>
                                    <Image className="rounded-full w-full" style={{ width: '65px', height: '65px' }} src={instrutor} alt="profile picture" />
                                </div>

                                <div className='ml-4'>
                                    <p className='text-sm'>Daniel Sofrimento</p>
                                    <p className='text-xs mt-2 text-green-500'>Online</p>
                                </div>
                            </div>

                            <div className=''>

                                <div className='p-3 bg-gray-100'>
                                    <DotsThree size={20} />
                                </div>

                            </div>

                        </div>

                        <div className='flex justify-center m-2'>
                            <p className='bg-orange-100 p-1 text-xs text-gray-700'>Hoje</p>
                        </div>

                        <div>

                            <div className='flex flex-col m-2 w-2/3'>

                                <div className='flex m-1 items-center'>
                                    <div >
                                        <Image className="rounded-full w-full" style={{ width: '25px', height: '25px' }} src={instrutor} alt="profile picture" />
                                    </div>
                                    <p className='text-xs text-gray-600 p-1'>16:23</p>
                                </div>

                                <div className='bg-orange-100 p-2 text-xs m-1'>
                                    <p>Oi e obrigado por te inscreveres no curso. Se tiveres alguma dúvida sobre o curso ou sobre o Adobe XD, fique à vontade para entrar em contato</p>
                                </div>
                            </div>

                            <div className='flex flex-col m-2 items-end'>

                                <div className='flex m-1 items-center'>
                                    <p className='text-xs text-gray-600 p-1'>17:24</p>
                                </div>

                                <div className='bg-orange-500 p-2 text-xs w-2/3 m-1'>
                                    <p className='text-white'>Boa tarde, professor.</p>
                                </div>
                            </div>

                        </div>


                        <div className='flex border-t p-3'>

                            <div className="flex w-4/5 border border-gray-200 p-2 mt-1 items-center">
                                <PencilLine className="text-orange-500 " size={20} />
                                <input className="text-xs w-4/5" type="text" name="" id="" placeholder=" Escreva a sua mensagem" />
                            </div>

                            <div className="w-1/5 mt-1 ml-4">
                                <a className="flex text-xs p-2 text-white bg-orange-500 items-center justify-center" href="">
                                    Enviar <PaperPlaneRight className="ml-1" size={20} weight="fill" />
                                </a>
                            </div>

                        </div>

                    </div>
                </div>


            </div>

            <Footer></Footer>

        </div>
        </>
    );
}