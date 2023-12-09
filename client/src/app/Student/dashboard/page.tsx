import Image from "next/image";
import pfp from "../../../../public/pfp.webp";
import course1 from "../../../../public/course-thumbnail.png";
import { PlayCircle, Trophy, CheckSquareOffset, Users, ArrowRight, ArrowLeft } from "@phosphor-icons/react/dist/ssr";
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

                <Tab activeTab="Painel"></Tab>

                <div className="flex flex-col w-3/4 bg-white mb-20">

                    <p className="text-lg font-bold mt-5 mb-5">Painel</p>

                    <div className="flex flex-col md:flex-row justify-between">

                        <div className="flex bg-red-100 p-4 items-center">

                            <div className="bg-white p-3">
                                <PlayCircle size={25} color="red" weight="duotone"/>
                            </div>

                            <div className="ml-5 pr-6">
                                <p className="text-xl">957</p>
                                <p className="text-xs text-gray-700 mt-1">Cursos Inscritos</p>
                            </div>

                        </div>

                        <div className="flex bg-indigo-100 p-4 items-center">

                            <div className="bg-white p-3">
                                <CheckSquareOffset size={25} color="blue" weight="duotone"/>
                            </div>

                            <div className="ml-5 pr-6">
                                <p className="text-xl">6</p>
                                <p className="text-xs text-gray-700 mt-1">Cursos Activos</p>
                            </div>

                        </div>

                        <div className="flex bg-green-100 p-4 items-center">

                            <div className="bg-white p-3">
                                <Trophy size={25} color="green" weight="duotone"/>
                            </div>

                            <div className="ml-5 pr-6">
                                <p className="text-xl">951</p>
                                <p className="text-xs text-gray-700 mt-1">Cursos Completos</p>
                            </div>

                        </div>

                        <div className="flex bg-orange-100 p-4 items-center">

                            <div className="bg-white p-3">
                                <Users size={25} color="orange" weight="duotone"/>
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

                            <div className="bg-orange-100 p-2 mr-3">
                                <ArrowLeft size={20} color="orange" />
                            </div>

                            <div className="bg-orange-100 p-2">
                                <ArrowRight size={20} color="orange" />
                            </div>


                        </div>

                    </div>


                    <div className="flex bg-white justify-between">

                        <div className="flex w-1/4 mr-3 flex-col border border-gray-100">

                            <Image src={course1} alt="course" />

                            <p className="text-gray-500 text-xs p-2">Reiki Nível I, II e Programa Mestre/Professor</p>

                            <p className="pl-2 pb-2 text-xs font-bold">1. Introdução</p>

                            <div className="border border-gray-100">
                                <Button buttonText="Assistir Aula"></Button>
                            </div>

                        </div>

                        <div className="flex w-1/4 mr-3 flex-col border border-gray-100">

                            <Image src={course1} alt="course" />

                            <p className="text-gray-500 text-xs p-2">Reiki Nível I, II e Programa Mestre/Professor</p>

                            <p className="pl-2 pb-2 text-xs font-bold">1. Introdução</p>

                            <div className="flex items-center justify-center justify-between border border-gray-100">
                                <Button2 buttonText="Assistir Aula"></Button2>
                                <p className="text-xs p-1.5 text-green-500">61% Completo</p>
                            </div>

                        </div>

                        <div className="flex w-1/4 mr-3 flex-col border border-gray-100">

                            <Image src={course1} alt="course" />

                            <p className="text-gray-500 text-xs p-2">Reiki Nível I, II e Programa Mestre/Professor</p>

                            <p className="pl-2 pb-2 text-xs font-bold">1. Introdução</p>

                            <div className="border border-gray-100">
                                <Button buttonText="Assistir Aula"></Button>
                            </div>

                        </div>

                        <div className="flex w-1/4 flex-col border border-gray-100">

                            <Image src={course1} alt="course" />

                            <p className="text-gray-500 text-xs p-2">Reiki Nível I, II e Programa Mestre/Professor</p>

                            <p className="pl-2 pb-2 text-xs font-bold">1. Introdução</p>

                            <div className="flex items-center justify-center justify-between border border-gray-100">
                                <Button2 buttonText="Assistir Aula"></Button2>
                                <p className="text-xs p-1.5 text-green-500">12% Completo</p>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

            <Footer></Footer>

        </div>
    );
}