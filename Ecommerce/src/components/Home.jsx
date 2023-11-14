import React from 'react';
import { productArray } from './productStore';
import ProductCard from './productCard';

function Home() {
  return (
    <div className='grid grid-cols-3 grid-flow-row gap-4 px-8 py-8'>
      {productArray.map((product, idx) => (
        <div className='shadow-lg text-center rounded' key={idx}>
          <ProductCard key={idx} product={product} />
         
        </div>
      ))}
    </div>
  );
}

export default Home;
