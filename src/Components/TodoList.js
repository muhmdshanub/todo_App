// TodoList.js
import React from 'react';

const TodoList = ({ todoList, handleDelete, handleEdit, editId }) => {
  return (
    <ul className='all-todos'>
      {todoList.map((todo) => (
        <li className={`single-todo ${editId === todo.id ? 'highlight' : ''}`} key={todo.id}>
          <h2 className='todo-text'>{todo.name}</h2>
          <button className='edit-button' onClick={() => handleEdit(todo)}>Edit</button>
          <button className='delete-button' onClick={() => handleDelete(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
