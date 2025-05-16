/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const IconPath = (props) => {
  const { fill = 'none', stroke = '#A9AEB9' } = props
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill={fill}>
      <rect width="20" height="20" fill="none" />
      <path
        d="M10 13C10 14.6569 8.67701 16 7.01299 16C5.34896 16 4 14.6569 4 13C4 11.3431 5.34896 10 7.01299 10"
        stroke={stroke}
        strokeWidth="1.1"
        strokeLinecap="round"
      />
      <path
        d="M7 12.9999L10.5 9.5M10.5 9.5L10.7628 4.35714L13 2L14 6L18 7L16 9L10.5 9.5Z"
        stroke={stroke}
      />
      <path
        d="M7 13C8.2 11.8 9.5 10.5 10 10"
        stroke={stroke}
        strokeLinecap="round"
      />
      <path
        d="M9.18206 8.5C8.52268 8.17967 7.78232 8 7 8C4.23858 8 2 10.2386 2 13C2 15.7614 4.23858 18 7 18C9.76142 18 12 15.7614 12 13C12 12.1732 11.7993 11.3933 11.4441 10.7064"
        stroke={stroke}
        strokeLinecap="round"
      />
    </svg>
  )
}

export default IconPath
