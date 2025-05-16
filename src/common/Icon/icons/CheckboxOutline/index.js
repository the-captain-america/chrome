/* eslint-disable react/prop-types */
import React from 'react'

const IconPath = (props) => {
  const { stroke = '#A9AEB9' } = props
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <rect
        x="1.5"
        y="1.5"
        width="17"
        height="17"
        rx="3.5"
        fill="none"
        stroke={stroke}
      />
    </svg>
  )
}

export default IconPath
