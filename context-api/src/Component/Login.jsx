import React, { useContext, useState } from 'react'
import UserContext from '../Context/UserContext'

function Login() {
  
    const [userName,setUserName] =useState('')
    const [password,setPassword] = useState('')


    const {setUser} = useContext(UserContext)

    const handleChange = (e)=>{
        e.preventDefault()
        setUser({userName,password})
    }
    
    return (
    <div>
        <h1>Login</h1>
        <input type="text"
        value = {userName}
        onChange={(e)=>setUserName(e.target.value)}    
        placeholder='userName' />
        {" "}
        <input type="text"
        value = {password}
        onChange={(e)=>setPassword(e.target.value)}
        placeholder='password' />
        <button 
        onSubmit={handleChange}
        >Submit</button>
      
    </div>
  )
}

export default Login
