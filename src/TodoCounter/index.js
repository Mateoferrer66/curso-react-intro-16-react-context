import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

function TodoCounter() {
  const {
    completedTodos,
    totalTodos,
  } = React.useContext(TodoContext);


  return (
    <>
      {totalTodos === completedTodos && (
        <h2 className="title">¡Felicidades, completaste todos las tareas!</h2>
      )}
      {totalTodos !== completedTodos && (
        <h2 className="title">
          <span> {completedTodos} </span>
          Tareas completadas de
          <span> {totalTodos} </span>
        </h2>
      )}
    </>
  );
}

export { TodoCounter };
