import React from 'react';
import TodoItem from './TodoItem';
import '../App.css';

const TodoList = (props) => {
  return (
    <ul className="list">
      {props.todos.map((todo, index) => {
        return (
          <TodoItem
            todo={todo}
            key={todo.id}
            index={index}
            onChange={props.onToggle}
          />
        );
      })}
    </ul>
  );
};
export default TodoList;
