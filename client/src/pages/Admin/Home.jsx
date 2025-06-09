import React from 'react'
import { Header } from '../../Components/Header';
import { Footer } from '../../Components/Footer';
import { HeroSection } from '../../Components/HeroSection';
import { JobList } from '../../Components/JobList';
import Jobscard from '../../Components/Cardss/Jobscard';
import JobPostButton from '../../Components/JobPostButton';
import BlogsCart from '../../Components/Cardss/BlogsCart';
import Subscribe from '../../Components/Subscribe';
import CountUp from '../../Animations/countup';
import Evaluate from '../../Components/Evaluate';
import BlogSecton from '../../Components/BlogSecton';

const Home = () => {

  return (
     <div className=" flex flex-col bg-White overflow-x-hidden ">
      
      <Header />
      <HeroSection/>

    <Evaluate/>

      <div className='w-full h-auto text-center py-14'> 
        <section className="w-full py-12 mt-[7%] px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-100 rounded-lg shadow-sm p-6 space-y-4 transition-all hover:-translate-y-3 hover:border-x-blue-800 cursor-pointer duration-500">
            <div className="flex items-start space-x-4">
              <div className="bg-[#FF1493] rounded-full p-3">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                  />
                </svg>
              </div>
              <h3 className="text-[#FF1493] text-4xl font-bold">50%</h3>
            </div>
            <p className="text-gray-800 text-sm">
              of enterprise IT organizations' migration to the cloud will be
              slowed by two years or more due to insufficient cloud skills
            </p>
            <p className="text-gray-500 text-sm">Source: Gartner</p>
          </div>

          <div className="bg-gray-100 rounded-lg shadow-sm p-6 space-y-4 transition-all hover:-translate-y-3 hover:border-x-blue-800 cursor-pointer duration-500">
            <div className="flex items-start space-x-4">
              <div className="bg-[#FF1493] rounded-full p-3">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  />
                </svg>
              </div>
              <h3 className="text-[#FF1493] text-4xl font-bold">Only 21%</h3>
            </div>
            <p className="text-gray-800 text-sm">
              of technologists feel completely confident they have the cloud
              skills to master their current job
            </p>
            <p className="text-gray-500 text-sm">
              Source: State of Upskilling 2023
            </p>
          </div>

          <div className="bg-gray-100 rounded-lg shadow-sm p-6 space-y-4 transition-all hover:-translate-y-3 hover:border-x-blue-800 cursor-pointer duration-500">
            <div className="flex items-start space-x-4">
              <div className="bg-[#FF1493] rounded-full p-3">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
              <h3 className="text-[#FF1493] text-4xl font-bold">2-6x ROI</h3>
            </div>
            <p className="text-gray-800 text-sm">
              Cloud training initiatives can have a return on investment of up
              to 2-6x
            </p>
            <p className="text-gray-500 text-sm">
              Source: ACG: The ROI of Cloud Training
            </p>
          </div>
        </div>
      </div>
    </section>
        <div className='w-full h-auto text-center py-14'>
      
    <BlogSecton/>
        </div>
     
        
      </div>
     
      <Footer/>
     
   
     
    </div>
  );
}
 
export default Home
