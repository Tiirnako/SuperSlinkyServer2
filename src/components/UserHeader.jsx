import React, { useState } from 'react'
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom"
import Sidebar from './Sidebar';
import "../index.css"

function UserHeader() {

    const MenuIcons = <MenuIcon className="flex items-center h-9 text-white cursor-pointer"/>
    const XIcons = <XIcon className="flex items-center h-9 text-white cursor-pointer"/>

    const [toggle, setToggle] = useState();
    

  return (

    <div>
 
        <header className=" flex justify-between items-center py-4 px-6 bg-[#1a1a1a] ">
            <div className=' flex items-center'>
                <div className='flex flex-row items-center'>
                <a href="/"><img src="https://raw.githubusercontent.com/Tiirnako/SuperSlinkyServer/main/images/logo.png" alt="" className='w-12 h-12 obj'/></a>
                <a href="/" className='px-4 text-white font-semibold text-lg'>Super Slinky Server</a>
                </div>
            </div>
            
            <div className='flex space-x-8 items-center'>
                <button onClick={() => setToggle(!toggle)}>{!toggle ? ( MenuIcons ) : ( XIcons ) }</button>
                
            </div>
        </header>
        {toggle && <Sidebar />}
    </div>
  )
}

export default UserHeader