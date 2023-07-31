import React, { useState } from 'react'
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom"
import Sidebar from './Sidebar';
import "../index.css"


function UserHeader() {

    const MenuIcons = <MenuIcon className="flex items-center h-9 text-white cursor-pointer"/>
    const XIcons = <XIcon className="flex items-center h-9 text-white cursor-pointer"/>

    const [toggle, setToggle] = useState();
    const mcS = (<div className="mc-status" data-mc-server="mc.superslinkyserver.com"></div>)

 

    
  return (
 

        <div>
            <div className=' flex flex-row justify-between h-[70px] w-full py-4 px-6 bg-[#1a1a1a] '>

                <div className='flex items-center'>
                    <Link to="/Servers" onClick={ mcS } ><img src="https://raw.githubusercontent.com/Tiirnako/SuperSlinkyServer/main/images/logo.png" alt="" className='w-12 h-12'/> </Link>
                    <Link to="/Servers" onClick={ mcS } className='px-4 text-white font-semibold text-lg'>Super Slinky Server</Link>
                </div>

                <div className='hidden lg:flex items-center space-x-8'>
            <       Link to="/Servers" className='link' onClick={ mcS }>Servers</Link>
                    <a className='link'>Projects</a>
                    <Link to="/Dashboard" className='link'>Profile</Link>
                    <button className=' ' onClick={() => setToggle(!toggle)}>{!toggle ? ( MenuIcons ) : ( XIcons ) }</button>
                </div>
                
                <div className='flex lg:hidden items-center space-x-8'>
                    <button className=' ' onClick={() => setToggle(!toggle)}>{!toggle ? ( MenuIcons ) : ( XIcons ) }</button>
                </div>
            </div>
            
            {toggle && <Sidebar />}
    
            </div>
  )
}

export default UserHeader