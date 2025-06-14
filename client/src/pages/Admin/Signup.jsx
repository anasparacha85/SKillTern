import React, { useEffect, useState } from 'react'
import { usestore } from '../../Store/ContextStore'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { toast } from 'react-toastify'
import { Mail, Lock, Eye, EyeOff, Key, User } from 'lucide-react'

const Signup = () => {
  const {
    url,
    AdminLoginOpen,
    setAdminLoginOpen,
    AdminSignupOpen,
    setAdminSignupOpen,
    SaveTokenToLs,
    SaveAdminKeyToLs
  } = usestore()

  const [user, setuser] = useState({ name: "", email: "", password: "", ConfirmPassword: "", AdminKey: "" })
  const [FailureMessage, setFailureMessage] = useState(null)
  const [SuccessMessage, setSuccessMessage] = useState(null)
  const [showPassword, setShowPassword] = useState({ password: false, confirm: false, key: false })

  const togglePasswordVisibility = (field) => {
    setShowPassword(prev => ({ ...prev, [field]: !prev[field] }))
  }

  const onchange = (e) => {
    const { name, value } = e.target;
    setuser({ ...user, [name]: value })
  }

  const onsubmit = (e) => {
    e.preventDefault()
    fetch(`${url}/Api/Auth/Admin/Register`, {
      method: 'POST',
      body: JSON.stringify(user),
      headers: { 'Content-Type': 'application/json' },
    }).then(res => res.json())
      .then(data => {
        if (data.SuccessMessage) {
          setSuccessMessage(data.SuccessMessage)
          toast.success(data.SuccessMessage)
          setuser({ name: "", email: "", password: "", ConfirmPassword: "", AdminKey: "" })
          setAdminSignupOpen(false)
          setAdminLoginOpen(true)
        } else if (data.FailureMessage) {
          setFailureMessage(data.FailureMessage)
          toast.error(data.FailureMessage)
        }
      }).catch(err => {
        toast.error(err.message || 'Something went wrong')
      })
  }

  useEffect(() => { Aos.init() }, [])
  const closeModal = () => setAdminSignupOpen(false)
  if (!AdminSignupOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/10 flex items-start justify-center z-50">
      <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="500"
        className="bg-[#242145] rounded-xl w-[500px] py-8 px-6 shadow-xl relative mt-8">

        <button className="absolute top-2 right-2 text-gray-300 hover:text-gray-800" onClick={closeModal}>✕</button>
        <h2 className="text-2xl font-bold text-start mb-6 text-gray-300">Signup as Admin</h2>
        <hr className="mb-4 text-white" />

        {SuccessMessage && <div className="w-full py-2 text-center bg-green-100 text-green-700 rounded-md mb-4">{SuccessMessage}</div>}
        {FailureMessage && <div className="w-full py-2 text-center bg-red-100 text-red-700 rounded-md mb-4">{FailureMessage}</div>}

        <form onSubmit={onsubmit} className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Full Name</label>
            <div className="relative">
              <input
                type="text"
                name="name"
                value={user.name}
                onChange={onchange}
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
                onChange={onchange}
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
                type={showPassword.password ? "text" : "password"}
                name="password"
                value={user.password}
                onChange={onchange}
                placeholder="Enter password"
                className="w-full p-3 pl-10 border border-gray-500 rounded-md focus:outline-none text-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-purple-500"
              />
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-300" />
              <button type="button" onClick={() => togglePasswordVisibility("password")} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                {showPassword.password ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Confirm Password</label>
            <div className="relative">
              <input
                type={showPassword.confirm ? "text" : "password"}
                name="ConfirmPassword"
                value={user.ConfirmPassword}
                onChange={onchange}
                placeholder="Confirm password"
                 className="w-full p-3 pl-10 border border-gray-500 rounded-md focus:outline-none text-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-purple-500"
              />
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-300" />
              <button type="button" onClick={() => togglePasswordVisibility("confirm")} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                {showPassword.confirm ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>

          {/* Admin Key */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Secret Admin Key</label>
            <div className="relative">
              <input
                type={showPassword.key ? "text" : "password"}
                name="AdminKey"
                value={user.AdminKey}
                onChange={onchange}
                placeholder="Enter admin key"
                className="w-full p-3 pl-10 border border-gray-500 rounded-md focus:outline-none text-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-purple-500"
              />
              <Key className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
              <button type="button" onClick={() => togglePasswordVisibility("key")} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                {showPassword.key ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-red-500 text-white py-3 rounded-lg hover:from-purple-700 hover:to-red-600 transition-all"
          >
            Signup
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <button className="text-red-600 hover:underline" onClick={() => { setAdminSignupOpen(false); setAdminLoginOpen(true) }}>
              Login
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Signup
