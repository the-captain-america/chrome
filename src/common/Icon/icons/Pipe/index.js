/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const IconPath = (props) => {
  const { stroke = '#A9AEB9' } = props
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <rect x="1.5" y="1.5" width="6" height="2" rx="0.5" stroke={stroke} />
      <rect
        x="7.5"
        y="18.5"
        width="6"
        height="2"
        rx="0.5"
        transform="rotate(-90 7.5 18.5)"
        stroke={stroke}
      />
      <rect
        x="18.5"
        y="1.5"
        width="6"
        height="2"
        rx="0.5"
        transform="rotate(90 18.5 1.5)"
        stroke={stroke}
      />
      <path
        d="M17 3C15 3 10 4.5 10 8.5C10 8.5 10 12 10 13C10 14 9 14 9 14M8 14C6.5 14 6.5 13 6.5 13V3.5H3V13C3 14.3196 4 17.5 8 17.5M17 6C14 6 13 8.43771 13 9C13 9.33333 13 9.8 13 13C13 15.0148 11 17.5 9 17.5"
        stroke={stroke}
      />
    </svg>
  )
}

export default IconPath
