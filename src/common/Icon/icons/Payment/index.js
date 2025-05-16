/* eslint-disable react/prop-types */
import React from 'react'

const IconPath = (props) => {
  const { fill = '#a6adb6', stroke = 'none' } = props
  return (
    <svg width="20px" height="20px" viewBox="0 0 17.32 16.5">
      <rect width="20" height="20" fill="none" />
      <path
        d="M9.44762 4V12.8065M9.44762 12.8065L12.5905 10.1935M9.44762 12.8065L6.30476 10.1935M4 16H15"
        stroke={stroke}
        strokeWidth="1.1"
        strokeLinecap="round"
      />
    </svg>
  )
}

export default IconPath
