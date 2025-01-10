


import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { useAuth1 } from '../Context/AuthProvider';
function Nav() {
const{user}=useAuth1()
  const [show, setShow] = useState(false);




  return (
    <div>
       <nav className=" shadow-lg px-4 py-2">
        <div className="flex items-center justify-between container mx-auto">
          <div className="font-semibold text-xl">
          Our<span className="text-red-500">Blog</span>
          </div>
          {/* Desktop */}
          <div className=" mx-6">
            <ul className="hidden md:flex space-x-6">
              <Link to="/" className="hover:text-blue-500">
                HOME
              </Link>
              <Link to="/create" className="hover:text-blue-500">
                CREATE
              </Link>
             
              <Link to="/about" className="hover:text-blue-500">
                ABOUT
              </Link>
           

      <div>
     {user? <Link to="/logout" className="hover:text-blue-500">
                LOGOUT
              </Link> :<Link to="/login" className="hover:text-blue-500">
                Login
                </Link>}

            
      </div>
        
        <div>
       {user?<Link to="/dashboard" className="hover:text-blue-500 bg-red-700 w-9 h-14 text-2xl text-white rounded">
             Dashboard
          </Link>:""}
               </div>
            </ul>
      
            <div className="sm:hidden" onClick={() => setShow(!show)}>
              {show ? <IoCloseSharp size={24} /> : <AiOutlineMenu size={24} />}
            </div>


            {show && (
          <div className="bg-white w-full ">
            <ul className="flex flex-col lg:hidden">
          
<Link to="/">HOME</Link>  
<Link to="/create">Create</Link>  
<Link to="/about">About</Link>  

{user? <Link to="/logout" className="hover:text-blue-500">
                logout
              </Link> :<Link to="/login" className="hover:text-blue-500">
                LOGIN
                </Link>}

                <div>
       {user?<Link to="/dashboard" className="hover:text-blue-500 bg-red-700 w-9 h-14 text-2xl text-white rounded">
             Dashboard
          </Link>:""}
               </div>

              {/* <Link
                to="/"
                onClick={() => setShow(!show)}
                smooth="true"
                duration={500}
                offset={-70}
                activeClass="active"
                className="hover:text-blue-500"
              >
                HOME
              </Link>
              <Link
                to="/blogs"
                onClick={() => setShow(!show)}
                smooth="true"
                duration={500}
                offset={-70}
                activeClass="active"
                className="hover:text-blue-500"
              >
                BLOGS
              </Link>
              <Link
                to="/creators"
                onClick={() => setShow(!show)}
                smooth="true"
                duration={500}
                offset={-70}
                activeClass="active"
                className="hover:text-blue-500"
              >
                CREATORS
              </Link>
              <Link
                to="/about"
                onClick={() => setShow(!show)}
                smooth="true"
                duration={500}
                offset={-70}
                activeClass="active"
                className="hover:text-blue-500"
              >
                ABOUT
              </Link>
              <Link
                to="/contact"
                onClick={() => setShow(!show)}
                smooth="true"
                duration={500}
                offset={-70}
                activeClass="active"
                className="hover:text-blue-500"
              >
                CONTACT
              </Link>
            </ul> */}
            </ul>
          </div>
        )}
           
    
          </div>
          </div>

         </nav>
         </div>
  )
}

export default Nav

