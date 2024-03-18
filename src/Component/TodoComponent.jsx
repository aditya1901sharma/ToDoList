import React from 'react'

function TodoComponent({listoftodos,setlistofTodos}) {

  const del=(indexToDelete)=>{

    const newArray=listoftodos.filter((_, index) => index !== indexToDelete);
    setlistofTodos(newArray);

    console.log(listoftodos);
    
  }

  return (
    <div className='todo-container'>
      {listoftodos.map((current,index)=>{
        return(
          <div className='todo'>
            <p> {current}
                <input type="checkbox" className='check' />
                <button className='del-button' onClick={()=>del(index)}>Delete</button>
            </p>
          </div>
        )
      })}
        
    </div>
  )
}

export default TodoComponent