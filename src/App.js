import React, { useState,useEffect } from 'react';
import TodoForm from './Components/TodoForm';
import TodoList from './Components/TodoList';
import './App.css';

const App = () => {

  const [todo, setTodo] = useState("");
  const [todoList,setTodoList] = useState([]);
  const [editId, setEditId] = useState("");


  

const handleSubmit = (e) =>{

  e.preventDefault();

  if(editId){
    
    const updatedTodoList = todoList.map((t) =>{
      return (t.id === editId ? {id:t.id,name:todo}  : t)
    })

    setTodoList([...updatedTodoList]);
    setEditId("");
    setTodo("")
    return;
  }


  if(todo.trim() !== "" ){
    setTodoList([{id:`${todo}-${Date.now()}`,name:todo},...todoList])
  }
  setTodo("");
}

const handleInput =(e) =>{
  setTodo(e.target.value)
}

const handleDelete = (id) =>{
  const updatedTodoList = todoList.filter((todo) =>{
    return todo.id !== id;
  })
  setTodoList([...updatedTodoList])
}


const handleEdit = (todo) =>{
  setTodo(todo.name);
  setEditId(todo.id);
}

const cancelEdit = ()=>{
  setEditId("");
  setTodo("");
}

  return (
    <div className='app'>
      <div className='container'>
        <h1 className='heading'>Todo App</h1>
        <TodoForm
          todo={todo}
          editId={editId}
          handleSubmit={handleSubmit}
          handleInput={handleInput}
          cancelEdit={cancelEdit}
        />
        <TodoList
          todoList={todoList}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          editId={editId}
        />

        
        
      </div>
    </div>
  )
}

export default App