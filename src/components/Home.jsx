/* eslint-disable no-unused-vars */
import React from 'react';
import '../css/home.css';
import Navbar from './Navbar';

const Home = () => {
  return (
    <div>
      <div className='header w-full h-screen'>
        <div className='pt-2'>
            <Navbar/>
        </div>
      </div>
    </div>
  )
}

export default Home
