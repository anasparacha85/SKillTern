import { CheckCircleIcon } from 'lucide-react'
import React from 'react'
import LMSHeader from '../Components/LMSHeader'
import { useNavigate } from 'react-router'

const SuccessPage = () => {
    const navigate=useNavigate()
  return (
    <div>
        <LMSHeader/>
        <div className="min-h-screen bg-gradient-to-br from-green-400 to-blue-500 flex flex-col justify-center items-center text-white">
          <div className="text-center">
            <CheckCircleIcon
              className="h-24 w-24 text-green-600 mx-auto"
              aria-hidden="true"
            />
            <h1 className="text-4xl font-extrabold mt-4">
              { "Subscription Successful!"}
            </h1>
            <p className="text-lg mt-2">
              {/* {error ? (
                <span className="text-red-400">{error}</span>
              ) : ( */}
                <span>Thank you for subscribing! Your purchase has been successfully completed.</span>
              {/* )} */}
            </p>
    
            {/* {message && <p className="text-green-300 mt-4">{message}</p>}
            {error && <p className="text-red-600 mt-4">{error}</p>}
     */}
     {/* <div className='flex flex-col gap-2 w-full'> */}
        <button
              onClick={() => navigate("/LMS")}
              className="mt-6 px-6 py-3 bg-white text-blue-600 cursor-pointer font-semibold rounded-lg shadow-md hover:bg-gray-200 transition duration-300"
            >
              Go to Dashboard
            </button>
            <br />
             <button
              onClick={() => navigate("/LMS/MyCourses")}
              className="mt-6 px-6 py-3 bg-white text-blue-600 cursor-pointer font-semibold rounded-lg shadow-md hover:bg-gray-200 transition duration-300"
            >
              View Your Enrolled Courses
            </button>
     {/* </div> */}
            
          </div>
        </div>
    </div>
  )
}

export default SuccessPage
