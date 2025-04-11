import React, { useState } from "react";

const TextUpdater = () => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="space-y-4">
      <div className="relative">
        <input
          type="text"
          value={text}
          onChange={handleChange}
          placeholder="Type something..."
          className="w-full p-4 pl-12 border-2 border-indigo-200 rounded-xl focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-300 bg-white/50 backdrop-blur-sm"
        />
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-indigo-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
      {text && (
        <div className="p-4 bg-indigo-50 rounded-xl border border-indigo-100 transform transition-all duration-300">
          <p className="text-indigo-800 font-medium">You typed:</p>
          <p className="text-indigo-600 mt-1">{text}</p>
        </div>
      )}
    </div>
  );
};

export default TextUpdater;
