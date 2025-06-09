import React from "react";
import Testi1 from "../../public/nomura-avatar-wash.webp";
import Testi2 from "../../public/deutsche-bank-avatar-wash.webp";
import Testi3 from "../../public/thompson-reuters-avatar-wash.webp";

const Testimonials = () => {
  return (
    <section className="py-12 sm:py-[10%] -z-10 px-4 sm:px-6 lg:px-8 cursor-pointer bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-blue-950 mb-4">
            What our customers are saying
          </h2>
          <p className="text-lg sm:text-xl text-purple-400">
            A word from our partners
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <div className="bg-white  rounded-2xl p-6 sm:p-8 shadow-lg hover:-translate-y-2 transform transition-all duration-500 hover:border-b hover:border-blue-950">
            <div className="relative  mb-8">
              {/* <div className="absolute -top-4 -right-4 w-12 h-12 bg-orange-200 rounded-full opacity-60" /> */}
              <div className="">
                <img
                  src={Testi1}
                  alt="Deutsche Bank logo"
                  className="h-32 w-32 object-contain"
                />
              </div>
            </div>
            <blockquote className="mb-8">
              <p className="text-gray-700 leading-relaxed">
                "As a bank, we have a commitment to ensure that we have the
                right skills and competencies to become a truly digital
                organization."
              </p>
            </blockquote>
            <footer>
              <p className="text-pink-500 font-semibold mb-1">Helen Tippell</p>
              <p className="text-sm text-gray-600">
                IB Technology Chief Architect and CTO, Deutsche Bank
              </p>
            </footer>
          </div>

          <div className="bg-white  rounded-2xl p-6 sm:p-8 shadow-lg hover:-translate-y-2 transform transition-all duration-500 hover:border-b hover:border-blue-950">
            <div className="relative  mb-8">
              {/* <div className="absolute -top-4 -right-4 w-12 h-12 bg-pink-200 rounded-full opacity-60" /> */}
              <div className="">
                <img
                  src={Testi2}
                  alt="Nomura logo"
                  className="h-32 w-32 object-contain"
                />
              </div>
            </div>
            <blockquote className="mb-8">
              <p className="text-gray-700 leading-relaxed">
                "This really has changed the game, in terms of the way we view
                the delivery of technology and how we can work with our business
                users to try these ideas and then move forward."
              </p>
            </blockquote>
            <footer>
              <p className="text-pink-500 font-semibold mb-1">
                Terry Learmouth
              </p>
              <p className="text-sm text-gray-600">EMEA CIO, Nomura</p>
            </footer>
          </div>

          <div className="bg-white  rounded-2xl p-6 sm:p-8 shadow-lg hover:-translate-y-2 transform transition-all duration-500 hover:border-b hover:border-blue-950">
            <div className="relative  mb-8">
              {/* <div className="absolute -top-4 -right-4 w-12 h-12 bg-purple-200 rounded-full opacity-60" /> */}
              <div className="">
                <img
                  src={Testi3}
                  alt="Thomson Reuters logo"
                  className="h-32 w-32 object-contain"
                />
              </div>
            </div>
            <blockquote className="mb-8">
              <p className="text-gray-700 leading-relaxed">
                "We started streamlining so there's more time for developers to
                actually focus on their task. The biggest surprise was the
                change in coding days—it jumped from 2.3 to 3 almost
                immediately."
              </p>
            </blockquote>
            <footer>
              <p className="text-pink-500 font-semibold mb-1">
                Abesh Rajasekharan
              </p>
              <p className="text-sm text-gray-600">
                Director of Technology, Thomson Reuters
              </p>
            </footer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
