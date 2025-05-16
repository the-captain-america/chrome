/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const IconPath = (props) => {
  const { stroke = '#A9AEB9' } = props
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 10H16"
        stroke={stroke}
        strokeWidth="1.1"
        strokeLinecap="round"
      />
      <path
        d="M10 16L10 4"
        stroke={stroke}
        strokeWidth="1.1"
        strokeLinecap="round"
      />
    </svg>
  )
}

export default IconPath
