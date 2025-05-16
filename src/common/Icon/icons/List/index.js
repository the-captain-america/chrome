/* eslint-disable react/prop-types */
import React from 'react'

const IconPath = (props) => {
  const { fill = 'none', stroke = '#A9AEB9' } = props
  return (
    <svg width="20px" height="20px" viewBox="0 0 20 20" fill={fill}>
      <path
        d="M2 4C2 2.89543 2.89543 2 4 2H16C17.1046 2 18 2.89543 18 4V7.56507H2V4Z"
        stroke={stroke}
        strokeWidth="1"
      />
      <rect
        x="2"
        y="7.34247"
        width="16"
        height="5.56507"
        stroke={stroke}
        strokeWidth="1"
      />
      <path
        d="M2 12.6849H18V16.25C18 17.3546 17.1046 18.25 16 18.25H4C2.89543 18.25 2 17.3546 2 16.25V12.6849Z"
        stroke={stroke}
        strokeWidth="1"
      />
    </svg>
  )
}

export default IconPath
