import React from 'react'
import DarkMode from '../../darkmode/DarkMode'

const Navbar = () => {
  return (
    <>
     <nav className="bg-white p-4 flex items-center justify-between dark:bg-Dark drop-shadow-md dark:drop-shadow-xl">
      <div className="flex items-center mx-10">
        <div className="text-Dark dark:text-white font-bold text-4xl font-inter">OxProtect</div>
      </div>
      <div className="flex items-center space-x-7 mr-10">
        <div className="w-64">
          <input
            type="text"
            className="w-full bg-whitealpha placeholder-gray-800 dark:placeholder-white dark:bg-blackalpha focus:outline-none  rounded-2xl py-2 px-4"
            placeholder="Search"
          />
        </div>
        <button className="text-yellow  px-4 py-2 rounded-3xl w-28 h-10  bg-[#F2EDED] dark:bg-blackalpha hover:bg-yellow hover:text-white">
          Connect
        </button>
        <button className="text-yellow px-4 py-2 rounded-3xl w-28 h-10   bg-[#F2EDED] dark:bg-blackalpha hover:bg-yellow hover:text-white">
          Login
        </button>
        <DarkMode/>
      </div>
    </nav>
    </>
  )
}

export default Navbar
