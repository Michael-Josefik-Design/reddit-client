import React from 'react'
import styles from '../../assets/styles.module.css';

export default function Header() {
  return (
    <header className={styles.appHeader}>
      <div className={`${styles.appLogo} ${styles.titleSmall}`}>
        <p>Reddit Client</p>
      </div>
    </header>
  )
}
