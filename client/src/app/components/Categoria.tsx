'use client'
import React, { useState, useEffect } from 'react';
import { Cpu, Handshake, CreditCard, ChartBarHorizontal, BugDroid, Receipt, PenNib, Megaphone, Package, Camera, Headset, FirstAidKit } from "@phosphor-icons/react/dist/ssr";

interface props {
    categoria: string;
    color: string;
    icon: string;
    nCursos: number;
}


export default function Categoria({ categoria, color, icon, nCursos }: props) {


    console.log(categoria, color, icon, nCursos);

    const opacity = 100;
    const backgroundColorClass = `bg-${color}-${opacity}`;

    function renderIcon() {

        switch (icon) {
            case "Cpu":
                return <Cpu size={27} weight={"duotone"} color={color} />;
            case "Handshake":
                return <Handshake size={27} weight={"duotone"} color={color} />;
            case "CreditCard":
                return <CreditCard size={27} weight={"duotone"} color={color} />;
            case "ChartBarHorizontal":
                return <ChartBarHorizontal size={27} weight={"duotone"} color={color} />;
            case "BugDroid":
                return <BugDroid size={27} weight={"duotone"} color={color} />;
            case "Receipt":
                return <Receipt size={27} weight={"duotone"} color={color} />;
            case "PenNib":
                return <PenNib size={27} weight={"duotone"} color={color} />;
            case "Megaphone":
                return <Megaphone size={27} weight={"duotone"} color={color} />;
            case "Package":
                return <Package size={27} weight={"duotone"} color={color} />;
            case "Camera":
                return <Camera size={27} weight={"duotone"} color={color} />;
            case "FirstAidKit":
                return <FirstAidKit size={27} weight={"duotone"} color={color} />;
            case "Headset":
                return <Headset size={27} weight={"duotone"} color={color} />;
            default:
                return <Cpu size={27} weight={"duotone"} color={color} />;;
        }
    }
    return (

        <div className='flex w-1/4'>

            <div className={`flex p-2 pr-2 mb-3 items-center ${backgroundColorClass}`}>

                <div className='p-2 m-2 bg-white'>
                    {renderIcon()}
                </div>

                <div className='w-[140px] pr-2'>
                    <p className=' w-full text-gray-900 font-semibold'>{categoria}</p>
                    <p className='text-gray-600 text-[13px]'>{nCursos} Cursos</p>
                </div>
            </div>

        </div>

    );
}
