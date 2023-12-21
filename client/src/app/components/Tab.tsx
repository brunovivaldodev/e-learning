import React from 'react';
import Link from 'next/link';
import { useMediaQuery } from 'react-responsive';
import { Activity, ChalkboardTeacher, Video, Chats, Receipt, Gear, BookmarkSimple, Bookmarks, GearSix } from "@phosphor-icons/react/dist/ssr";

interface TabProps {
    activeTab: string;
}

export default function Tab({ activeTab }: TabProps) {
    const isMobile = useMediaQuery({ maxWidth: 767 });

    return (
        <div className="flex w-3/4 justify-between items-center text-xs text-grey-700 bg-white border border-orange-200">
            <div className={`${activeTab === 'Painel' ? 'border-b p-3 border-b-4 border-orange-500' : ''}`}>
                <Link className='p-3 ml-5 pr-5' href="dashboard">
                    {isMobile ? <Activity /> : 'Painel'}
                </Link>
            </div>
            <div className={`${activeTab === 'Cursos' ? 'border-b p-3 border-b-4 border-orange-500' : ''}`}>
                <Link className='p-3 ml-5 pr-5' href="courses">
                    {isMobile ? <Video /> : 'Cursos'}
                </Link>
            </div>
            <div className={`${activeTab === 'Instrutores' ? 'border-b p-3 border-b-4 border-orange-500' : ''}`}>
                <Link className='p-3 ml-5 pr-5' href="instructors">
                    {isMobile ? <ChalkboardTeacher /> : 'Instrutores'}
                </Link>
            </div>
            <div className={`${activeTab === 'Mensagens' ? 'border-b p-3 border-b-4 border-orange-500' : ''}`}>
                <Link className='p-3 ml-5 pr-5' href="messages">
                    {isMobile ? <Chats /> : 'Mensagens'}
                </Link>
            </div>
            <div className={`${activeTab === 'Wishlist' ? 'border-b p-3 border-b-4 border-orange-500' : ''}`}>
                <Link className='p-3 ml-5 pr-5' href="wishlist">
                    {isMobile ? <BookmarkSimple  /> : 'Wishlist'}
                </Link>
            </div>
            <div className={`${activeTab === 'Histórico' ? 'border-b p-3 border-b-4 border-orange-500' : ''}`}>
                <Link className='p-3 ml-5 pr-5' href="history">
                    {isMobile ? <Receipt /> : 'Histórico'}
                </Link>
            </div>
            <div className={`${activeTab === 'Definições' ? 'border-b p-3 border-b-4 border-orange-500' : ''}`}>
                <Link className='p-3 ml-5 pr-5' href="settings">
                    {isMobile ? <GearSix /> : 'Definições'}
                </Link>
            </div>
        </div>
    );
}
/*
export default function Tab({ activeTab }: TabProps) {
    return (
        <div className="flex w-3/4 justify-between items-center text-xs text-grey-700 bg-white border border-orange-200">
            <div className={`${activeTab === 'Painel' ? 'border-b p-3 border-b-4 border-orange-500' : ''}`}>
                <Link className='p-3 ml-5 pr-5' href="dashboard">Painel</Link>
            </div>
            <div className={`p-3 pr-7 pl-7 ${activeTab === 'Cursos' ? 'border-b p-3 border-b-4 border-orange-500' : ''}`}>
                <Link href="courses">Cursos</Link>
            </div>
            <div className={`p-3 pr-7 pl-7 ${activeTab === 'Instrutores' ? 'border-b p-3 border-b-4 border-orange-500' : ''}`}>
                <Link href="instructors">Instrutores</Link>
            </div>
            <div className={`p-3 pr-7 pl-7 ${activeTab === 'Mensagens' ? 'border-b p-3 border-b-4 border-orange-500' : ''}`}>
                <Link href="messages">Mensagens</Link>
            </div>
            <div className={`p-3 pr-7 pl-7 ${activeTab === 'Wishlist' ? 'border-b p-3 border-b-4 border-orange-500' : ''}`}>
                <Link href="wishlist">Wishlist</Link>

            </div>
            <div className={`p-3 pr-7 pl-7 ${activeTab === 'Histórico' ? 'border-b p-3 border-b-4 border-orange-500' : ''}`}>
                <Link href="history">Histórico</Link>
            </div>
            <div className={`p-3 pr-7 pl-7 ${activeTab === 'Definições' ? 'border-b p-3 border-b-4 border-orange-500' : ''}`}>
                <Link href="settings">Definições</Link>
            </div>
        </div>
    );
}*/