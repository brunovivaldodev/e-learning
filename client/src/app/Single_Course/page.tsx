import Header from "../components/Header";
import Image from "next/image";
import imagem from '../../../public/SilngleCourse.png'
import { AiOutlineRight } from "react-icons/ai";
import { IoPeopleCircleOutline,IoStar } from "react-icons/io5";


export default function SingleCourse(){
    return(
        <>
            <Header></Header>
            <div className="bg-gray-100">
                <div className="pt-14 mx-80 space-y-4 pr-32 pb-5">
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
                                <p className="text-sm">Dianne Russell • Kristin Watson</p>
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
            <div className="mx-80 space-y-4 pr-32 pt-4">
                <Image src={imagem} alt="curso"/>
                <div className="flex space-x-10 text-gray-700 pt-2 justify-center">
                        <a className="hover:border-b-2 hover:border-orange-500 pb-3 p-3 text-center" href="#Visão">Visão geral</a>
                        <a className="hover:border-b-2 hover:border-orange-500 pb-3 p-3 text-center" href="#Currículo">Currículo</a>
                        <a className="hover:border-b-2 hover:border-orange-500 pb-3 p-3 text-center" href="#Instrutor">Instrutor</a>
                        <a className="hover:border-b-2 hover:border-orange-500 pb-3 p-3 text-center" href="#Análise">Análise</a>
                </div>
                <div className="mt-10 space-y-4">
                        <h2 className="text-2xl font-semibold" id="Visão">Descrição</h2>
                        <p className="text-sm text-gray-600">
                            It gives you a huge self-satisfaction when you look at your work and say, "I made this!". I love that feeling after I'm done working on something. When I lean back in my chair, look at the final result with a smile, and have this little "spark joy" moment. It's especially satisfying when I know I just made $5,000.<br /><br />

                            I do! And that's why I got into this field. Not for the love of Web Design, which I do now. But for the LIFESTYLE! There are many ways one can achieve this lifestyle. This is my way. This is how I achieved a lifestyle I've been fantasizing about for five years. And I'm going to teach you the same. Often people think Web Design is complicated. That it needs some creative talent or knack for computers. Sure, a lot of people make it very complicated. People make the simplest things complicated. Like most subjects taught in the universities. But I don't like complicated. I like easy. I like life hacks. I like to take the shortest and simplest route to my destination. I haven't gone to an art school or have a computer science degree. I'm an outsider to this field who hacked himself into it, somehow ending up being a sought-after professional. That's how I'm going to teach you Web Design. So you're not demotivated on your way with needless complexity. So you enjoy the process because it's simple and fun. So you can become a Freelance Web Designer in no time.<br /><br />

                            For example, this is a Design course but I don't teach you Photoshop. Because Photoshop is needlessly complicated for Web Design. But people still teach it to web designers. I don't. I teach Figma – a simple tool that is taking over the design world. You will be designing a complete website within a week while others are still learning how to create basic layouts in Photoshop.<br /><br />

                            Second, this is a Development course. But I don't teach you how to code. Because for Web Design coding is needlessly complicated and takes too long to learn. Instead, I teach Webflow – a tool that is taking over the web design world. You will be building complex websites within two weeks while others are still learning the basics of HTML & CSS. Third, this is a Freelancing course. But I don't just teach you how to write great proposals. I give you a winning proposal template. When you're done with the course, you will have a stunning portfolio website with portfolio pieces already in it. Buy this course now and take it whenever the time is right for you.
                        </p>
                    </div>
            </div>
        </>
    )
}