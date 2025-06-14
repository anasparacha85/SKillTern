/* eslint-disable no-unused-vars */
import React from 'react';
import Upskilll from '../../public/upskill-reskill.webp'
import { useNavigate } from 'react-router';

const UpSkill = () => {
  const navigate=useNavigate()
  return (
    <div className="flex flex-col mt-[6%] md:flex-row items-center lg:w-[85%] md:w-[85%] sm:w-full w-full mx-auto justify-center h-full lg:p-4 md:p-4 sm:p-0 p-0">
      <div className="flex flex-col gap-5 md:flex-row items-center text-center md:text-left">
       
        
        <div className="p-6 md:w-1/2 w-full flex flex-col items-center md:items-start">
          <h2 className="text-4xl text-gray-800 font-extrabold mt-4 mb-4">Upskill & reskill
          </h2>
          <p className="text-gray-800 text-base sm:text-md mt-2">
          Empower your tech teams to produce key business outcomes by making upskilling and reskilling as easy as powering up their laptop. Tap into the power of curated learning paths to guide teams through the exact skills they need to progress from novice to guru across a variety of tech skills.          </p>
          <button onClick={()=>navigate('/LMS/Courses')}  className="bg-red-600 cursor-pointer text-sm font-bold mt-7 text-white px-8 py-3 rounded-3xl hover:bg-red-500 duration-500 transition-all">
            Browse Courses
          </button>
        </div>
        <div className="md:w-1/2 w-full">
          <img
            src={Upskilll}
            alt="Placeholder Image"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default UpSkill;
