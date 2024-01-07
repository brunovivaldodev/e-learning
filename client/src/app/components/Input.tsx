import React, { useState } from 'react';
import { Check } from "@phosphor-icons/react/dist/ssr";


export default function Input({ id, name, isChecked, onToggle }) {

    return (

        <div className={`border border-gray-100 mr-2 ${isChecked ? 'bg-orange-600' : ''}`} onClick={() => onToggle(id)} style={{cursor: 'pointer'}}>
            <Check color="white" weight={'bold'} size={15} />
        </div>

    );
}
