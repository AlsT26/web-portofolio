import React from "react";

const Navbar: React.FC = () => {
  return (
    <div className="navbar bg-white fixed top-0 w-full shadow-md transition-all duration-300 ease-in-out px-4 py-2 flex items-center justify-between">
      {/* Left Section: Menu Button */}
      <div className="flex items-center">
        <button className="btn btn-square bg-inherit outline-none hover:bg-gray-200 p-2 rounded-md transition-all duration-300 ease-in-out hover:scale-110">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="h-6 w-6 stroke-current text-gray-600">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      {/* Center Section: Avatar and Name */}
      <div className="flex items-center space-x-4">
        {/* Avatar */}
        <div className="avatar">
          <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
            {/* Placeholder for an avatar image */}
            <img src="/faceImage.jpg" alt="Profile" className="w-full h-full object-cover" />
          </div>
        </div>
        {/* Name */}
        <div>
          <h1 className="text-lg font-semibold text-gray-800">Alvin Sibuea</h1>
        </div>
      </div>

      {/* Right Section: More Options Button */}
      <div className="flex items-center">
        <button className="btn btn-square bg-inherit p-2 rounded-md hover:bg-gray-200 transition-all duration-300 ease-in-out">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="h-6 w-6 stroke-current text-gray-600">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
