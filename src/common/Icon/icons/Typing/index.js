/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const IconPath = (props) => {
  const { stroke = '#A9AEB9' } = props
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path
        d="M15 15.9138L15.975 15.926C17.0892 15.9399 18 15.0405 18 13.9262V6.46552C18 5.36095 17.1046 4.46552 16 4.46552H15M10 4.5H3.5C2.39543 4.5 1.5 5.39543 1.5 6.5V13.9919C1.5 15.0996 2.40038 15.9963 3.50811 15.9919L10 15.9655M12.5143 2L12.5 18.5M12.5 18.5H14M12.5 18.5H11M14 1.5H12.5H11"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.08887 11.6836H6.3252L6.08252 12.5107H4.5L6.3833 7.5H8.07178L9.95508 12.5107H8.33496L8.08887 11.6836ZM7.76416 10.6001L7.21045 8.79883L6.66016 10.6001H7.76416Z"
        fill={stroke}
      />
    </svg>
  )
}

export default IconPath
