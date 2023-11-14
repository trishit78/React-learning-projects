import React from 'react'

function Card({image}) {
    console.log(image)
    const tags =image.tags.split(',')
    console.log(tags)
  return (
      <div className='flex flex-col justify-center items-center  shadow-lg mt-4 mb-4 ' >
      <img src={image.webformatURL} alt="random image"
      className='h-80  w-72 items-center'
      />
      <div>
        <h3 className='mt-2 text-purple-600 text-xl text-bold font-semibold'>Image by {image.user}</h3>
        <ul className='flex flex-col'>
        <li>
          <strong>views:</strong>
          {image.views}
          </li>
          <li>
          <strong>downloads:</strong>
          {image.downloads}
          </li>
          <li>
          <strong>likes:</strong>
          {image.likes}
          </li>
          
        </ul>
      </div>
      <div className='space-x-4 mb-2'>
       
        {tags.map((tag,index)=>(
            <span key={index} className='inline-block mt-2 bg-blue-600 rounded-full text-sm font-semibold px-2 py-1 text-white'>#{tag}</span>
        ))}
      </div>
     </div>
    
  )
}

export default Card
