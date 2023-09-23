import React from "react"
import Header from "./Components/Header/Header"
import Footer from "./Components/Footer/Footer"
import Home from "./Components/Home/Home"
function App() {
 
  return (
    <>
     {/* <div className='bg-black min-h-screen'>
      <h1 className=' text-white text-3xl text-center justify-center' >Hello</h1>
     </div> */}

     <Header />
     <Home />
     <Footer />
    </>
  )
}

export default App
