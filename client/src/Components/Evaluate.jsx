/* eslint-disable no-unused-vars */
import React from 'react';
import Evaluatee from '../../public/assess-evaluate.webp'

const Evaluate = () => {
  return (
    <div className="flex flex-col mt-[6%] md:flex-row items-center lg:w-[85%] md:w-[85%] sm:w-full w-full mx-auto justify-center h-full lg:p-4 md:p-4 sm:p-0 p-0">
      <div className="flex flex-col gap-5 md:flex-row items-center text-center md:text-left">
       
        
        <div className="p-6 md:w-1/2 w-full flex flex-col items-center md:items-start">
          <h2 className="text-4xl text-gray-800 font-extrabold mt-4 mb-4">Assess & evaluate
          </h2>
          <p className="text-gray-800 text-base sm:text-md mt-2">
          See where your team’s skills stand with skill assessments. With Skill IQ, you can benchmark your team’s tech skills, identify knowledge gaps and strengths—or find out where you stand yourself. You’ll also get tailored learning recommendations to help your team level up. Then celebrate the milestones as your team advances toward mastery.
          </p>
                    <button className="bg-red-600 text-sm font-bold mt-7 text-white px-8 py-3 rounded-3xl hover:bg-red-500 duration-500 transition-all">
View skill assessment          </button>
        </div>
        <div className="md:w-1/2 w-full">
          <img
            src={Evaluatee}
            alt="Placeholder Image"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Evaluate;
