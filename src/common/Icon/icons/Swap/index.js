/* eslint-disable react/prop-types */
import React from 'react'

const IconPath = (props) => {
  const { stroke = '#A9AEB9' } = props
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path
        d="M13.1765 4L16.0001 6.75283L13.1765 9.50566"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.2941 6.75269H8.23529"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.82354 16L4 13.2472L6.82354 10.4943"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.70593 13.2473L11.7648 13.2473"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default IconPath
