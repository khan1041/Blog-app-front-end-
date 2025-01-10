
import React, { useState } from 'react'
import Footer from '../Blog-app(Auth)/Footer'
import Slider from './Slider'
import UpdateBlog from '../BlogCrate/UpdateBlog'
import Login from '../Blog-app(Auth)/Login'
import MyBlogs from '../Blog-app(Auth)/MyBlogs'
import Logout from '../Blog-app(Auth)/Logout'
import Create from '../BlogCrate/Create'
import Profile from '../Blog-app(Auth)/Profile'
import { Navigate } from "react-router-dom";
import { useAuth1 } from '../Context/AuthProvider'
function Dashbord() {
    const[red,setred]=useState()
    const{user}=useAuth1()
    if(!user){
      return <Navigate to={"/"}/>
    }
    const [component, setComponent] = useState("My Blogs");

  return (
    <div>
    
    <Slider component={component} setComponent={setComponent} />
        {component === "My Profile" ? (
          <Profile/>
        ) : component === "Create Blog" ? (
          <Create />
        ) : component === "Update Blog" ? (
          <MyBlogs/>
        ) : (
          <MyBlogs />
        )}
    </div>
  )
}

export default Dashbord


