/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const IconPath = (props) => {
  const { stroke = '#A9AEB9' } = props
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path
        d="M6 17V12C6 11.4477 6.44771 11 7 11L13 11C13.5523 11 14 11.4477 14 12V17M13 3.17964V5C13 5.55228 12.5523 6 12 6L8 6C7.44772 6 7 5.55228 7 5V3M5 3H12.1716C12.702 3 13.2107 3.21071 13.5858 3.58579L16.4142 6.41421C16.7893 6.78929 17 7.29799 17 7.82843V15C17 16.1046 16.1046 17 15 17H5C3.89543 17 3 16.1046 3 15V5C3 3.89543 3.89543 3 5 3Z"
        stroke={stroke}
        strokeWidth="1.5"
      />
    </svg>
  )
}

export default IconPath
