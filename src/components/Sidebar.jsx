import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import "../index.css"
import { logout } from '../firebase';

function Sidebar() {

    const mcS = (<div className="mc-status" data-mc-server="mc.superslinkyserver.com"></div>)

    return(
        <div className='absolute sidebar bg-black text-white rounded-2xl border-t-2 right-0'>
            <div className='flex-col flex space-y-8 w-52 items-center p-6 '>
                    <Link to="/Servers" className='sidebarLink' onClick={ mcS }>Servers</Link>
                    <a className='sidebarLink'>Projects</a>
                    <Link to="/Dashboard" className='sidebarLink'>Profile</Link>
                    <Link to="/" className='logout justify-self-end' onClick={logout && mcS} >Logout</Link>
            </div>
        </div>
    )}

export default Sidebar