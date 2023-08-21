import React from 'react';

const Button = ({ children, className = '', ...props }) => {
  return (
    <button
      className={`text-primaryColor bg-greenColor w-[143px] h-[42px] text-[14px] font-medium items-center ${
        className || ''
      } `}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
