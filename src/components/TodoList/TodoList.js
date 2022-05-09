import './../../App.css';
import React, {useEffect, useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEdit, faLock, faLockOpen, faSave, faTrash} from '@fortawesome/free-solid-svg-icons'

function TodoList({todo, setTodo}) {
  const [edit, setEdit] = useState(null)
  const [value, setValue] = useState('')
  const [filter, setFilter] = useState(todo)

  useEffect( ()=> {
        setFilter(todo)
  }, [todo])

  function todoFilter(status) {
    if(status === 'all') {
      setFilter(todo)
    } else {
      let newTodo = [...todo].filter(item => item.status === status)
      setFilter(newTodo)
    }
  }

  function deleteTodo(id) {
    let newTodo = [...todo].filter(item => item.id!==id)
    setTodo(newTodo)
  }

  function statusTodo(id) {
    let newTodo = [...todo].filter(item =>{
      if(item.id === id) { item.status = !item.status}
      return item
    })
    setTodo(newTodo)
  }

  function editTodo(id, title) {
    setEdit(id)
    setValue(title)
  }

  function saveTodo(id) {
    let newTodo = [...todo].map(item=> {
      if(item.id === id) {
        item.title = value
      }
      return item
    })
    setTodo(newTodo)
    setEdit(null)
  }

  return (
    <>
      <div className="menu-body">
        <div className="menu" onClick={ ()=>todoFilter('all')}>все</div>
        <div className="menu" onClick={ ()=>todoFilter(true)}>открытые</div>
        <div className="menu" onClick={ ()=>todoFilter(false)}>закрытые</div>
      </div>
        {
          filter.map(item => (
              <div className="list-body" key={item.id}>
                {
                  edit === item.id ?
                      <div>
                        <input placeholder='Поменять задачу' value={value} onChange={ (e)=>setValue((e.target.value))}/>
                      </div>
                      :<div className={ item.status ? "" : "close"}>{ item.title }</div>
                }

                {
                  edit === item.id ?
                      <div>
                        <button className="save-todo" onClick={ ()=>saveTodo(item.id)}><FontAwesomeIcon icon={faSave} /></button>
                      </div>
                      :
                      <div className="button-body">
                        <button className="delete-todo" onClick={ ()=>deleteTodo(item.id)}><FontAwesomeIcon icon={faTrash} /></button>
                        <button className="edit-todo" onClick={ ()=>editTodo(item.id, item.title)}><FontAwesomeIcon icon={faEdit} /></button>
                        <button className="status-todo" onClick={ ()=>statusTodo(item.id)}>
                          {
                            item.status ? <FontAwesomeIcon icon={faLockOpen}/> : <FontAwesomeIcon icon={faLock} />
                          }</button>
                      </div>
                }

              </div>
          ))
        }
    </>
  );
}

export default TodoList;
