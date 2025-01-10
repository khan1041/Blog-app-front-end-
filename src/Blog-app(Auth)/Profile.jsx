


import React from 'react'
import { useAuth1 } from '../Context/AuthProvider'
function Profile() {
  const{user}=useAuth1()
  return (
    <div>
      my profile
      <div className="flex justify-center items-center shadow-lg bg-slate-100  min-h-screen">
        <div className="bg-white  rounded-lg overflow-hidden max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg w-full">
          <div className="">
           
<div className="  ">
              <img
                src={user.photo}
                alt=""
                className="w-24 h-24 rounded-full mx-auto border-4 border-gray-700"
              />

            </div>
          </div>
          <div className="px-6 py-8 mt-2">
            <h2 className="text-center text-2xl font-semibold text-gray-800">
         {user.username}
            </h2>
            <p className="text-center text-gray-600 mt-2">
             {user.email}
            </p>
          
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Profile
