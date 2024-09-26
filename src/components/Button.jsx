import React from "react";

const Button = ({
  label,
  iconURL,
  backgroundColor,
  borderColor,
  textColor,
  fullWidth,
}) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 ${
        borderColor ? { borderColor } : "border-coral-red"
      } border font-montserrat text-lg leading-none ${
        backgroundColor ? { backgroundColor } : "bg-coral-red"
      } rounded-full ${textColor ? { textColor } : "text-white"} ${
        fullWidth && "w-full"
      } hover:bg-dark-coral-red transition ease-in-out duration-300 group ${
        backgroundColor &&
        "hover:bg-slate-200 hover:text-slate-500 transition duration-400 ease-in-out"
      }`}
    >
      {label}
      {iconURL && (
        <img
          src={iconURL}
          alt="arrow-right-icon"
          className="ml-2 rounded-full w-5 h-5 transition ease-in group-hover:translate-x-2"
        />
      )}
    </button>
  );
};

export default Button;
