

import React, { useEffect, useState } from 'react'
import { useAuth1 } from '../Context/AuthProvider'
import { Link } from 'react-router-dom'
import axios from 'axios'
function MyBlogs() {
const {token} =useAuth1()
const [allBlog,setAllbolg]=useState([])

 const fetchdata=async()=>{
       
    try {
      const response=await fetch(`https://blog-app-backend-project-1.onrender.com/app/auth/myblogs`,{
    
        method:"GET",
        headers:{
          Authorization:`Bearer${token}`

        }
       })

       if(response.ok){

         const data=await response.json()
      
        setAllbolg(data)
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
  
    <div className='grid justify-center items-center'>
    <div className='lg:grid grid-cols-4 gap-11 p-10 '>

    {allBlog&&(allBlog.map((item)=>{
    
    return <div className='shadow-lg w-[300px] rounded bg-slate-50' > 
    <div className='grid justify-center items-center'>
    <img src={item.blogImage} alt="" srcset="" className='' />

    </div>
      <div className='flex gap-6 justify-center items-center'>
      <img src={item.adminPhoto} alt="" srcset="" className='w-[50px] h-[50px] rounded-full' />
<Link to={`/details/${item._id}`} className='bg-red-200 rounded'>Details</Link>
<button className='bg-green-500 text-white rounded'><Link to={`/editBlog/${item._id}`} >update</Link></button>
<button onClick={()=>handleDelete(item._id)} className='ml-3 bg-red-600 text-white rounded'>delete</button>
      </div>
    </div>
}))}
    </div>


  </div>
 
  )
}

export default MyBlogs











