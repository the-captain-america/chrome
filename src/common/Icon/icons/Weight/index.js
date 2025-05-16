/* eslint-disable react/prop-types */
import React from 'react'

const IconPath = (props) => {
  const { fill = '#A9AEB9', stroke = '#A9AEB9' } = props
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill={fill}>
      <path
        d="M3.651 16.2214L4.38119 15.4912"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.4913 4.3811L16.2215 3.65091"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.32422 11.5483L12.93 6.94246"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x="2.30298"
        y="13.413"
        width="1.578"
        height="6.03701"
        rx="0.789001"
        transform="rotate(-45 2.30298 13.413)"
        fill={fill}
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x="17.6819"
        y="6.57172"
        width="1.73477"
        height="6.03701"
        rx="0.867384"
        transform="rotate(135 17.6819 6.57172)"
        fill={fill}
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x="3.04456"
        y="9.52594"
        width="2.30336"
        height="10.4853"
        rx="1"
        transform="rotate(-45 3.04456 9.52594)"
        fill={fill}
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x="16.8926"
        y="10.5065"
        width="2.23588"
        height="10.4853"
        rx="1"
        transform="rotate(135 16.8926 10.5065)"
        fill={fill}
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default IconPath
