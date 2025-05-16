/* eslint-disable react/prop-types */
import React from 'react'

const IconPath = (props) => {
  const { fill = 'none', stroke = '#a6adb7' } = props
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill={fill}>
      <rect
        x="2.75"
        y="2.75"
        width="14.5"
        height="14.5"
        rx="1.25"
        stroke={stroke}
        strokeWidth="1.5"
      />
      <path d="M9 3.5V17" stroke={stroke} strokeWidth="1.5" />
      <path
        d="M5 6H6.5"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 9H6.5"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 12H5.5"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default IconPath
