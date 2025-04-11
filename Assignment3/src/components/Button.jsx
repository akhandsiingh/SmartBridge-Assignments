import React from "react";

const Button = ({ children, onClick }) => {
  const handleClick = () => {
    console.log("Button clicked!");
    if (onClick) onClick();
  };

  return (
    <button
      onClick={handleClick}
      className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl font-medium hover:from-indigo-600 hover:to-purple-600 transform transition-all duration-300 hover:scale-[1.05] shadow-lg hover:shadow-xl flex items-center space-x-2"
    >
      <span>{children}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  );
};

export default Button;
