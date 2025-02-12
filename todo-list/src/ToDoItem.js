import React from 'react';

function ToDoItem({ todo, index, deleteTodo }) {
  return (
    <li>
      {todo}
      <button onClick={() => deleteTodo(index)}>Delete</button>
    </li>
  );
}

export default ToDoItem;