import React from 'react'
import styles from '../../assets/styles.module.css';
import { FilterIcon, SearchIcon } from '../Icons/Icons';

export default function SearchBar({ id, name, value, handleChange }) {
  return (
    <div>
      <div className={styles.searchFieldArea}>
        <div className={styles.searchIcon}>
          <SearchIcon size='small' />
        </div>
        <input className={styles.searchInput} value={value} onChange={handleChange} name={name && name} id={id && id} placeholder='Search...' data-testid="search-field" />
      </div>
    </div>
  )
}
