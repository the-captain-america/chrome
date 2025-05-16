/* eslint-disable react/prop-types */
import React from 'react'

const PLUS = (props) => {
  const { stroke = '#FFF' } = props
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path
        d="M10 4V10M10 10V16M10 10L4 10M10 10H16"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}
export default PLUS
