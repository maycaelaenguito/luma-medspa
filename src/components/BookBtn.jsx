// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';

const BookBtn = () => {
  return (
    <div>
      <div>
        <Link to='/booking'>
            <button className='uppercase tracking-widest border-2 border-[#EFB2B1] px-4 py-2 rounded-sm hover:bg-[#EFB2B1] transition duration-300'>
                Book Now
            </button>
        </Link>
      </div>
    </div>
  )
}

export default BookBtn
