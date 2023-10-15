// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';

const OfferingsScroll = () => {
  return (
    <div>
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
    </div>
  )
}

export default OfferingsScroll
