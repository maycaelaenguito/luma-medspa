// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { BsChevronLeft } from 'react-icons/bs';
import { BsChevronRight } from 'react-icons/bs';
import { AiFillStar } from 'react-icons/ai';

const testimonials = [
  {
    name: 'Sarah W.',
    review: '“I had an amazing experience. The staff was skilled and caring. After just a few sessions, I saw a noticeable improvement in my skin. I felt relaxed and confident throughout. Highly recommend!”',
  },
  {
    name: 'John D.',
    review: '“I was really impressed with the quality of service I received. The staff was knowledgeable and friendly, and they went above and beyond to make sure I was comfortable. I would definitely recommend this place to anyone looking for a great spa experience.”',
  },
  {
    name: 'Jane S.',
    review: '“I had a wonderful facial at this spa. The esthetician was very professional and took the time to understand my skin type and needs. The products she used were high quality and my skin felt amazing after the treatment. I will definitely be back!”',
  },
];

const Testimontials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleLeftClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleRightClick = () => {
    if (currentIndex < testimonials.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // Loop back to the first testimonial if the last testimonial is reached
      setCurrentIndex(0);
    }
  };

  const testimonial = testimonials[currentIndex];

  return (
    <div className='font-raleway'>
      <div className='text-[25px] sm:text-[30px] md:text-[35px] lg:text-[45px] font-medium'>
        <h1 className='tracking-[-0.9px] text-[#FFA2A0]'>Our Best Sellers</h1>
        <hr className="h-[2px] w-[30%] sm:w-[25%] md:w-[23%] border-t-0 bg-[#FFA2A0] opacity-100" />
      </div>
      <div className='flex flex-row w-full items-center my-10 text-center'>
        <button onClick={handleLeftClick}>
          <BsChevronLeft size={30} />
        </button>
        <div className='w-full flex justify-center'>
          <div className='flex flex-col'>
            <div className='flex flex-row justify-center text-[#D39391]'>
              <AiFillStar size={25} />
              <AiFillStar size={25} />
              <AiFillStar size={25} />
              <AiFillStar size={25} />
              <AiFillStar size={25} />
            </div>
            <div className='flex justify-center'>
              <p className='w-[60%]'>
                {testimonial.review}
              </p>
            </div>
            <div className='flex justify-center'>
              <h3>
                - {testimonial.name}
              </h3>
            </div>
          </div>
        </div>
        <button onClick={handleRightClick}>
          <BsChevronRight size={30} />
        </button>
      </div>
    </div>
  );
};

export default Testimontials;
