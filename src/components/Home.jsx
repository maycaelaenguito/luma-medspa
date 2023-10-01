/* eslint-disable no-unused-vars */
import React from 'react';
import '../css/home.css';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import MobileNav from './MobileNav';
import BookBtn from './BookBtn';
import Footer from './Footer';
import LearnMoreBTn from './LearnMoreBTn';


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
          <div className='flex flex-col md:flex-row gap-5 md:gap-[5rem] my-[4rem]'>
            <div className='md:w-[30vw] w-full flex items-center justify-center'>
              <div className='w-[100%] flex justify-center'>
                <div>
                  <img src="https://res.cloudinary.com/dk3aalcb0/image/upload/v1694682987/Luma%20Medspa/Untitled_design_17_ygon9y.png" alt="LUMA Medspa Logo" />
                </div>
              </div>
            </div>
            <div className='flex items-center w-[100%]'>
              <div className='font-raleway'>
                <p className='white lg:leading-[29.85px] text-sm md:text-md lg:text-lg'>At <span className='text-[#F2A8A6]'>LUMA Medspa</span>, we believe that beauty is more than skin deep. It&apos;s about feeling confident, radiant, and healthy from the inside out. Our mission is to help you achieve your best self through a range of cutting-edge, non-invasive treatments and personalized care. Our mission is to help you achieve your best self through a holistic approach that encompasses both physical and emotional well-being. We go beyond traditional cosmetic treatments to provide a comprehensive experience that nurtures your inner radiance.</p>
              </div>
            </div>
          </div>
          <div>
            <div className='font-raleway text-[15px] tracking-wide z-20 py-[4rem]'>
              <div className='text-[25px] sm:text-[30px] md:text-[35px] lg:text-[45px] font-medium'>
                <h1 className='tracking-[-0.9px]'> Clinical Skincare Treatments</h1>
                <hr className="h-[2px] w-[30%] sm:w-[25%] md:w-[23%] border-t-0 bg-[#FFA2A0] opacity-100" />
              </div>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-[3rem] my-10 md:my-16 font-semibold'>
                <div className='group relative overflow-hidden bg-cover bg-no-repeat max-w-full h-[366px]'>
                  <Link className='grid-item'>
                      <div className='grid-item bg-grid-col-1 bg-cover bg-center max-w-full transition duration-300 ease-in-out group-hover:scale-105 h-[366px]'>  
                      </div>
                      <p className='text-slate-100 bottom-10 left-7 absolute group-hover:transition group-hover:bottom-14 ease-in-out duration-500'>Injectables and Fillers</p>
                  </Link>
                </div>
                <div className='group relative overflow-hidden bg-cover bg-no-repeat max-w-full h-[366px]'>
                  <Link className='grid-item'>
                      <div className='grid-item bg-grid-col-2 bg-cover bg-center max-w-full transition duration-300 ease-in-out group-hover:scale-105 h-[366px]'>  
                      </div>
                    <p className='text-slate-100 bottom-10 left-7 absolute group-hover:transition group-hover:bottom-14 ease-in-out duration-500'>IV Therapy and Injections</p>
                  </Link>
                </div>
                <div className='group relative overflow-hidden bg-cover bg-no-repeat max-w-full h-[366px]'>
                  <Link className='grid-item'>
                      <div className='grid-item bg-grid-col-3 bg-cover bg-center max-w-full transition duration-300 ease-in-out group-hover:scale-105 h-[366px]'>  
                      </div>
                    <p className='text-slate-100 bottom-10 left-7 absolute group-hover:transition group-hover:bottom-14 ease-in-out duration-500'>Non-Surgical Procedures</p>
                  </Link>
                </div>
                <div className='group relative overflow-hidden bg-cover bg-no-repeat max-w-full h-[366px]'>
                  <Link className='grid-item'>
                      <div className='grid-item bg-grid-col-4 bg-cover bg-center max-w-full transition duration-300 ease-in-out group-hover:scale-105 h-[366px]'>  
                      </div>
                    <p className='text-slate-100 bottom-10 left-7 absolute group-hover:transition group-hover:bottom-14 ease-in-out duration-500'>Intimate Wellness</p>
                  </Link>
                </div>
                <div className='group relative overflow-hidden bg-cover bg-no-repeat max-w-full h-[366px]'>
                  <Link className='grid-item'>
                      <div className='grid-item bg-grid-col-5 bg-cover bg-center max-w-full transition duration-300 ease-in-out group-hover:scale-105 h-[366px]'>  
                      </div>
                    <p className='text-slate-100 bottom-10 left-7 absolute group-hover:transition group-hover:bottom-14 ease-in-out duration-500'>Aesthetic Services</p>
                  </Link>
                </div>
                <div className='group relative overflow-hidden bg-cover bg-no-repeat max-w-full h-[366px]'>
                  <Link className='grid-item'>
                      <div className='grid-item bg-grid-col-6 bg-cover bg-center max-w-full transition duration-300 ease-in-out group-hover:scale-105 h-[366px]'>  
                      </div>
                    <p className='text-slate-100 bottom-10 left-7 absolute group-hover:transition group-hover:bottom-14 ease-in-out duration-500'>Retail Skincare and Makeup</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className='grid lg:grid-cols-2 my-[4rem]'>
            <div>
              <img src='https://res.cloudinary.com/dk3aalcb0/image/upload/v1696196667/Luma%20Medspa/Owner_tx0y0z.png' alt="Dr. Sarah Williams" />
            </div>
            <div className='w-full flex justify-center items-center font-raleway px-8'>
              <div className='text-center'>
                <h2 className='lg:text-[40px] font-medium mb-10'>Dr. Sarah, MD</h2>
                <p className='lg:text-[22px] font-light'>Dr. Sarah Williams, MD, is a board-certified dermatologist known for her exceptional skill in cosmetic and dermatological procedures. With a Doctor of Medicine degree from a prestigious institution, she has dedicated her career to enhancing natural beauty while prioritizing patient safety and well-being. Dr. Sarah&lsquo;s patient-centric approach, ongoing commitment to education, and community outreach make her a respected figure in the field, shaping the industry and inspiring others with her dedication to excellence.</p>
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
