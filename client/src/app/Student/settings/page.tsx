import React from 'react';
import Image from "next/image";
import pfp from "../../../../public/pfp.webp";
import {  Eye, EyeSlash } from "@phosphor-icons/react/dist/ssr";
import Button from "../../components/Button"
import Button2 from "../../components/Button2"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Tab from "../../components/Tab"
import ProfileInfo from "../../components/ProfileInfo"


export default function Student() {
    
    
    return (

        <div >

            <div className="flex flex-col bg-white justify-center items-center">

                <ProfileInfo></ProfileInfo>

                <Tab activeTab="Definições"></Tab>

                <div className="flex flex-col w-3/4 bg-white mb-20">

                    <p className="text-lg font-bold mt-5 mb-5">Definições</p>

                    <div className="flex">

                        <div className="flex p-10 flex-col w-1/4 items-center justify-center border border-gray-100">

                            <image>
                                <Image className="w-full" src={pfp} alt="profile picture" />
                            </image>

                            <p className="mt-5 text-gray-600 text-xs text-center">O tamanho da imagem deve ser inferior a 1 MB e a proporção da imagem deve ser de 1:1</p>

                        </div>

                        <div className="flex flex-col w-3/4 ">

                            <div className="flex flex-col w-full ml-5">

                                <p className="text-xs">Nome Completo</p>

                                <div className="flex">
                                    <div className="flex w-1/2 mr-3 border border-gray-200 p-2 mt-1 items-center">
                                        <input className="text-xs w-full" type="text" name="" id="" placeholder="Primeiro nome" />
                                    </div>

                                    <div className="flex w-1/2 border border-gray-200 p-2 mt-1 items-center">
                                        <input className="text-xs w-full" type="text" name="" id="" placeholder="Último nome" />
                                    </div>
                                </div>

                                <p className="text-xs mt-3">Nome de Utilizador</p>

                                <div className="flex w-full border border-gray-200 p-2 mt-1 items-center">
                                    <input className="text-xs w-full" type="text" name="" id="" placeholder="Escreva o seu nome de utilizador" />
                                </div>

                                <p className="text-xs mt-3">Email</p>

                                <div className="flex w-full border border-gray-200 p-2 mt-1 items-center">
                                    <input className="text-xs w-full" type="text" name="" id="" placeholder="Endereço de email" />
                                </div>

                                <p className="text-xs mt-3">Título</p>

                                <div className="flex w-full border border-gray-200 p-2 mt-1 items-center">
                                    <textarea placeholder="O seu título, profissão ou pequena biografia" className="text-xs w-full resize-none" name="" id=""></textarea>
                                </div>



                            </div>

                            <div className="w-1/5 mt-3 ml-5">
                                <a className="flex text-xs p-3 text-white bg-orange-500 items-center justify-center" href="">
                                    Salvar Alterações
                                </a>
                            </div>

                        </div>

                    </div>

                    <p className="text-lg font-bold mt-5">Alterar Password</p>

                    <div className="flex flex-col w-1/3">

                        <p className="text-xs mt-3">Password Actual</p>

                        <div className="flex w-full border border-gray-200 p-2 mt-1 items-center">
                            <input
                                className="text-xs w-full"
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Password"
                            />
                            <EyeSlash size={15}></EyeSlash>
                            
                        </div>

                        <p className="text-xs mt-4 text-gray-900">Nova Password</p>

                        <div className="flex w-full border border-gray-200 p-2 mt-1 items-center">
                            <input
                                className="text-xs w-full"
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Password"
                            />
                            <EyeSlash size={15}></EyeSlash>
                            
                        </div>

                        <p className="text-xs mt-4">Confirmar Password</p>

                        <div className="flex w-full border border-gray-200 p-2 mt-1 items-center">
                            <input
                                className="text-xs w-full"
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Confirmar nova password"
                            />
                            <EyeSlash size={15}></EyeSlash>
                            
                        </div>



                        <div className="w-2/5 mt-4">
                            <a className="flex text-xs p-3 text-white bg-orange-500 items-center justify-center" href="">
                                Alterar password
                            </a>
                        </div>


                    </div>




                </div>


            </div>

            <Footer></Footer>

        </div>
    );
}