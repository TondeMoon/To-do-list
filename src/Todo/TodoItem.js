import React, { useContext } from 'react';
import '../App.css';
import Context from '../Context';

const TodoItem = ({ todo, index, onChange }) => {
  const { removeTodo } = useContext(Context);
  const classes = [];
  if (todo.completed) {
    classes.push('completed');
  }

  return (
    <li className="table">
      <span className={classes}>
        <input type="checkbox" onChange={() => onChange(todo.id)} />
        &nbsp;
        {index + 1}&nbsp;
        {todo.title}&nbsp;
        <button className="btn" onClick={removeTodo.bind(null, todo.id)}>
          Удалить
        </button>
      </span>
    </li>
  );
};
export default TodoItem;
