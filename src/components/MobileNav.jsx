// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import { Squash as Hamburger } from 'hamburger-react';

const MobileNav = () => {
  return (
    <div>
      <div className='xl:hidden w-full h-[10vh] bg-[#ffd5d4] flex flex-row justify-between items-center px-[1rem]'>
        <div className="logo-container w-[full] flex justify-left">
            <Link to="/">
                <div className='logo-container w-[65px]'>
                    <img src="https://res.cloudinary.com/dk3aalcb0/image/upload/v1694422792/Luma%20Medspa/Luma_Logo_No_Circle_1_senvvn.png" alt="" />
                </div>
            </Link>
        </div>
        <div>
            <Hamburger />
        </div>
      </div>
    </div>
  )
}

export default MobileNav
