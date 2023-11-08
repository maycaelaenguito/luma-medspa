// eslint-disable-next-line no-unused-vars
import React from 'react'

const Footer = () => {
  return (
    <footer className='z-50 w-full bg-stone-950 h-auto text-white py-10 xl:px-[16.6%] px-[10%]'>
      <div className='grid lg:grid-cols-4'>
        <div>
          <div>
            <img src="https://res.cloudinary.com/dk3aalcb0/image/upload/v1694767971/Luma%20Medspa/Luma_Logo_white_2_y5owy3.png" alt="Logo" />
          </div>
          <div>
            Description Here
          </div>
        </div>
        <div>
          <h1 className='md:text-xl tracking-wider'>Quick Links</h1>
        </div>
        <div>
          <h1 className='md:text-xl tracking-wider'>Services</h1>
        </div>
        <div>
          <h1 className='md:text-xl tracking-wider'>Contact</h1>
        </div>
      </div>
    </footer>
  )
}

export default Footer
