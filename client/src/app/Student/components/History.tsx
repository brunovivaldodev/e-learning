'use client'

import React from 'react';
import Image from "next/image";
import thumb1 from "../../../../public/thumb1.png";
import thumb2 from "../../../../public/thumb2.png";
import Item from '../../components/Purchase';
import thumb3 from "../../../../public/thumb3.png";
import { PlayCircle, CurrencyDollarSimple, CreditCard, ArrowDown, ArrowUp, Star } from "@phosphor-icons/react/dist/ssr";


export default function History() {

    const cursos = [
        { thumbnail: "/thumb1.png", instructor: "Daniel Sofrimento", price: 45000, stars: 3, students: 10000, title: "Learn Ethical Hacking From Scratch" },
        { thumbnail: "/thumb2.png", instructor: "Bunga Teca", price: 20000, stars: 3, students: 8050, title: "Mega Digital Marketing Course" },
        { thumbnail: "/thumb1.png", instructor: "Francisca Tungumuna", price: 20000, stars: 3, students: 10, title: "iPhone Photography" },

    ];

    const cursos1 = [
        { thumbnail: "/thumb1.png", instructor: "Daniel Sofrimento", price: 45000, stars: 3.0, students: 10000, title: "Learn Ethical Hacking From Scratch" },
        { thumbnail: "/thumb2.png", instructor: "Bunga Teca", price: 20000, stars: 3.5, students: 8050, title: "Mega Digital Marketing Course" },
        { thumbnail: "/thumb1.png", instructor: "Francisca Tungumuna", price: 20000, stars: 5.0, students: 10, title: "iPhone Photography" },
        { thumbnail: "/thumb2.png", instructor: "Bunga Teca", price: 20000, stars: 3.2, students: 8050, title: "Mega Digital Marketing Course" },
    ];

    const cursos2 = [
        { thumbnail: "/thumb1.png", instructor: "Daniel Sofrimento", price: 45000, stars: 5, students: 10000, title: "Learn Ethical Hacking From Scratch" },
    ];

    

    return (

        <div>

            <p className="text-lg font-bold mt-5 mb-5">Histórico de compra</p>

            <div>
                <Item nCursos={cursos.length} data={"30 de Janeiro, 2023 às 21:53"} cursos={cursos}></Item>

                <Item nCursos={cursos1.length} data={"27 de Outubro, 2022 às 12:12"} cursos={cursos1}></Item>

                <Item nCursos={cursos2.length} data={"15 de Fevereiro, 2022 às 23:48"} cursos={cursos2}></Item>


            </div>

        </div>

    );
}