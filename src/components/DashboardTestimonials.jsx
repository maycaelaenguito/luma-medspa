// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import SideNav from './SideNav';
import ComponentAddTestimonials from './ComponentAddTestimonials';

const DashboardTestimonials = () => {
  

  return (
    <div className='flex flex-row'>
        <div>
            <SideNav/>
        </div>
        <div className='h-[2000px] mt-10 pl-14 2xl:pl-5 font-raleway'>
          <h1 className='text-2xl font-medium'>Manage Client Testimonials</h1>
            <ComponentAddTestimonials/>
        </div>
    </div>
  );
}

export default DashboardTestimonials;
