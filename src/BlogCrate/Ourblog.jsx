


import React, { useEffect, useState } from 'react'
import { useAuth1 } from '../Context/AuthProvider'
import { Link } from 'react-router-dom'
import axios from 'axios'
function MyBlog() {
const [allBlog,setAllbolg]=useState([])
 const fetchdata=async()=>{
       
    try {
      const response=await fetch(`https://blog-app-backend-project-1.onrender.com/app/auth/allBlog`,{
    
        method:"GET",
       })

       if(response.ok){

         const data=await response.json()
      
        setAllbolg(data.AllBlogfind)
        }
       console.log(response)
     
        } catch (error) {
        console.log(error)
    }}

    console.log(allBlog)

    const handleDelete = async (id) => {
      await axios
        .delete(`https://blog-app-backend-project-1.onrender.com/app/auth/delete/${id}`, {
          withCredentials: true,
        })
        .then((res) => {
        alert("done")
          setAllbolg((value) => value.filter((blog) => blog._id !== id));
        })
        .catch((error) => {
       console.log(error)
        });
    }; 



useEffect(()=>{
fetchdata()
},[])
        

  return (
    <div className='lg:grid grid-cols-4 gap-3 p-10  '>
    {allBlog && allBlog.length > 0 ?(allBlog.slice(0,4)).map(((item)=>{

return (
    <div className='shadow-lg w-[300px] rounded bg-slate-200'>
 
    <div className='overflow-hidden  '>
    <img src={item.blogImage} alt="" className='w-full h-48 hover:scale-125 duration-1000'/>
    </div>
    <div className='flex text-center text-2xl justify-center gap-16'>
      
       <div className='flex justify-center items-center'>
       <button className='bg-purple-500 rounded shadow-lg font-black '><Link className='text-white' to={`/details/${item._id} `}>Details</Link></button>

       </div>
    {/* <button onClick={()=>handleDelete(item._id)} className='ml-10 bg-red-600 text-white'>delete</button> */}

    </div>
    </div>
)


})):"no post heare"}

    </div>
  )
}

export default MyBlog









