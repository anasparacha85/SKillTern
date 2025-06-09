
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react";
import Growth from '../../public/pluralsight-one-collage.webp';
const FeatureSection = ({}) => {
  useEffect(()=>{
    Aos.init()
  },[])
    return (
       <div className='mt-[6%] mb-[8%]'>
      <div className='lg:w-[80%] mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col lg:flex-row-reverse justify-center items-center gap-10'>
          <div className='flex-1'>
            <img src={Growth} className='h-auto w-full rounded-lg object-cover' alt="About Us" />
          </div>
          <div className='flex-1 text-center lg:text-left'>
            <div className='mb-10'>
                <span className='text-purple-900 italic text-6xl font-extrabold'>Skillhub</span>
            </div>
            <h1 className='text-3xl sm:text-5xl font-extrabold text-blue-950 mb-4'>See our growth, progress, and evolution</h1>
            <p className='text-gray-800 text-base sm:text-md mt-2'>
            At Skillhub, we see firsthand every day how technology makes the impossible possible. It’s why Pluralsight One exists: to accelerate our mission of advancing the world’s tech workforce, challenging assumptions about solutions, and creating significant, lasting social impact.            </p>
            <div className='mt-6'>
              <button className='bg-red-600 font-semibold hover:bg-red-500 duration-500 transition-all text-white py-3 px-8 rounded-3xl'>
                For non-profits
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  };
  
  export default FeatureSection;
  