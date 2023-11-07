
import React from 'react';
import styles from './Header.module.scss';
import { Button } from '@mui/material';

// creamos un componente funcional para el header con typescript para ser usado en pages

export const HeaderComponent = () => {
  return (
    <div className={styles.header}>
      <img src="../statics/header/rick-logo.png" alt=""/>

<Button  className={styles.btn}>

  989993602</Button>
    </div>
  );
};
