import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';


import { IoStorefrontOutline } from "react-icons/io5";
import { FaRegPlusSquare } from "react-icons/fa";
import { MdLightMode, MdDarkMode } from "react-icons/md";



const Navbar = () => {



  return (
    <div className='container mx-auto px-4 min-h-screen border-2 '>
      <div className='flex flex-col lg:flex-row items-center justify-between '>
        <Link to={"/"}>
          <div className="flex items-center gap-2 p-4 text-3xl font-extrabold cursor-pointer">
            <p className=" text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              PRODUCT STORE
            </p>
            <IoStorefrontOutline className="ml-2  text-blue-600" />
          </div>
        </Link>
        <div className='flex items-center gap-4 p-4 text-3xl font-bold '>
          <Link to={"/create"}>
            <button className='cursor-pointer'><FaRegPlusSquare /></button>
          </Link>
          <button><MdDarkMode /> <MdLightMode /></button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
