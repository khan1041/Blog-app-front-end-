
import React, { useState } from 'react'
import { CiMenuBurger } from "react-icons/ci";
import { BiSolidLeftArrowAlt } from "react-icons/bi";
import { useAuth1 } from '../Context/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';

function Slider({setComponent}){
const {user}=useAuth1()
const navigateTo=useNavigate()
console.log(user)

    const [show, setShow] = useState(false);
    const handleComponents = (value) => {
        setComponent(value);
      };
      const gotoHome = () => {
        navigateTo("/");
      };




  return (
    <>
<div
    className="sm:hidden fixed top-4 left-4 z-50"
    onClick={() => setShow(!show)}
  >
    <CiMenuBurger className="text-2xl" />
  </div>

    <div className={`w-64 h-full shadow-lg  fixed top-0 left-0 bg-gray-50 transition-transform duration-300 transform sm:translate-x-0 ${
        show ? "translate-x-0" : "-translate-x-full"
      }`}>
      <div className="text-center">
          <img
            className="w-24 h-24 rounded-full mx-auto mb-2"
            src={user.photo}
            alt=""
          />
          <p className="text-lg font-semibold">{user.email}</p>
        </div>
        <ul className="space-y-6 mx-4">
          <button
            onClick={() => handleComponents("My Blogs")}
            className="w-full px-4 py-2 bg-green-500 rounded-lg hover:bg-green-700 transition duration-300"
          >
            MY BLOGS
          </button>
          <button
            onClick={() => handleComponents("Create Blog")}
            className="w-full px-4 py-2 bg-blue-400 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            CREATE BLOG
          </button>
          <button
            onClick={() => handleComponents("My Profile")}
            className="w-full px-4 py-2 bg-pink-500 rounded-lg hover:bg-pink-700 transition duration-300"
          >
            MY PROFILE
          </button>
          <button
            onClick={gotoHome}
            className="w-full px-4 py-2 bg-red-500 rounded-lg hover:bg-red-700 transition duration-300"
          >
          HOME
          </button>
        
    </ul>
    </div>
   </>
  )
}

export default Slider
