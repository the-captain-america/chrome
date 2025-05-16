/* eslint-disable react/prop-types */
import React from 'react'

const IconPath = (props) => {
  const { fill = '#a6adb6', stroke = 'none' } = props
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path
        d="M18.5 2L3.5 17M13.5 10V16L9.5 14"
        stroke="#A9AEB9"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.5 12C4 12 3.5 11.3824 3.5 10.5C3.5 9.6176 3.5 9.76486 3.5 8.00016C3.5 6.23545 4.5 6.00016 6.5 6.00016C6.65389 6.00016 6.82034 5.97219 7 5.91955M13.5 4C13.5 4 13.5 3 13.5 2C10.4139 3.76348 8.33954 5.52708 7 5.91955M7 9.5V5.91955"
        stroke="#A9AEB9"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default IconPath
