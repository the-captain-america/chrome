/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const IconPath = (props) => {
  const { fill = '#A9AEB9', stroke = '#A9AEB9' } = props
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path
        d="M8.32 2V3.63043M8.32 3.63043V5.26087M8.32 3.63043H5C4.44771 3.63043 4 4.07815 4 4.63044V16C4 16.5523 4.44772 17 5 17H15C15.5523 17 16 16.5523 16 16L16 14.5M11.56 3.63043H15C15.5523 3.63043 16 4.07815 16 4.63043L16 6.5"
        stroke={stroke}
        strokeWidth="1.1"
        strokeLinecap="round"
      />
      <path
        d="M7 14H10.2143M7 11.549H10.5M7 9H8.82143"
        stroke={stroke}
        strokeWidth="1.1"
        strokeLinecap="round"
      />
      <path
        d="M18.5 10.5C18.5 12.7091 16.7091 14.5 14.5 14.5C12.2909 14.5 10.5 12.7091 10.5 10.5C10.5 8.29086 12.2909 6.5 14.5 6.5C16.7091 6.5 18.5 8.29086 18.5 10.5Z"
        stroke={stroke}
      />
      <path d="M14.5 8.5V10.5" stroke={stroke} strokeLinecap="round" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.0141 10.4263C14.0824 10.1304 14.3777 9.94579 14.6737 10.0141L16.6237 10.464C16.9197 10.5323 17.1042 10.8276 17.0359 11.1236C16.9676 11.4196 16.6723 11.6042 16.3764 11.5359L14.4263 11.0859C14.1304 11.0176 13.9458 10.7223 14.0141 10.4263Z"
        fill={fill}
      />
    </svg>
  )
}

export default IconPath
