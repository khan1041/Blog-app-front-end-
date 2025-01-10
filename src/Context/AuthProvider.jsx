

// import axios from "axios";
// import React, { createContext, useContext, useEffect, useState } from "react";
// import Cookies from "js-cookie";
// import { useFormState } from "react-hook-form";
// export const AuthContext = createContext();

// export const AuthProvider1 = ({ children }) => {
//   const [blogs, setBlogs] = useState();
//   const [profile, setProfile] = useState();
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [user,setuser]=useState()

//   const store=(server)=>{

//     localStorage.setItem("our",server)

//  }

//  const userAuthnticaion=async()=>{

//   try {
//     const response=await fetch("http://localhost:8000/app/auth/my-profile",

//       {
//      method:"GET",
//      headers:{
//       Authorization:`Bearer${store}`
//      }

//       }
//     )
//   if(response.ok){

//     const data=await response.json()
//     console.log("data",data)
//     setuser(data)
//   }
//   } catch (error) {
//     console.log(error)
//   }


//  }


//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         // token should be let type variable because its value will change in every login. (in backend also)
//        // let token = localStorage.get("token"); // Retrieve the token directly from the localStorage (Go to login.jsx)
//        // console.log(token);
//       // const token=Cookies.get("token")
//        // const parsedToken=token?JSON.parse(token):undefined

        
//       //     const { data } = await axios.get(

//       //      "http://localhost:8000/app/auth/my-profile",
//       //       {
//       //         withCredentials: true,
//       //         headers: {
             
//       //           "Content-Type": "application/json",
//       //         },
//       //  } );
//       //     console.log(data);
//       //     setProfile(data);
        
//       //     setIsAuthenticated(true);







//         }
      
        
//        catch (error) {
//         console.log(error);
//       }
//   }
  



//     const fetchBlogs = async () => {
//       try {
//         const { data } = await axios.get(
//           "http://localhost:8000/app/blog/all-blogs",
//           { withCredentials: true }
//         );
//         console.log(data);
//         setBlogs(data);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     userAuthnticaion()
//     fetchBlogs();
//     fetchProfile();
//   }, []);



//   return (
//     <AuthContext.Provider
//       value={{
//         blogs,
//         profile,
//        setProfile,
//         isAuthenticated,
//         setIsAuthenticated,
//        store,
//        user
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth1 = () => useContext(AuthContext);

import { data } from "autoprefixer";
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify'

export const AuthContext=createContext()


export const AuthProvider1=({children})=>{
  const [getall,setgetall]=useState("")
  const [Allblog,setAllbolg]=useState("")
  const[user,setUser]=useState("")
  const[MyBlog,setmyBlog]=useState("")
const[token,settoken]=useState(localStorage.getItem("token"))
const allprofile=async()=>{
try {
    
    const response=await fetch(`https://blog-app-backend-project-1.onrender.com/app/auth/users`,
        {
          method:"GET",  
         
    })
        if(response.ok){
          const data=await response.json()
          console.log(data.alldatafind)
      setgetall(data.alldatafind)
      }

} catch (error) {
    console.log(error)
}
}



   const fetchdata=async()=>{
       
       try {
         const response=await fetch(`https://blog-app-backend-project-1.onrender.com/app/auth/allBlog`,{
           method:"GET",
          })

          if(response.ok){

            const data=await response.json()
            console.log("data",data)
           setAllbolg(data)
           }
          console.log(response)
        
           } catch (error) {
           console.log(error)
       }}


//token data



const storeToken=(serverToken)=>{
return localStorage.setItem("token",serverToken)
}

const logout=()=>{
  settoken("")
  return localStorage.removeItem("token")
}

//userprofile
const profile=async()=>{

  try {
    const profile=await fetch("https://blog-app-backend-project-1.onrender.com/app/auth/profile",{
     method:'GET',
     headers:{
      Authorization:`Bearer${token}`
     }
    })
    if(profile.ok){
      const data=await profile.json()
      console.log(data.user)
      setUser(data.user)
    }
  } catch (error) {
    console.log(error)
  }
  
  }


  const MyallBlogs=async()=>{

    try {
    const response=await fetch("https://blog-app-backend-project-1.onrender.com/app/auth/myblogs",{
   method:'GET',
   headers:{
    Authorization:`Bearer${token}`
   }
    })
    if(response.ok){

        const data=await response.json()
        console.log(data)
       setmyBlog(data)
       }
    } catch (error) {
        console.log(error)
    }
  }


useEffect(()=>{

allprofile()
fetchdata()
profile()
MyallBlogs()
},[])

return <AuthContext.Provider value={{getall,allprofile,Allblog,storeToken,user,logout,MyBlog,token}}>


    {children}
</AuthContext.Provider>

}

// export const useAuth1=()=>{

//     return useContext(AuthContext)
// }

export const useAuth1 = () => useContext(AuthContext);






































