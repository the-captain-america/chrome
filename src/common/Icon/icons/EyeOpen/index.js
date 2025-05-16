import React from 'react'

const IconPath = (props) => {
  const { stroke = '#A9AEB9', fill = 'none' } = props
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <g clipPath="url(#clip0_531_33)">
        <g clipPath="url(#clip1_531_33)">
          <path
            d="M6.75 10C6.75 8.20753 8.20753 6.75 10 6.75C11.7924 6.75 13.25 8.20753 13.25 10C13.25 11.7925 11.7925 13.25 10 13.25C8.20753 13.25 6.75 11.7925 6.75 10Z"
            stroke={stroke}
            strokeWidth="1.5"
          />
          <path
            d="M9.99998 15.8863C5.87929 15.8863 2.34208 13.3875 0.811096 9.81867C2.32093 6.32437 5.82021 4.25 9.99998 4.25C14.184 4.25 17.6792 6.32423 19.1889 9.81867C17.6581 13.3877 14.1249 15.8863 9.99998 15.8863Z"
            stroke={stroke}
            strokeWidth="1.5"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_531_33">
          <rect width="20" height="20" fill="none" />
        </clipPath>
        <clipPath id="clip1_531_33">
          <rect width="20" height="20" fill="none" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default IconPath
