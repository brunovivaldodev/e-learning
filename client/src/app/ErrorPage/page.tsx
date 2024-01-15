import imagem from '../../../public/Error.png'
import Image from "next/image";
import Link from "next/link";
import Header from '../components/Header';

export default function ErrorPage() {
    return(
        <>
            <Header avatarUrl='none'></Header>
            <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen -mt-[5%]">
                <div className="flex justify-center items-center h-full  ">
                    <div className="w-[50%] space-y-6">
                        <h2 className="text-4xl text-gray-300">Error 404</h2>
                        <h2 className="text-4xl">Oops! Página não encontrada</h2>
                        <p className="text-gray-500 text-sm">Algo deu errado. Parece que sua solicitação não foi encontrada. Parece que o link está quebrado ou a página foi removida.</p>

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