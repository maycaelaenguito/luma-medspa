/* eslint-disable no-unused-vars */
import React from 'react';
import '../css/home.css';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import MobileNav from './MobileNav';
import BookBtn from './BookBtn';
import Footer from './Footer';
import LearnMoreBTn from './LearnMoreBTn';
import IntroScroll from './IntroScroll';
import OfferingsScroll from './OfferingsScroll';

const Home = () => {
  return (
    <div>
      <div className='bg-header bg-cover bg-center w-full h-full lg:h-max bg-no-repeat lg:pb-[7rem]'>
          <div className='fixed w-full z-50'>
             <div>
              <Navbar/>
              <MobileNav/>
             </div>
          </div>
          <div className="flex h-[90vh] lg:h-auto pt-10 lg:pt-[13rem] xl:pt-[19rem] items-center justify-center header-content">
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
          <div className='grid grid-cols-1 lg:grid-cols-2 my-2 lg:my-[4rem]'>
            <div>
              <img src='https://res.cloudinary.com/dk3aalcb0/image/upload/v1696196667/Luma%20Medspa/Owner_tx0y0z.png' alt="Dr. Sarah Williams" />
            </div>
            <div className='w-full flex justify-center items-center font-raleway lg:px-8'>
              <div className='text-center'>
                <h2 className='text-lg lg:text-3xl xl:text-4xl font-medium py-3 lg:mb-10 '>Dr. Sarah, MD</h2>
                <p className='lg:text-lg text-sm font-light leading-relaxed'>Dr. Sarah Williams, MD, is a board-certified dermatologist known for her exceptional skill in cosmetic and dermatological procedures. With a Doctor of Medicine degree from a prestigious institution, she has dedicated her career to enhancing natural beauty while prioritizing patient safety and well-being. Dr. Sarah&lsquo;s patient-centric approach, ongoing commitment to education, and community outreach make her a respected figure in the field, shaping the industry and inspiring others with her dedication to excellence.</p>
                <Link>
                  <LearnMoreBTn/>
                </Link>
              </div>
            </div>
          </div>
          
      </div>
      
     <Footer/>
    </div>
  )
}

export default Home
