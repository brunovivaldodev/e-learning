'use client'
import React from 'react';
import Curso from "../../components/Curso"

export default function Student_wishlist() {

    return (

        <div >

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

    );
}