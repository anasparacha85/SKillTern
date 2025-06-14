import React, { useEffect, useState } from 'react'
import { usestore } from '../../Store/ContextStore'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { toast } from 'react-toastify'
import { Mail, Lock, Eye, EyeOff } from 'lucide-react'
import ForgetPasswordModal from '../../Modals/ForgetPasswordModal'

const Login = () => {
  useEffect(() => { Aos.init() }, [])
  const [user, setUser] = useState({ email: "", password: "" })
  const [showPassword, setShowPassword] = useState(false)
  const [FailureMessage, setFailureMessage] = useState(null)

  const {
    url,
    AdminLoginOpen,
    setAdminLoginOpen,
    AdminSignupOpen,
    setAdminSignupOpen,
    SaveTokenToLs,
    SaveAdminKeyToLs,
    setSuccessMessage,
    forgetpasswordmodalopen,
    setforgetpasswordmodalopen
  } = usestore()

  const closeModal = () => setAdminLoginOpen(false)
  if (!AdminLoginOpen) return null

  const handleChange = (e) => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch(`${url}/Api/Auth/Login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    })
      .then(res => res.json())
      .then(data => {
        if (data.token) SaveTokenToLs(data.token)
        if (data.AdminKey) SaveAdminKeyToLs(data.AdminKey)

        if (data.SuccessMessage) {
          setUser({ email: "", password: "" })
          toast.success(data.SuccessMessage)
          setSuccessMessage(data.SuccessMessage)
          setAdminLoginOpen(false)
        } else if (data.FailureMessage) {
          setFailureMessage(data.FailureMessage)
          toast.error(data.FailureMessage)
        }
      })
      .catch(err => toast.error(err.message || 'Login failed'))
  }

  return (
    <div className="fixed inset-0 bg-black/10 flex items-start justify-center z-50">
      <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="500"
        className="bg-[#242145] rounded-xl w-[500px] py-8 px-6 shadow-xl relative mt-10">

        <button className="absolute top-2 right-2 text-gray-300 hover:text-gray-800" onClick={closeModal}>✕</button>
        <h2 className="text-2xl font-bold text-start mb-6 text-gray-300">Login as Admin</h2>
        <hr className="mb-4 text-white" />

        {FailureMessage && <div className="w-full py-2 text-center bg-red-100 text-red-700 rounded-md mb-4">{FailureMessage}</div>}

        <form onSubmit={handleSubmit} className="space-y-5">
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
                type={showPassword ? "text" : "password"}
                name="password"
                value={user.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full p-3 pl-10 border border-gray-500 rounded-md focus:outline-none text-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-purple-500"
              />
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-300" />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-red-500 text-white py-3 rounded-lg hover:from-purple-700 hover:to-red-600 transition-all"
          >
            Login
          </button>
        </form>

        <ForgetPasswordModal />

        <div className="mt-6 text-center space-y-3">
          <button className="text-sm text-red-500 hover:underline" onClick={() => setforgetpasswordmodalopen(true)}>
            Forgot Password?
          </button>
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <button className="text-red-600 hover:underline" onClick={() => { setAdminLoginOpen(false); setAdminSignupOpen(true) }}>
              Sign up
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login
