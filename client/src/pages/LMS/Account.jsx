import { useState, useEffect } from "react"
import { Save, Mail, Lock, Eye, EyeOff, AlertTriangle, CheckCircle } from "lucide-react"
import { usestore } from "../../Store/ContextStore"
import { ClipLoader } from "react-spinners"
import { toast } from "react-toastify"

export const Account = () => {
  const { user, url, jwtToken, setUser, isLoading, setisLoading } = usestore()
  const [showPassword, setShowPassword] = useState({
    current: false,
    new: false,
    confirm: false,
  })
  const [passwordStrength, setPasswordStrength] = useState(0)
  const [passwordMatch, setPasswordMatch] = useState(true)

  const [formdata, setformdata] = useState({
    email: "",
    password: "",
    NewPassword: "",
    ConfirmNewPassword: "",
  })

  // Ensure email is updated when user is available
  useEffect(() => {
    if (user?.email) {
      setformdata((prev) => ({ ...prev, email: user.email }))
    }
  }, [user])

  // Check password strength
  useEffect(() => {
    if (formdata.NewPassword) {
      let strength = 0
      // Length check
      if (formdata.NewPassword.length >= 8) strength += 1
      // Contains number
      if (/\d/.test(formdata.NewPassword)) strength += 1
      // Contains special character
      if (/[!@#$%^&*(),.?":{}|<>]/.test(formdata.NewPassword)) strength += 1
      // Contains uppercase
      if (/[A-Z]/.test(formdata.NewPassword)) strength += 1

      setPasswordStrength(strength)
    } else {
      setPasswordStrength(0)
    }

    // Check if passwords match
    if (formdata.NewPassword && formdata.ConfirmNewPassword) {
      setPasswordMatch(formdata.NewPassword === formdata.ConfirmNewPassword)
    } else {
      setPasswordMatch(true)
    }
  }, [formdata.NewPassword, formdata.ConfirmNewPassword])

  const onchange = (e) => {
    const { name, value } = e.target
    setformdata({ ...formdata, [name]: value })
  }

  const onsubmit = (e) => {
    e.preventDefault()

    // Basic validation
    if (formdata.NewPassword !== formdata.ConfirmNewPassword) {
      toast.error("New passwords don't match")
      return
    }

    setisLoading(true)

    fetch(`${url}/api/user/UpdateUserPassword`, {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwtToken}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.SuccessMessage) {
          toast.success(data.SuccessMessage)
          setUser(data.updateddata)
          // Clear password fields after successful update
          setformdata((prev) => ({
            ...prev,
            password: "",
            NewPassword: "",
            ConfirmNewPassword: "",
          }))
        }
        if (data.FailureMessage) {
          toast.error(data.FailureMessage)
        }
      })
      .catch((error) => {
        console.log(error)
        toast.error("An error occurred. Please try again.")
      })
      .finally(() => {
        setisLoading(false)
      })
  }

  const togglePasswordVisibility = (field) => {
    setShowPassword((prev) => ({
      ...prev,
      [field]: !prev[field],
    }))
  }

  return (
    <div className=" p-3">
      <div className="bg-white shadow-lg rounded-xl overflow-hidden">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
          <h1 className="text-2xl font-bold mb-2">Account Settings</h1>
          <p className="text-blue-100">Manage your account credentials and security settings</p>
        </div>

        <form onSubmit={onsubmit} className="p-6">
          {/* Email Section */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <Mail className="h-5 w-5 text-blue-600" />
              Email Address
            </h2>

            <div className="relative">
              <input
                name="email"
                value={formdata.email}
                type="email"
                onChange={onchange}
                placeholder="Your email address"
                className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
            </div>
            <p className="text-sm text-gray-500 mt-2">This email is used for account login and notifications</p>
          </div>

          {/* Password Section */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <Lock className="h-5 w-5 text-blue-600" />
              Change Password
            </h2>

            {/* Current Password */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Current Password</label>
              <div className="relative">
                <input
                  name="password"
                  value={formdata.password}
                  onChange={onchange}
                  type={showPassword.current ? "text" : "password"}
                  placeholder="Enter your current password"
                  className="w-full p-3 pl-10 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  required
                />
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                <button
                  type="button"
                  onClick={() => togglePasswordVisibility("current")}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword.current ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            {/* New Password */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
              <div className="relative">
                <input
                  name="NewPassword"
                  type={showPassword.new ? "text" : "password"}
                  value={formdata.NewPassword}
                  onChange={onchange}
                  placeholder="Create a new password"
                  className="w-full p-3 pl-10 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                <button
                  type="button"
                  onClick={() => togglePasswordVisibility("new")}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword.new ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>

              {/* Password strength indicator */}
              {formdata.NewPassword && (
                <div className="mt-2">
                  <div className="flex gap-1 mb-1">
                    {[...Array(4)].map((_, i) => (
                      <div
                        key={i}
                        className={`h-1 flex-1 rounded-full ${
                          i < passwordStrength
                            ? passwordStrength === 1
                              ? "bg-red-500"
                              : passwordStrength === 2
                                ? "bg-orange-500"
                                : passwordStrength === 3
                                  ? "bg-yellow-500"
                                  : "bg-green-500"
                            : "bg-gray-200"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-xs text-gray-500">
                    {passwordStrength === 0 && "Very weak password"}
                    {passwordStrength === 1 && "Weak password - add numbers or special characters"}
                    {passwordStrength === 2 && "Medium strength - add uppercase letters"}
                    {passwordStrength === 3 && "Strong password"}
                    {passwordStrength === 4 && "Very strong password"}
                  </p>
                </div>
              )}
            </div>

            {/* Confirm New Password */}
            <div className="mb-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Confirm New Password</label>
              <div className="relative">
                <input
                  name="ConfirmNewPassword"
                  value={formdata.ConfirmNewPassword}
                  onChange={onchange}
                  type={showPassword.confirm ? "text" : "password"}
                  placeholder="Confirm your new password"
                  className={`w-full p-3 pl-10 pr-10 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                    formdata.ConfirmNewPassword && !passwordMatch
                      ? "border-red-500 bg-red-50"
                      : formdata.ConfirmNewPassword && passwordMatch
                        ? "border-green-500 bg-green-50"
                        : "border-gray-300"
                  }`}
                />
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                <button
                  type="button"
                  onClick={() => togglePasswordVisibility("confirm")}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword.confirm ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>

              {/* Password match indicator */}
              {formdata.ConfirmNewPassword && (
                <div className="flex items-center gap-1 mt-1">
                  {passwordMatch ? (
                    <>
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      <p className="text-xs text-green-600">Passwords match</p>
                    </>
                  ) : (
                    <>
                      <AlertTriangle className="h-3 w-3 text-red-500" />
                      <p className="text-xs text-red-600">Passwords don't match</p>
                    </>
                  )}
                </div>
              )}
            </div>

            <p className="text-sm text-gray-500 mt-3">
              For security, use at least 8 characters with a mix of letters, numbers & symbols
            </p>
          </div>

          {/* Security Notice */}
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-md mb-6">
            <div className="flex">
              <div className="flex-shrink-0">
                <AlertTriangle className="h-5 w-5 text-blue-600" />
              </div>
              <div className="ml-3">
                <p className="text-sm text-blue-700">
                  After changing your password, you'll be logged out of all devices except this one.
                </p>
              </div>
            </div>
          </div>

          {/* Save Button */}
          <div className="border-t pt-6">
            <button
              type="submit"
              disabled={isLoading || (formdata.NewPassword && !passwordMatch)}
              className="w-full md:w-auto bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-8 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <ClipLoader size={20} color="white" loading={isLoading} />
              ) : (
                <>
                  <Save size={18} />
                  Update Account
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Account
