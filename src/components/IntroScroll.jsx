// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const IntroScroll = () => {
  const [inView, setInView] = useState(false);
  const controls1 = useAnimation();
  const controls2 = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const introSection = document.querySelector('.intro-scroll');
      if (introSection) {
        const rect = introSection.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setInView(true);
        } else {
          setInView(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (inView) {
      // Animate Section 1 from invisible to visible
      controls1.start({
        x: 0,
        opacity: 1,
        transition: { type: 'spring', duration: 2, delay: 0.2 },
      });
      // Animate Section 2 from invisible to visible
      controls2.start({
        x: 0,
        opacity: 1,
        transition: { type: 'spring', duration: 2, delay: 0.2 },
      });
    }
  }, [controls1, controls2, inView]);

  return (
    <section className='intro-scroll flex flex-col md:flex-row justify-between overflow-hidden my-20'>
      <div className='w-full md:w-[40%] mb-10 md:mb-auto '>
        <motion.div
          className='w-full flex items-center'
          initial={{ x: -200, opacity: 0 }}
          animate={controls1}
        >
            <div className='w-[100%] flex justify-center'>
                <div >
                  <img src="https://res.cloudinary.com/dk3aalcb0/image/upload/v1694682987/Luma%20Medspa/Untitled_design_17_ygon9y.png" alt="LUMA Medspa Logo" />
                </div>
            </div>
        </motion.div>
      </div>
      <div className='w-full md:w-[55%]'>
        <motion.div
          className='w-full flex items-center'
          initial={{ x: 200, opacity: 0 }}
          animate={controls2}
        >
            <div className='font-raleway'>
              <p className='white lg:leading-[29.85px] text-sm md:text-md lg:text-lg '>At <span className='text-[#F2A8A6]'>LUMA Medspa</span>, we believe that beauty is more than skin deep. It&apos;s about feeling confident, radiant, and healthy from the inside out. Our mission is to help you achieve your best self through a range of cutting-edge, non-invasive treatments and personalized care. Our mission is to help you achieve your best self through a holistic approach that encompasses both physical and emotional well-being. We go beyond traditional cosmetic treatments to provide a comprehensive experience that nurtures your inner radiance.</p>
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IntroScroll;
