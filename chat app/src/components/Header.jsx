import React from 'react' 

import { LogOut } from 'react-feather'
import { useAuth } from '../utils/AuthContext'
function Header() {

    const {user,onLogOut} = useAuth();

  return (
    <div id='header--wrapper'>
      {
        user ? (
            <>
                Welcome {user.name}
                <LogOut onClick={onLogOut} className='header--link' />
            </>
        ):(
            <button  >Login</button>
        )
      }
    </div>
  )
}

export default Header 
