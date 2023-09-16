// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import AdminSideNav from './AdminSideNav';
import { Squash as Hamburger } from 'hamburger-react';

const AdminDashboard = () => {
  const [sideNavVisible, setSideNavVisible] = useState(false);

  const toggleSideNav = () => {
    setSideNavVisible(!sideNavVisible);
  };

  return (
    <div className="h-screen w-full flex flex-col">
      <main className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
          <div
            className={` small:fixed top-0 lg:left-[0] lg:w-auto lg:col-span-1 ${
              sideNavVisible ? 'small:left-[0] w-full sm:w-[38vw]' : 'left-[-100vw] sm:left-[-35vw]'
            }`}
          >
            <AdminSideNav />
          </div>
          <div className={`absolute top-3 z-40 lg:hidden ${
              sideNavVisible ? 'text-white right-5 sm:left-[27vw]' : 'left-[1vw] text-slate-950'
            } `} >
            <Hamburger
            size={25} 
            duration={0.1}
            toggled={sideNavVisible} 
            toggle={toggleSideNav} />
          </div>
          <div className="col-auto lg:col-span-3 bg-gray-50 h-[2000px] p-2 xl:col-span-4 2xl:col-span-5 pt-5 px-14 lg:px-8">
           <h1 className='font-raleway lg:text-3xl font-medium'>Dashboard</h1>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
