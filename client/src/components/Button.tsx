"use client";

import React from "react";

interface AulaButtonProps {
  buttonText: string;
}

const Button: React.FC<AulaButtonProps> = ({ buttonText }) => {
  return (
    <div
      className="flex m-2 p-1.5 items-center justify-center"
      style={{
        fontSize: "12px",
        fontWeight: 500,
        color: "white",
        backgroundColor: "#FF6636",
      }}
    >
      {buttonText}
    </div>
  );
};

export default Button;
