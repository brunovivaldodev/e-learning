'use client'
import React from 'react';
import Link from 'next/link';

interface AulaButtonProps {
  buttonText: string;
}

const Button2: React.FC<AulaButtonProps> = ({ buttonText }) => {
  return (
    <div className="flex p-1.5 m-2 items-center justify-center" style={{ fontSize: '12px', fontWeight: 600, color: "#FF6636", backgroundColor: "#FFEEE8" }} href="">
      {buttonText}
    </div>
  );
};

export default Button2;
