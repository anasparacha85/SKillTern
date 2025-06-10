/* eslint-disable react/prop-types */
import { useState } from "react"
import { Menu, X, User, Heart, BookOpen } from "lucide-react"
import { NavLink } from "react-router-dom"

const ProfileHeader = ({ Heading }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  const navigationItems = [
    {
      name: "User Profile",
      path: "/LMS/UserProfile",
      icon: User,
    },
    {
      name: "Favorites",
      path: "/LMS/myFavorites",
      icon: Heart,
    },
    {
      name: "My Courses",
      path: "/LMS/MyCourses",
      icon: BookOpen,
    },
  ]

  return (
    <>
      <header className="bg-gradient-to-r from-slate-800 to-slate-900 text-white shadow-lg">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Top Section */}
          <div className="flex justify-between items-center py-6">
            {/* Heading */}
            <div>
              <h1 className="text-2xl lg:text-3xl font-bold text-white mb-1">{Heading}</h1>
              <div className="w-12 h-1 bg-blue-400 rounded-full"></div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-slate-700 transition-colors duration-200"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex pb-4">
            <div className="flex space-x-1">
              {navigationItems.map((item, index) => {
                const IconComponent = item.icon
                return (
                  <NavLink
                    key={index}
                    to={item.path}
                    className={({ isActive }) =>
                      `flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                        isActive
                          ? "bg-blue-600 text-white shadow-md"
                          : "text-gray-300 hover:text-white hover:bg-slate-700"
                      }`
                    }
                  >
                    <IconComponent size={18} />
                    {item.name}
                  </NavLink>
                )
              })}
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black/50 bg-opacity-50 z-40 md:hidden" onClick={() => setMenuOpen(false)} />
      )}

      {/* Mobile Menu (Sliding from Right) */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white text-gray-800 shadow-2xl transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden z-50`}
      >
        {/* Mobile Menu Header */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 text-white p-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">{Heading}</h2>
            <button
              className="p-2 rounded-lg hover:bg-slate-700 transition-colors duration-200"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Mobile Navigation Links */}
        <nav className="p-6">
          <div className="space-y-2">
            {navigationItems.map((item, index) => {
              const IconComponent = item.icon
              return (
                <NavLink
                  key={index}
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                      isActive
                        ? "bg-blue-50 text-blue-600 border-l-4 border-blue-600"
                        : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                    }`
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  <IconComponent size={20} />
                  {item.name}
                </NavLink>
              )
            })}
          </div>
        </nav>

        {/* Mobile Menu Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200">
          <p className="text-sm text-gray-500 text-center">Navigate through your profile sections</p>
        </div>
      </div>
    </>
  )
}

export default ProfileHeader
