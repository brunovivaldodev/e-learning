'use client'
import { useState } from "react";
import Header from "../components/Header";
import Image from "next/image";
import imagem from '../../../public/SilngleCourse.png'
import { AiOutlineRight } from "react-icons/ai";
import { IoPeopleCircleOutline,IoStar,IoStarHalf, IoStarOutline } from "react-icons/io5";
import { GoArrowRight } from "react-icons/go";
import { MdVerified } from "react-icons/md";
import { IoPersonCircleSharp,IoPersonCircleOutline } from "react-icons/io5";
import { IoPlayCircleSharp } from "react-icons/io5";
import { BsPeople } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { RiLoader2Fill } from "react-icons/ri";
import { LuAlarmClock } from "react-icons/lu";
import { CiClock2 } from "react-icons/ci";
import { MdSignalCellularAlt } from "react-icons/md";
import { FaRegCalendarMinus } from "react-icons/fa";
import { PiNotebook } from "react-icons/pi";
import { RiStackLine } from "react-icons/ri";
import { RiComputerLine } from "react-icons/ri";
import { MdAttachMoney } from "react-icons/md";
import { IoTrophyOutline } from "react-icons/io5";
import { HiOutlineSquare2Stack } from "react-icons/hi2";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import Curso3 from "../components/Curso3";
import Footer from "../components/Footer";
import Link from "next/link";


export default function SingleCourse(){

    const [duracaoVisible, setDuracaoVisible] = useState(true);
    const [duracaoVisible2, setDuracaoVisible2] = useState(true);
    const [duracaoVisible3, setDuracaoVisible3] = useState(true);



    const duracoes = [
        { id: 0, name: '6-12 meses', isChecked: false, students: 200 },
        { id: 1, name: '3-6 meses', isChecked: false, students: 100 },
        { id: 2, name: '1-3 meses', isChecked: false, students: 750 },
        { id: 3, name: '1-4 semanas', isChecked: false, students: 25 },
    ];

    const duracoes2 = [
        { id: 0, name: '6-12 meses', isChecked: false, students: 200 },
        { id: 1, name: '3-6 meses', isChecked: false, students: 100 },
        { id: 2, name: '1-3 meses', isChecked: false, students: 750 },
        { id: 3, name: '1-4 semanas', isChecked: false, students: 25 },
    ];

    const duracoes3 = [
        { id: 0, name: '6-12 meses', isChecked: false, students: 200 },
        { id: 1, name: '3-6 meses', isChecked: false, students: 100 },
        { id: 2, name: '1-3 meses', isChecked: false, students: 750 },
        { id: 3, name: '1-4 semanas', isChecked: false, students: 25 },
    ];

    const [duracoesStates, setDuracaoStates] = useState(duracoes);
    const [duracoesStates2, setDuracaoStates2] = useState(duracoes);
    const [duracoesStates3, setDuracaoStates3] = useState(duracoes);



    const handleToggleDuracoes = (id) => {
        setDuracaoStates((prevStates) => {
            const newStates = prevStates.map((state) => ({
                ...state,
                isChecked: state.id === id,
            }));
            return newStates;
        });
    };

    const handleToggleDuracoes2 = (id) => {
        setDuracaoStates3((prevStates) => {
            const newStates = prevStates.map((state) => ({
                ...state,
                isChecked: state.id === id,
            }));
            return newStates;
        });
    };

    const handleToggleDuracoes3 = (id) => {
        setDuracaoStates3((prevStates) => {
            const newStates = prevStates.map((state) => ({
                ...state,
                isChecked: state.id === id,
            }));
            return newStates;
        });
    };

    const toggleDuracao = () => {
        setDuracaoVisible(!duracaoVisible);
    };

    const toggleDuracao2 = () => {
        setDuracaoVisible2(!duracaoVisible2);
    };

    const toggleDuraca3 = () => {
        setDuracaoVisible3(!duracaoVisible3);
    };

    return(
        <>
            <Header avatarUrl="/pfp.webp"></Header>
            <div className="bg-gray-100">
                <div className="flex gap-5">
                    <div>
                        <div className="pt-14 mx-80 space-y-4 pb-5 pr-32">
                            <div className="text-xs text-gray-600 flex items-center gap-3">
                                Home <AiOutlineRight color={'#6E7485'}/> Desenvolvimento <AiOutlineRight color={'#6E7485'}/> Desenvolvimento Web <AiOutlineRight color={'#6E7485'}/> Webflow
                            </div>
                            <h1 className="text-4xl font-semibold">
                                Design responsivo de site completo: do Figma ao Webflow e ao design do site
                            </h1>
                            <div className="text-gray-600 text-sm">
                                Curso 3 em 1: Aprenda a criar sites com Figma, construir com Webflow e ganhar a vida como freelancer.
                            </div>
                            <div className="flex justify-between items-center">
                                <div className="flex justify-between items-center space-x-2">
                                    <IoPeopleCircleOutline size={35}/>
                                    <div>
                                        <p className="text-xs text-gray-500">Criado por:</p>
                                        <p className="text-sm">Francisca Tungumuna • Ladislau Lutete </p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-1">
                                    <IoStar size={15} color='#FD8E1F'/>
                                    <IoStar size={15} color='#FD8E1F'/>
                                    <IoStar size={15} color='#FD8E1F'/>
                                    <IoStar size={15} color='#FD8E1F'/>
                                    <p className="text-sm">
                                        4.8
                                    </p>
                                    <p className="text-gray-500 text-xs">
                                        (451,444 Rating)
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                    
                </div>
                
            <div className="mx-80 space-y-8 pr-32 pt-4">
                <Image src={imagem} alt="curso"/>
                    <div className="flex space-x-10 text-gray-700 pt-2 justify-center">
                        <a className="hover:border-b-2 hover:border-orange-500 pb-3 p-3 text-center" href="#Visão">Visão geral</a>
                        <a className="hover:border-b-2 hover:border-orange-500 pb-3 p-3 text-center" href="#Currículo">Currículo</a>
                        <a className="hover:border-b-2 hover:border-orange-500 pb-3 p-3 text-center" href="#Instrutor">Instrutor</a>
                        <a className="hover:border-b-2 hover:border-orange-500 pb-3 p-3 text-center" 
                        href="#Análise">Análise</a>
                    </div>
                    <div className="mt-10 space-y-4">
                    <h2 className="text-2xl " id="Visão">Descrição</h2>
                    <p className="text-sm text-gray-600">
                            It gives you a huge self-satisfaction when you look at your work and say, "I made this!". I love that feeling after I'm done working on something. When I lean back in my chair, look at the final result with a smile, and have this little "spark joy" moment. It's especially satisfying when I know I just made $5,000.<br /><br />

                            I do! And that's why I got into this field. Not for the love of Web Design, which I do now. But for the LIFESTYLE! There are many ways one can achieve this lifestyle. This is my way. This is how I achieved a lifestyle I've been fantasizing about for five years. And I'm going to teach you the same. Often people think Web Design is complicated. That it needs some creative talent or knack for computers. Sure, a lot of people make it very complicated. People make the simplest things complicated. Like most subjects taught in the universities. But I don't like complicated. I like easy. I like life hacks. I like to take the shortest and simplest route to my destination. I haven't gone to an art school or have a computer science degree. I'm an outsider to this field who hacked himself into it, somehow ending up being a sought-after professional. That's how I'm going to teach you Web Design. So you're not demotivated on your way with needless complexity. So you enjoy the process because it's simple and fun. So you can become a Freelance Web Designer in no time.<br /><br />

                            For example, this is a Design course but I don't teach you Photoshop. Because Photoshop is needlessly complicated for Web Design. But people still teach it to web designers. I don't. I teach Figma – a simple tool that is taking over the design world. You will be designing a complete website within a week while others are still learning how to create basic layouts in Photoshop.<br /><br />

                            Second, this is a Development course. But I don't teach you how to code. Because for Web Design coding is needlessly complicated and takes too long to learn. Instead, I teach Webflow – a tool that is taking over the web design world. You will be building complex websites within two weeks while others are still learning the basics of HTML & CSS. Third, this is a Freelancing course. But I don't just teach you how to write great proposals. I give you a winning proposal template. When you're done with the course, you will have a stunning portfolio website with portfolio pieces already in it. Buy this course now and take it whenever the time is right for you.
                    </p>
                    </div>
                    <div className="bg-[#E1F7E3] p-5">
                        <h2 className="text-2xl mb-3">O que você aprenderá neste curso</h2>
                        <div className="flex flex-wrap -mx-2 text-xs">
                            <div className="w-1/2 px-2 mb-2">
                                <div className="flex space-x-2">
                                <MdVerified size={30} color={'green'}/>
                                <p className="text-sm text-gray-600">Você aprenderá como criar belos sites usando Figma.</p>
                                </div>
                            </div>

                            
                            <div className="w-1/2 px-2 mb-4">
                                <div className="flex space-x-2">
                                <MdVerified size={30} color={'green'}/>
                                <p className="text-sm text-gray-600">Você aprenderá a transformar seus designs em poderosos com o Webflow.</p>
                                </div>
                            </div>

                            <div className="w-1/2 px-2 mb-4">
                                <div className="flex space-x-2">
                                <MdVerified size={30} color={'green'}/>
                                <p className="text-sm text-gray-600">Você aprenderá dicas secretas de Web Designers Freelance.</p>
                                </div>
                            </div>

                            <div className="w-1/2 px-2 mb-4">
                                <div className="flex space-x-2">
                                <MdVerified size={30} color={'green'}/>
                                <p className="text-sm text-gray-600">Aprenda a usar Python profissionalmente, aprendendo Python 2 e Python 3!</p>
                                </div>
                            </div>

                            <div className="w-1/2 px-2 mb-4">
                                <div className="flex space-x-2">
                                <MdVerified size={30} color={'green'}/>
                                <p className="text-sm text-gray-600">Entenda como usar o Jupyter Notebook e criar arquivos .py</p>
                                </div>
                            </div>

                            <div className="w-1/2 px-2 mb-4">
                                <div className="flex space-x-2">
                                <MdVerified size={30} color={'green'}/>
                                <p className="text-sm text-gray-600">Entenda como criar GUIs no sistema Jupyter Notebook!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <h2 className="text-2xl mb-2">Para quem é este curso</h2>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li className="flex items-center gap-2"><GoArrowRight color='FF6636'/>Este curso é para quem deseja iniciar uma carreira de Web Design Freelance.</li>
                            <li className="flex items-center gap-2"><GoArrowRight color='FF6636'/>Praesent eget consequat elit. Duis a pretium purus.</li>
                            <li className="flex items-center gap-2"><GoArrowRight color='FF6636'/> Porttitor faucibus erat. Integer eget purus non massa ultricies pretium ac sed eros.</li>
                            <li className="flex items-center gap-2"><GoArrowRight color='FF6636'/>Sed nec dapibus orci integer nisl turpis, eleifend sit amet aliquam vel, lacinia quis ex.</li>
                            <li className="flex items-center gap-2"><GoArrowRight color='FF6636'/>Those who are looking to reboot their work life and try a new profession that is fun, rewarding and highly in-demand.</li>
                            <li className="flex items-center gap-2"><GoArrowRight color='FF6636'/>Nunc auctor consequat lorem, in posuere enim hendrerit sed.</li>
                        </ul>
                    </div>
                    <div className="">
                        <h2 className="text-2xl mb-2">Requisitos para o curso</h2>
                        <ul className="text-gray-500 text-sm list-disc ml-8 space-y-2">
                            <li>Nunc auctor consequat lorem, in posuere enim hendrerit sed.</li>
                            <li>Sed sagittis suscipit condimentum pellentesque vulputate feugiat libero nec accumsan.</li>
                            <li>Duis ornare enim ullamcorper congue consectetur suspendisse interdum tristique est sed molestie.</li>
                            <li>Those who are looking to reboot their work life and try a new profession that is fun, rewarding and highly in-demand.</li>
                            <li>Praesent eget consequat elit. Duis a pretium purus.</li>
                        </ul>
                    </div>

                    <div>
                        <div className="flex justify-between items-center">
                            <h2 className="text-2xl mb-2">Currículo</h2>
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center" id="Instrutor">
                            <h2 className="text-2xl">Instrutor do curso</h2>
                            <p className="text-xl">(02)</p>
                        </div>
                        <div className="mt-4 mb-4 border-2 border-gray-200 flex space-x-2 p-2">
                            <IoPersonCircleSharp size={150} />
                            <div className="space-y-2">
                                <h1 className=""><Link href={'/Instructor_Profile'}>Francisca Tungumuna</Link></h1>
                                <p className="text-gray-500 text-xs">Web Designer e instrutora mais vendida</p>
                                <ul className="text-xs text-gray-500 flex items-center space-x-4">
                                    <li className="flex gap-2 items-center"><IoStar size={15} color='#FD8E1F'/>4.9 Classificação do curso</li>
                                    <li className="flex gap-2 items-center"><BsPeople size={18}  color={'#564FFD'}/>236,568 estudantes</li>
                                    <li className="flex gap-2 items-center"><IoPlayCircleSharp size={18} color={'#FF6636'}/> 09 Cursos</li>
                                </ul>
                                <p className="text-xs text-gray-500">
                                Um dia, Vako se cansou da rotina das 9 às 5, ou mais, das 9 às 9, no caso dele, e largou o emprego, ou mais como foi demitido de sua própria startup. Ele decidiu realizar seu sonho: ser seu próprio patrão, viajar pelo mundo, ...
                                </p>
                            </div>
                        </div>

                        <div className="mt-4 mb-4 border-2 border-gray-200 flex space-x-2 p-2">
                            <IoPersonCircleSharp size={150} />
                            <div className="space-y-2">
                                <h1 className="">Ladislau Lutete</h1>
                                <p className="text-gray-500 text-xs">Empreendedor e Designer • Fundador da ShiftRide</p>
                                <ul className="text-xs text-gray-500 flex items-center space-x-4">
                                    <li className="flex gap-2 items-center"><IoStar size={15} color='#FD8E1F'/>4.6 Classificação do curso</li>
                                    <li className="flex gap-2 items-center"><BsPeople size={18}  color={'#564FFD'}/>5,342 estudantes</li>
                                    <li className="flex gap-2 items-center"><IoPlayCircleSharp size={18} color={'#FF6636'}/> 01 Cursos</li>
                                </ul>
                                <p className="text-xs text-gray-500">
                                Sou um empreendedor e designer com grande paixão por construir produtos de todos os tipos e ver ideias ganharem vida. Como empreendedor em série, desenvolvi e construí projetos em áreas que vão da moda à tecnologia. Tenho mais de 10 anos ...
                                </p>
                            </div>
                        </div>
                        
                    </div>

                    <div className="space-y-2" id="Análise"> 
                            <h2 className="text-2xl">Course Reting</h2>
                            <div className="flex gap-4" >
                                <div className="space-y-4 items-center border-2 border-gray-200 p-4">
                                    <h1 className="text-center text-3xl font-semibold">4.8</h1>
                                    <div className="flex items-center justify-center">
                                        <IoStar size={15} color='#FD8E1F'/>
                                        <IoStar size={15} color='#FD8E1F'/>
                                        <IoStar size={15} color='#FD8E1F'/>
                                        <IoStar size={15} color='#FD8E1F'/>
                                        <IoStarHalf size={15} color='#FD8E1F'/>
                                    </div>
                                    <p className="text-sm">Classificação do curso</p>

                                </div>
                                <ul className="space-y-4">
                                    <li className="flex space-x-3 items-center">
                                        <div className="flex space-x-0.5">
                                            <IoStar size={13} color='#FD8E1F'/>
                                            <IoStar size={13} color='#FD8E1F'/>
                                            <IoStar size={13} color='#FD8E1F'/>
                                            <IoStar size={13} color='#FD8E1F'/>
                                            <IoStar size={13} color='#FD8E1F'/>
                                        </div>
                                        <div className="text-xs text-gray-500">
                                            5 Estrelas de avaliação
                                        </div>
                                        <div>
                                            <div className="flex w-52">
                                                <div className="w-[75%] border-[3px] border-orange-500"></div>
                                                <div className="w-[25%] border-[3px] border-orange-200"></div>
                                            </div> 
                                        </div>
                                        <div className="text-gray-500 text-xs">
                                            75%
                                        </div>
                                    </li>

                                    <li className="flex space-x-3 items-center">
                                        <div className="flex space-x-0.5">
                                            <IoStar size={13} color='#FD8E1F'/>
                                            <IoStar size={13} color='#FD8E1F'/>
                                            <IoStar size={13} color='#FD8E1F'/>
                                            <IoStar size={13} color='#FD8E1F'/>
                                            <IoStarOutline size={13} color='#FD8E1F'/>                                        
                                        </div>
                                        <div className="text-xs text-gray-500">
                                            4 Estrelas de avaliação
                                        </div>
                                        <div>
                                            <div className="flex w-52">
                                                <div className="w-[21%] border-[3px] border-orange-500"></div>
                                                <div className="w-[79%] border-[3px] border-orange-200"></div>
                                            </div> 
                                        </div>
                                        <div className="text-gray-500 text-xs">
                                            21%
                                        </div>
                                    </li>

                                    <li className="flex space-x-3 items-center">
                                        <div className="flex space-x-0.5">
                                            <IoStar size={13} color='#FD8E1F'/>
                                            <IoStar size={13} color='#FD8E1F'/>
                                            <IoStar size={13} color='#FD8E1F'/>
                                            <IoStarOutline size={13} color='#FD8E1F'/>                                        
                                            <IoStarOutline size={13} color='#FD8E1F'/>                                        
                                        </div>
                                        <div className="text-xs text-gray-500">
                                            3 Estrelas de avaliação
                                        </div>
                                        <div>
                                            <div className="flex w-52">
                                                <div className="w-[3%] border-[3px] border-orange-500"></div>
                                                <div className="w-[97%] border-[3px] border-orange-200"></div>
                                            </div> 
                                        </div>
                                        <div className="text-gray-500 text-xs">
                                            3%
                                        </div>
                                    </li>

                                    <li className="flex space-x-3 items-center">
                                        <div className="flex space-x-0.5">
                                            <IoStar size={13} color='#FD8E1F'/>
                                            <IoStar size={13} color='#FD8E1F'/>
                                            <IoStarOutline size={13} color='#FD8E1F'/>                                        
                                            <IoStarOutline size={13} color='#FD8E1F'/>                                        
                                            <IoStarOutline size={13} color='#FD8E1F'/>                                        
                                        </div>
                                        <div className="text-xs text-gray-500">
                                            2 Estrelas de avaliação
                                        </div>
                                        <div>
                                            <div className="flex w-52">
                                                <div className="w-[1%] border-[3px] border-orange-500"></div>
                                                <div className="w-[99%] border-[3px] border-orange-200"></div>
                                            </div> 
                                        </div>
                                        <div className="text-gray-500 text-xs">
                                            1%
                                        </div>
                                    </li>

                                    <li className="flex space-x-3 items-center">
                                        <div className="flex space-x-0.5">
                                            <IoStar size={13} color='#FD8E1F'/>
                                            <IoStarOutline size={13} color='#FD8E1F'/>                                        
                                            <IoStarOutline size={13} color='#FD8E1F'/>                                        
                                            <IoStarOutline size={13} color='#FD8E1F'/>                                        
                                            <IoStarOutline size={13} color='#FD8E1F'/>                                        
                                        </div>
                                        <div className="text-xs text-gray-500">
                                            1 Estrela de avaliação
                                        </div>
                                        <div>
                                            <div className="flex w-52">
                                                <div className="w-[1%] border-[3px] border-orange-500"></div>
                                                <div className="w-[99%] border-[3px] border-orange-200"></div>
                                            </div> 
                                        </div>
                                        <div className="text-gray-500 text-xs">
                                            &lt; 1%
                                        </div>
                                    </li>
                                    
                                </ul>
                            </div>
                    </div>

                    <div className="space-y-3">
                        <div className="flex justify-between items-center">
                            <h2 className="text-2xl">Feedback dos alunos</h2>
                            <button className="border-2 border-gray-300 flex justify-between space-x-2 p-2 text-xs items-center text-gray-500">
                                <p>Avaliação de 5 estrelas</p>
                                <IoIosArrowDown />
                            </button>
                            
                            
                        </div>
                        <div className="mb-4 space-y-2">
                            <div className="flex space-x-2">
                                <IoPersonCircleOutline size={35}/>
                                <div>
                                    <div className="flex gap-2 items-center mb-1">
                                        <p className="text-sm">Malcolm Silva</p>
                                        <p className="text-[10px] text-gray-500">Há uma semana</p>
                                    </div>
                                    <div className="flex space-x-0.5">
                                                <IoStar size={13} color='#FD8E1F'/>
                                                <IoStar size={13} color='#FD8E1F'/>
                                                <IoStar size={13} color='#FD8E1F'/>
                                                <IoStar size={13} color='#FD8E1F'/>
                                                <IoStar size={13} color='#FD8E1F'/>
                                    </div>
                                </div>
                            </div>
                            <p className="text-sm text-gray-600 mb-2 ml-10">Agradeço os vídeos curtos e precisos (10 minutos ou menos cada) porque vídeos excessivamente longos tendem a me fazer perder o foco. O instrutor tem muito conhecimento em Web Design e isso fica evidente ao compartilhar seu conhecimento. Esses foram meus melhores 6 meses de treinamento. Obrigado, Vako.</p>
                        </div>
                        <hr />
                        <button className="bg-peach text-[#FF6636] p-3 text-sm flex justify-between items-center gap-2">Carregue mais <RiLoader2Fill color={'#FF6636'}/></button>
                </div>
            </div>
            <div className="space-y-4 mt-8 mx-56 mb-14">
                    <div className="flex justify-between items-center">
                        <h2 className="text-2xl">Cursos Relacionados</h2>
                        <button className="bg-peach  p-2 flex justify-between items-center gap-2"><Link className="text-[#FF6636] text-sm" href={'/CourseList'}>Ver Tudo</Link> <GoArrowRight color='FF6636'/></button>
                    </div>
                    <div className="flex gap-2 justify-center">
                        <Curso3></Curso3>
                        <Curso3></Curso3>
                        <Curso3></Curso3>
                        <Curso3></Curso3>
                    </div>
                    
            </div>
            <div className="border-2 border-gray-300 space-y-4 mr-10 p-6 bg-white w-[30%] absolute top-32 -right-8">
                        <div className="flex justify-between">
                            <div className="flex gap-2 items-center">
                                <h2>KZ 13.440</h2>
                                <p className="text-sm text-gray-500">Antes 24.000</p>
                            </div>
                            <div className="bg-peach text-sm text-[#FF6636] p-1">56% OFF</div>
                        </div>
                        <p className="flex gap-2 text-[#FF6636] text-xs items-center"> <LuAlarmClock color={'#FF6636'} size={30}/>Faltam 2 dias com esse preço!</p>
                        <hr />
                        <ul className="text-xs space-y-2 text-gray-500">
                            <li className="flex justify-between items-center"><p className=" flex items-center gap-1"><CiClock2 />Duração do curso</p><p>6 Month</p></li>
                            <li className="flex justify-between items-center"><p className=" flex items-center gap-1"><MdSignalCellularAlt />Nivel do Curso</p><p>Iniciante e Intermediario</p></li>
                            <li className="flex justify-between items-center"><p className="flex items-center gap-1"><BsPeople />Alunos matriculados</p><p>69,419,618</p></li>
                            <li className="flex justify-between items-center"><p className="flex items-center gap-1"><PiNotebook />Idioma</p><p>Mandarin</p></li>
                            <li className="flex justify-between items-center"><p className="flex items-center gap-1"><FaRegCalendarMinus />Idioma da legenda</p><p>Ingles</p></li>
                        </ul>
                        <hr />
                        <button className="p-2 bg-laranja text-sm text-white w-full">Adicionar ao carrinho</button>
                        <button className="p-2 bg-peach text-sm text-[#FF6636] w-full">Comprar Agora</button>
                        <p className="text-gray-500 text-sm">Observação: todos os cursos têm garantia de devolução do dinheiro em 30 dias</p>
                        <hr />
                        <div className="text-xs space-y-2">
                            <p>Este curso inclui:</p>
                            <ul className="text-gray-500 space-y-2">
                                <li className="flex gap-2 items-center"><CiClock2  color={'#FF6636'} size={16}/>Acesso vitalício</li>
                                <li className="flex gap-2 items-center"><MdAttachMoney  color={'#FF6636'} size={16}/>Garantia de devolução do dinheiro em 30 dias</li>
                                <li className="flex gap-2 items-center"><PiNotebook  color={'#FF6636'} size={16}/>Arquivo de exercícios gratuitos e recursos para download</li>
                                <li className="flex gap-2 items-center"><IoTrophyOutline  color={'#FF6636'} size={16}/>Certificado de conclusão compartilhável</li>
                                <li className="flex gap-2 items-center"><RiComputerLine color={'#FF6636'} size={16} />Acesso no celular, tablet e TV</li>
                                <li className="flex gap-2 items-center"><FaRegCalendarMinus  color={'#FF6636'} size={16}/>Legendas em inglês</li>
                                <li className="flex gap-2 items-center"><RiStackLine  color={'#FF6636'} size={16}/>100%  online</li>
                            </ul>
                        </div>
                        <hr />
                        <div className="space-y-2">
                            <p>Compartilhe este curso:</p>
                            <ul className="flex items-center gap-2">
                                <li className="bg-gray-100 p-2 flex gap-2 items-center"><HiOutlineSquare2Stack /> <p>Copiar link</p></li>
                                <li className="bg-gray-100 p-2"><BsWhatsapp /></li>
                                <li className="bg-gray-100 p-2"><FaFacebookF /></li>
                                <li className="bg-gray-100 p-2"><FaTwitter /></li> 
                            </ul>
                        </div>
                    </div>
            <Footer></Footer>
        </>
    )
}

