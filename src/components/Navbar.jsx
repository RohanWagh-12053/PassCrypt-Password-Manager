import React from 'react'
import { FaHome } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import Applogo from './Applogo';

const Navbar = () => {
  return (
    <nav className='flex min-w-fit justify-between sm:justify-around h-16 text-white items-center px-4 w-full bg-black'>
     <Applogo/>
      <ul className='flex sm:gap-12 gap-4 items-center'>
        
        <li className='flex items-center justify-center'> <FaHome className='sm:hidden text-[1.6rem]'/> <a className='hidden sm:block hover:font-bold font-semibold' href="">Home</a></li>
        <li className='flex items-center justify-center'> <IoCall className='sm:hidden text-[1.6rem]'/> <a className='hidden sm:block hover:font-bold font-semibold' href="">Contact Us</a></li>

        <button className='flex items-center justify-center gap-2 border bg-gray-950 border-gray-800 rounded-full sm:px-3 sm:py-1'><img className='w-[2rem] invert' src="/github.svg" alt="" /><span className='hidden sm:flex'>Github</span></button>
           
        
      </ul>
    </nav>
  )
}

export default Navbar
