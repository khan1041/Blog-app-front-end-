







import React, { useState,Suspense } from 'react'

import { BrowserRouter,Routes,Route, useLocation } from 'react-router-dom'
import Regesiter from './Blog-app(Auth)/regesiter'
import Login from './Blog-app(Auth)/Login'
import MyBlog from './BlogCrate/Ourblog'
import UpdateBlog from './BlogCrate/UpdateBlog'
import Create from './BlogCrate/Create'
import Nav from './BlogCrate/Nav'
import Profile from './Blog-app(Auth)/Profile'
import Footer from './Blog-app(Auth)/Footer'
import Dashbord from './Dashbord/Dashbord'
import Home from './Blog-app(Auth)/Home'
import Logout from './Blog-app(Auth)/Logout'
import Detail from './Blog-app(Auth)/Deatails'
import About from './Blog-app(Auth)/About'
import Notfound from './Blog-app(Auth)/Notfound'



function App() {
  const location = useLocation();
  const hideNavbarFooter = ["/dashboard", "/login", "/register"].includes(
    location.pathname
  );


  return (
    <>
        {!hideNavbarFooter && <Nav/>}

       <Routes>

       <Route exact path="/register" element={<Regesiter />} />
       <Route exact path="/login" element={<Login/>} />
       <Route exact path="/" element={<Home />} />
       <Route exact path="/editBlog/:id" element={<UpdateBlog/>} />
       <Route exact path="/create" element={<Create/>} />
       <Route exact path="/logout" element={<Logout/>} />
       <Route exact path="/profile" element={<Logout/>} />
       <Route exact path="/details/:id" element={<Detail/>} />
       <Route exact path="/about" element={<About/>} />
       
       <Route exact path="/me" element={<Profile/>} />
       <Route exact path="/dashboard" element={<Dashbord/>} />
       <Route path="*" element={<Notfound/>} />

       </Routes>
     {!hideNavbarFooter && <Footer />}

    </>
  )
}

export default App
