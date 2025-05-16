/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const IconPath = ({ fill, stroke = '#A9AEB9' }) => {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <g clipPath="url(#clip0_311_223)">
        <path
          d="M13.5 7L16.5 10.5L13.5 14"
          stroke={stroke}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M8.20426 16.0001L12.6194 4.00008"
          stroke={stroke}
          strokeWidth="1.3"
          strokeLinecap="round"
        />
        <path
          d="M7 14L4 10.5L7 7"
          stroke={stroke}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </g>
    </svg>
  )
}

export default IconPath
