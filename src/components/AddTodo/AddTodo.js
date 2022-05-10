import './../../App.css';
import React, {useState} from "react";
import { v4 as uuidv4 } from 'uuid';



function AddTodo({todo, setTodo}) {
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
    <div className="add-body">
        <input placeholder='Введите задачу' maxLength="20" value={value} onChange={ (e)=>setValue(e.target.value)}/>
        <button onClick={saveTodo}>Сохранить</button>
    </div>
  );
}

export default AddTodo;
