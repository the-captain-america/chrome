import React from 'react'

const IconPath = (props) => {
  const { stroke = '#A9AEB9', fill = '#A9AEB9' } = props
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path
        d="M8.32 2V3.63043M8.32 3.63043V5.26087M8.32 3.63043H5C4.44771 3.63043 4 4.07815 4 4.63044V16C4 16.5523 4.44772 17 5 17H15C15.5523 17 16 16.5523 16 16V4.63043C16 4.07815 15.5523 3.63043 15 3.63043H11.56"
        stroke={stroke}
        strokeWidth="1.1"
        strokeLinecap="round"
      />
      <path
        d="M7 14H10.2143M7 11.549H13M7 9H8.82143"
        stroke={stroke}
        strokeWidth="1.1"
        strokeLinecap="round"
      />
    </svg>
  )
}

export default IconPath
