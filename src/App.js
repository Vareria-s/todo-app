import './App.css';
import React, {useState} from "react";
import Header from "./components/Header/Header";
import AddTodo from "./components/AddTodo/AddTodo";
import TodoList from "./components/TodoList/TodoList";
import {v4 as uuidv4} from "uuid";

function App() {
    const [todo, setTodo]= useState([])
    const [value, setValue] = useState('')

    function saveTodo() {
        if(value) {
            setTodo(
                [...todo,{
                    id: uuidv4(),
                    title: value,
                    status: true,
                }]
            )
            setValue('')
        }
    }

  return (
    <div className="App">
      <Header/>
      <AddTodo value={value} setValue={setValue} saveTodo={saveTodo}/>
      <TodoList todo={todo} setTodo={setTodo}/>
    </div>
  );
}

export default App;
