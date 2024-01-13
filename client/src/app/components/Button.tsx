// AulaButton.tsx

import React from 'react';

interface AulaButtonProps {
  buttonText: string;
}

const Button: React.FC<AulaButtonProps> = ({ buttonText }) => {
  return (
    <div className="p-2 w-full">
      <a className="flex p-1.5 items-center justify-center" style={{ fontSize: '12px', fontWeight: 500, color: "white", backgroundColor:"#FF6636" }}  href="">
        {buttonText}
      </a>
    </div>
  );
};

export default Button;
