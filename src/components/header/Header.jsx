import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className='w-full bg-gray-800 text-white sticky top-0 z-50 flex items-center justify-between h-[70px] gap-16'>
        <nav className="container flex items-center justify-center  w-full">
            <ul className='flex justify-between items-center gap-16'>
                <li className="max-sm:px-3 ">
            <NavLink className='text-2xl font-bold hover:text-gray-300 transition-colors duration-200 header__link' to={"/"}>Home</NavLink>
                 </li>
                <li className="max-sm:px-3 ">
            <NavLink className='text-2xl font-bold hover:text-gray-300 transition-colors duration-200 header__link' to={"/movies"}>Movies</NavLink>
                 </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header