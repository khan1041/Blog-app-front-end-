

import React, { useEffect } from 'react'
import { useAuth1 } from '../Context/AuthProvider'
import { Navigate } from 'react-router-dom'
function Logout() {
const{logout}=useAuth1()

useEffect(()=>{

    logout()
},[logout])
return <Navigate to="/login"/>
}

export default Logout


