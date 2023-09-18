import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <nav className='bg-sky-600 p-2  '>
        <div className='flex justify-around container-md '>
            <div className='flex '>
                <div className='mr-4'><h1 className='text-white text-lg'>
                <Link to="/">Personal Project Management Tool</Link></h1></div>  
                <div className='text-blue-200 p-1'><Link to="/" >Dashboard</Link></div>
            </div>
          <div className='flex mx-3'>
            <div className='mr-4 text-blue-200 p-1'><Link to="/register">Sign Up</Link></div>
            <div className='text-blue-200 p-1'><Link to="/login">Login</Link></div>
          </div>  
        </div>
               
        </nav>
    )
}

export default NavBar
