import React from 'react'
import { useTransaction } from './context';

function Total() {

    const {transactions} = useTransaction();
    let income=0;
    let expense=0;

    transactions.forEach(transaction =>{
        if(transaction.amount>0){
            income+=parseFloat(transaction.amount);
        }else{
            expense+=parseFloat(transaction.amount);
        }
    })
    
  return (
   
    <div className=' flex flex-row items-center justify-center space-x-4  '>
    <div className='shadow-xl p-2'>
      <h2 className='mt-2'>Income</h2>
      <span className='text-2xl text-green-600'>{income}</span>
    </div>
    <div className='shadow-xl p-2'>
      <h2 className='mt-2'>Expense</h2>
      <span className='text-2xl text-red-600'>{Math.abs(expense)}</span>
    </div>
    </div>
  )
}

export default Total
