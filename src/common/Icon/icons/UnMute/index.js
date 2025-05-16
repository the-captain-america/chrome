/* eslint-disable react/prop-types */
import React from 'react'

const IconPath = (props) => {
  const { fill = '#a6adb6', stroke = 'none' } = props
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path
        d="M11.5 5V17L5 13"
        stroke="#A9AEB9"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 13C2 13 1.5 12.3824 1.5 11.5C1.5 10.6176 1.5 10.7649 1.5 9.00016C1.5 7.23545 2.5 7.00016 4.5 7.00016C4.65389 7.00016 4.82034 6.97219 5 6.91955M11.5 5C11.5 5 11.5 4 11.5 3C8.41392 4.76348 6.33954 6.52708 5 6.91955M5 10.5V6.91955"
        stroke="#A9AEB9"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 7C14 7 15 8 15 10C15 12 14 13 14 13"
        stroke="#A9AEB9"
        strokeLinecap="round"
      />
      <path
        d="M16 5C16 5 18 6.66667 18 10C18 13.3333 16 15 16 15"
        stroke="#A9AEB9"
        strokeLinecap="round"
      />
    </svg>
  )
}

export default IconPath
