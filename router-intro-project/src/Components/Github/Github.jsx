import React from 'react'
import { useLoaderData } from 'react-router'

function Github() {
  const data = useLoaderData()
    return (
    <div className='text-center bg-gray-700 text-white text-3xl pt-4 pb-4'>
      GitHub:{data.followers}
      <div className='w-96 flex items-center justify-center h-screen mx-auto ml-auto'>
      <img src={data.avatar_url} alt="github-pic" />
      </div>
    </div>
  )
}

export default Github

export const info = async () =>{
    const response = await fetch('https://api.github.com/users/trishit78')
    return response.json()
}
