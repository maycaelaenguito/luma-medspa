/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import BookBtn from './BookBtn';

const Navbar = () => {
  return (
    <div>
      <div className="navbar-con flex flex-row justify-around text-slate-100 tracking-widest font-medium">
        <ul className='left-nav uppercase flex flex-row gap-[50px] text-[19px] items-center'>
            <li className='hover:text-[#f5a6a6] transition duration-300'>
                <Link to="/">Home</Link>
            </li>
            <li className='hover:text-[#f5a6a6] transition duration-300'>
                <Link to="/about">About</Link>
            </li>
            <li className='hover:text-[#f5a6a6] transition duration-300'>
                <Link to="/services">Services</Link>
            </li>
            <li className='hover:text-[#f5a6a6] transition duration-300'>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
        <div className="logo-container w-[full] flex justify-center">
            <Link to="/">
                <div className='logo-container w-[200px]'>
                    <img src="https://res.cloudinary.com/dk3aalcb0/image/upload/v1694409716/Luma%20Medspa/Luma_Logo_White_1_o5wuky.png" alt="" />
                </div>
            </Link>
        </div>
        <ul className='left-nav uppercase flex flex-row gap-[50px] text-[19px] items-center'>
            <li className='hover:text-[#f5a6a6] transition duration-300'>
                <Link to="/">Blog</Link>
            </li>
            <li className='hover:text-[#f5a6a6] transition duration-300'> 
                <Link to="/">Shop</Link>
            </li>
            <li className='hover:text-[#f5a6a6] transition duration-300'>
                <Link to="/">Gallery</Link>
            </li>
            <li>
                <BookBtn/>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
