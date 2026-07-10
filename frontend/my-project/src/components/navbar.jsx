import React from "react";
import { Link } from 'react-router-dom'
import API from '../api/api.js'

const Navbar = () => {
    return (
        <div className="border-b p-4 flex items-center ">
            <h1 className="font-bold text-xl">LinkApp</h1>
            
            <div className="ml-auto flex gap-4">
            <Link className="hover:text-blue-500" to='/'>Home</Link>
            <Link className="hover:text-blue-500" to='/register'>Register</Link>
            <Link className="hover:text-blue-500" to='/login'>Login</Link>
            <Link className="hover:text-blue-500" to='/profile'>Profile</Link>
            </div>
            
        </div>
    )
}

export default Navbar;
