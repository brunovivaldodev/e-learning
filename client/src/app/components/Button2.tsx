// AulaButton.tsx

import React from 'react';

interface AulaButtonProps {
    buttonText: string;
}

const Button2: React.FC<AulaButtonProps> = ({ buttonText }) => {
    return (
        <div className="p-3">
      <a className="flex text-xs font-bold outline-none p-1.5 text-orange-500 bg-orange-100 items-center justify-center" href="">
        {buttonText}
      </a>
    </div>
    );
};

export default Button2;
