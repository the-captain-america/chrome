/* eslint-disable react/prop-types */
import React from 'react'

const IconPath = (props) => {
  const { fill = '#A9AEB9', stroke = '#A9AEB9' } = props
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path
        d="M3 8L10 3L17 8"
        stroke={stroke}
        strokeWidth="1.1"
        strokeLinecap="round"
      />
      <path
        d="M3 11L3 15.5849C3 16.0903 3.52234 16.4999 4.16667 16.4999H15.8333C16.4777 16.4999 17 16.0903 17 15.5849V11"
        stroke={stroke}
        strokeWidth="1.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default IconPath
