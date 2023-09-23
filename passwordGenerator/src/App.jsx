import { useCallback, useEffect, useState,useRef } from "react"


function App() {
  const [length,setLength]= useState(8)
  const [character,setCharacter]=useState(false)
  const [number,setNumber] = useState(false)
  const [password,setPassword] = useState("")

  const passwordRef = useRef(null)


  const passwordGenerator = useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(number) str+= "0123456789"
    if(character)  str+="!@#$%^&*-_+=[]{}~`"

    for(let i=0;i<length;i++){
      let char= Math.floor(Math.random()*str.length+1);
      pass += str.charAt(char)
    }
    setPassword(pass)

  },[length,character,number,setPassword])

  useEffect(()=>{
    passwordGenerator()
  },[length,number,character,passwordGenerator])

  const copyToClipboard = useCallback(()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
  },[password])

  return (
    <>
    <div className='bg-black min-h-screen'>
    
    
      <h1 className=" text-white text-center text-3xl pt-20" > PassWord Generator</h1>
      <div >
        <input type="text" 
        value={password}
        readOnly
        placeholder="Password"
        ref={passwordRef}
        />
        <button 
        className="text-white  space-x-2"
        onClick={copyToClipboard}
        >Copy</button>
      </div>
      

      <div className="flex flex-row space-x-4 items-center ">
        <div>
          <input type="range"
          min={6}
          max={20}
          value={length}
          onChange={(e)=>{ setLength(e.target.value) }}
          
          />
          <label htmlFor="length" className="text-white">Length: {length}</label>
        </div>
        <div>
          <input type="checkbox"
          defaultChecked={number}
          id="numberAllowed"
          onChange={()=>{ setNumber((e) => !e) }}
          />
          <label htmlFor="NumberInput" className="text-white">Characters</label>
        </div>
        <div>
          <input type="checkbox" 
          defaultChecked={character}
          id="characterAllowed"
          onChange={()=>{
            setCharacter((e)=>!e)
          }}
          />
          <label htmlFor="NumberInput" className="text-white">Number</label>
        </div>
      </div>



    </div>
    </>
  )
}

export default App
