import './App.css'
import Navbar from './components/Navbar'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import Success from './components/Success'
import Fail from './components/Fail'

import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  

  return (
    <>
   
    <Navbar/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/sucess" element={<Success/>} />
        <Route path="/fail" element={<Fail/>} />
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
