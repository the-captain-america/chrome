/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const IconPath = (props) => {
  const { stroke = '#A9AEB9', fill = 'none' } = props
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path
        d="M18 7.28571V3M18 3H13.6364M18 3L12 9"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 11.8235C18 14.0324 18 14.6174 18 16.6765C18 17.5588 17 18 16.5 18C16.5 18 4.5 18 3.5 18C2.5 18 2 17.1177 2 16.2353C2 15.3529 2 6.52941 2 4.76471C2 3 3 3 5 3C7 3 8.5 3 8.5 3"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default IconPath
