import React from 'react';
import Link from 'next/link';
import { useMediaQuery } from 'react-responsive';
import { Activity, ChalkboardTeacher, Video, Chats, Receipt, Gear, BookmarkSimple, Bookmarks, GearSix } from "@phosphor-icons/react/dist/ssr";

interface TabProps {
    activeTab: string;
    onTabClick: (tab: string) => void;

}

export default function Tab({ activeTab, onTabClick }: TabProps) {

    const handleTabClick = (tab: string) => {
        onTabClick(tab);
    };

    return (
        <div className="flex w-3/4 justify-between items-center text-xs text-grey-700 bg-white border border-orange-200">
            <div className={`${activeTab === 'Painel' ? 'border-b p-3 border-b-4 border-orange-500' : ''}`} onClick={() => handleTabClick('Painel')}>
                <span style={{ cursor: 'pointer' }} className='p-3 ml-5 pr-5' >Painel</span>
            </div>
            <div className={`p-3 pr-7 pl-7 ${activeTab === 'Cursos' ? 'border-b p-3 border-b-4 border-orange-500' : ''}`} onClick={() => handleTabClick('Cursos')}>
                <span style={{ cursor: 'pointer' }} className='p-3 ml-5 pr-5'>Cursos</span>
            </div>
            <div className={`p-3 pr-7 pl-7 ${activeTab === 'Instrutores' ? 'border-b p-3 border-b-4 border-orange-500' : ''}`} onClick={() => handleTabClick('Instrutores')}>
                <span style={{ cursor: 'pointer' }} className='p-3 ml-5 pr-5'>Instrutores</span>
            </div>
            <div className={`p-3 pr-7 pl-7 ${activeTab === 'Wishlist' ? 'border-b p-3 border-b-4 border-orange-500' : ''}`} onClick={() => handleTabClick('Wishlist')}>
                <span style={{ cursor: 'pointer' }} className='p-3 ml-5 pr-5'>Wishlist</span>
            </div>
            <div className={`p-3 pr-7 pl-7 ${activeTab === 'Histórico' ? 'border-b p-3 border-b-4 border-orange-500' : ''}`} onClick={() => handleTabClick('Histórico')}>
                <span style={{ cursor: 'pointer' }} className='p-3 ml-5 pr-5'>Histórico</span>
            </div>
            <div className={`p-3 pr-7 pl-7 ${activeTab === 'Definições' ? 'border-b p-3 border-b-4 border-orange-500' : ''}`} onClick={() => handleTabClick('Definições')}>
                <span style={{ cursor: 'pointer' }} className='p-3 ml-5 pr-5'>Definições</span>
            </div>
        </div>
    );
}