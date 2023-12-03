import React from 'react';
import styles from './Header.module.css';
import { useDarkMode } from '../../context/DarkModeContext';
import { IoMdSunny, IoMdMoon } from 'react-icons/io';

export default function Header({ filter, filters, onFiltered }) {
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <div className={styles.container}>
      <button className={styles.darkMode} onClick={toggleDarkMode}>
        {darkMode ? <IoMdMoon /> : <IoMdSunny />}
      </button>
      <ul className={styles.filters}>
        {filters.map((value, index) => (
          <li key={index}>
            <button className={styles.filter} onClick={() => onFiltered(value)}>
              {value}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
