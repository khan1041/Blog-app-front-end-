import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'

import { AuthProvider1 } from './Context/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
   <StrictMode>
 <AuthProvider1> 
<App />

 </AuthProvider1> 
  </StrictMode>
  </BrowserRouter>
  )
