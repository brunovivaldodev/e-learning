'use client'
import Header from "../components/Header";
import inst from "../../../public/aboutI.png";
import Image from "next/image";
import google from "../../../public/google.png";
import aboutR from "../../../public/aboutR.png";
import aboutA from "../../../public/aboutA.png";
import total from "../../../public/total.png";
import chevron from "../../../public/chevron.png";
import unitel from "../../../public/unitel.png";
import baker from "../../../public/bakerhughes.png";
import sistec from "../../../public/sistec.png";
import ncr from "../../../public/ncr.png";
import bai from "../../../public/bai.png";
import sonangol from "../../../public/sonangol.png";

import Footer from "@/app/components/Footer";

import { AiOutlineTeam, AiOutlineFileDone } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";
import { IoMdCloudDone } from "react-icons/io";
import { LuFiles } from "react-icons/lu";

import {
    SealCheck, GlobeHemisphereWest ,Users, Notebook, Stack  
} from "@phosphor-icons/react";

export default function About() {
    return(
        <div>
            <Header avatarUrl="/pfp.webp"/>
            
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="flex flex-col items-center p-24">
                    <div className="text-8xl text-gray-200 mb-4">2023-2026</div>
                    <h2 className="text-4xl mb-4">O objetivo é levar o conhecimento para o mundo todo</h2>
                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, doloribus nam dignissimos nostrum temporibus eos alias laborum, illum voluptate commodi repellendus. Ratione culpa voluptate enim mollitia. Consectetur ut beatae neque?</div>
                </div>

                <div className="flex items-center">
                    <Image src={inst} height={400} alt="Instrutores"/>
                </div>

            </div>
            <hr />

            <section className="flex items-center gap-8 mt-8 mx-24">
                <div className="w-96 mr-18">
                    <h2 className="text-3xl mb-4 font-bold">
                    Queremos crescer com o apoio de várias empresas
                    </h2>
                    <p className="text-sm">
                    Venha aprender com os instructores de muitas dessas empresas, e
                    capacite-se com os melhores profissionais do
                    mercado.
                    </p>
                </div>
                <div className="flex-1 grid grid-cols-4 gap-4">
                    <image>
                    <Image src={total} alt="total" />
                    </image>
                    <image>
                    <Image src={chevron} alt="google" />
                    </image>
                    <image>
                    <Image src={sonangol} alt="google" />
                    </image>
                    <image>
                    <Image src={unitel} alt="unitel" />
                    </image>
                    <image>
                    <Image src={baker} alt="total" />
                    </image>
                    <image>
                    <Image src={sistec} alt="google" />
                    </image>
                    <image>
                    <Image src={ncr} alt="google" />
                    </image>
                    <image>
                    <Image src={bai} alt="unitel" />
                    </image>
                </div>
            </section>

            <section className="flex items-center justify-center space-x-10 mt-8 mx-24 mb-8">  
            
                <div className="flex items-center space-x-2">
                    <div><Users  color="#FF6636" size={42} weight="duotone"/> </div>
                    <div className="flex-col">
                        <p className="text-2xl font-bold">67.1k</p>
                        <p className="text-sm">Estudantes</p></div>
                </div>

                <div className="flex items-center space-x-2">
                    <div><Notebook  color="#564FFD" size={42} weight="duotone"/> </div>
                    <div className="flex-col">
                        <p className="text-2xl font-bold">26k</p>
                        <p className="text-sm">Instrutores certificados</p></div>
                </div>
                <div className="flex items-center space-x-2">
                    <div><GlobeHemisphereWest  color='#E34444' size={42} weight="duotone"/></div>
                    <div className="flex-col">
                        <p className="text-2xl font-bold">72</p>
                        <p className="text-sm">Línguas</p></div>
                </div>
                <div className="flex items-center space-x-2">
                    <div><SealCheck color='green' size={42} weight="duotone"/> </div>
                    <div className="flex-col">
                        <p className="text-2xl font-bold">99.9%</p>
                        <p className="text-sm">Taxa de sucesso</p></div>
                </div>
                <div className="flex items-center space-x-2">
                    <div><Stack size={42} color='#FD8E1F' weight="duotone" /></div>
                    <div className="flex-col ">
                        <p className="text-2xl font-bold">57</p>
                        <p className="text-sm">Empresas confiáveis</p></div>
                </div>
                <div></div> 
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 w-full bg-peach">
                <div className="ml-20">
                    <Image height={365} src={aboutR} alt="Instrutores"/>
                </div>

                <div className="p-8 space-y-2 mx-20">
                    <p className="text-sm text-orange-500">NOSSA MISSÃO</p>
                    <p className="text-4xl font-semibold">Criar um link mais facilitado entre os alunos e professores</p>
                    <p>“Não podemos resolver nossos problemas com o mesmo pensamento que usamos quando os criamos.” — Albert Einstein. As instituições demoram a mudar. Os comitês são onde as boas ideias e o pensamento inovador morrem. Escolha agilidade em vez de dogma. Abrace e impulsione a mudança. Precisamos limpar a lousa e começar com um pensamento ousado e radical.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 w-full bg-gray-100 p-10">

            <div className="p-10 space-y-4 mx-28">
                    <p className="text-sm text-orange-500">A NOSSA GALERIA</p>
                    <p className="text-4xl font-semibold">Queremos perpetuar o conhecimento por varios anos</p>
                    <p>Fusce lobortis leo augue, sit amet tristique nisi commodo in. Aliquam ac libero quis tellus venenatis imperdiet. Sed sed nunc libero. Curabitur in urna ligula.  torquent per conubia nostra.</p>
                    <div className="flex bg-orange-500 w-40 h-10 p-2 text-white">
                        <a href="">Junta-se à família</a>
                    </div>
                </div>

                <div>
                    <Image src={aboutA} alt="aboutA"/>
                </div>

            </div>

            <div className="flex justify-center space-x-12 mx-28 p-12">
                <div className="">
                    <div className="bg-gray-200 text-center mb-4 w-80 h-32 p-4">
                    O E-Tutor serviu como uma luva. A equipa seleciona cursos novos e atualizados em seu mercado e os disponibiliza aos clientes.
                    </div>
                    <p className="text-center">Bruno Tela</p>
                    <p className="text-center text-sm">5º Ano, Engenharia Informática</p>
                </div>

                <div className="">
                    <div className="bg-gray-200 text-center mb-4 w-80 h-32 p-4">
                    O E-Tutor responde às necessidades do negócio de forma ágil. É a melhor solução para nossos funcionários e suas carreiras.
                    </div>
                    <p className="text-center">Cleusia dos Anjos</p>
                    <p className="text-center text-sm">1º Ano, Engenharia Informática</p>
                </div>

                <div className="">
                    <div className="bg-gray-200 text-center mb-4 w-80 h-32 p-4">
                    No total, foi um grande sucesso, eu recebia e-mails sobre como era um recurso fantástico.
                    </div>
                    <p className="text-center">Romeno do Rosário</p>
                    <p className="text-center text-sm">3º Ano, Engenharia Civil</p>
                </div>
            </div>
            
            <Footer/>

        </div>
    )
}