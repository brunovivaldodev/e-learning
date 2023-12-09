import React from 'react';
import Link from 'next/link';

interface TabProps {
    activeTab: string;
}

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
}
