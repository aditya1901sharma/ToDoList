import logo from './logo.svg';
import './App.css';
import InputComponent from './Component/InputComponent';
import TodoComponent from './Component/TodoComponent';
import { useState } from 'react';

function App() {

  const[listoftodos,setlistofTodos] = useState([])

  return (
    <div className="App">
      <h1>To Do list</h1>
      <InputComponent listoftodos={listoftodos} setlistofTodos={setlistofTodos}/>
      <TodoComponent listoftodos={listoftodos} setlistofTodos={setlistofTodos}/>
    </div>
  );
}

export default App;
