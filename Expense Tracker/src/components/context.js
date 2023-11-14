import { useContext,createContext } from "react";


 export const  TransactionContext =  createContext({
    transactions:[{
        id:1,
        text:"books",
        amount:54
    }],
    addTransaction : (text,amount) =>{},
    deleteTransaction:(text) =>{}

});



export const useTransaction = () => {
    return useContext(TransactionContext)
}

export const TransactionProvider = TransactionContext.Provider

