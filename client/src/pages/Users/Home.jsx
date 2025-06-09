import React, { useEffect, useRef } from 'react'
import UserHeader from '../../Components/UserHeader'
import DreamSection from '../../Components/DreamSection'
import { usestore } from '../../Store/ContextStore'
import Card from '../../Components/Cardss/Card'
import BlogsCart from '../../Components/Cardss/BlogsCart'
import FeatureSection from '../../Components/FeatureSection'
import OppositeFeatureSection from '../../Components/OppositeFeatureSection'
import DuplicateFeatureSection from '../../Components/DuplicateFeatureSection'
import Footer from '../../Components/Footer'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { ClipLoader } from 'react-spinners'
import Typed from 'typed.js';
import HomeBanner from '../../Components/Homebanner'
import WhyChooseUs from '../../Components/WhyChooseUs'
import SolutionImage from '../../../public/acg-solutions.webp'
import Services from '../../Components/Services'
import Testimonials from '../../Components/Testimonials'
export const UserHome = () => {
    // Create reference to store the DOM element containing the animation
   
  useEffect(()=>{
    Aos.init()
  },[])
   const {url, JobsCategories,user,isLoading,setisLoading}=usestore()
   if(isLoading){return <div className='h-screen w-screen flex justify-center items-center '><ClipLoader size={50 } color='blue' loading={isLoading}/></div>}
  return (
    <>
   <div className='sticky top-0 z-50'>
     <UserHeader /></div> 
    <div className='overflow-x-hidden  '>
       
      <div className='home-menu h-full'>
        <HomeBanner/>
    </div>
      <WhyChooseUs/>
      <div className="flex flex-col mt-[8%] md:flex-row items-center lg:w-[80%] md:w-[80%] sm:w-full w-full mx-auto justify-center h-full lg:p-4 md:p-4 sm:p-0 p-0">
      <div className="flex flex-col gap-5 md:flex-row items-center text-center md:text-left">
        <div className="md:w-1/2 w-full">
          <img
            src={SolutionImage}
            alt="Placeholder Image"
            className="w-full h-auto object-cover"
          />
        </div>
        
        <div className="p-6 md:w-1/2 w-full flex flex-col items-center md:items-start">
          <span className='text-red-600 font-bold text-lg'>Online demo</span>
          <h2 className="text-4xl text-gray-800 font-extrabold mt-4 mb-4">See our solutions in action</h2>
          <p className="text-gray-800 text-base sm:text-md mt-2">
            Check out our demos to see in action the platform features that'll transform your teams, and get all the details straight from the experts who know your problems—and your solutions—best.
          </p>
          <button className="bg-red-600 font-bold mt-7 text-white px-6 py-2 rounded-3xl hover:bg-red-500 duration-500 transition-all">
            Tour Solutions
          </button>
        </div>
      </div>
    </div>
    <div className='mb-20'>
        <Services/>
    </div>
      {JobsCategories?<>
      <h1 className='text-3xl sm:text-5xl font-extrabold text-blue-950  text-center mb-10'>Explore Our Jobs</h1>
        <div className='grid lg:grid-cols-3 grid-cols-1 md:px-20 gap-10 px-5'>
            {JobsCategories.map((value,index)=>(
               
                
                 <Card key={index} image={value.CategoryImage} title={value.JobCategory} Category={value.JobCategory} />
               
            ))}
        </div>
      </>:<div></div>}
      

        <div>
        <Testimonials/>
    </div>

        <FeatureSection/>
        <OppositeFeatureSection/>
        
        <Footer/>
    </div>
    </>
  )
}

export default UserHome
