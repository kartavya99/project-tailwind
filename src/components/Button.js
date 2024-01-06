import React from "react";

const Button = ({ children, ...props }) => {
  return (
    <button className="px-4 py-2 text-xs md:text-base rounded-md bg-sky-600 text-slate-50 hover:bg-sky-500 hover:text-slate-100">
      {children}
    </button>
  );
};

export default Button;
