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
        <div className='2xl:pt-1'>
              <Navbar/>
              <MobileNav/>
        </div>
        <div className="flex h-[90vh] lg:h-[65vh] items-center lg:items-end justify-center header-content lg:pt-[7rem] xl:pt-[3rem]">
            <div>
                <h1 className='font-raleway text-slate-100 font-[300] tracking-wider text-[12vw] sm:text-[80px] md:text-[100px] xl:text-[120px] text-center lg:leading-[17vh]'>Welcome to <br/> <span className='text-black'>LUMA</span> <span className='text-[#F2A8A6]'>Medspa</span></h1>
                <div className='flex justify-center'>
                  <p className='font-Dancing text-center text-[6.5vw] sm:text-[35px] md:text-[40px] xl:text-[60px] text-slate-100 leading-none'>Take care of your beauty and <br/> wellness</p>
                </div>
                <div className='flex justify-center w-full lg:pt-[3rem]'>
                  <Link>
                      <button className='uppercase tracking-wider border-2 border-[#EFB2B1] px-6 py-2 rounded-sm hover:bg-[#EFB2B1] transition duration-300 text-slate-100 font-regular lg:text-[20px]'>
                          Book Now
                      </button>
                  </Link>
                </div>
            </div>
        </div>
       <div className='xl:px-[16.6%] px-[10%]'>
          <div className='flex flex-col md:flex-row mt-[5rem] md:mt-[12vh] gap-[5rem] lg:mt-[30vh] xl:mt-[20vh] 2xl:mt-[27vh]'>
            <div className='md:w-[30vw] w-full flex items-center justify-center'>
              <div className='w-[100%] flex justify-center'>
                <div>
                  <img src="https://res.cloudinary.com/dk3aalcb0/image/upload/v1694682987/Luma%20Medspa/Untitled_design_17_ygon9y.png" alt="LUMA Medspa Logo" />
                </div>
              </div>
            </div>
            <div className='flex items-center w-[100%]'>
              <div className='font-raleway'>
                <p className='white lg:leading-[29.85px] md:text-[14px] lg:text-[17px]'>At <span className='text-[#F2A8A6]'>LUMA Medspa</span>, we believe that beauty is more than skin deep. It&apos;s about feeling confident, radiant, and healthy from the inside out. Our mission is to help you achieve your best self through a range of cutting-edge, non-invasive treatments and personalized care. Our mission is to help you achieve your best self through a holistic approach that encompasses both physical and emotional well-being. We go beyond traditional cosmetic treatments to provide a comprehensive experience that nurtures your inner radiance.</p>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div className=''>
                <h1> Clinical Skincare Treatments</h1>
                {/* <hr className="h-[2px] w-[300px] border-t-0 bg-[#FFA2A0] opacity-100 mb-[5rem]" /> */}
              </div>
              <div>
                <div>
                  <h1>Hello</h1>
                </div>
              </div>
            </div>
          </div>
       </div>
      </div>
    </div>
  )
}

export default Home
