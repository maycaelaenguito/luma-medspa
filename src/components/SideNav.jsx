// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Squash as Hamburger } from 'hamburger-react';
import Icon from '../assets/profile white (1).png';
import { NavLink } from 'react-router-dom';
import {FaClipboardList} from 'react-icons/fa';
import {FaCalendarCheck} from 'react-icons/fa';
import {FaShoppingCart} from 'react-icons/fa';
import {FaImages} from 'react-icons/fa';
import {BiSolidCommentDots} from 'react-icons/bi';
import {FaEdit} from 'react-icons/fa';
import {FaSignOutAlt} from 'react-icons/fa';

const SideNav = () => {
  const [sideNavVisible, setSideNavVisible] = useState(false);

  const toggleSideNav = () => {
    setSideNavVisible(!sideNavVisible);
  };

  return (
    <div className=" h-screen sticky top-0 bg-gray-800">
      <main className=''>
          <div
            className={` small:fixed h-full lg:w-[25vw] xl:w-[20vw] top-0 lg:left-[0] ${
              sideNavVisible ? 'small:left-[0] bg-gray-800 w-full sm:w-[38vw]' : 'left-[-100vw] sm:left-[-35vw]'
            }`}
          >
          <div className="sticky top-0 text-white px-[10%] py-[5%] font-raleway">
            <NavLink to={`/dashboard`}>
                <div className=' bg-sky-900 small:w-[90%] flex flex-row items-end rounded-md'>
                <div className='flex flex-row gap-3 items-start px-3 py-4'>
                        <div className='w-[28px]'>
                            <img src={Icon} alt="" />
                        </div>
                        <div className='flex items-end'>
                            <h1 className='font-normal text-[16px] md:text-[18px]'>Dashboard</h1>
                        </div>
                </div>
                </div>
            </NavLink>
            <div className='py-5'>
              <p className='text-slate-400 pb-3 px-3 font-medium text-[14px] md:text-[16px]'>General</p>
                <ul className='flex flex-col gap-1 text-slate-200 font-medium text-[13px] md:text-[15px]'>
                    <li className='group transition-colors duration-300'>
                        <NavLink to={`/dashboard/client-records`} className={'[&.active]:text-white [&.active]:bg-gray-600 px-2 py-2 rounded-md flex flex-row gap-3 items-start hover:bg-gray-600 hover:text-white w-auto'} >
                            <span><FaClipboardList size={20}/></span>
                            <span>Client Records</span>
                        </NavLink>
                    </li>
                    <li className='group transition-colors duration-300'>
                        <NavLink to={`/dashboard/booking`} className={'[&.active]:text-white [&.active]:bg-gray-600 px-2 py-2 rounded-md flex flex-row gap-3 items-start hover:bg-gray-600 hover:text-white w-auto'}>
                            <span><FaCalendarCheck size={20}/></span>
                            <span>Booking Management</span>
                        </NavLink>
                    </li>
                    <li className='group transition-colors duration-300'>
                        <NavLink to={`/dashboard/shop`} className={'[&.active]:text-white [&.active]:bg-gray-600 px-2 py-2 rounded-md flex flex-row gap-3 items-start hover:bg-gray-600 hover:text-white w-auto'}>
                            <span><FaShoppingCart size={20}/></span>
                            <span>Shop</span>
                        </NavLink>
                    </li>
                    <li className='group transition-colors duration-300'>
                        <NavLink to={`/dashboard/gallery`} className={'[&.active]:text-white [&.active]:bg-gray-600 px-2 py-2 rounded-md flex flex-row gap-3 items-start hover:bg-gray-600 hover:text-white w-auto'}>
                            <span><FaImages size={20}/></span>
                            <span>Gallery</span>
                        </NavLink>
                    </li>
                    <li className='group transition-colors duration-300'>
                        <NavLink to={`/dashboard/blogs`} className={'[&.active]:text-white [&.active]:bg-gray-600 px-2 py-2 rounded-md flex flex-row gap-3 items-start hover:bg-gray-600 hover:text-white w-auto'}>
                            <span><FaEdit size={20}/></span>
                            <span>Blogs</span>
                        </NavLink>
                    </li>
                    <li className='group transition-colors duration-300'>
                        <NavLink to={`/dashboard/testimonials`} className={'[&.active]:text-white [&.active]:bg-gray-600 px-2 py-2 rounded-md flex flex-row gap-3 items-start hover:bg-gray-600 hover:text-white w-auto'}>
                            <span><BiSolidCommentDots size={20}/></span>
                            <span>Testimonials</span>
                        </NavLink>
                    </li>
                    <li className='group transition-colors duration-300'>
                        <NavLink to={`/`} className={'[&.active]:text-white [&.active]:bg-gray-600 px-2 py-2 rounded-md flex flex-row gap-3 items-start hover:bg-gray-600 hover:text-white w-auto'}>
                            <span><FaSignOutAlt size={20}/></span>
                            <span>Log Out</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
          </div>
          </div>
      </main>
      <div className={`absolute top-5 z-50 flex lg:hidden ${
              sideNavVisible ? ' text-white left-[82vw] xs:left-[85vw] sm:left-[30vw] md:left-[31.5vw]' : 'left-[1vw] text-slate-950'
            } `} >
            <Hamburger
            size={25} 
            duration={0.1}
            toggled={sideNavVisible} 
            toggle={toggleSideNav} />
        </div>
    </div>
  );
};

export default SideNav;
