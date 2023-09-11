/* eslint-disable no-unused-vars */
import React from 'react';
import '../css/home.css';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import MobileNav from './MobileNav';

const Home = () => {
  return (
    <div>
      <div className='header w-full h-screen bg-no-repeat bg-blend-darken'>
        <div className='xl:pt-2'>
              <Navbar/>
              <MobileNav/>
        </div>
        <div className="flex h-[90vh] lg:h-auto items-center lg:items-end justify-center header-content lg:pt-[3rem]">
            <div>
                <h1 className='text-slate-100 font-[300] tracking-wider lg:text-[120px] text-center lg:leading-[10rem]'>Welcome to <br/> <span className='text-black'>LUMA</span> <span className='text-[#F2A8A6]'>Medspa</span></h1>
                <div className='flex justify-center'>
                  <p className=' text-center lg:text-[80px] text-slate-100 leading-none'>Take care of your beauty and <br/> wellness</p>
                </div>
                <div className='flex justify-center w-full lg:pt-[3rem]'>
                  <Link>
                      <button className='uppercase tracking-wider border-2 border-[#EFB2B1] px-6 py-2 rounded-lg hover:bg-[#EFB2B1] transition duration-300 text-slate-100 font-regular lg:text-[25px]'>
                          Book Now
                      </button>
                  </Link>
                </div>
            </div>
        </div>
        
      </div>
    </div>
  )
}

export default Home
