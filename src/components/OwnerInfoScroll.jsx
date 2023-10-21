// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

const OwnerInfoScroll = () => {
  const [inView] = useState(false);
  const controls1 = useAnimation();
  const controls2 = useAnimation();

  const [ref, inViewObserver] = useInView({
    triggerOnce: true, // This ensures the animation triggers only once when it comes into view
  });

  useEffect(() => {
    // Animate Section 1 from invisible to visible if inView
    if (inView || inViewObserver) {
      controls1.start({
        x: 0,
        opacity: 1,
        transition: { type: 'spring', duration: 3, delay: 0.3 },
      });

      // Animate Section 2 from invisible to visible if inView
      controls2.start({
        x: 0,
        opacity: 1,
        transition: { type: 'spring', duration: 3, delay: 0.3 },
      });
    }
  }, [controls1, controls2, inView, inViewObserver]);

  return (
    <section ref={ref} className='intro-scroll grid grid-cols-1 lg:grid-cols-2 my-16 lg:my-[4rem]'>
      
      <div className='w-full flex justify-center items-center font-raleway lg:px-8'>
        <motion.div
          className='w-full flex items-center'
          initial={{ x: -200, opacity: 0 }}
          animate={controls1}
        >
          <div className='text-center'>
            <h2 className='text-lg lg:text-3xl xl:text-4xl font-medium py-3 lg:mb-10 '>Dr. Sarah, MD</h2>
            <p className='lg:text-lg text-sm font-light leading-relaxed'>Dr. Sarah Williams, MD, is a board-certified dermatologist known for her exceptional skill in cosmetic and dermatological procedures. With a Doctor of Medicine degree from a prestigious institution, she has dedicated her career to enhancing natural beauty while prioritizing patient safety and well-being. Dr. Sarah&lsquo;s patient-centric approach, ongoing commitment to education, and community outreach make her a respected figure in the field, shaping the industry and inspiring others with her dedication to excellence.</p>
            <Link>
              <div>
                  <button className='bg-[#EFB2B1] text-white text-sm lg:text-lg md:text-base xl:text-xl px-6 py-3 hover:bg-black transition-all duration-300 rounded-lg my-4 tracking-wide'>
                      Learn More
                  </button>
              </div>
            </Link>
          </div>
        </motion.div>
      </div>
      <div className='overflow-hidden'>
        <motion.div
          className='w-full flex items-center'
          initial={{ x: 200, opacity: 0 }}
          animate={controls2}
        >
          <div>
            <img src='https://res.cloudinary.com/dk3aalcb0/image/upload/v1696196667/Luma%20Medspa/Owner_tx0y0z.png' alt="Dr. Sarah Williams" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OwnerInfoScroll;