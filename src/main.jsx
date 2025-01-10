
import App from './App.jsx'
import './index.css'

import { Provider } from 'react-redux'
//import { store } from './app/store.js'
//import { ToastContainer} from 'react-toastify';
import { BrowserRouter } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify'
import { AuthProvider1 } from './Context/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
   <StrictMode>
  {/* <Provider store={store}>  */}
 <AuthProvider1> 
<App />

 </AuthProvider1> 
 {/* </Provider> */}
<ToastContainer/>
  </StrictMode>
  </BrowserRouter>
  )
