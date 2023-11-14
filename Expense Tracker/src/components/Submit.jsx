import React, { useState } from 'react'
import { useTransaction } from './context';

function Submit() {

    const [text,setText]=useState('');
    const [amount,setAmount] = useState(0);
    const {addTransaction,transactions} = useTransaction()

    function handleSubmit(e){
        e.preventDefault();
        const newTransaction = {
            id: new Date().toISOString(),
            text,
            amount:+amount,
          };

        
        addTransaction({text,amount})
        setText('');
        setAmount(0);
    }
    console.log(transactions)
    


  return (
    
    <div className='w-1/4 mx-auto '>
    <h2 className='text-xl text-bold mt-2'>Add New Transaction</h2>
    <hr className= "w-1/2 mx-auto h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
      <form className='flex flex-col space-y-4 ' onSubmit={handleSubmit} >
        <label className='text-xl text-bold'>
          Text:
        </label>
        <input className='border-inherit' type="text" placeholder='Enter the Text' value={text} onChange={(e) =>{setText(e.target.value)}} />

        <label className='text-xl text-bold'>
          Amount
        </label>
        <input type="number" placeholder='Enter the number'  value={amount} onChange={(e)=>{
            setAmount(e.target.value)
        }}/>
        <input className='bg-purple-600 p-2 text-white' type="submit" value="Add Transaction" />
     
      </form>
    </div>
    
  )
}

export default Submit
