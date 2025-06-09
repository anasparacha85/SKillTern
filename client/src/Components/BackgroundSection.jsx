import React from 'react'

const BackgroundSection = ({h3,h1,pgname}) => {
  const backgroundimage="https://skillhub-woad.vercel.app/assets/cloud-guru-culture-B2I1fL7E.webp"

  return (
      <section className="home-menu text-white h-screen  flex justify-center items-center  " >
   <div className="w-[80%] h-[80%] bg-[#1b1834]  rounded-3xl bg-custom px-10 py-10 flex justify-center lg:justify-start items-end" style={{backgroundImage:`url( ${backgroundimage})`}}>
  <div className=' cursor-pointer mb-32 '>
  <h3 className=" text-lg mb-4">{h3}<span className='text-gray-200'>{pgname}</span></h3>
  <h1 className="lg:text-[55px] text-3xl font-bold mb-4">{h1} </h1>
  </div>
  </div>

   
  </section>
  )
}

export default BackgroundSection
