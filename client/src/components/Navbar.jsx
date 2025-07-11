import React, { useState } from 'react'
import {assets, menuLinks} from '../assets/assets'
import { Link, useLocation, useNavigate } from 'react-router-dom'


const Navbar = ({setShowLogin}) => {

    const location = useLocation();
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

  return (
    <div className={`flex justify-between items-center px-6 md:px-16 lg:px-24 py-4 xl:px-32 text-gray-600 border-b border-borderColor relative transition-all
    ${location.pathname === '/' && 'bg-light'}`}>
        <Link to='/'>
          <img src={assets.logo} alt="CarRental Logo" className='h-8'/>
        </Link>
        <div className={`max-sm:fixed max-sm:h-screen max-sm:w-full max-sm:top-16 max-sm:border-t border-borderColor right-0 
        flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 max-sm:p-4 transition-all duration-300 z-50 
        ${location.pathname === '/' ? 'bg-light' : 'bg-white'} 
        ${open ? 'max-sm:translate-x-0' : 'max-sm:-translate-x-full'} `}>
            {menuLinks.map((link, index) => (
                <Link to={link.path} key={index}>
                    {link.name}
                </Link>
            ))}
        </div>
        <div className='hidden lg:flex items-center gap-2 border border-borderColor px-3 rounded-full max-w-56'>
            <input type="text" className='py-1.5 w-full bg-transparent outline-none placeholder-gray-500' placeholder='Search...' />
            <img src={assets.search_icon} alt="Search Icon" />
        </div>
        <div className='flex items-start gap-6 max-sm:flex-col sm:items-center'>
            <button onClick={() => navigate('/owner')} className='cursor-pointer'>Dashboard</button>
            <button onClick={() => setShowLogin(true)} className='cursor-pointer px-8 py-2 bg-primary text-white rounded-lg'>Login</button>
        </div>
        <button className='sm:hidden cursor-pointer' aria-label='Toggle Menu' onClick={() => setOpen(!open)}>
            <img src={open ? assets.close_icon : assets.menu_icon} alt="menu icon" />
        </button>
    </div>  
  )
}

export default Navbar
