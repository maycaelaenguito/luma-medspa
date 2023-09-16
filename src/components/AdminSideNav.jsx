// eslint-disable-next-line no-unused-vars
import React from 'react';
import Icon from '../assets/profile white (1).png';
import { Link } from 'react-router-dom';
import {FaClipboardList} from 'react-icons/fa';
import {FaCalendarCheck} from 'react-icons/fa';
import {FaShoppingCart} from 'react-icons/fa';
import {FaImages} from 'react-icons/fa';
import {BiSolidCommentDots} from 'react-icons/bi';
import {FaEdit} from 'react-icons/fa';

const AdminSideNav = () => {
  return (
    <div className="sticky top-0 text-white h-[100vh] px-[10%] py-[5%]">
        <div className='flex flex-row gap-5'>
            <div className='w-[35px]'>
                <img src={Icon} alt="" />
            </div>
            <div className='flex items-end'>
                <h1 className='font-normal text-3xl'>Admin</h1>
            </div>
        </div>
        <div className='py-5 mt-10'>
            <ul className='flex flex-col gap-4 text-slate-200 font-medium'>
                <li className='group hover:bg-gray-600 hover:text-white w-auto px-2 py-2 rounded-md transition-colors duration-300'>
                    <Link className='flex flex-row gap-2 items-start'>
                        <span><FaClipboardList size={20}/></span>
                        <span>Client Records</span>
                    </Link>
                </li>
                <li className='group hover:bg-gray-600 hover:text-white w-auto px-2 py-2 rounded-md transition-colors duration-300'>
                    <Link className='flex flex-row gap-2 items-start'>
                        <span><FaCalendarCheck size={20}/></span>
                        <span>Booking Management</span>
                    </Link>
                </li>
                <li className='group hover:bg-gray-600 hover:text-white w-auto px-2 py-2 rounded-md transition-colors duration-300'>
                    <Link className='flex flex-row gap-2 items-start'>
                        <span><FaShoppingCart size={20}/></span>
                        <span>Shop</span>
                    </Link>
                </li>
                <li className='group hover:bg-gray-600 hover:text-white w-auto px-2 py-2 rounded-md transition-colors duration-300'>
                    <Link className='flex flex-row gap-2 items-start'>
                        <span><FaImages size={20}/></span>
                        <span>Gallery</span>
                    </Link>
                </li>
                <li className='group hover:bg-gray-600 hover:text-white w-auto px-2 py-2 rounded-md transition-colors duration-300'>
                    <Link className='flex flex-row gap-2 items-start'>
                        <span><FaEdit size={20}/></span>
                        <span>Blogs</span>
                    </Link>
                </li>
                <li className='group hover:bg-gray-600 hover:text-white w-auto px-2 py-2 rounded-md transition-colors duration-300'>
                    <Link className='flex flex-row gap-2 items-start'>
                        <span><BiSolidCommentDots size={20}/></span>
                        <span>Testimonials</span>
                    </Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default AdminSideNav
