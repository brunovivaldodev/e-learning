import Header from "@/app/components/Header";
import tumb from '../../../../public/listC.png' 
import Image from "next/image";
import { IoStar } from "react-icons/io5";
import { GoPerson } from "react-icons/go";
import Footer from "@/app/components/Footer";
import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";

export default function CourseList() {
    return(
        <>
            <Header/>
            <hr />
            <section className="flex flex-col justify-between text-xs mx-48 pt-10 mb-20">
                <nav className="flex justify-between p-4 mb-4">
                    <div className="space-x-6">
                        <input
                            className="w-36 h-10 border-orange-500 border-2 outline-none pl-2"
                            type="text"
                            placeholder="Filtros"
                        />
                        <input
                            className="w-72 h-10 border-2 outline-none pl-2"
                            type="text"
                            placeholder="UI/UX Design"
                        />
                    </div>
                    <div className="flex space-x-4 items-center">
                        <p>Procura por:</p>
                        <input
                            className="w-36 h-10 border-2 outline-none pl-2"
                            type="text"
                            placeholder="Treino"
                        />
                    </div>
                </nav>

                <hr className="mb-6"/>

                <div className="grid grid-cols-4 gap-4 justify-center">
                    <div className="w-60">
                        <image>
                            <Image src={tumb} alt='tumbnail' className="h-44" />
                        </image>
                        <div className="p-2 space-y-1 border-2 border-t-0">
                            <div className="flex justify-between">
                                <p className="text-[8px] text-purple-800 bg-purple-100 p-0.5 px-1">MARKETING</p>
                                <p className="text-orange-500">13$</p>
                            </div>
                            <p>Arquiteto de soluções certificado pela AWS Ultimate Associate 2021</p>
                        </div>
                        <div className="flex justify-between border-2 border-t-0 p-2">
                            <p className="flex items-center gap-2"><IoStar size={14} color='#FD8E1F'/>4.1</p>
                            <p className="flex items-center gap-2"><GoPerson size={14} color='#564FFD'/> 511,123 <p className="text-gray-500 text-[10px]">Estudantes</p></p>
                        </div>
                    </div>
                    <div className="w-60">
                        <image>
                            <Image src={tumb} alt='tumbnail' className="h-44" />
                        </image>
                        <div className="p-2 space-y-1 border-2 border-t-0">
                            <div className="flex justify-between">
                                <p className="text-[8px] text-purple-800 bg-purple-100 p-0.5 px-1">MARKETING</p>
                                <p className="text-orange-500">13$</p>
                            </div>
                            <p>Arquiteto de soluções certificado pela AWS Ultimate Associate 2021</p>
                        </div>
                        <div className="flex justify-between border-2 border-t-0 p-2">
                            <p className="flex items-center gap-2"><IoStar size={14} color='#FD8E1F'/>4.1</p>
                            <p className="flex items-center gap-2"><GoPerson size={14} color='#564FFD'/> 511,123 <p className="text-gray-500 text-[10px]">Estudantes</p></p>
                        </div>
                    </div>
                    <div className="w-60">
                        <image>
                            <Image src={tumb} alt='tumbnail' className="h-44" />
                        </image>
                        <div className="p-2 space-y-1 border-2 border-t-0">
                            <div className="flex justify-between">
                                <p className="text-[8px] text-purple-800 bg-purple-100 p-0.5 px-1">MARKETING</p>
                                <p className="text-orange-500">13$</p>
                            </div>
                            <p>Arquiteto de soluções certificado pela AWS Ultimate Associate 2021</p>
                        </div>
                        <div className="flex justify-between border-2 border-t-0 p-2">
                            <p className="flex items-center gap-2"><IoStar size={14} color='#FD8E1F'/>4.1</p>
                            <p className="flex items-center gap-2"><GoPerson size={14} color='#564FFD'/> 511,123 <p className="text-gray-500 text-[10px]">Estudantes</p></p>
                        </div>
                    </div>
                    <div className="w-60">
                        <image>
                            <Image src={tumb} alt='tumbnail' className="h-44" />
                        </image>
                        <div className="p-2 space-y-1 border-2 border-t-0">
                            <div className="flex justify-between">
                                <p className="text-[8px] text-purple-800 bg-purple-100 p-0.5 px-1">MARKETING</p>
                                <p className="text-orange-500">13$</p>
                            </div>
                            <p>Arquiteto de soluções certificado pela AWS Ultimate Associate 2021</p>
                        </div>
                        <div className="flex justify-between border-2 border-t-0 p-2">
                            <p className="flex items-center gap-2"><IoStar size={14} color='#FD8E1F'/>4.1</p>
                            <p className="flex items-center gap-2"><GoPerson size={14} color='#564FFD'/> 511,123 <p className="text-gray-500 text-[10px]">Estudantes</p></p>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center space-x-6 mt-10 text-base items-center">
                    <div className='hover:bg-peach hover:rounded-full p-4'>
                        <GoArrowLeft color='FF6636'/>
                    </div>
                    <ul className="flex space-x-3">
                        <li className="bg-peach rounded-full p-2 px-4 hover:bg-orange-500">1</li>
                        <li className="bg-peach rounded-full p-2 px-4 hover:bg-orange-500">2</li>
                        <li className="bg-peach rounded-full p-2 px-4 hover:bg-orange-500">3</li>
                        <li className="bg-peach rounded-full p-2 px-4 hover:bg-orange-500">4</li>
                        <li className="bg-peach rounded-full p-2 px-4 hover:bg-orange-500">5</li>
                    </ul>
                    <div className='hover:bg-peach hover:rounded-full p-4'>
                        <GoArrowRight color='FF6636'/>
                    </div>
                    
                </div>
            </section>
            <Footer/>

        </>
    )
}



                    