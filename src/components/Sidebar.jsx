import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import "../index.css"
import { logout } from '../firebase';

function Sidebar() {

    return(
        <div className='absolute border-t-2 right-0 bg-black '>
            <div className='flex-col flex space-y-8 w-52 items-center p-6 h-screen'>
                    <Link to="/Servers" className='link'>Servers</Link>
                    <a className='link'>Projects</a>
                    <a className='link'>About</a>
                    <Link to="/" className='link justify-self-end' onClick={logout}>Logout</Link>
            </div>
        </div>
    )
}

export default Sidebar