import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { usestore } from '../Store/ContextStore';
import ProfileOverlay from './OverLays/ProfileOverlay';
import Skillternloog from '../../public/skillternloog.png'
export const UserHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation()
  const [profileopen, setprofileopen] = useState(false)


  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const { UserLoginOpen, setUserLoginOpen, isLoggedIn, user, url } = usestore()
  console.log(user.profilePicture);
  if (user.profilePicture.startsWith("http")) {
    console.log("hello");


  }
  else {
    console.log("zello");

  }


  return (
    <header className="bg-[#242145] z-[9999]  sticky top-0 p-4">
      <div className="max-w-6xl  mx-auto flex items-center justify-between">
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

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex space-x-6 mt-4 mr-5 text-md">
          <NavLink to="/" className={({ isActive }) => (` ${isActive ? 'text-red-700 font-bold cursor-pointer' : 'text-white'}`)} >Home</NavLink>
          <NavLink to="/Internships" className={({ isActive }) => (` ${isActive ? 'text-red-700 font-bold cursor-pointer' : 'text-white'}`)} >Internships</NavLink>
          <NavLink to="/CompanyCollaboration" className={({ isActive }) => (` ${isActive ? 'text-red-700 font-bold cursor-pointer' : 'text-white'}`)} >Company Collaboration</NavLink>
          <NavLink to="/Contact" className={({ isActive }) => (` ${isActive ? 'text-red-700 font-bold cursor-pointer' : 'text-white'}`)} >Contact</NavLink>


          <NavLink to="/job-portal">  <button className="bg-gradient-to-r from-purple-700 to-red-600 font-bold text-white px-6 text-sm py-2 rounded-[30px] cursor-pointer -mt-1" >Job Portal</button> </NavLink>
          {isLoggedIn ? <>

            <div className="relative -mt-2 cursor-pointer  text-gray-700 "
              onMouseEnter={() => setprofileopen(true)}
              onMouseLeave={() => setprofileopen(false)}
            >
              <img
                src={user ? (user.profilePicture.startsWith("http") ? user.profilePicture : `${url}/${user.profilePicture}`) : " "
                }
                alt="User"
                className="w-12 h-12 rounded-full mr-4"
              />
              {profileopen && (
                <ProfileOverlay />
              )}
            </div>

          </> :
            <button onClick={() => { setUserLoginOpen(true); localStorage.setItem('prevpath', location.pathname) }}

              className="bg-green-600 text-white font-bold px-4 py-2 rounded-[30px] cursor-pointer" >Login</button>
          }

        </div>

        {/* Hamburger Menu for Mobile */}
        <button onClick={toggleMobileMenu} className="lg:hidden text-black">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Links */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-gray-800 text-white space-y-4 p-4">
          <NavLink to="/" className="block"  >Home</NavLink>
          <NavLink to="/Internships" className="block">Internship</NavLink>
          <NavLink to="/CompanyCollaboration" className="block">Company Colaboration</NavLink>

          <NavLink to="/Contact" className="block">Contact</NavLink>
          <NavLink to="/job-portal" className="block">Job Portal</NavLink>
          {isLoggedIn ? <>

            <div className="relative cursor-pointer -mt-1 cursor-pointer  text-gray-700 "
              onMouseEnter={() => setprofileopen(true)}
              onMouseLeave={() => setprofileopen(false)}
            >
              <img
                src={user ? (user.profilePicture.startsWith("http") ? user.profilePicture : `${url}/${user.profilePicture}`) : " "
                }
                alt="User"
                className="w-12 h-12 rounded-full mr-4"
              />
              {profileopen && (
                <ProfileOverlay />
              )}
            </div>

          </> :
            <button onClick={() => { setUserLoginOpen(true); localStorage.setItem('prevpath', location.pathname) }}

              className="bg-green-600 text-white font-bold px-4 py-2 rounded-[30px] cursor-pointer" >Login</button>
          }

        </div>
      )}
    </header>
  );
};

export default UserHeader;
