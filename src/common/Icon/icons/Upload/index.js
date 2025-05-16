/* eslint-disable react/prop-types */
import React from 'react'

const IconPath = (props) => {
  const { stroke = '#A9AEB9' } = props
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <rect width="20" height="20" fill="none" />
      <path
        d="M3.5 10V15.8333C3.5 16.4777 3.91574 17 4.42857 17H15.5714C16.0843 17 16.5 16.4777 16.5 15.8333V10"
        stroke="#A9AEB9"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="PATH_STROKE"
      />
      <path
        d="M10 4.95142L10 13.9514"
        stroke="#A9AEB9"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="PATH_STROKE"
      />
      <path
        d="M9.67793 4.15447L7.1343 7.09979C6.84741 7.43199 7.0506 8 7.45626 8L12.5437 8C12.9494 8 13.1526 7.43199 12.8657 7.09979L10.322 4.15447C10.1442 3.94851 9.85581 3.94851 9.67793 4.15447Z"
        fill="#A9AEB9"
        className="PATH_FILL"
      />
    </svg>
  )
}

export default IconPath
