import React from 'react';
import styles from '../styles/Template.module.css';

const Template = ({ children, todoLength }) => {
  return (
    <div className={styles.Template}>
      <div className={styles.title}>{`오늘의 할일 (${todoLength})`}</div>
      <div>{children}</div>
    </div>
  );
};

export default Template;
