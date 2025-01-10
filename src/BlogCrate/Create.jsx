


import axios from 'axios'
import React, { useState } from 'react'
import { useAuth1 } from '../Context/AuthProvider'
import { Loader2 } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

function Create() {
    const [title,settitle]=useState("")
    const [category,setcategory]=useState("")
    const[about,setabout]=useState("")
    const [blogImage,setblogImage]=useState("")
    const Navigateto=useNavigate()
    
const{token}=useAuth1()

  const [loading,setLoading]=useState(false)
  
   const changePhotoHandler = (e) => {
      console.log(e);
      const file = e.target.files[0];
     setblogImage(file)
    };




    const fetchdata=async(e)=>{
      e.preventDefault();
      const formData = new FormData();
      formData.append("title",title);
      formData.append("category", category);
      formData.append("about", about);

      formData.append("blogImage", blogImage);
   
     
     try {
      setLoading(true)

         const { data } = await axios.post(
             "https://blog-app-backend-project-1.onrender.com/app/auth/Blog",
             formData,
             {
               withCredentials: true,
               headers: {
              
                  "Content-Type": "multipart/form-data",

                    Authorization:`Bearer${token}`
                 
               },
               
             })
             if(data){
              alert("done create")
              setLoading(false)
             }
     console.log(data)
         } catch (error) {
         console.log(error)
     }}
  return (
    
    <div className=' w-screen h-screen flex items-center justify-center '>

         <form className='grid  grid-flow-row justify-center items-center  shadow-lg w-[400px] h-[500px]  ' >
         <h3 className="text-2xl font-semibold mb-8">Create Blog</h3>

<label>title</label><br></br>
<input type="text" value={title} onChange={(e) => settitle(e.target.value)} placeholder='title' className='bg-blue-100 border border-black' />
<label>Category</label>
<br></br>
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
<label>About</label>
<br></br>
<textarea  value={about}   onChange={(e) => setabout(e.target.value)} placeholder='description' className='bg-blue-100 border border-black'></textarea>
<label>Image change</label>
<input type="file"   onChange={changePhotoHandler}/>

{loading ? (
                        <button>
                            <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                            Please wait
                        </button>
                    ) : (
                        <button type='submit'onClick={fetchdata} className='bg-blue-500 rounded text-yellow-50 '>submit</button>
                    )
                }

   </form> 


      



    </div> 
  )
}

export default Create






