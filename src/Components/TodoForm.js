// TodoForm.js
import React from 'react';

const TodoForm = ({ todo, editId, handleSubmit, handleInput, cancelEdit }) => {
  return (
    <form className='todo-form' onSubmit={handleSubmit}>
      <input type='text' value={todo} onChange={handleInput} />
      <button type='submit'>{editId ? "Update" : "Add"}</button>
      {editId && <button onClick={cancelEdit}>Cancel</button>}
    </form>
  );
};

export default TodoForm;
