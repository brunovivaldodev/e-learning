import Image from "next/image"
import logo from '../../../public/logo.svg'
import sign from '../../../public/SignIn.png'
import { GoArrowRight } from "react-icons/go";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoApple } from "react-icons/io";
import Link from "next/link";

export default function SignIn() {
    return(
        <>
            <header className="flex justify-between items-center mx-48 m-4">
                <div className="flex items-center">
                    <image className="mr-8">
                        <Image src={logo} alt="logo" />
                    </image>
                </div>
                <div className="space-x-2">
                    <Link className="text-gray-500 outline-none text-sm" href="/SignUp">Não tem conta?</Link> 
                    <button className="bg-peach text-orange-500 p-3 rounded-lg text-sm">Criar Conta</button>
                </div>
            </header>

            <hr />
            <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
                <div className="hidden md:flex items-center justify-center">
                    <image>
                        <Image src={sign} alt='presentation' />
                    </image>
                </div>

                <div className="flex justify-center items-center h-full mr-36 -mt-20">
                    <form action="" className="w-[500px]">
                        <h1 className="font-bold text-2xl mb-8 text-center">Faça login na sua conta</h1>
                        <hr />
                        <div className="mt-4 flex flex-col space-y-2">
                            
                            <label htmlFor="email">Email</label>
                            <div>
                                <input type="email" name="user" id="user" className="border-2 border-gray-400 rounded-lg p-2 w-full outline-none"    placeholder="Endereço de email ou username" />
                            </div>

                            <label htmlFor="password" className="">Password</label>
                            <div className="space-x-4">
                                <input type="password" name="password" id="password" className="border-2 border-gray-400 rounded-lg p-2 outline-none w-full"    placeholder="Criar Password" />
                            </div>
                            
                        </div>

                        <div className="flex mt-4 justify-between items-center text-gray-500"> 
                            <p className="text-sm"><input
                                type="checkbox"
                                id="checkbox"
                                className="mr-2"
                            /> Lembrar-me</p>
                            <button className="text-white text-sm bg-laranja p-2 rounded-lg flex justify-between items-center gap-2 px-10"><Link href={'/Student/dashboard'}>Entrar</Link> <GoArrowRight/></button>
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