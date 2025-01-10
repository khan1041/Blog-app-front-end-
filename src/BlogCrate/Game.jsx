

import React, { useEffect, useState } from 'react'

function Game() {
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
useEffect(()=>{

fetchdata()

},[])


const gamefilter=allBlog.filter((blog)=>blog.category==='Sports')
console.log(gamefilter)




  return (
    <div>
      <h1>Game</h1>
 
 <div className=''>
    <div className='lg:flex gap-9 ml-3'>
        {gamefilter.map((item)=>{

            return <div className='shadow-lg w-40 bg-slate-50'>
                
                <div className='flex justify-center items-center bg-black  '>
                <img src={item.blogImage} alt="" className='w-[240px] h-[200px] '/>
               
                </div>
                <h1 className='text-purple-500'>{item.category}</h1>
            </div>
        })}
    </div>
 </div>

    </div>
  )
}

export default Game








