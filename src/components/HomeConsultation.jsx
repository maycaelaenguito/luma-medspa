// eslint-disable-next-line no-unused-vars
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

const HomeConsultation = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger the animation once when it comes into view
  });

  return (
    <div className='font-raleway md:my-[6rem]'>
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className='w-full flex justify-center'
      >
        <div className='text-center'>
          <div>
            <h1 className='capitalize text-[#F2A8A6] text-[50px] font-semibold py-2'>Ready to rediscover your best self?</h1>
            <div className='flex justify-center'>
              <p className='w-[75%] font-normal leading-[23.88px]'>
                At LUMA Medspa, we specialize in rejuvenating your natural beauty and well-being. Our team of experienced professionals is committed to helping you achieve your aesthetic and medical goals. Are you ready to take the first step toward a more confident, radiant you?
              </p>
            </div>
          </div>
          <div className='md:my-5'>
            <Link to='/your-link-here'>
              <button className='bg-[#EFB2B1] font-normal text-white text-sm lg:text-lg md:text-base xl:text-xl px-6 py-3 hover:bg-black transition-all duration-300 rounded-lg my-4 tracking-wide'>
                Book A Consultation Now!
              </button>
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HomeConsultation;
