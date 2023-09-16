// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import { Squash as Hamburger } from 'hamburger-react';

const MobileNav = () => {
  return (
    <div>
      <div className='xl:hidden w-full h-[65px] bg-stone-950 flex flex-row justify-between items-center px-[1rem]'>
        <div className="logo-container w-[full] flex justify-left">
            <Link to="/">
                <div className='logo-container w-[55px]'>
                    <img src="https://res.cloudinary.com/dk3aalcb0/image/upload/v1694409716/Luma%20Medspa/Luma_Logo_White_1_o5wuky.png" alt="" />
                </div>
            </Link>
        </div>
        <div> 
            <Hamburger 
            size={24}
            color='white'
            />
        </div>
      </div>
    </div>
  )
}

export default MobileNav
