import React from 'react';
import Image from "next/image";
import course2 from "../../../public/course2.png";
import Button from "./Button"
import Button2 from "./Button2"

interface CursoProps {

    thumbnail: string;
    lessons: string;
    percentage: number;
    title: string;

}

export default function CursoStudent({ thumbnail, lessons, percentage, title }: CursoProps) {
    return (

        <div className='flex flex-col w-1/4 mb-3'>

            <div className="flex flex-col m-1 border border-gray-100">

                <Image className="w-full p-0" width={150} height={100} src={thumbnail} alt="course" />

                <p className="text-gray-500 p-2" style={{ fontSize: '10px' }}>{title}</p>

                <p className="pl-2 pb-2 text-xs font-bold">{lessons}</p>

                <div className="border border-gray-100  ">

                    {percentage != 0 ? (
                        <div className="flex items-center justify-between">
                            <Button2 buttonText="Assistir Aula"></Button2>
                            <p className="text-xs text-green-500 mr-2">{percentage}% completo</p>
                        </div>
                        
                    ) : (
                        <Button buttonText="Assistir Aula"/>
                    )}

                </div>

            </div>

        </div>

    );
}
