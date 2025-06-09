import { useState } from "react";
import { Menu, X, Search, ChevronRight } from "lucide-react";
import { usestore } from "../Store/ContextStore";
import { useLocation, useNavigate } from "react-router";
import { Link, NavLink } from "react-router-dom";
import ProfileOverlay from "./OverLays/ProfileOverlay";
import CoursesOverLay from "./OverLays/CoursesOverLay";
import Skillternloog from '../../public/skillternloog.png'

const coursesData = {
  "Web Development": ["React.js", "Node.js", "MERN Stack", "Django", "PHP"],
  "App Development": ["Flutter", "React Native", "Swift", "Android"],
  "Data Science": ["Pandas", "Data Visualization", "Data Mining"],
  "DevOps": ["AWS", "Google Cloud", "Azure"],
};

const LMSHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [coursesHovered, setCoursesHovered] = useState(false);
  const [searchvalue, setsearchvalue] = useState("")


 
const [profileopen, setprofileopen] = useState(false)
 
  const navigate = useNavigate();

  const [profileOpen, setProfileOpen] = useState(false);
  const {UserLoginOpen,UserSignupOpen,setUserSignupOpen,setUserLoginOpen,url,isLoggedIn,user}=usestore()
const {selecteditem,setselecteditem,categoryitem, setcategoryitem}=usestore()

const onchange=(e)=>{
  const {name,value}=e.target;
  setsearchvalue(value)
}
const onclick=()=>{
setselecteditem(searchvalue)
navigate('/LMS/Courses') 

}
const location=useLocation()



  return (
<header className="bg-[#242145] text-white py-4 px-12">
  <div className="container mx-auto flex justify-between items-center">
    {/* Logo */}
    <div className="text-xl w-1/5">
      <Link to="/" className="flex items-center text-white mr-8">
              <svg
                className="h-8 w-8 mr-2 bg-red-600 rounded-full p-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 19h20L12 2zm0 3.8L18.5 17H5.5L12 5.8z" />
              </svg>
              <span className="font-bold text-xl">Skilltern</span>
            </Link>
    </div>

    {/* Desktop Menu */}
    <nav className="hidden md:flex space-x-6 items-center w-4/5">
      {/* Courses Dropdown */}
      <div
        className="relative cursor-pointer p-2 bg-violet-200 text-[#242145] font-medium rounded-md transition-all duration-200 hover:bg-violet-300"
        onMouseEnter={() => setCoursesHovered(true)}
        onMouseLeave={() => setCoursesHovered(false)}
      >
        Courses
        {coursesHovered && <CoursesOverLay />}
      </div>

      {/* Search Bar */}
      <div className="relative w-3/5">
        <input
          type="text"
          placeholder="Search for courses..."
          className="p-2 pl-4 pr-10 rounded-md w-full bg-violet-100 text-[#242145] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
          name="search"
          value={searchvalue}
          onChange={onchange}
        />
        <button onClick={onclick}>
          <Search className="absolute right-2 top-2 text-[#242145] hover:text-purple-700 transition-all duration-200" size={18} />
        </button>
      </div>

      {/* Cart Button */}
    

      {/* Auth Buttons */}
      {isLoggedIn ? (
        <>
          <NavLink to="/LMS/Instructor" className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-all duration-200">
            Instructor
          </NavLink>
          <NavLink to="/LMS/MyCourses" className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-all duration-200">
            MyCourses
          </NavLink>
          <div
            className="relative cursor-pointer"
            onMouseEnter={() => setprofileopen(true)}
            onMouseLeave={() => setprofileopen(false)}
          >
            <img
              src={user ? user.profilePicture : ""}
              alt="User"
              className="w-12 h-12 rounded-full border-2 border-white hover:scale-105 transition-transform duration-200"
            />
            {profileopen && <div className="relative z-50">
               <ProfileOverlay />
            </div>
           }
          </div>
        </>
      ) : (
        <>
          <button
            onClick={() => {
              setUserLoginOpen(true);
              localStorage.setItem('prevpath', location.pathname);
            }}
            className="bg-white text-[#242145] border-2 border-rose-500 px-4 font-semibold py-2 rounded-md hover:bg-rose-100 transition-all duration-200"
          >
            Login
          </button>
          <button
            onClick={() => setUserSignupOpen(true)}
            className="bg-rose-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-rose-600 transition-all duration-200"
          >
            Signup
          </button>
        </>
      )}
    </nav>

    {/* Mobile Menu Button */}
    <button className="md:hidden p-2 text-white" onClick={() => setMenuOpen(!menuOpen)}>
      {menuOpen ? <X size={24} /> : <Menu size={24} />}
    </button>
  </div>

  {/* Mobile Menu */}
  {menuOpen && (
    <nav className="md:hidden bg-[#1f1b3a] text-white p-4 space-y-2">
      {Object.keys(coursesData).map((category) => (
        <div key={category}>
          <button
            className="w-full text-left p-2 flex justify-between items-center hover:bg-[#332e5b]"
            onClick={() => setActiveCategory(activeCategory === category ? null : category)}
          >
            {category} <ChevronRight size={16} />
          </button>
          {activeCategory === category && (
            <div className="ml-4 bg-[#3c3670] p-2 rounded-md">
              {coursesData[category].map((course) => (
                <button
                  key={course}
                  className="block p-2 hover:bg-[#4b438a] w-full text-left"
                  onClick={() => navigate("/LMS/Courses")}
                >
                  {course}
                </button>
              ))}
            </div>
          )}
        </div>
      ))}

      <button className="w-full p-2 hover:bg-[#332e5b] text-left">Search</button>

      {isLoggedIn ? (
        <>
          <NavLink to="/LMS/Instructor" className="block p-2 bg-purple-600 text-white rounded-md">
            Instructor
          </NavLink>
          <NavLink to="/LMS/MyCourses" className="block p-2 hover:bg-[#332e5b]">My Courses</NavLink>
          <NavLink to="/LMS/myFavorites" className="block p-2 hover:bg-[#332e5b]">Favorites</NavLink>
          <NavLink to="/LMS/UserProfile" className="block p-2 hover:bg-[#332e5b]">User Profile</NavLink>
          <NavLink to="/logout" className="block p-2 bg-rose-500 text-white text-center rounded-md hover:bg-rose-600">
            Logout
          </NavLink>
        </>
      ) : (
        <>
          <button onClick={() => setUserLoginOpen(true)} className="w-full p-2 hover:bg-[#332e5b] text-left">
            Login
          </button>
          <button onClick={() => setUserSignupOpen(true)} className="w-full p-2 bg-rose-500 text-white rounded-md hover:bg-rose-600">
            Signup
          </button>
        </>
      )}
    </nav>
  )}
</header>


  );
};

export default LMSHeader;