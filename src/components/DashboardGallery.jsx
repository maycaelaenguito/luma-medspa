// eslint-disable-next-line no-unused-vars
import React from 'react';
import SideNav from './SideNav';


const DashboardGallery = () => {
  return (
    <div className='flex flex-row'>
        <div>
            <SideNav/>
        </div>
        <div className='h-[2000px] mt-10 pl-14 2xl:pl-5 '>
            <h1>Dashboard</h1>
        </div>
    </div>
  )
}

export default DashboardGallery
