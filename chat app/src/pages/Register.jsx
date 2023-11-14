import React from 'react'
import {Link} from 'react-router-dom'
import { useState } from 'react' 
import { useAuth } from '../utils/AuthContext'
function Register() {

    const {handleUserRegister} = useAuth();

    const [credentials,setCredentials] = useState({
        name:'',
        email:'',
        password1:'',
        password2:''
})
const handleChange=(e) =>{
    let name=e.target.name
    let value=e.target.value

    setCredentials({...credentials,[name]:value})
}

  return (
    <div className='auth--container'>
        <div className='form--wrapper'>

        <form onSubmit={(e)=>{handleUserRegister(e,credentials)}}> 
            <div className='field--wrapper'>

            <label >Name:</label>
                <input type="text" name="name" required placeholder='Enter your name.... ' value={credentials.name}   onChange={handleChange}    />

                <label >Email:</label>
                <input type="email" name="email" required placeholder='Enter your email.... ' value={credentials.email}   onChange={handleChange}    />

                <label >Password:</label>

                <input type="password" name="password1" required placeholder='Enter your password.... ' value={credentials.password1}   onChange={handleChange}    />
                <label >Confirm Password:</label>

                <input type="password" name="password2" required placeholder='Confirm your password.... ' value={credentials.password2}   onChange={handleChange}    />


            </div>

            <div className='field--wrapper'>
                <input type="submit" value='Login' className='btn btn--lg  btn--main' />

            </div>
        </form>


        <p>Already have a account? Login <Link to='/login'>here</Link></p>
        </div>
      
    </div>
  )
}

export default Register
