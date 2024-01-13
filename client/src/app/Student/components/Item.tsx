'use client'

import React, {useState} from 'react';
import Image from "next/image";
import thumb1 from "../../../../public/thumb1.png";
import thumb2 from "../../../../public/thumb2.png";
import thumb3 from "../../../../public/thumb3.png";
import { PlayCircle, CurrencyDollarSimple, CreditCard, ArrowDown, ArrowUp, Star } from "@phosphor-icons/react/dist/ssr";


export default function Student() {

    const [detailsVisible, setDetailsVisible] = useState(true);

    const toggleDetails = () => {
        setDetailsVisible(!detailsVisible);
    };

    return (

        <div className='flex border border-gray-100 p-2 justify-between items-center mb-5'>

            <div>

                <p className='text-sm'>1 de Setembro, 2023 às 11:30</p>

                <div className='flex mt-2'>

                    <div className='flex items-center mr-2'>
                        <PlayCircle size={20} color="indigo" />
                        <p className='text-xs text-gray-600 ml-1'>1 Curso</p>
                    </div>

                    <div className='flex items-center mr-2'>
                        <CurrencyDollarSimple size={20} color="orange" />
                        <p className='text-xs text-gray-600 ml-1'>35000 AKZ</p>
                    </div>

                    <div className='flex items-center mr-2'>
                        <CreditCard size={20} color="green" />
                        <p className='text-xs text-gray-600 ml-1'>Cartão de Crédito</p>
                    </div>

                </div>

            </div>

            <div className='p-2 bg-gray-100' style={{ cursor: 'pointer' }}>
                <ArrowDown size={20} weight="light" />
            </div>

        </div>


    );
}