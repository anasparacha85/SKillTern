import React, { useEffect, useState } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { usestore } from '../../Store/ContextStore'
import { toast } from 'react-toastify'
import { ClipLoader } from 'react-spinners'
import { Mail, Lock, User } from 'lucide-react'

const UserSignup = () => {
  const {
    url,
    UserLoginOpen,
    UserSignupOpen,
    setUserSignupOpen,
    setUserLoginOpen,
    SaveTokenToLs,
    SaveAdminKeyToLs,
    isLoading,
    setisLoading
  } = usestore()

  const [FailureMessage, setFailureMessage] = useState(null)
  const [SuccessMessage, setSuccessMessage] = useState(null)

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    ConfirmPassword: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setisLoading(true)
    fetch(`${url}/Api/Auth/register`, {
      method: 'POST',
      body: JSON.stringify(user),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => res.json())
      .then(data => {
        if (data.SuccessMessage) {
          setSuccessMessage(data.SuccessMessage)
          setUser({ name: "", email: "", password: "", ConfirmPassword: "" })
          toast.success(data.SuccessMessage)
          setUserSignupOpen(false)
          setUserLoginOpen(true)
        }
        if (data.FailureMessage) {
          setFailureMessage(data.FailureMessage)
          toast.error(data.FailureMessage)
        }
      })
      .catch(error => {
        toast.error(error?.message || 'Signup failed')
      })
      .finally(() => {
        setisLoading(false)
      })
  }

  useEffect(() => {
    Aos.init()
  }, [])

  const closeModal = () => setUserSignupOpen(false)
  if (!UserSignupOpen) return null

  return (
    <div className="fixed inset-0 bg-black/10 flex items-start justify-center z-50">
      <div
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="500"
        className="bg-[#242145] text-gray-100 rounded-xl w-[500px] py-8 px-6 relative mt-10"
      >
        <button
          className="absolute top-2 right-2 text-gray-300 hover:text-gray-800"
          onClick={closeModal}
        >
          ✕
        </button>
        <h2 className="text-2xl font-bold text-start mb-6 text-gray-300">Signup</h2>
        <hr className="mb-4 text-white" />

        {SuccessMessage && (
          <div className="w-full py-2 text-center bg-green-100 text-green-800 rounded-md mb-4">
            {SuccessMessage}
          </div>
        )}
        {FailureMessage && (
          <div className="w-full py-2 text-center bg-red-100 text-red-700 rounded-md mb-4">
            {FailureMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Full Name</label>
            <div className="relative">
              <input
                type="text"
                name="name"
                value={user.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full p-3 pl-10 border border-gray-500 rounded-md focus:outline-none text-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-purple-500"
              />
              <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-300" />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Email Address</label>
            <div className="relative">
              <input
                type="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full p-3 pl-10 border border-gray-500 rounded-md focus:outline-none text-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-purple-500"
              />
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-300" />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Password</label>
            <div className="relative">
              <input
                type="password"
                name="password"
                value={user.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full p-3 pl-10 border border-gray-500 rounded-md focus:outline-none text-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-purple-500"
              />
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-300" />
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Confirm Password</label>
            <div className="relative">
              <input
                type="password"
                name="ConfirmPassword"
                value={user.ConfirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
                className="w-full p-3 pl-10 border border-gray-500 rounded-md focus:outline-none text-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-purple-500"
              />
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-300" />
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-red-500 text-white py-3 rounded-lg hover:from-purple-700 hover:to-red-600 transition-all"
          >
            {isLoading ? <ClipLoader size={20} color="white" /> : "Sign Up"}
          </button>
        </form>

        <div className="my-4 text-center text-gray-500">OR</div>

        <button
          type="button"
          onClick={() => window.location.href = `${url}/api/auth/google`}
          className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-700 to-red-500 text-white py-3 rounded-md hover:from-purple-800 hover:to-red-600 transition"
        >
          <img width="24" height="24" src="https://img.icons8.com/fluency/48/google-logo.png" alt="google-logo" />
          Sign up with Google
        </button>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <button
              className="text-red-500 hover:underline"
              onClick={() => {
                setUserSignupOpen(false)
                setUserLoginOpen(true)
              }}
            >
              Login
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}

export default UserSignup
