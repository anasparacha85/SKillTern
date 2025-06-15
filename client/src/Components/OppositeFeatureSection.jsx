import React, { useEffect } from 'react'
import FeaturesCard from './Cardss/FeaturesCard'
import Aos from 'aos'
import 'aos/dist/aos.css'
const OppositeFeatureSection = () => {
  useEffect(()=>{
    Aos.init()
  },[])
  return (
   
      <div className="w-full px-4 py-8 md:py-8 bg-gray-50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-900 via-purple-800 to-pink-800 p-8 md:p-12">
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z"
                fill="white"
                className="animate-wave"
              />
            </svg>
          </div>
          
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl lg:text-3xl font-bold text-white text-center mb-4">
              Ready to get started with<br />Skillhub Skills?
            </h2>
            <p className="text-md text-white/90 text-center mb-8">
              Develop better. Deliver better.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                className="w-full py-3 px-8 transition-all duration-500 rounded-3xl text-sm font-semibold bg-pink-600 hover:bg-pink-700 text-white border-0"
                size="lg"
              >
                View individual plans
              </button>
              <button
                className="w-full py-3 px-8 transition-all duration-500 rounded-3xl text-sm font-semibold bg-pink-600 hover:bg-pink-700 text-white border-0"
                size="lg"
              >
                View team plans
              </button>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 p-8 md:p-12">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 grid grid-cols-8 gap-4">
              {[...Array(64)].map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-2 bg-white rounded-full"
                  style={{
                    transform: `translate(${(i % 8) * 4}rem, ${Math.floor(i / 8) * 4}rem)`,
                  }}
                />
              ))}
            </div>
          </div>
          
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl lg:text-3xl font-bold text-white text-center mb-4">
              Ready to get started with<br />Skillhub Flow?
            </h2>
            <p className="text-md text-white/90 text-center mb-8">
              Unlock your people. Upgrade your processes.
            </p>
            <div className="">
              <button
                className="w-full py-3 px-8 text-sm font-semibold rounded-3xl transition-all duration-500  bg-pink-600 hover:bg-pink-700 text-white border-0"
                size="lg"
              >
                Contact sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OppositeFeatureSection
