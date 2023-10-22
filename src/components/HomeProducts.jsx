// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import AddToCart from './AddToCartBtn';

const HomeProducts = () => {
  // Create an array of refs
  const refs = [useInView(), useInView(), useInView(), useInView(), useInView(), useInView()];

  const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: .4, delay: .5 } },
};

return (
  <div>
    <div className="font-raleway text-[15px] tracking-wide z-20">
      <motion.div ref={refs[0][0]} initial="hidden" whileInView="visible" variants={variants}>
        <div className='text-[25px] sm:text-[30px] md:text-[35px] lg:text-[45px] font-medium'>
          <h1 className='tracking-[-0.9px] text-[#FFA2A0]'> Our Best Sellers</h1>
          <hr className="h-[2px] w-[30%] sm:w-[25%] md:w-[23%] border-t-0 bg-[#FFA2A0] opacity-100" />
        </div>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-[3rem] my-10 md:my-16 font-semibold">

        {/* Offering 1 */}
        <motion.div ref={refs[0][0]} initial="hidden" whileInView="visible" variants={variants}>
            <Link className="grid-item text-center">
              <div className='flex justify-center'>
                <img src="https://res.cloudinary.com/dk3aalcb0/image/upload/v1698006675/Luma%20Medspa/6_2_xcbxzy.png" alt="" className='h-80 w-80 object-cover'/>  
              </div>
              <h3 className='uppercase py-3 text-[16px] font-semibold'>Bio-Renew EGF Cream</h3>
              <div className='w-full flex justify-center'>
                <p className='font-light w-[80%] text-[14px]'>Age-defying face cream for firmer, smoother skin with EGF, peptides, and phyto-retinol.</p>
              </div>
              <AddToCart/>
            </Link>
        </motion.div>

        {/* Offering 2 */}
        <motion.div ref={refs[1][0]} initial="hidden" whileInView="visible" variants={variants}>
          <div className="group relative overflow-hidden bg-cover bg-no-repeat max-w-full h-[366px]">
            <Link className="grid-item">
              <div className="grid-item bg-grid-col-2 bg-cover bg-center max-w-full h-[366px]"></div>
                <p className="">
                IV Therapy and Injections
                </p>
            </Link>
          </div>
        </motion.div>

      {/* Offering 3 */}
        <motion.div ref={refs[2][0]} initial="hidden" whileInView="visible" variants={variants}>
          <div className="group relative overflow-hidden bg-cover bg-no-repeat max-w-full h-[366px]">
            <Link className="grid-item">
              <div className="grid-item bg-grid-col-3 bg-cover bg-center max-w-full h-[366px]"></div>
              <p className="">
              Non-Surgical Procedures
              </p>
            </Link>
          </div>
        </motion.div>

      {/* Offering 4 */}
        <motion.div ref={refs[3][0]} initial="hidden" whileInView="visible" variants={variants}>
          <div className="group relative overflow-hidden bg-cover bg-no-repeat max-w-full h-[366px]">
            <Link className="grid-item">
              <div className="grid-item bg-grid-col-4 bg-cover bg-center max-w-full h-[366px]"></div>
              <p className="">
              Intimate Wellness
              </p>
            </Link>
          </div>
        </motion.div>

      {/* {/ Offering 5 /} */}
        <motion.div ref={refs[4][0]} initial="hidden" whileInView="visible" variants={variants}>
          <div className="group relative overflow-hidden bg-cover bg-no-repeat max-w-full h-[366px]">
            <Link className="grid-item">
              <div className="grid-item bg-grid-col-5 bg-cover bg-center max-w-full h-[366px]"></div>
              <p className="">
              Aesthetic Services
              </p>
            </Link>
          </div>
        </motion.div>

      {/* Offering 6 */}
        <motion.div ref={refs[5][0]} initial="hidden" whileInView="visible" variants={variants}>
          <div className="group relative overflow-hidden bg-cover bg-no-repeat max-w-full h-[366px]">
            <Link className="grid-item">
              <div className="grid-item bg-grid-col-6 bg-cover bg-center max-w-full h-[366px]"></div>
              <p className="">
              Retail Skincare and Makeup
              </p>
            </Link>
          </div>
        </motion.div>

      </div>
    </div>
  </div>
);
};

export default HomeProducts;