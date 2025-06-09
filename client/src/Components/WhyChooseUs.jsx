import React from 'react'
import AboutUs from '../../public/pluralsight-puzzle-piece.webp';
const WhyChooseUs = () => {
  return (
     <div className='mt-[6%]'>
      <div className='lg:w-[80%] mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col lg:flex-row-reverse justify-center items-center gap-10'>
          <div className='flex-1'>
            <img src={AboutUs} className='h-auto w-full rounded-lg object-cover' alt="About Us" />
          </div>
          <div className='flex-1 text-center lg:text-left'>
            <h1 className='text-3xl sm:text-5xl font-extrabold text-blue-950 mb-4'>Why Skilltern?</h1>
            <p className='text-gray-800 text-base sm:text-md mt-2'>
              Whether you’re an individual looking to learn Python to advance your career or an enterprise team looking to cut cycle times, speed up onboarding, or give your teams the skills to realize your strategies, we remove the challenges and roadblocks slowing you down. We’re advancing the world’s tech workforce, and that starts with making your work more efficient and effective—and giving you more to celebrate.
            </p>
            <div className='mt-6'>
              <button className='bg-red-600 font-semibold hover:bg-red-500 duration-500 transition-all text-white py-3 px-8 rounded-3xl'>
                See our solutions
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyChooseUs
