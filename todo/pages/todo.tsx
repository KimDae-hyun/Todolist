import { useEffect, useState } from 'react';
import { TodoType } from '../types/TodoTypes';
import axios from 'axios';
import Template from '../components/Template';
import TodoList from '../components/TodoList';
import TodoInsert from '../components/TodoInsert';
import {
  MdAddCircle,
  MdCheckCircle,
  MdCheckBoxOutlineBlank,
} from 'react-icons/md';
import styles from '../styles/Template.module.css';
import { checkServerIdentity } from 'tls';

let nextId = 4;

const END__POINT = 'http://localhost:3000';

export default function Todos() {
  const [insertToggle, setInsertToggle] = useState<boolean>(false);
  const [todos, setTodos] = useState<TodoType | null>(null);
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`${END__POINT}/api/todo`);
        if (res.statusText !== 'OK') throw new Error(`error`);
        setTodos(res.data);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  const onInsertToggle = () => {
    setInsertToggle((prev) => !prev);
  };

  const onInsertTodo = (text) => {
    if (text === '') {
      return alert('할 일을 입력하세요!');
    } else {
      const todo = {
        id: nextId,
        text,
        checked: false,
      };
      todos.Todolist = todos.Todolist.concat(todo);
      setTodos((todos) => todos);
      nextId++;
    }
  };

  const onCheckToggle = (id) => {
    todos.Todolist = todos.Todolist.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setTodos((todos) => todos);
    console.log(todos.Todolist[id - 1].checked);
  };

  if (todos) {
    const { Todolist } = todos;
    return (
      <Template todoLength={Todolist.length}>
        <TodoList Todolist={Todolist} onCheckToggle={onCheckToggle} />
        <div className={styles.addTodoButton} onClick={onInsertToggle}>
          <MdAddCircle />
        </div>
        {insertToggle && (
          <TodoInsert
            onInsertToggle={onInsertToggle}
            onInsertTodo={onInsertTodo}
          />
        )}
      </Template>
    );
  } else {
    <div>Loading...</div>;
  }
}
