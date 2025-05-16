/* eslint-disable react/prop-types */
import React from 'react'

const IconPath = (props) => {
  const { stroke = '#A9AEB9' } = props
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path
        d="M15.3333 7.39421L11.0455 7.39421V1L4 11.5988L8.37722 11.6058L8.37722 18L15.3333 7.39421Z"
        stroke={stroke}
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default IconPath
