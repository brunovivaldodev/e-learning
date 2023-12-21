import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Image from "next/image";
import InstF from '../../../../public/BecomeI.png'
import Desktop from '../../../../public/desktop.png'
import { AiOutlineTeam, AiOutlineFileDone } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";
import { IoMdCloudDone } from "react-icons/io";
import { LuFiles } from "react-icons/lu";

export default function BecomeI() {
    return(
        <>
            <Header/>

            <div className="w-full bg-gray-100 flex p-10 justify-center items-center">
                <div className="space-y-2">
                    <h3 className="text-2xl text-center">Vire um Instrutor</h3>
                    <div className="text-sm text-center">Home / Vire um Instrutor</div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="flex flex-col p-24 space-y-3">
                    <h2 className="text-4xl"><b>Vire um instrutor</b></h2>
                    <div>Torne-se um instrutor e comece a ensinar com 26 mil instrutores certificados. Crie uma história de sucesso com 67,1 mil alunos – Cresça em 71 países.</div>
                    <div className="flex bg-orange-500 w-40 h-10 text-center p-2 text-white">
                        <a href="">Vamos Começar</a>
                    </div>
                </div>

                <div className="flex items-center justify-center">
                    <Image src={InstF} height={400} alt="Instrutora"/>
                </div>
            </div>

            <section className="flex items-center justify-center space-x-16 bg-peach p-6">  
            
                <div className="flex items-center space-x-2">
                    <div><AiOutlineTeam color="orange" size={42}/> </div>
                    <div className="flex-col">
                        <p className="text-2xl">67.1k</p>
                        <p className="text-sm">Estudantes</p></div>
                </div>

                <div className="flex items-center space-x-2">
                    <div><AiOutlineFileDone color="green" size={42}/> </div>
                    <div className="flex-col">
                        <p className="text-2xl">26k</p>
                        <p className="text-sm">Instrutores certificados</p></div>
                </div>
                <div className="flex items-center space-x-2">
                    <div><BiWorld color='green' size={42}/></div>
                    <div className="flex-col">
                        <p className="text-2xl">72</p>
                        <p className="text-sm">Línguas</p></div>
                </div>
                <div className="flex items-center space-x-2">
                    <div><IoMdCloudDone color='green' size={42}/> </div>
                    <div className="flex-col">
                        <p className="text-2xl">99.9%</p>
                        <p className="text-sm">Taxa de sucesso</p></div>
                </div>
                <div className="flex items-center space-x-2">
                    <div><LuFiles size={42} color='orange' /></div>
                    <div className="flex-col">
                        <p className="text-2xl">57</p>
                        <p className="text-sm">Empresas confiáveis</p></div>
                </div>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 p-24">

                <div className="flex items-center justify-center">
                    <Image src={Desktop} height={400} alt="Instrutora"/>
                </div>

                <div className="flex flex-col space-y-3">
                    <h2 className="text-4xl">Porque usar a plataforma?</h2>
                    <div>Praesent congue ornare nibh sed ullamcorper. Proin venenatis tellus non turpis scelerisque, vitae auctor arcu ornare. Cras vitae nulla a purus mollis venenatis. </div>
                    <div>
                        <p><b>Ensine o seus alunos o quanto precisar</b></p>
                        Morbi quis lorem non orci fermentum euismod. Nam sapien tellus, aliquam nec porttitor vel, pellentesque at metus. 
                    </div>
                    <div>
                        <p><b>Gerencie seu curso e o pagamento num so lugar</b></p>
                        Sed et mattis urna. Sed tempus fermentum est, eu lobortis nibh consequat eu. Nullam vel libero pharetra, euismod turpis et, elementum enim. 
                    </div>
                    <div>
                        <p><b>Chat com os seus alunos</b></p>
                        Nullam mattis lectus ac diam egestas posuere. Praesent auctor massa orci, ut fermentum eros dictum id.  
                    </div>
                </div>
  
            </div>

            <Footer/>
        </>
    )
}