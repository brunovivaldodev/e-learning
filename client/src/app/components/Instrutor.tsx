import Image from "next/image";
import pfp from "../../../public/pfp.webp";
import { Star, MagnifyingGlass, ArrowLeft, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import instrutor1 from "../../../public/inscrutor1.png";
import instrutor2 from "../../../public/inscrutor2.png";
import instrutor3 from "../../../public/inscrutor3.png";
import Button from "../components/Button"
import Button2 from "../components/Button2"


export default function Instrutor() {
    return (
        <div className="flex w-1/4 flex-wrap mb-3">

            <div className="flex flex-col border border-grey-200">

                <Image className="w-full" src={instrutor1} alt="course" />

                <div className="flex  flex-col items-center justify-center">
                    <p className="p-1 text-sm font-bold text-gray-900">Sediangani Sofrimento</p>
                    <p className="text-gray-500 text-xs">Desenvolvedor Web</p>
                </div>

                <div className="border mt-1 border-gray-300">

                    <div className="flex flex-row pr-2 pl-2 justify-between">

                        <div className="flex items-center justify-center">
                            <Star size={15} color="#FD8E1F" weight="fill" />
                            <p className="text-gray-700 p-2 text-xs">5.0</p>
                        </div>

                        <div className="flex items-center justify-center">
                            <p className="text-gray-700 pr-1 text-xs">20,000 </p>
                            <p className="text-gray-500 text-xs"> estudantes</p>
                        </div>

                    </div>

                    <Button2 buttonText="Enviar Mensagem"></Button2>

                </div>

            </div>
        </div>
    );
}
