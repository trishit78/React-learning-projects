import React from 'react'
import { useTransaction } from './context'

function History() {
    const {transactions,deleteTransaction} = useTransaction()

    
 
    return (

    <div >
    <h2 className='text-xl text-bold mt-2'>History</h2>
    <hr className= "w-1/4 mx-auto h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
    <ul>
        {transactions.map((transaction,index)=>(
            <li key={index} className="relative group flex items-center">
            <div className='mx-auto w-1/4  space-x-32 shadow-md p-2'>
              <span>{transaction.text}</span>
              <span className={transaction.amount<0 ? 'minus' : 'plus'} >${transaction.amount}</span>
              <button className="
               hidden group-hover:block ml-auto p-2
               rounded"   onClick={()=>deleteTransaction(transaction.text)}       >❌</button>
            </div>
          </li>
        ))}











      
      {/* <li className="relative group flex items-center">
        <div className='mx-auto w-1/4  space-x-32 shadow-md p-2'>
          <span>Cash</span>
          <span className='plus' >$300</span>
          <button className="
           hidden group-hover:block ml-auto p-2 bg-red-600 text-white text-xs
           rounded
           ">X</button>
        </div>
      </li> */}
    </ul>
  </div>
  )
}

export default History
