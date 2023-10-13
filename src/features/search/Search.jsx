import React, { useState } from 'react';
import Tag from '../../components/Tag/Tag';
import styles from '../../assets/styles.module.css';
import SearchBar from '../../components/SearchBar/SearchBar';

export default function Search() {

  const [searchTerm, setSearchTerm] = useState('')

  const handleChange = e => {
    setSearchTerm(e.currentTarget.value)
  }

  return (
    <div className={styles.searchContainer}>
      <SearchBar value={searchTerm} handleChange={handleChange} />
      <div className={styles.tagTray}>
        <Tag />
        <Tag />
        <Tag />
        <Tag />
        <Tag />
        <Tag />
        <Tag />
        <Tag />
        <Tag />
        <Tag />
        <Tag />
      </div>
    </div>
  )
}
