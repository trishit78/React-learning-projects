
import Rome from './pages/Rome'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './pages/Login'
import PrivateRoutes from './components/PrivateRoutes'
import { AuthProvider } from './utils/AuthContext'
import Register from './pages/Register'



function App() {
  
  return (
    <>
    <BrowserRouter>
    <AuthProvider>
    <Routes>
    <Route path='/login' element={<Login/>} />
    <Route path='/register' element={<Register/>} />

    <Route  element={<PrivateRoutes/>}>

      <Route path='/' element={<Rome/>} />

    </Route>

    </Routes>
    </AuthProvider>
    </BrowserRouter>
    </>
  )
}

export default App
