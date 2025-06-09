import React from 'react'
import Header from '../../Components/Header'
import BackgroundSection from '../../Components/BackgroundSection'
import Subscribe from '../../Components/Subscribe'
import Footer from '../../Components/Footer'
import ImageTextSection from '../../Components/ImageTextSection'
import BlogSecton from '../../Components/BlogSecton'
import WhyChooseUs from '../../Components/WhyChooseUs'
const Aboutus = () => {
  return (
    <div className=" flex flex-col bg-white ">
      <div className='sticky z-50'>
          <Header/>
      </div>
  
    <BackgroundSection h3={"Home>    "} pgname={'  About-us'} h1={"About Us"}/>
    <WhyChooseUs/>
   <BlogSecton/>

    <Subscribe/>
    <Footer/>

    
  </div>
  )
}

export default Aboutus
