/* eslint-disable react/prop-types */
import React from 'react'

const IconPath = (props) => {
  const { fill = '#A9AEB9' } = props
  return (
    <svg viewBox="0 0 24 24" fill="none">
      <g id="Icons/System/refresh">
        <path
          id="Shape"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13 3C8.03 3 4 7.03 4 12H1L5 16L9 12H6C6 8.13 9.13 5 13 5C16.87 5 20 8.13 20 12C20 15.87 16.87 19 13 19C11.49 19 10.09 18.51 8.94 17.7L7.52 19.14C9.04 20.3 10.94 21 13 21C17.97 21 22 16.97 22 12C22 7.03 17.97 3 13 3Z"
          fill={fill}
        />
        <mask
          id="mask0_4640_21298"
          style={{ maskType: 'luminance' }}
          maskUnits="userSpaceOnUse"
          x="1"
          y="3"
          width="21"
          height="18"
        >
          <path
            id="Shape_2"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13 3C8.03 3 4 7.03 4 12H1L5 16L9 12H6C6 8.13 9.13 5 13 5C16.87 5 20 8.13 20 12C20 15.87 16.87 19 13 19C11.49 19 10.09 18.51 8.94 17.7L7.52 19.14C9.04 20.3 10.94 21 13 21C17.97 21 22 16.97 22 12C22 7.03 17.97 3 13 3Z"
            fill="white"
          />
        </mask>
        <g mask="url(#mask0_4640_21298)"></g>
      </g>
    </svg>
  )
}

export default IconPath
