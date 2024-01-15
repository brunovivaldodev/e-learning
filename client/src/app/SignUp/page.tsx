import Image from "next/image"
import logo from '../../../public/logo.svg'
import sign from '../../../public/SignUp.png'
import { GoArrowRight } from "react-icons/go";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoApple } from "react-icons/io";


export default function SignUp() {
    return(
        <>
            <header className="flex justify-between items-center mx-[13%] m-[1%]">
                <div className="flex items-center">
                    <image>
                        <Image src={logo} alt="logo" />
                    </image>
                </div>
                <div className="space-x-2">
                    <Link className="text-gray-500 outline-none text-sm" href="/SignIn">Já tenho uma conta</Link> 
                    <button className="bg-peach text-orange-500 p-3 rounded-lg text-sm">Fazer login</button>
                </div>
            </header>

            <hr />
            <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen gap-2">
                <div className="hidden md:flex items-center justify-center">
                    <image>
                        <Image src={sign} alt='presentation' />
                    </image>
                </div>

                <div className="flex justify-center items-center h-full -mt-[5%] w-[75%]">
                    <form action="" className="w-full">
                        <h1 className="font-bold text-2xl mb-8 text-center">Crie a sua conta</h1>
                        <hr />
                        <div className="mt-4 flex flex-col space-y-2">
                            <label htmlFor="nome" className="">Nome Completo</label>
                            <div className="space-x-4">
                                <input type="text" name="nome" id="nome" className="border-2 border-gray-400 rounded-lg p-2 outline-none"    placeholder="Primeiro nome..." />
                                <input type="text" name="unome" id="unome" className="border-2 border-gray-400 rounded-lg p-2 outline-none"    placeholder="Ultimo nome..." />
                            </div>

                            <label htmlFor="user">Username</label>
                            <div>
                                <input type="text" name="user" id="user" className="border-2 border-gray-400 rounded-lg p-2 w-full outline-none"    placeholder="Username..." />
                            </div>

                            <label htmlFor="email">Email</label>
                            <div>
                                <input type="email" name="user" id="user" className="border-2 border-gray-400 rounded-lg p-2 w-full outline-none"    placeholder="Endereço de email" />
                            </div>

                            <label htmlFor="password" className="">Password</label>
                            <div className="space-x-4">
                                <input type="password" name="password" id="password" className="border-2 border-gray-400 rounded-lg p-2 outline-none"    placeholder="Criar Password" />
                                <input type="password" name="password" id="password" className="border-2 border-gray-400 rounded-lg p-2 outline-none"    placeholder="Confirmar password" />
                            </div>
                            
                        </div>

                        <div className="flex mt-4 justify-between items-center text-gray-500"> 
                            <p className="text-sm"><input
                                type="checkbox"
                                id="checkbox"
                                className="mr-2"
                            /> Concordo com os <a href="" className="text-blue-400">Termos & condições</a></p>
                            <button className="text-white text-sm bg-laranja p-2 rounded-lg flex justify-between items-center gap-2 px-10">Criar Conta <GoArrowRight/></button>
                        </div>

                        
                        
                        <div className="flex justify-between text-xs mt-10">
                            
                            <button className="border-gray-400 border-2 rounded-lg p-2 flex justify-between items-center gap-4 px-6"><FcGoogle size={16} className='-ml-4'/> <hr className="h-4 border-l border-gray-400"/> Google</button>
                            <button className="border-gray-400 border-2 rounded-lg p-2 flex justify-between items-center gap-4 px-6"><FaFacebookF size={16} color='blue'className='-ml-4'/> <hr className="h-4 border-l border-gray-400"/> Facebook</button>
                            <button className="border-gray-400 border-2 rounded-lg p-2 flex justify-between items-center gap-4 px-6"><IoLogoApple size={16} className='-ml-4'/> <hr className="h-full border-l border-gray-400"/> Apple</button>
                        </div>

                    </form>
                    
                </div>

            </div>

        </>
    )
}