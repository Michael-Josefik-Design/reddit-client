import React from 'react'

export const FilterIcon = () => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" fill='none' xmlns="http://www.w3.org/2000/svg">
      <rect x="2.5" y="4.5" width="19" height="3" rx="1.5" />
      <rect x="5.5" y="10.5" width="13" height="3" rx="1.5" />
      <rect x="8.5" y="16.5" width="7" height="3" rx="1.5" />
    </svg>
  )
}

export const SearchIcon = ({ size }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size ? '16px' : '24px'} height={size ? '16px' : '24px'} viewBox="0 0 24 24" fill="none">
      <path d="M13.5516 15.6729L13.2823 15.4036L12.9511 15.5916C11.9331 16.1697 10.7559 16.5 9.5 16.5C5.63401 16.5 2.5 13.366 2.5 9.5C2.5 5.63401 5.63401 2.5 9.5 2.5C13.366 2.5 16.5 5.63401 16.5 9.5C16.5 10.7559 16.1697 11.9331 15.5916 12.9511L15.4036 13.2823L15.6729 13.5516L20.2031 18.0818C20.7889 18.6676 20.7889 19.6173 20.2031 20.2031C19.6173 20.7889 18.6676 20.7889 18.0818 20.2031L13.5516 15.6729ZM9.5 13.5C11.7091 13.5 13.5 11.7091 13.5 9.5C13.5 7.29086 11.7091 5.5 9.5 5.5C7.29086 5.5 5.5 7.29086 5.5 9.5C5.5 11.7091 7.29086 13.5 9.5 13.5Z" stroke="currentColor"/>
    </svg>
  )
}
