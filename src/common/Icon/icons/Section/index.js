/* eslint-disable react/prop-types */
import React from 'react'

const IconPath = (props) => {
  const { stroke = '#A9AEB9' } = props
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <rect
        x="2.75"
        y="2.75"
        width="14.5"
        height="5.5"
        rx="1.25"
        stroke={stroke}
        strokeWidth="1"
      />
      <rect
        x="2.75"
        y="11.75"
        width="14.5"
        height="5.5"
        rx="1.25"
        stroke={stroke}
        strokeWidth="1"
      />
    </svg>
  )
}

export default IconPath
