/* eslint-disable react/prop-types */
import React from 'react'

const IconPath = (props) => {
  const { stroke = '#A9AEB9' } = props
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path
        d="M3 11V16C3 16.5523 3.44772 17 4 17H16C16.5523 17 17 16.5523 17 16V11"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="PATH_STROKE"
      />
      <path
        d="M10 11L10 3"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="PATH_STROKE"
      />
      <path
        d="M10.3536 13.6464L13.1464 10.8536C13.4614 10.5386 13.2383 10 12.7929 10L7.20711 10C6.76166 10 6.53857 10.5386 6.85355 10.8536L9.64645 13.6464C9.84171 13.8417 10.1583 13.8417 10.3536 13.6464Z"
        fill={stroke}
        className="PATH_FILL"
      />
    </svg>
  )
}

export default IconPath
