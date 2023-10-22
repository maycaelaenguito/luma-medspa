// eslint-disable-next-line no-unused-vars
import React from 'react';
import {BsCartFill} from 'react-icons/bs'

const AddToCartBtn = () => {
  return (
    <div className='flex w-full justify-center'>
        <button className='bg-[#EFB2B1] text-white text-sm lg:text-lg md:text-base xl:text-lg px-10 py-3 hover:bg-black transition-all duration-300 rounded-md my-4 tracking-wide font-raleway font-semibold flex flex-row justify-center items-center gap-2'>
            <BsCartFill size={24}/> 
            Add to cart
        </button>
    </div>
  )
}

export default AddToCartBtn
