/* eslint-disable react/prop-types */
import React from 'react'

const IconPath = (props) => {
  const { stroke = '#A9AEB9' } = props
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path
        d="M12.2262 6.11111V4C12.2262 3.44771 11.7785 3 11.2262 3H5C3.89543 3 3 3.89543 3 5V15C3 16.1046 3.89543 17 5 17H11.2262C11.7785 17 12.2262 16.5523 12.2262 16V13.8889"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.10052 10H16.3267"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.1005 7L17 9.82843L14.1005 12.6569"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default IconPath
