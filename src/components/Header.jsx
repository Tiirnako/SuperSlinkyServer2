import React from 'react'
import { MenuIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className=" flex justify-between items-center py-4 px-6 bg-[#1a1a1a]">
        <div className=' flex flex-row items-center'>
            <a href="/" ><img src="https://raw.githubusercontent.com/Tiirnako/SuperSlinkyServer/main/images/logo.png" alt="" className='w-12 h-12'/></a>
            <a href="/" className='px-4 text-white font-semibold text-lg'>Super Slinky Server</a>
        </div>
        <div className='flex items-center'>
            <Link to="/Login"><button className='button mx-4'>Login</button></Link>
        </div>
    </header>
  )
}

export default Header