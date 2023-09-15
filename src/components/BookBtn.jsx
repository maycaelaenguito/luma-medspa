// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';

const BookBtn = () => {
  return (
    <div>
      <div>
        <Link to='/booking'>
            <button className='text-slate-50 font-raleway font-medium text-xs sm:text-sm md:text-lg uppercase tracking-widest border-2 border-[#EFB2B1] 
            lg:px-5 px-4 py-2 rounded-sm hover:bg-[#EFB2B1] transition duration-300'>
                Book Now
            </button>
        </Link>
      </div>
    </div>
  )
}

export default BookBtn
