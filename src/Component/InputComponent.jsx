import React, { useState } from 'react'

function InputComponent({listoftodos,setlistofTodos}) {

    const [inputval, setInputval] = useState("")
    
    const handleTodo=()=>{
        if (inputval!=''){
            setlistofTodos((previoustot)=>[...previoustot,inputval]);
            setInputval("");
        }

    }
    
  return (
    <div className='input-container'>
          <input type="text" value={inputval} onChange={(e)=>setInputval(e.target.value)}/>
          <div className='add-button'>
            <button onClick={handleTodo}>+</button>
          </div>
    </div>
  )
}

export default InputComponent