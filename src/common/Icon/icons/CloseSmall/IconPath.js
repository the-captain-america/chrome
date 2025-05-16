import React from 'react'

const IconPath = (props) => {
  const {
    stroke = '#A9AEB9',
    fill = 'none',
    size = 18,
    viewBox = '0 0 20 20',
  } = props
  return (
    <svg width={size} height={size} viewBox={viewBox} fill={fill}>
      <path
        d="M5.46448 5.42893L12.5355 12.5M5.46448 12.5L12.5355 5.42895"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default IconPath
