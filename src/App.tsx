import './App.css';
import React, {useState} from "react";
import Header from "./components/Header/Header";
import AddTodo from "./components/AddTodo/AddTodo";
import TodoList from "./components/TodoList/TodoList";
import ITodo from './Todointerface/Todointerface'


function App() {
    const [todo, setTodo]= useState<ITodo[]>([]);


    const saveTodo = (title: string): void => {
        if (!title) {

            return;
        }
        const data: ITodo = {
            id: todo.length < 1 ? 1 : todo[todo.length - 1].id + 1,
            title: title,
            status: true,
        };
        setTodo([...todo, data]);
    };

  return (
    <div className="App">
      <Header/>
      <AddTodo saveTodo={saveTodo}/>
      <TodoList todo={todo} setTodo={setTodo}/>
    </div>
  );
}

export default App;
