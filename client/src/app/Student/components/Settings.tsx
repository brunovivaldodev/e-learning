'use client'
import React, { useState } from 'react';
import Image from "next/image";
import pfp from "../../../../public/pfp.webp";
import { Eye, EyeSlash } from "@phosphor-icons/react/dist/ssr";


export default function Settings() {

    const [passwordVisible, setPasswordVisible] = useState(false);
    const [passwordVisible2, setPasswordVisible2] = useState(false);
    const [passwordVisible3, setPasswordVisible3] = useState(false);
    const [selectedImage, setSelectedImage] = useState({
        file: null,
        dimensions: { width: 100, height: 100 }, // Set default width and height
    });

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const togglePasswordVisibility2 = () => {
        setPasswordVisible2(!passwordVisible2);
    };

    const togglePasswordVisibility3 = () => {
        setPasswordVisible3(!passwordVisible3);
    };

    const handleImageChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            const selectedFile = e.target.files[0];

            // Update only the file in the state, keep the existing dimensions
            setSelectedImage({
                ...selectedImage,
                file: selectedFile,
            });
        }
    };

    return (

        <div >

            <p className="text-lg font-bold mt-5 mb-5">Definições</p>

            <div className="flex">

                <div className="flex p-10 flex-col w-1/4 items-center justify-center border border-gray-100">

                    <label htmlFor="profile-picture">
                        <Image
                            className="w-full cursor-pointer"
                            src={selectedImage.file ? URL.createObjectURL(selectedImage.file) : pfp}
                            alt="profile picture"
                            width={selectedImage.dimensions.width}
                            height={selectedImage.dimensions.height}
                        />
                        <input
                            id="profile-picture"
                            type="file"
                            accept="image/*"
                            style={{ display: 'none' }}
                            onChange={handleImageChange}
                        />
                    </label>

                    <p className="mt-5 text-gray-600 text-xs text-center">Recomenda-se uma imagem inferior a 1 MB e de proporção 1:1</p>

                </div>

                <div className="flex flex-col w-3/4">

                    <div className="flex flex-col w-full ml-5">

                        <p className="text-xs">Nome Completo</p>

                        <div className="flex">
                            <div className="flex w-1/2 mr-3 border border-gray-200 p-2 mt-1 items-center">
                                <input className="text-xs w-full" type="text" name="" id="first-name" placeholder="Primeiro nome" />
                            </div>

                            <div className="flex w-1/2 border border-gray-200 p-2 mt-1 items-center">
                                <input className="text-xs w-full" type="text" name="last-name" id="" placeholder="Último nome" />
                            </div>
                        </div>

                        <p className="text-xs mt-3">Nome de Utilizador</p>

                        <div className="flex w-full border border-gray-200 p-2 mt-1 items-center">
                            <input className="text-xs w-full" type="text" name="" id="username" placeholder="Escreva o seu nome de utilizador" />
                        </div>

                        <p className="text-xs mt-3">Email</p>

                        <div className="flex w-full border border-gray-200 p-2 mt-1 items-center">
                            <input className="text-xs w-full" type="text" name="" id="email" placeholder="Endereço de email" />
                        </div>

                        <p className="text-xs mt-3">Título</p>

                        <div className="flex w-full border border-gray-200 p-2 mt-1 items-center">
                            <textarea placeholder="O seu título, profissão ou pequena biografia" className="text-xs w-full resize-none" name="" id="titulo"></textarea>
                        </div>

                    </div>

                    <div className="w-1/5 mt-3 ml-5">
                        <a className="flex text-xs p-3 text-white bg-orange-500 items-center justify-center" href="">
                            Salvar Alterações
                        </a>
                    </div>

                </div>

            </div>

            <p className="text-lg font-bold mt-5">Alterar Password</p>

            <div className="flex flex-col w-1/3">

                <p className="text-xs mt-3">Password Actual</p>

                <div className="flex w-full border border-gray-200 p-2 mt-1 items-center">
                    <input
                        className="text-xs w-full"
                        type={passwordVisible ? 'text' : 'password'}
                        placeholder="Password"
                    />
                    {passwordVisible ? (
                        <Eye size={15} onClick={togglePasswordVisibility} />
                    ) : (
                        <EyeSlash size={15} onClick={togglePasswordVisibility} />
                    )}
                </div>

                <p className="text-xs mt-4 text-gray-900">Nova Password</p>

                <div className="flex w-full border border-gray-200 p-2 mt-1 items-center">
                    <input
                        className="text-xs w-full"
                        type={passwordVisible2 ? 'text' : 'password'}
                        placeholder="Nova Password"
                    />
                    {passwordVisible2 ? (
                        <Eye size={15} onClick={togglePasswordVisibility2} />
                    ) : (
                        <EyeSlash size={15} onClick={togglePasswordVisibility2} />
                    )}
                </div>

                <p className="text-xs mt-4">Confirmar Password</p>

                <div className="flex w-full border border-gray-200 p-2 mt-1 items-center">
                    <input
                        className="text-xs w-full"
                        type={passwordVisible3 ? 'text' : 'password'}
                        placeholder="Confirmar Password"
                    />
                    {passwordVisible3 ? (
                        <Eye size={15} onClick={togglePasswordVisibility3} />
                    ) : (
                        <EyeSlash size={15} onClick={togglePasswordVisibility3} />
                    )}
                </div>

                <div className="w-2/5 mt-4">
                    <a className="flex text-xs p-3 text-white bg-orange-500 items-center justify-center" href="">
                        Alterar password
                    </a>
                </div>

            </div>

        </div>

    );
}