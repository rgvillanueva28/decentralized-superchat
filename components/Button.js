import React from "react";

export default function Button({ children, ...props }) {
  return (
    <button
      {...props}
      className="transition-colors duration-200 bg-purple-500 px-8 py-4 rounded-full text-white text-xl shadow-md hover:bg-opacity-80 mb-2"
    >
      {children}
    </button>
  );
}
