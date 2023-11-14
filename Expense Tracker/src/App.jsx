import { useState } from 'react'

import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Total from './components/Total'
import History from './components/History'
import Submit from './components/Submit'
import { TransactionProvider } from './components/context'
function App() {

  const [transactions,setTransactions] = useState([]);
  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  const deleteTransaction = (id) =>{
    
    
    setTransactions(transactions.filter((transaction)=> transaction.text!==id))
  };

  return (
    <>
    <TransactionProvider value={{transactions,addTransaction,deleteTransaction}} >

    <Header />
    <Main />
    <Total />
    <History/>
    <Submit/>
     
    </TransactionProvider>
    </>
  )
}

export default App
