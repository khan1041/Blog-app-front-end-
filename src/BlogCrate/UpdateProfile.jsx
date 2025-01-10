
import React from 'react'

function UpdateProfile() {
    const [username,setusername]=useState("")
    const [email,setemail]=useState("")
    const [password,setpassword]=useState("")
   const[profile,setprofile]=useState("")

   const changePhotoHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setBlogImagePreview(reader.result);
      setBlogImage(file);
    };
    };
  
  
  
   const fetchdata=async(e)=>{
   e.preventDefault();
   const formData = new FormData();
   formData.append("username", username);
   formData.append("email", email);
   formData.append("password", password);
   formData.append("profile", profile);
  
  try {
      const { data } = await axios.post(
          `http://localhost:8000/app/auth/update1/${id}`,
          formData,
          {
            withCredentials: true,
            headers: {
              "Content-Type": "multipart/form-data",
            },
            
          })
  console.log(data)
      } catch (error) {
      console.log(error)
  }
  
  
   }
  
  
  return (
    <div>
          <div>
    
    <form onSubmit={fetchdata}>


 <input type="text" value={username} onChange={(e) => setusername(e.target.value)} />
<input type="email" value={email}   onChange={(e) => setemail(e.target.value)}/>
<input type="password" value={password}  onChange={(e) => setpassword(e.target.value)}/>

<input type="file"   onChange={changePhotoHandler}/>
<button className='text-blue bg-slate-600'>sumbit</button>
    </form>

     </div>
    </div>
  )
}

export default UpdateProfile

