import { useState } from "react";
import { Menu, X, User, Settings, Image } from "lucide-react";
import LMSHeader from "../../../Components/LMSHeader";
import ProfileHeader from "../../../Components/ProfileHeader";
import { Outlet } from "react-router";
import { usestore } from "../../../Store/ContextStore";
import { NavLink } from "react-router-dom";

const UserProfileLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { user } = usestore();

  return (
    <>
      <LMSHeader />
      <ProfileHeader Heading={"User Profile"} />

      <div className="flex  pt-4 md:pt-0">
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/50 bg-opacity-50 z-10 md:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        <aside
          className={`fixed md:relative top-0 left-0 z-20 bg-[#242145] text-white w-64 md:w-72 p-4 transition-transform duration-500 ease-in-out ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0 min-h-screen `}
        >
          {/* Close Button (Mobile) */}
          <button
            className="absolute top-4 right-4 md:hidden text-white hover:text-gray-300"
            onClick={() => setSidebarOpen(false)}
          >
            <X size={24} />
          </button>

          {/* Profile Info */}
          <div className="flex flex-col items-center mb-6 mt-4 md:mt-0">
            <div className="relative">
              <img
                src={user?.profilePicture || "/api/placeholder/80/80"}
                alt="User"
                className="w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-gray-500 object-cover"
              />
            </div>
            <h2 className="text-sm md:text-base font-semibold text-white mt-2 text-center px-2 truncate w-full">
              {user?.name || "No Name"}
            </h2>
          </div>

          {/* Navigation */}
          <nav className="space-y-2">
            <NavLink
              to="/LMS/UserProfile"
              className={({ isActive }) =>
                `flex items-center p-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive 
                    ? "bg-purple-700 text-white shadow-md" 
                    : "hover:bg-purple-600/80 text-gray-200 hover:text-white"
                }`
              }
              end
            >
              <User className="mr-3 flex-shrink-0" size={18} />
              <span>Profile</span>
            </NavLink>
            
            <NavLink
              to="/LMS/UserProfile/Account"
              className={({ isActive }) =>
                `flex items-center p-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive 
                    ? "bg-purple-700 text-white shadow-md" 
                    : "hover:bg-purple-600/80 text-gray-200 hover:text-white"
                }`
              }
            >
              <Settings className="mr-3 flex-shrink-0" size={18} />
              <span>Account</span>
            </NavLink>
            
            <NavLink
              to="/LMS/UserProfile/Photo"
              className={({ isActive }) =>
                `flex items-center p-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive 
                    ? "bg-purple-700 text-white shadow-md" 
                    : "hover:bg-purple-600/80 text-gray-200 hover:text-white"
                }`
              }
            >
              <Image className="mr-3 flex-shrink-0" size={18} />
              <span>Photos</span>
            </NavLink>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 md:ml-56 lg:ml-5  ">
          {/* Menu Button (Mobile) */}
          <div className="md:hidden p-4 bg-white sticky top-0 z-5 border-b border-gray-200">
            <button
              className="p-2 bg-[#242145] text-white rounded-lg hover:bg-purple-700 transition-colors duration-200"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu size={20} />
            </button>
          </div>

          {/* Content Area */}
          <div className="p-4 md:p-6">
            <Outlet />
          </div>
        </main>
      </div>
    </>
  );
};

export default UserProfileLayout;