import './../../App.css';
import React, {FC,FormEvent, useState} from "react";

interface Props {
    saveTodo(title: string): void;
}

const AddTodo: FC<Props> = ({ saveTodo}) => {
    const [value, setValue] = useState<string>('')

    const handleTodo = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        saveTodo(value);
        setValue("");
    };


  return (
    <div className="add-body">
        <form className="todoForm" onSubmit={handleTodo}>
            <input placeholder='Введите задачу'
                   value={value}
                   onChange={ (e)=>setValue(e.target.value)}/>
            <input type="submit" value="Сохранить" />
        </form>
    </div>
  );
}

export default AddTodo;
