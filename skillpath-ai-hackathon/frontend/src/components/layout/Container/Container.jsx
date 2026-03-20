import React from 'react';
import { Sidebar } from '../Sidebar/Sidebar';
import { Header } from '../Header/Header';
import styles from './Container.module.css';

export const Container = ({ children }) => {
  return (
    <div className={styles.appWrapper}>
      <Sidebar />
      <div className={styles.mainContent}>
        <Header />
        <main className={styles.pageContainer}>
          <div className={styles.pageInner}>
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};
