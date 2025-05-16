import React from 'react'

const IconPath = (props) => {
  const { fill = '#A9AEB9' } = props
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path
        d="M13.1432 9.152L8.03 5.95625C7.36395 5.53997 6.5 6.01881 6.5 6.80425L6.5 13.1958C6.5 13.9812 7.36395 14.46 8.03 14.0437L13.1432 10.848C13.7699 10.4563 13.7699 9.54367 13.1432 9.152Z"
        fill={fill}
      />
    </svg>
  )
}

export default IconPath
