'use client'

import React from 'react';
import Image from "next/image";
import pfp from "../../../public/pfp.webp";
import course from "../../../public/course4.png";
import { Star, User } from "@phosphor-icons/react/dist/ssr";
import Button from "../../components/Button"
import Button2 from "../../components/Button2"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Tab from "../../components/Tab"
import ProfileInfo from "../../components/ProfileInfo"
import Curso from "../../components/Curso"


export default function Student_wishlist() {

    return (

        <div >
            <Header></Header>

            <div className="flex flex-col bg-white justify-center items-center">

                <ProfileInfo></ProfileInfo>

                <Tab activeTab="Wishlist"></Tab>

                <div className="flex flex-col w-3/4 bg-white mb-20">

                    <p className="text-lg font-bold mt-5 mb-5">Wishlist</p>

                    <div className='flex flex-wrap'>

                        <Curso></Curso>
                        <Curso></Curso>
                        <Curso></Curso>
                        <Curso></Curso>
                        <Curso></Curso>
                        <Curso></Curso>

                    </div>

                </div>

            </div>

            <Footer></Footer>

        </div>
    );
}