import React from 'react'

import { useEffect,useState } from 'react'
import client,{ databases,DATABASE_ID,COLLECTION_ID_MESSAGES } from '../appwriteConfig'
import { ID,Query,Permission,Role } from 'appwrite'

import {Trash2} from 'react-feather';

import Header from '../components/Header';
import { useAuth } from '../utils/AuthContext';


function Rome() {

  const {user} = useAuth()
 
  const [messages,setMessages] =useState([])
  const [messageBody,setMessageBody] =useState('')

  useEffect(()=>{
    getMessagesId();
     const unsubscribe= client.subscribe(`databases.${DATABASE_ID}.collections.${COLLECTION_ID_MESSAGES}.documents`, response => {
      // Callback will be executed on changes for documents A and all files.
      console.log('REAL TIME: ',response);

      if(response.events.includes(
        "databases.*.collections.*.documents.*.create")){
          console.log('A message was created');
          setMessages(e=>[response.payload,...e])
        }
        if(response.events.includes(
          "databases.*.collections.*.documents.*.delete")){
            console.log('A message was DELETED!!!!');
            setMessages((prev) =>
            prev.filter((message) => message.$id !== response.payload.$id)
          );
          }
          
  });

  return ()=>{
    unsubscribe()
  }
  },[])





  const handleSubmit = async (e) =>{
    e.preventDefault();
    
    let payload = {
      user_id:user.$id,
      username:user.name,
      body:messageBody
    }

    let permissions= [

      Permission.write(Role.user(user.$id))
    ]
    
    let submit = await databases.createDocument(DATABASE_ID,COLLECTION_ID_MESSAGES,ID.unique(),payload,permissions)
    
    console.log(submit)
    // setMessages(e=>[submit,...messages])
    setMessageBody('')
  }




  const getMessagesId = async () =>{
    const response = await databases.listDocuments(DATABASE_ID,
      COLLECTION_ID_MESSAGES,
      [
        Query.orderDesc('$createdAt'),
        Query.limit(1000)
      ]
      )
   // console.log(response)
    setMessages(response.documents)

  }

  const deleteMsg= async (id) =>{
    await databases.deleteDocument(DATABASE_ID,COLLECTION_ID_MESSAGES,id)

    // setMessages(
    //   prev=>messages.filter(message =>
    //     message.$id !== id
    //     )
    // )


  }

//console.log(messages)

  return (
    <main className='container'>

      <Header />
      <div className='room--container' >
  
      <form onSubmit={handleSubmit} className='message--form' >
        <div>
          <textarea 
            required
            maxLength="1000"
            placeholder='Enter a message....'
            onChange={(e)=>{setMessageBody(e.target.value)}}
            value={messageBody}
          ></textarea>

        <div className='send-btn--wrapper'>

          <input className='btn btn--secondary' value="send" type='submit' />
        </div>
        </div>

      </form>

      <div>
        {messages.map(message =>(
          <div key={message.$id} className='message--wrapper'  >

          <div className='message--header' >
          <p>
            {message?.username ? (<span>{message.username}</span>):(<span>Anonymous</span>)}
            <small className='message-timestamp'>{ new Date(message.$createdAt).toLocaleString()   }</small>
          </p>


          {message.$permissions.includes(`delete(\"user:${user.$id}\")`)&&(
            <Trash2 onClick={()=>{deleteMsg(message.$id)}}
            className='delete--btn'
          />
          )}


            
            
          </div>



            <div className='message--body' >
            <span>{message.body}</span>
            </div>
            </div>
        ))}
      </div>

      
      </div>
    </main>
  )
}

export default Rome
