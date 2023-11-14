import React from 'react'
import { useTransaction } from './context'
function Main() {

  const {transactions} = useTransaction();
  let income=transactions.reduce((acc,transaction)=>{
     
      return acc+parseFloat(transaction.amount);
  },0)

  return (
    <div className='mt-2 ml-auto'>
    <h3>Your Balance</h3>
    <span  className='text-3xl'>${income}</span>
  </div>
  )
}

export default Main
