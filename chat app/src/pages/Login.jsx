import React from 'react' 

import { useEffect } from 'react'
import { useAuth } from '../utils/AuthContext'

import {useNavigate,Link} from 'react-router-dom'
import { useState } from 'react';


function Login() {

    const {user,handleUserLogin} = useAuth();
    const navigate= useNavigate();


    const [credentials,setCredentials] = useState({
        
        email:'',
        password:''
})



    useEffect(()=>{
        if(user){
            navigate('/')
        }
    },[])


    const handleChange=(e) =>{
       

        let name=e.target.name
        let value=e.target.value

        setCredentials({...credentials,[name]:value})


        console.log(credentials)
    }




    return (
    <div className='auth--container'>
        <div className='form--wrapper'>

        <form onSubmit={(e)=>{handleUserLogin(e,credentials)}}> 
            <div className='field--wrapper'>
                <label >Email:</label>
                <input type="email" name="email" required placeholder='Enter your email.... ' value={credentials.email}   onChange={handleChange}    />

                <label >Password:</label>

                <input type="password" name="password" required placeholder='Enter your password.... ' value={credentials.password}   onChange={handleChange}    />


            </div>

            <div className='field--wrapper'>
                <input type="submit" value='Login' className='btn btn--lg  btn--main' />

            </div>
        </form>


        <p>Don't have a account? Register<Link to='/register'>here</Link></p>
        </div>
      
    </div>
  )
}

export default Login
