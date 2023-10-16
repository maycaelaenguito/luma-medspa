/* eslint-disable no-unused-vars */
import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import MobileNav from './MobileNav';
import BookBtn from './BookBtn';
import Footer from './Footer';
import IntroScroll from './IntroScroll';
import OfferingsScroll from './OfferingsScroll';
import OwnerInfoScroll from './OwnerInfoScroll';

const Home = () => {
  return (
    <div>
      <div className='bg-header bg-cover bg-center w-full h-full lg:h-max bg-no-repeat lg:pb-[7rem]'>
          <div className='w-full z-50 overflow-hidden'>
             <div>
              <div className='bg-[#EFB2B1] flex justify-around'>
                <p className='font-raleway py-1 text-white text-sm md:text-sm font-normal tracking-wider'>123 Main Street, Springfield, IL 62701</p>
              </div>
              <Navbar/>
              <MobileNav/>
             </div>
          </div>
          <div className="flex w-full h-[90vh] lg:h-auto pt-10 lg:pt-[13rem] xl:pt-[19rem] items-center justify-center header-content relative">
              <div className='flex flex-col gap-[2rem]'>
                  <h1 className='font-raleway text-slate-100 font-[300] tracking-wider text-[12vw] sm:text-[80px] md:text-[100px] xl:text-[120px] text-center lg:leading-[17vh]'>Welcome to <br/> <span className='text-black'>LUMA</span> <span className='text-[#F2A8A6]'>Medspa</span></h1>
                  <div className='flex justify-center'>
                    <p className='font-Dancing text-center text-[6.5vw] sm:text-[35px] md:text-[40px] xl:text-[60px] text-slate-100 leading-none'>Take care of your beauty and <br/> wellness</p>
                  </div>
                  <div className='flex justify-center w-full'>
                    <BookBtn/>
                  </div>
              </div>
            </div>
      </div>
       <div className='xl:px-[16.6%] px-[10%]'>
        <IntroScroll/>    
        <OfferingsScroll/>
        <OwnerInfoScroll/>
          
      </div>
      
     <Footer/>
    </div>
  )
}

export default Home
