/* eslint-disable react/prop-types */
import React from 'react'

const IconPath = (props) => {
  const { fill = 'none', stroke = '#adabbc' } = props
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <g fill={fill} stroke={stroke} strokeWidth="1.5">
        <g data-name="Rectangle 1325" transform="translate(1.999 3)">
          <rect width="16" height="15" stroke="none" rx="3" />
          <rect width="14.5" height="13.5" x=".75" y=".75" rx="2.25" />
        </g>
        <path
          strokeLinecap="round"
          d="M3.202 7.819h13.595"
          data-name="Line 1127"
        />
        <g data-name="Rectangle 1331" transform="translate(1.999 3)">
          <rect width="16" height="15" stroke="none" rx="2" />
          <rect width="14.5" height="13.5" x=".75" y=".75" rx="1.25" />
        </g>
        <path
          strokeLinecap="round"
          d="M6.118 3.536V2.194"
          data-name="Line 1125"
        />
        <path
          strokeLinecap="round"
          d="M14.355 3.536V2.194"
          data-name="Line 1126"
        />
      </g>
    </svg>
  )
}

export default IconPath
