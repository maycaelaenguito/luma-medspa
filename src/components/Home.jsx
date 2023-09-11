/* eslint-disable no-unused-vars */
import React from 'react';
import '../css/home.css';
import Navbar from './Navbar';

const Home = () => {
  return (
    <div>
      <div className='header w-full h-screen bg-no-repeat bg-blend-darken'>
        <div className='pt-2'>
            <Navbar/>
        </div>
        <div className="flex items-center justify-center header-content h-[50vh]">
            <div>
                <h1 className='text-slate-100 font-[300] lg:w-[50vw] tracking-wider lg:text-[120px] text-center'>Welcome to <span className='text-black'>LUMA</span> <span className='text-[#F2A8A6]'>Medspa</span></h1>
                <p className='font-Dancing text-center'>Take care of your beauty and wellness</p>
            </div>
        </div>
        
      </div>
    </div>
  )
}

export default Home
