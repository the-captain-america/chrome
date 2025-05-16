/* eslint-disable react/prop-types */
import React from 'react'

const IconPath = (props) => {
  const { stroke = '#A9AEB9', fill = '#A9AEB9' } = props
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="7.25" stroke={stroke} strokeWidth="1.5" />
      <circle
        cx="10"
        cy="10"
        r="4.25"
        fill={fill}
        stroke={stroke}
        strokeWidth="1.5"
      />
    </svg>
  )
}

export default IconPath
