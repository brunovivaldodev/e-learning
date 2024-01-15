import imagem from '../../../public/admin.png'
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/logo.svg";
import { IoPersonCircleOutline } from "react-icons/io5";
import {
     ShoppingCart, Bell, Heart
} from "@phosphor-icons/react/dist/ssr";
import Header from '../components/Header';

export default function WaitingValidation() {
    return(
        <>
            <Header avatarUrl='none'></Header>
            <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen -mt-[5%]">
                <div className="flex justify-center items-center h-full  ">
                    <div className="w-[50%] space-y-6">
                        <h2 className="text-4xl text-gray-300">Activação da Conta</h2>
                        <h2 className="text-4xl">Por favor, Aguarde a activação da conta</h2>
                        <p className="text-gray-500 text-sm">Para o uso da conta do tipo docente precisa aguardar que a sua conta seja verificada e activada pelo administrador</p>

                        <div className="flex mt-4 justify-between items-center text-gray-500"> 
                            <button className="text-white text-sm bg-laranja p-2 rounded-lg text-center px-10"><Link href={'/SignIn'}>Voltar</Link> </button>
                        </div>

                    </div>
                    
                </div>

                <div className="hidden md:flex items-center justify-center w-[80%]">
                    <image>
                        <Image src={imagem} alt='presentation' />
                    </image>
                </div>

            </div>

        </>
    )
        
}