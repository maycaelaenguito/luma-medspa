// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Squash as Hamburger } from 'hamburger-react';

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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
            color={`${isOpen ? 'black' : 'white'}`}
            toggled={isOpen}
            toggle={toggleMenu}
          />
        </div>
      </div>
      <div className={`z-40 absolute top-0 w-full transition-all duration-300 bg-slate-100 ${isOpen ? 'left-[0]' : 'left-full'}`}>
        <ul className=' py-5 w-full flex flex-col gap-3'>
          <li><Link>Home</Link></li>
          <li><Link>About</Link></li>
          <li><Link>Services</Link></li>
          <li><Link>Contact</Link></li>
          <li><Link>Blog</Link></li>
          <li><Link>Shop</Link></li>
          <li><Link>Gallery</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;
