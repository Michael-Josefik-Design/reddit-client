import React from 'react'
import styles from '../../assets/styles.module.css'

export default function Tag({ text }) {
  return (
    <div className={`${styles.tag} ${styles.labelXSmall}`}>
      {text ? text : 'Category'}
      <p>x</p>
    </div>
  )
}
