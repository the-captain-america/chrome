/* eslint-disable react/prop-types */
import React from 'react'
const IconPath = (props) => {
  const { fill = 'none', stroke = '#A9AEB9' } = props
  return (
    <g fill={fill} stroke={stroke} strokeLinecap="round" strokeWidth="2">
      <path d="M3.326 16.3h4.77" />
      <path d="M2.941 10.337h9.54" />
      <path d="M3.221 4.375h14.982" />
    </g>
  )
}

export default IconPath
