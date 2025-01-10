

import React, { useEffect, useState } from 'react'
import axios from 'axios'
function AllUser() {

    const [users,setUsers]=useState([])
  
    const fetchdata=async(e)=>{

   try {
       const { data } = await axios.get(
           "https://blog-app-backend-project-1.onrender.com/app/auth/users",
          
           {
             withCredentials: true,
             headers: {
               "Content-Type": "multipart/form-data",
             },
             
           })
   console.log(data.alldatafind)
   setUsers(data.alldatafind)
       } catch (error) {
       console.log(error)
   }
   
   
    }
   useEffect(()=>{
   fetchdata()
   },[])
           

  return (
    <div>
    
    <div>
   <div className='lg:grid  grid-cols-5 gap-12 p-10'>
{users&&users.length>0?(users.slice(0,5).map((item=>{

return(
    <div className='shadow-lg mt-7 w-[270px] rounded ml-5 bg-slate-800  text-white h-[400px]'>
        
        <div className='grid justify-center items-center overflow-hidden  '>
        <img src={item.photo} alt="" srcset="" className='w-[180px] h-[180px] border-4  rounded-full hover:scale-125 duration-1000 bg-black opacity-30 ' />

        <div className='text-2xl mt-9'>
           

      <div className='flex flex-col justify-center items-center'>
      <h1 className='text-yellow-100 font-mono'>{item.username}</h1>
      <h1 className='text-green-400 font-serif'>{item.email}</h1>

      </div>
        </div>
        </div>

    </div>
)

}))):("loding")}

   </div>
    </div>
    </div>
  )
}

export default AllUser










