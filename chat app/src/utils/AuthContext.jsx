import { useContext,createContext,useState,useEffect } from "react";
import {useNavigate} from 'react-router-dom'
import { account } from "../appwriteConfig";
import {ID} from 'appwrite'
import Register from "../pages/Register";

export const AuthContext = createContext();


export const AuthProvider  = ({children}) =>{

    const [loading,setLoading] =useState(true);
    const [user,setUser] =useState(null);

    const navigate = useNavigate();

    useEffect(()=>{
        handleUserOnLoad()
    },[])


    const handleUserOnLoad = async () =>{
        
        try {
            const accountDetails = await account.get();
            console.log(accountDetails)
            setUser(accountDetails)    
        } catch (error) {
            console.log(error)
        }

        setLoading(false);
        
    }


    const handleUserLogin= async (e,credentials)=>{
        e.preventDefault();

        try {
            const response = await account.createEmailSession(credentials.email,credentials.password);

            console.log(response)

            const accountDetails =await account.get();
            setUser(accountDetails)

            navigate('/')

        } catch (error) {
            console.log(error);
        }
    }


    const onLogOut = async () =>{
        await account.deleteSessions('current');
        setUser(null)
    }


    const handleUserRegister = async(e,credentials) =>{
        e.preventDefault()

        if(credentials.password1 !== credentials.password2){
            alert('Passwords do not match')
            return
        }

        try {
            let response = await account.create(
            ID.unique(),
            credentials.email,
            credentials.password1,
            credentials.name                
                )
            await account.createEmailSession(credentials.email,credentials.password1)
            const accountDetails =await account.get();
            setUser(accountDetails);
            navigate('/')


                console.log(Register,response)
        } catch (error) {
            console.log(error)
        }
    }

    const contextData = {
        user,
        handleUserLogin,
        onLogOut,
        handleUserRegister
    }


    return <AuthContext.Provider value={contextData}>
        {loading? <p>Loading......</p> :  children            }
    </AuthContext.Provider>
}
  export const useAuth =()=> { return useContext(AuthContext)}
export default AuthContext;