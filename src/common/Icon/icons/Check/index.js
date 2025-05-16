/* eslint-disable react/prop-types */
import React from 'react'

const IconPath = (props) => {
  const { stroke = 'white' } = props
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M6 10.5L9.5 13.5L15 6"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default IconPath
