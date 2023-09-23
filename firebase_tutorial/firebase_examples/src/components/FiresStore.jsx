import React,{useEffect, useState} from 'react';
import { collection, getDocs } from "firebase/firestore";
import {db} from "../firebase";
function FiresStore() {

    const [user,setUser] = useState({});

    useEffect(()=>{
      getDocs(colllection(db,"user")).then((snapshot) =>{
          snapshot.forEach((doc) => {
              console.log(`${doc.id} => ${doc.data()}`);
            });
      })
  },[]);







  return (

    <>
    <h2>FireStore</h2>
    
    {Object.keys(user).length>0?
    
    <>
    <div>user is present</div>
    <div>Name: {user.name} </div>
    <div>Address: {user.address}</div>
    <div>Age: {user.age}</div>

    </>
    
    
    :<div>No data present</div>}
    
    </>
    
  )
}

export default FiresStore
