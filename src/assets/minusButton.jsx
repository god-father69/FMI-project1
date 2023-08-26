import React from 'react';
import styles from './minusButton.module.css';

const minusButton = ({ backgroundImage }) => {
  return (
    <button className={styles.upbtn1}>
        <div
          className={styles.uploadIcon1}
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
    </button>
  );
};

export default minusButton;
