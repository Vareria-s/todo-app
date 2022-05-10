import './../../App.css';
import React from "react";



function AddTodo({value, setValue, saveTodo}) {



  return (
    <div className="add-body">
        <input placeholder='Введите задачу' maxLength="20" value={value} onChange={ (e)=>setValue(e.target.value)}/>
        <button onClick={saveTodo}>Сохранить</button>
    </div>
  );
}

export default AddTodo;
