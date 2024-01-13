'use client'
import { useState } from 'react';
import { PlayCircle, Trophy, CheckSquareOffset, Users, ArrowRight, ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import Tab from "../components/Tab";
import Footer from "../components/Footer";
import ProfileInfo from "../components/ProfileInfo";
import Dashboard from "../Student/components/Dashboard";
import Cursos from "../Student/components/Cursos";
import History from "../Student/components/History";
import Instrutores from "../Student/components/Instrutores";
import Wishlist from "../Student/components/Wishlist";
import Settings from "../Student/components/Settings";
import Header2 from "../components/Header2";

export default function Student() {

    const user = {avatarUrl:"/pfp.webp", name:"Verónica Ramos", description:'Trying to be better everyday'};

    const [tab, setTab] = useState("Painel");

    const handleTabClick = (newTab: string) => {
        setTab(newTab);
    };

    const renderComponent = () => {
        switch (tab) {
            case "Painel":
                return <Dashboard name={user.name.split(' ')[0]}  />;
            case "Cursos":
                return <Cursos />;
            case "Instrutores":
                return <Instrutores />;
            case "Wishlist":
                return <Wishlist />;
            case "Definições":
                return <Settings />;
            case "Histórico":
                return <History />;
            default:
                return null; 
        }
    };

    return (

        <div >

            <Header2 avatarUrl="/pfp.webp"></Header2>

            <div className="flex flex-col bg-white justify-center items-center">

                <ProfileInfo pfp={user.avatarUrl} name={user.name} description={user.description}></ProfileInfo>

                <Tab activeTab={tab} onTabClick={handleTabClick}></Tab>

                <div className="flex flex-col w-3/4 bg-white mb-20">

                    {renderComponent()}

                </div>

            </div>

            <Footer></Footer>

        </div>
    );
}