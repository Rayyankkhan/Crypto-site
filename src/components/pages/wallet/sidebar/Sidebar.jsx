// Sidebar.js
import React, { useState } from 'react';
import './style.css'
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`fixed top-0 left-0 h-full w-48 bg-gray-900 text-white ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } transition-transform`}
    >
      <ul className="p-4">
        <li className="py-2">
          <a href="#" className="block hover:text-yellow-400">Home</a>
        </li>
        <li className="py-2">
          <a href="#" className="block hover:text-yellow-400">About</a>
        </li>
        <li className="py-2">
          <a href="#" className="block hover:text-yellow-400">Services</a>
        </li>
        <li className="py-2">
          <a href="#" className="block hover:text-yellow-400">Contact</a>
        </li>
      </ul>
      <button
        onClick={handleToggle}
        className="w-full bg-gray-800 text-white py-2 px-4 absolute bottom-0 left-0 hover:bg-gray-700"
      >
        {isOpen ? 'Close Sidebar' : 'Open Sidebar'}
      </button>
    </div>
  );
};

export default Sidebar;
