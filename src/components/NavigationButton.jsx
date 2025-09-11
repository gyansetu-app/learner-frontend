import React from "react";

const NavigationButton = ({ label, onClick, icon, className }) => {
  return (
    <button
      onClick={onClick}
      className={`w-full py-4 px-6 flex items-center justify-center gap-2 
                  rounded-2xl text-lg font-semibold shadow-md transition font-baloo 
                  ${className}`}
    >
      {icon && <span className="text-2xl">{icon}</span>}
      <span>{label}</span>
    </button>
  );
};

export default NavigationButton;
