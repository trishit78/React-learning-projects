import { useState } from "react"

function App() {
  
  const [counter,setCounter] = useState(0);

  const addValue=() =>{
      setCounter(counter+1)
  }

  const removeValue =() =>{
    setCounter(counter -1)
  }

  return (
    <>
     <h1>Counter Project</h1>
     <p className="text">Counter value : {counter}</p>

     <button onClick={addValue} className="text" >Add value </button>
     <br />
     <button onClick={removeValue} className="text" >remove value </button>
    </>
  )
}

export default App
