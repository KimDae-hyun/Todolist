import React from 'react';
import { TodoTypes } from '../types/TodoTypes';
import { MdCheckCircle, MdCheckBoxOutlineBlank } from 'react-icons/md';
import styles from '../styles/TodoItem.module.css';

type TextType = {
  todo: TodoTypes;
  onCheckToggle;
};

const TodoItem = ({ todo, onCheckToggle }: TextType) => {
  const { id, text, checked } = todo;

  console.log(id, checked);
  return (
    <div className={styles.TodoItem}>
      <div
        className={`${styles.content} ${checked ? `${styles.checked}` : ''}`}
      >
        {checked ? (
          <MdCheckCircle
            onClick={() => {
              onCheckToggle(id);
            }}
          />
        ) : (
          <MdCheckBoxOutlineBlank
            onClick={() => {
              onCheckToggle(id);
            }}
          />
        )}
        <div className={styles.text}>{text}</div>
      </div>
    </div>
  );
};

export default TodoItem;
