// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Squash as Hamburger } from 'hamburger-react';
import { motion, AnimatePresence } from 'framer-motion';

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  

  const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/services', label: 'Services' },
    { to: '/contact', label: 'Contact' },
    { to: '/blog', label: 'Blog' },
    { to: '/shop', label: 'Shop' },
    { to: '/login', label: 'Gallery' },
  ];

  return (
    <div className='xl:hidden'>
      <div className='w-full h-[65px] bg-stone-950 flex flex-row justify-between items-center px-[1rem]'>
        <div className="logo-container w-[full] flex justify-left">
          <Link to="/">
            <div className='logo-container w-[55px]'>
              <img src="https://res.cloudinary.com/dk3aalcb0/image/upload/v1694409716/Luma%20Medspa/Luma_Logo_White_1_o5wuky.png" alt="" />
            </div>
          </Link>
        </div>
        <div className='z-50'>
          <Hamburger
            size={24}
            color='white'
            toggled={isOpen}
            toggle={toggleMenu}
          />
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className='z-40 absolute top-0 w-full bg-black backdrop-blur-2xl h-[100vh]'
            initial={{ left: '100%' }}
            animate={{ left: '0' }}
            exit={{ left: '100%' }}
            transition={{ duration: 0.3 }}
          >
            <ul className='pl-10 pt-20 w-full flex flex-col gap-3 font-medium tracking-wide font-raleway text-2xl sm:text-3xl text-gray-100'>
              {links.map((link, index) => (
                <motion.li
                  key={link.to}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: .6, delay: index * 0.1 }}
                >
                  <Link to={link.to} className='hover:text-[#ffadad] transition duration-300'>{link.label}</Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileNav;
