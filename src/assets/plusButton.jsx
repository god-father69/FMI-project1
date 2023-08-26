import React from 'react';
import styles from './UploadButton.module.css';

const plusButton = ({ backgroundImage }) => {
  return (
    <button className={styles.upbtn}>
        <div
          className={styles.uploadIcon}
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
    </button>
  );
};

export default plusButton;
