/* eslint-disable no-unused-vars */
import React from 'react';
import '../css/home.css';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <div className='header w-full h-screen bg-no-repeat bg-blend-darken'>
        <div className='pt-2'>
            <Navbar/>
        </div>
        <div className="flex items-center justify-center header-content h-[70vh]">
            <div>
                <h1 className='text-slate-100 font-[300] lg:w-[50vw] tracking-wider lg:text-[120px] text-center'>Welcome to <span className='text-black'>LUMA</span> <span className='text-[#F2A8A6]'>Medspa</span></h1>
                <div className='flex justify-center'>
                  <p className=' text-center lg:text-[80px] text-slate-100 w-[40vw] leading-tight'>Take care of your beauty and wellness</p>
                </div>
                <div className='flex justify-center w-full pt-7'>
                  <Link>
                      <button className='uppercase tracking-wider border-2 border-[#EFB2B1] px-6 py-2 rounded-lg hover:bg-[#EFB2B1] transition duration-300 text-slate-100 font-regular text-[25px]'>
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
