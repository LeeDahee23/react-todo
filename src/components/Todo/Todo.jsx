import React from 'react';
import { BsFillTrashFill } from 'react-icons/bs';
import styles from './Todo.module.css';

export default function Todo({ todo, onUpdate, onDelete }) {
  const { id, text, status } = todo;
  const handleCheck = (e) => {
    const status = e.target.checked ? 'completed' : 'active';
    onUpdate({ ...todo, status });
  };
  const handleDelete = () => {
    onDelete(todo);
  };
  return (
    <li className={styles.todo}>
      <input
        className={styles.checkbox}
        type="checkbox"
        id={id}
        checked={status === 'completed'}
        onChange={handleCheck}
      />
      <label className={styles.text} htmlFor={id}>
        {text}
      </label>
      <button className={styles.delete} onClick={handleDelete}>
        <BsFillTrashFill />
      </button>
    </li>
  );
}
