// AulaButton.tsx

import React from 'react';

interface AulaButtonProps {
  buttonText: string;
}

const Button: React.FC<AulaButtonProps> = ({ buttonText }) => {
  return (
    <div className="p-3 w-full">
      <a className="flex text-xs p-1.5 text-white bg-orange-500 items-center justify-center" href="">
        {buttonText}
      </a>
    </div>
  );
};

export default Button;
