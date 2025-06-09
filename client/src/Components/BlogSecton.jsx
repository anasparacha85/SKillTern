import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const BlogSecton = () => {
  return (
    <section className="py-24">
      <div className="m-auto lg:w-[80%] md:w-[80%] sm:w-full w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between gap-8">
          {/* Left Content */}
          <div className="w-full flex justify-between flex-col lg:w-2/5">
            <div className="block lg:text-left text-center">
              <h2 className="text-4xl font-bold text-gray-900 leading-[3.25rem] mb-5">
                Our latest <span className="text-indigo-600">blogs</span>
              </h2>
              <p className="text-gray-500 mb-10 max-lg:max-w-xl max-lg:mx-auto">
                Welcome to our blog section, where knowledge meets inspiration.
                Explore insightful articles, expert tips, and the latest trends
                in our field.
              </p>
              <div className="flex flex-col items-center lg:items-start">
                
                <div className="flex gap-4 justify-center lg:ml-12 md:ml-0 sm:ml-0 ml-0 items-center">
                  <button
                    id="blog-slider-prev"
                    className="blog-swiper-button-prev group flex justify-center items-center border border-solid border-indigo-600 w-11 h-11 transition-all duration-500 rounded-full hover:bg-indigo-600"
                  >
                    <svg
                      className="h-6 w-6 text-indigo-600 group-hover:text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20.9999 12L4.99992 12M9.99992 6L4.70703 11.2929C4.3737 11.6262 4.20703 11.7929 4.20703 12C4.20703 12.2071 4.3737 12.3738 4.70703 12.7071L9.99992 18"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <button
                    id="blog-slider-next"
                    className="blog-swiper-button-next group flex justify-center items-center border border-solid border-indigo-600 w-11 h-11 transition-all duration-500 rounded-full hover:bg-indigo-600"
                  >
                    <svg
                      className="h-6 w-6 text-indigo-600 group-hover:text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3 12L19 12M14 18L19.2929 12.7071C19.6262 12.3738 19.7929 12.2071 19.7929 12C19.7929 11.7929 19.6262 11.6262 19.2929 11.2929L14 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Right Slider */}
          <div className="w-full lg:w-3/5">
            <Swiper
              modules={[Navigation, Pagination]}
              slidesPerView={2}
              spaceBetween={28}
              centeredSlides={false}
              loop={true}
              navigation={{
                nextEl: ".blog-swiper-button-next",
                prevEl: ".blog-swiper-button-prev",
              }}
              pagination={{ clickable: true }}
              breakpoints={{
                0: { slidesPerView: 1, spaceBetween: 20 },
                568: { slidesPerView: 2, spaceBetween: 28 },
                768: { slidesPerView: 2, spaceBetween: 28 },
                1024: { slidesPerView: 2, spaceBetween: 32 },
              }}
              className="mySwiper"
            >
              {[...Array(4)].map((_, index) => (
                <SwiperSlide key={index} className="w-full max-lg:max-w-xl lg:w-1/2 group">
                  <div className="flex items-center mb-9">
                    <img
                      src={`https://pagedone.io/asset/uploads/16962440${index % 2 === 0 ? "59" : "74"}.png`}
                      alt="blogs tailwind section"
                      className="rounded-2xl w-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl text-gray-900 font-medium leading-8 mb-4 group-hover:text-indigo-600">
                    {index % 2 === 0
                      ? "Clever ways to invest in product to organize your portfolio"
                      : "How to grow your profit through systematic investment with us"}
                  </h3>
                  <p className="text-gray-500 leading-6 transition-all duration-500 mb-8">
                    {index % 2 === 0
                      ? "Discover smart investment strategies to streamline and organize your portfolio. Explore innovative approaches to optimize your..."
                      : "Unlock the power of systematic investment with us and watch your profits soar. Our expert team will guide you on the path to financial.."}
                  </p>
                  <a
                    href="javascript:;"
                    className="cursor-pointer flex items-center gap-2 text-lg text-indigo-700 font-semibold"
                  >
                    Read more
                    <svg
                      width="15"
                      height="12"
                      viewBox="0 0 15 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.25 6L13.25 6M9.5 10.5L13.4697 6.53033C13.7197 6.28033 13.8447 6.15533 13.8447 6C13.8447 5.84467 13.7197 5.71967 13.4697 5.46967L9.5 1.5"
                        stroke="#4338CA"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlogSecton
