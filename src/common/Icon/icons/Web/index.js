/* eslint-disable react/prop-types */
import React from 'react'

const IconPath = (props) => {
  const { stroke = '#A9AEB9' } = props
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill={'none'}>
      <g clipPath="url(#clip0_724_89)">
        <path
          d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2M10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2M10 18C12.6676 18 14.8302 14.4183 14.8302 10C14.8302 5.58172 12.6676 2 10 2M10 18C7.33236 18 5.16982 14.4183 5.16982 10C5.16982 5.58172 7.33236 2 10 2M10 2.07539V17.9244"
          stroke={stroke}
        />
        <path
          d="M3.5 14.6676C4.95211 13.6577 7.32244 13 10 13C12.6776 13 15.0479 13.6577 16.5 14.6676"
          stroke={stroke}
        />
        <path
          d="M4 4C5.34041 5.21121 7.52841 6 10 6C12.4716 6 14.6596 5.21121 16 4"
          stroke={stroke}
        />
      </g>
      <defs>
        <clipPath id="clip0_724_89">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default IconPath
