/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const IconPath = (props) => {
  const { fill = 'none', stroke = '#A9AEB9' } = props
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill={fill}>
      <rect
        x="1.75"
        y="1.75"
        width="6.68181"
        height="6.68181"
        rx="1.25"
        stroke={stroke}
        strokeWidth="1.5"
      />
      <rect
        x="1.75"
        y="11.5682"
        width="6.68181"
        height="6.68181"
        rx="1.25"
        stroke={stroke}
        strokeWidth="1.5"
      />
      <rect
        x="11.5684"
        y="1.75"
        width="6.68181"
        height="6.68181"
        rx="1.25"
        stroke={stroke}
        strokeWidth="1.5"
      />
      <rect
        x="11.5684"
        y="11.5682"
        width="6.68181"
        height="6.68181"
        rx="1.25"
        stroke={stroke}
        strokeWidth="1.5"
      />
    </svg>
  )
}

export default IconPath
