import React, { useState } from 'react';
import styles from '../styles/TodoInsert.module.css';
import {
  MdAddCircle,
  MdCheckCircle,
  MdCheckBoxOutlineBlank,
} from 'react-icons/md';

const TodoInsert = ({ onInsertToggle, onInsertTodo }) => {
  const [value, setValue] = useState<string>('');
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onInsertTodo(value);
    setValue('');
    onInsertToggle();
  };

  return (
    <div>
      <div className={styles.background} onClick={onInsertToggle}></div>
      <form className={styles.form} onSubmit={onSubmit}>
        <input
          className={styles.input}
          placeholder='please type'
          value={value}
          onChange={onChange}
        ></input>
        <button className={styles.button} type='submit'>
          <MdAddCircle />
        </button>
      </form>
    </div>
  );
};

export default TodoInsert;
