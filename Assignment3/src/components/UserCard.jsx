import React from "react";

const UserCard = ({ name, email }) => {
  return (
    <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 shadow-lg border border-indigo-100 transform transition-all duration-300 hover:scale-[1.02]">
      <div className="text-center">
        <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold">
          {name.charAt(0)}
        </div>
        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold mb-2">
          User Information
        </div>
        <h2 className="text-2xl font-bold text-indigo-900 mb-2">{name}</h2>
        <p className="text-indigo-600 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
          {email}
        </p>
      </div>
    </div>
  );
};

export default UserCard;
