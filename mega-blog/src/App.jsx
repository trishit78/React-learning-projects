import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import conf from './conf/conf'
function App() {

  console.log(conf.appwriteProjectId);
  return (
    <>
      <h1>Appwrite Blog</h1>
    </>
  )
}

export default App
