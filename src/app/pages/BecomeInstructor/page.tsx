import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Image from "next/image";
import InstF from '../../../../public/BecomeI.png'
import Girl from '../../../../public/becomI2.png'
import Woman from '../../../../public/becomei3.png'
import setI from '../../../../public/becomei4.png'
import female from '../../../../public/becomei5.png'
import Desktop from '../../../../public/desktop.png'
import { AiOutlineTeam, AiOutlineFileDone } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";
import { IoMdCloudDone } from "react-icons/io";
import { BiConversation } from "react-icons/bi";
import { GoArrowRight } from "react-icons/go";
import { LuFiles } from "react-icons/lu";
import { PiIdentificationCard } from "react-icons/pi";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { PiHandshakeDuotone } from "react-icons/pi";
import { PiNewspaperClippingDuotone } from "react-icons/pi";
import { IoIosCheckmarkCircle } from "react-icons/io";

export default function BecomeI() {
    return(
        <>
            <Header/>

            <hr />

            <div className="grid grid-cols-1 md:grid-cols-2 mt-4">
                <div className="flex flex-col p-24 space-y-3 mx-14">
                    <h2 className="text-4xl"><b>Vire um instrutor</b></h2>
                    <div>Torne-se um instrutor e comece a ensinar com 26 mil instrutores certificados. Crie uma história de sucesso com 67,1 mil alunos – Cresça em 71 países.</div>
                    <button className="flex bg-laranja w-40 h-10 items-center justify-center p-2 text-white">
                        Vamos Começar
                    </button>
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
                    <div><AiOutlineFileDone color="#23BD33" size={42}/> </div>
                    <div className="flex-col">
                        <p className="text-2xl">26k</p>
                        <p className="text-sm">Instrutores certificados</p></div>
                </div>
                <div className="flex items-center space-x-2">
                    <div><BiWorld color='#23BD33' size={42}/></div>
                    <div className="flex-col">
                        <p className="text-2xl">72</p>
                        <p className="text-sm">Línguas</p></div>
                </div>
                <div className="flex items-center space-x-2">
                    <div><IoMdCloudDone color='#23BD33' size={42}/> </div>
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

                <div className="flex flex-col space-y-3 mx-16 text-sm">
                    <h2 className="text-4xl">Porque usar a plataforma?</h2>
                    <div className="text-gray-500">Praesent congue ornare nibh sed ullamcorper. Proin venenatis tellus non turpis scelerisque, vitae auctor arcu ornare. Cras vitae nulla a purus mollis venenatis. </div>
                    <div className="text-gray-500 flex space-x-3">
                        <div>
                            <IoIosCheckmarkCircle size={30} color='#23BD33'/>
                        </div>
                        <div className="">
                            <p className="mb-3"><b className="text-black ">Ensine o seus alunos o quanto precisar</b></p>
                            Morbi quis lorem non orci fermentum euismod. Nam sapien tellus, aliquam nec porttitor vel, pellentesque at metus. 
                        </div>
                    </div>
                    <div className="text-gray-500 flex space-x-3">
                        <div>
                            <IoIosCheckmarkCircle size={30} color='#23BD33'/>
                        </div>
                        <div>
                            <p className="mb-3"><b className="text-black">Gerencie seu curso e o pagamento num so lugar</b></p>
                            Sed et mattis urna. Sed tempus fermentum est, eu lobortis nibh consequat eu. Nullam vel libero pharetra, euismod turpis et, elementum enim.
                        </div> 
                    </div>
                    <div className="text-gray-500 flex space-x-3">
                        <div>
                            <IoIosCheckmarkCircle size={30} color='#23BD33'/>
                        </div>
                        <div>
                            <p className="mb-3"><b className="text-black">Chat com os seus alunos</b></p>
                            Nullam mattis lectus ac diam egestas posuere. Praesent auctor massa orci, ut fermentum eros dictum id.  
                        </div>
                    </div>
                </div>
  
            </div>

            <div className="w-full bg-gray-100 p-10 justify-center items-center">
                <div className="space-y-5">
                    <h3 className="text-2xl text-center font-semibold">Como virar um instrutor de sucesso</h3>
                    <div className="flex space-x-4 mx-32">
                        <div className="bg-white flex flex-col justify-center items-center space-y-4 p-4 w-96">
                            <div className="bg-blue-100 p-3 rounded-lg">
                                <PiNewspaperClippingDuotone color='#564FFD' size={60}/>
                            </div>
                            <p className="text-center">1. Inscreva-se para se tornar instrutor.</p>
                            <p className="text-gray-500 text-xs text-center">Sed et mattis urna. Sed tempus fermentum est, eu lobortis nibh.</p>
                        </div>
                        <div className="bg-white flex flex-col justify-center items-center space-y-4 p-4 w-96">
                            <div className="bg-peach p-3 rounded-lg">
                                <PiIdentificationCard color='#E34444' size={60}/>
                            </div>
                            <p className="text-center">2. Configure e edite seu perfil.</p>
                            <p className="text-gray-500 text-xs text-center">Duis non ipsum at leo efficitur pulvinar. Morbi semper nisi eget accumsan ullamcorper.</p>
                        </div>
                        <div className="bg-white flex flex-col justify-center items-center space-y-4 p-4 w-96">
                            <div className="bg-peach p-3 rounded-lg">
                                <AiOutlinePlayCircle color='#FF6636' size={60}/>
                            </div>
                            <p className="text-center">3. Crie seu novo curso.</p>
                            <p className="text-gray-500 text-xs text-center">Praesent congue ornare nibh sed ullamcorper. Proin venenatis tellus non turpis scelerisque.</p>
                        </div>
                        <div className="bg-white flex flex-col justify-center items-center space-y-4 p-4 w-96">
                            <div className="bg-green-100 p-3 rounded-lg">
                                <PiHandshakeDuotone color='#23BD33' size={60}/>
                            </div>
                            <p className="text-center">4. Comece a ensinar e ganhar.</p>
                            <p className="text-gray-500 text-xs text-center">Praesent congue ornare nibh sed ullamcorper. Proin venenatis tellus non turpis scelerisque. </p>
                        </div>
                    </div>
                    
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 p-24">

                <div className="flex flex-col space-y-4 justify-center mx-10">

                    <h2 className="text-4xl font-semibold">Regras e regulações dos Instrutores</h2>
                    <div className="text-gray-500">Sed auctor, nisl non elementum ornare, turpis orci consequat arcu, at iaculis quam leo nec libero. Aenean mollis turpis velit, id laoreet sem luctus in. Etiam et egestas lorem. </div>
                    
                    <ul className="ml-8 list-disc space-y-2 text-sm">
                        <li>Sed ullamcorper libero quis condimentum pellentesque.</li>
                        <li>Nam leo tortor, tempus et felis non.</li>
                        <li>Porttitor faucibus erat. Integer eget purus non massa ultricies pretium ac sed eros.</li>
                        <li>Vestibulum ultrices commodo tellus. Etiam eu lectus sit amet turpi.</li>
                    </ul>

                </div>

                <div className="flex items-center justify-center">
                    <Image src={Girl} height={450} alt="Instrutora"/>
                </div>
  
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 p-16 bg-peach">
                
                <div className="flex items-center justify-center">
                    <Image src={Woman} height={450} alt="Instrutora"/>
                </div>
  
                <div className="flex flex-col space-y-4 justify-center mx-10">

                    <h2 className="text-4xl font-semibold">Não se preocupem, nós sempre ajudaremos você</h2>
                    <div className="text-gray-500">Mauris aliquet ornare tortor, ut mollis arcu luctus quis. Phasellus nec augue malesuada, sagittis ligula vel, faucibus metus. Nam viverra metus eget nunc dignissim.</div>
                    
                    <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2"><GoArrowRight color='FF6636'/> Sed ullamcorper libero quis condimentum pellentesque.</li>
                        <li className="flex items-center gap-2"><GoArrowRight color='FF6636'/> Nam leo tortor, tempus et felis non.</li>
                        <li className="flex items-center gap-2"><GoArrowRight color='FF6636'/> Porttitor faucibus erat. Integer eget purus non massa ultricies pretium ac sed eros.</li>
                        <li className="flex items-center gap-2"><GoArrowRight color='FF6636'/> Vestibulum ultrices commodo tellus. Etiam eu lectus sit amet turpi.</li>
                    </ul>

                </div>
 
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 p-24">

                <div className="flex flex-col space-y-4 justify-center mx-14">

                    <h2 className="text-4xl font-semibold">Varios instrutores já tornaram as suas carreiras em grandes sucessos</h2>
                    <div className="text-gray-500">Nunc euismod sapien non felis eleifend porttitor. Maecenas dictum eros justo, id commodo ante laoreet nec. Phasellus aliquet, orci id pellentesque mollis.</div>
                    
                    <div className="bg-peach w-full p-4 flex flex-col gap-4"><BiConversation color='FF6636' size={45}/>Nulla sed malesuada augue. Morbi interdum vulputate imperdiet. Pellentesque ullamcorper auctor ante, egestas interdum quam facilisis commodo. Phasellus efficitur quis ex in consectetur. Mauris tristique suscipit metus, a molestie dui dapibus vel.</div>

                    <div className="space-x-2">
                        <button className="bg-gray-100 p-2">
                            &larr;
                        </button>

                        <button className="bg-laranja text-white p-2">
                            &rarr;
                        </button>

                    </div>
                    
                </div>

                <div className="flex items-center justify-center">
                    <Image src={setI} height={650} alt="Instrutora"/>
                </div>
  
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 bg-gray-800 pt-20 pb-20">

                <div className="flex flex-col space-y-4 justify-center mx-40 text-white">

                    <h2 className="text-4xl font-semibold">Comece ensinando connosco e inspire outros</h2>
                    <div className="text-gray-400">Torne-se um instrutor e comece a ensinar com 26 mil instrutores certificados. Crie uma história de sucesso com 67,1 mil alunos – Cresça em 71 países.</div>
                    <button className="text-center bg-laranja p-3 w-fit">Registrar Agora</button>

                </div>

                <div className="flex items-center justify-center">
                    <Image src={female} height={450} alt="Instrutora"/>
                </div>
  
            </div>

            <hr />

            <Footer/>
        </>
    )
}