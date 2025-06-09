import React, { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import BannerImage from "../../public/homepagebanner-bg.webp";
import company1 from "../../public/bt-logo.webp";
import company2 from "../../public/dell-logo.webp";
import company3 from "../../public/fedex-logo.webp";
import company4 from "../../public/ford-logo.webp";
import company5 from "../../public/ge-logo.webp";
import { IoMdClose } from "react-icons/io";
import { NavLink } from "react-router-dom";

const Homebanner = () => {
     const typedRef = useRef(null);
       const companyImages = [company1, company2, company3, company4, company5];
       useEffect(() => {
    const options = {
      strings: [
        "master AI",
        "deliver faster",
        "collaborate better",
        "innovate smarter",
        "upgrade your skills",
        "streamline processes",
      ],
      typeSpeed: 70,
      backSpeed: 40,
      backDelay: 1000,
      loop: true,
    };

    typedRef.current = new Typed(".typed-text", options);
    return () => {
      typedRef.current.destroy();
    };
  }, []);
  return (
     <main className="p-6 sm:p-10 md:p-16 lg:p-20">
        <div className="bg-[#1b1834] p-6 sm:p-10 md:p-16 lg:p-20 rounded-3xl">
          <div className="text-white text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold">
              Skilltern empowers you to
            </h1>
            <span className="text-3xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold mt-2">
              <span className="typed-text "></span>
            </span>
            <div className="mt-6 sm:mt-8 lg:mt-10 lg:w-[70%] w-full mx-auto text-gray-400 text-sm sm:text-base md:text-lg font-semibold">
              <p>
                Develop critical tech skills. Cut cycle times. Build happier,
                healthier tech teams. And innovate smarter. All with
                Skilltern.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 mt-6 sm:mt-8">
                 <NavLink to="/job-portal">  <button className="w-full sm:w-auto font-semibold rounded-3xl text-white py-3 px-6 sm:px-8 bg-red-600 hover:bg-red-500 duration-500 transition-all">
                Job Portal
              </button></NavLink>
             <NavLink to="/LMS"> <button className="w-full sm:w-auto bg-transparent font-semibold rounded-3xl text-white border-2 border-blue-600 hover:bg-purple-600 duration-500 transition-all py-3 px-6 sm:px-8">
                Our LMS
              </button></NavLink>  
            </div>
            <div className="mt-6">
              <img
                src={BannerImage}
                className="h-auto w-full rounded-lg object-cover"
                alt="Banner"
              />
            </div>
            <div className="mt-[5%]">
              <h1 className="font-bold text-lg text-white">
                Organizations we've helped:
              </h1>
              <div className="flex flex-wrap lg:gap-14 md:gap-14 sm:gap-10 gap-8 justify-center mt-10">
                {companyImages.map((item, index) => (
                  <div key={index} className="h-12 flex items-center">
                    <img
                      src={item}
                      className="h-full w-auto object-contain"
                      alt="company logo"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
  )
}

export default Homebanner
