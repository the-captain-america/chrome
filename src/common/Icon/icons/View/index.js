/* eslint-disable react/prop-types */
import React from 'react'

const IconPath = (props) => {
  const { stroke = '#A9AEB9' } = props
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path
        d="M6.75 10C6.75 8.20753 8.20753 6.75 10 6.75C11.7924 6.75 13.25 8.20753 13.25 10C13.25 11.7925 11.7925 13.25 10 13.25C8.20753 13.25 6.75 11.7925 6.75 10Z"
        stroke={stroke}
        strokeWidth="1.5"
      />
      <path
        d="M10 15.8863C5.87931 15.8863 2.3421 13.3875 0.811112 9.81867C2.32095 6.32437 5.82023 4.25 10 4.25C14.184 4.25 17.6792 6.32423 19.1889 9.81867C17.6581 13.3877 14.1249 15.8863 10 15.8863Z"
        stroke={stroke}
        strokeWidth="1.5"
      />
    </svg>
  )
}

export default IconPath
