import React from 'react';
import { TodoTypes } from '../types/TodoTypes';
import TodoItem from './TodoItem';
import styles from '../styles/TodoList.module.css';

type TodoType = {
  Todolist: TodoTypes[];
  onCheckToggle;
};

const TodoList = ({ Todolist, onCheckToggle }: TodoType) => {
  return (
    <div>
      <div className={styles.TodoList}>
        {Todolist.map((item) => (
          <TodoItem key={item.id} todo={item} onCheckToggle={onCheckToggle} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
