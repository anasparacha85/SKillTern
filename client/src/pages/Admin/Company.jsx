import React from 'react'
import Header from '../../Components/Header'
import BackgroundSection from '../../Components/BackgroundSection'
import Subscribe from '../../Components/Subscribe'
import Footer from '../../Components/Footer'
import UpSkill from '../../Components/UpSkill'
import Testimonials from '../../Components/Testimonials'
import Evaluate from '../../Components/Evaluate'
import Learn from '../../Components/Learn'

export const Company = () => {
  return (
    <div className=" flex flex-col bg-white overflow-x-hidden ">
      <Header/>
      <BackgroundSection h3={"Home>    "} pgname={'  Company'} h1={"Company"}/>
      <div className='w-full h-[250px] bg-white'> </div>
      <UpSkill/>
        <Subscribe/>
    <Learn/>
    
      <Footer/>

      
    </div>
  )
}

export default Company
