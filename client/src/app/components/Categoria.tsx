<div className="flex w-75 bg-blue-100 items-center p-4">
    <div className="flex items-center justify-center w-14 h-14 bg-cyan-50 ">
        <FirstAidKit size={28} />
    </div>
    <div className="ml-4">
        <h5>Saude e Desporto</h5>
        <p>20 cursos</p>
    </div>
</div>


import React, { useState } from 'react';
import { Check } from "@phosphor-icons/react/dist/ssr";


export default function Input({ id, name, isChecked, onToggle }) {

    return (

        <div className={`border border-gray-100 mr-2 ${isChecked ? 'bg-orange-600' : ''}`} onClick={() => onToggle(id)} style={{ cursor: 'pointer' }}>
            <Check color="white" weight={'bold'} size={15} />
        </div>

    );
}

