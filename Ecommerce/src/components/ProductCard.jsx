import React from 'react'

function ProductCard(props) {

    
const product = props.product

  return (
    <>
      

            <h1 className='text-2xl text-bold'>{product.title}</h1>
          
            <h2 className='text-2xl text-bold'>{product.price}</h2>
            <button className='bg-violet-500 text-white px-2 py-2 rounded mb-2'>Add to cart</button>
       

    </>
  )
}

export default ProductCard
