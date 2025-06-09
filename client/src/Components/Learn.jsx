/* eslint-disable no-unused-vars */
import React from "react";
import Learnn from "../../public/learn-by-doing.webp";

const Learn = () => {
  return (
    <div className="flex flex-col mt-[4%] md:flex-row items-center lg:w-[85%] md:w-[85%] sm:w-full w-full mx-auto justify-center h-full lg:p-4 md:p-4 sm:p-0 p-0">
      <div className="flex flex-col gap-5 md:flex-row items-center text-center md:text-left">
        <div className="md:w-1/2 w-full">
          <img
            src={Learnn}
            alt="Placeholder Image"
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="p-6 md:w-1/2 w-full flex flex-col items-center md:items-start">
          <h2 className="text-4xl text-gray-800 font-extrabold mt-4 mb-4">
            Learn by doing
          </h2>
          <p className="text-gray-800 text-base sm:text-md mt-2">
            More than 1,300 hands-on labs enable technologists to develop
            stronger proficiencies in specific skills or technologies through
            step-by-step instruction, practice exercises, and projects. In fact,
            Skills is the only upskilling platform that offers labs across all
            technology domains. We have totally got you covered.
          </p>
          <button className="bg-red-600 text-sm font-bold mt-7 text-white px-8 py-3 rounded-3xl hover:bg-red-500 duration-500 transition-all">
            Explore Labs{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Learn;
