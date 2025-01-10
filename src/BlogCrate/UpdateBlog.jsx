


import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Loader2 } from 'lucide-react'

function UpdateBlog() {
  
  const{id}=useParams()
  const [title,settitle]=useState("")
  const [category,setcategory]=useState("")
  const[about,setabout]=useState("")
  const [blogImage,setblogImage]=useState("")
const[loading,setLoading]=useState(false)

  const changePhotoHandler = (e) => {
    console.log(e)
    const file = e.target.files[0];
   setblogImage(file)
  };


  const fetchdata=async(e)=>{
    e.preventDefault();
    const formData = new FormData();
    formData.append("title",title);
    formData.append("category", category);
    formData.append("about", about);

   // formData.append("img", img);

   try {
    setLoading(true)
       const { data } = await axios.post(
           `http://localhost:8000/app/auth/update/${id}`,
           formData,
           {
             withCredentials: true,
             headers: {
              "Content-Type": "application/json"
             },
           
           })
           if(data){
            setLoading(false)
            alert("Update Done")

           }
           
           
   console.log(data)
       } catch (error) {
       console.log(error)
   }}

  //imge cangeas


  const imagdata=async(e)=>{
    e.preventDefault();
    const formData = new FormData();
    formData.append("blogImage",blogImage);
  
    //formData.append("img", img);

   try {
    setLoading(true)
       const { data } = await axios.put(
           `https://blog-app-backend-project-1.onrender.com/app/auth/cange/${id}`,
           formData,
           {
             withCredentials: true,
             headers: {
               "Content-Type": "multipart/form-data",
             },
             
           })
           if(data){
            setLoading(false)
            alert("image update done")
           }
   console.log(data)
       } catch (error) {
       console.log(error)
   }}
//



  return (
    <div>
      <div className='w-full h-screen flex justify-center items-center'>
    <form className='grid  grid-flow-row justify-center items-center  shadow-lg w-[350px] h-[440px] bg-blue-200'>
      <div className='ml-24'>
      <h1 className='text-blue-500 text-2xl '>Update <span className='text-black'>Blog</span></h1>
      </div>

<input type="text" placeholder='title' value={title} onChange={(e) => settitle(e.target.value)} />

<select
                className="w-full p-2 border rounded-md"
                value={category}
                onChange={(e) => setcategory(e.target.value)}
              >
                <option value="">Select Category</option>
                <option value="Devotion">Devotion</option>
                <option value="Sports">Sports</option>
                <option value="Coding">Coding</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Business">Business</option>
              </select>
 <textarea  value={about}   onChange={(e) => setabout(e.target.value)} placeholder='description' className='bg-blue-100 border border-black'></textarea>
 {loading ? (
                        <button>
                            <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                            Please wait
                        </button>
                    ) : (
                        <button type='submit'onClick={fetchdata} className='bg-blue-500 rounded text-yellow-50 '>submit</button>
                    )
                }

<div className=''>
  <div>
  </div>

  <div className='mt-5 '>
<input type="file"  className='file:bg-blue-600 text-white file:text-white   ' onChange={changePhotoHandler} />
<br></br>
{loading ? (
                        <button className=''>
                            <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                            Please wait
                        </button>
                    ) : (
                        <button type='submit'onClick={imagdata} className='bg-slate-500 rounded w-28 shadow-lg  text-yellow-50 ml-28 '>save Image</button>
                    )
                }
</div>
</div>
   </form>
   </div>
    </div>
  )
}

export default UpdateBlog


