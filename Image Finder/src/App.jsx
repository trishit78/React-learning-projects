import { useEffect, useState } from 'react'

import Card from './components/Card'


function App() {
  const [images,setImages] = useState([])
  const [text,setText] = useState('');
  console.log(text)
  const apiKey='40483806-cbad6e30e7d0d220f070a6139';

  const handleSubmit=(e)=>{
    e.preventDefault();
    fetchData();

  }

    
    async function fetchData(){
      try {
        const response= await fetch(`https://pixabay.com/api/?key=${apiKey}&q=${text}&image_type=photo&pretty=true`);
        const data = await response.json();
        console.log(data)
        setImages(data.hits)
      } catch (error) {
        console.log(error)
      }
    }

    
  

  return (
    <>
    <div className=' flex justify-center items-start  mt-4' >
<form onSubmit={handleSubmit} >   
    <label htmlFor="voice-search" className="sr-only">Search</label>
    <input type="text" id="voice-search" placeholder='Enter the value' className='border'
          value={text} onChange={(e)=>{setText(e.target.value)}}/>
    <button type="submit" className='bg-blue-400 text-white px-1 py-1  rounded-lg' >Search</button>
</form>
    </div>



    
    <div className='grid grid-cols-3  space-x-6'>
     { console.log(images)}
    {
      images.map((image,index)=>{

        const tag = image.tags
        const t =image.tags.split(',')
        
          

        return (<Card key={index} image={image} />

      )})
    }
     </div>
    </>
  )
}

export default App
