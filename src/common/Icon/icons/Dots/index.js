/* eslint-disable react/prop-types */
import React from 'react'

const IconPath = (props) => {
  const { fill = '#A9AEB9' } = props
  return (
    <g fill={fill} transform="rotate(-90 13.5 5.5)">
      <rect width="4" height="4" rx="2" transform="rotate(90 9 9)" />
      <rect width="4" height="4" rx="2" transform="rotate(90 5.5 5.5)" />
      <rect width="4" height="4" rx="2" transform="rotate(90 2 2)" />
    </g>
  )
}

export default IconPath
