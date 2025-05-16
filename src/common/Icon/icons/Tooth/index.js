/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const IconPath = (props) => {
  const { fill = '#A9AEB9', stroke = '#A9AEB9' } = props
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <rect width="20" height="20" fill="none" />
      <path
        d="M5.36145 7.30928C5.17157 6.09616 6.10951 5 7.33739 5H8.72219C9.92948 5 10.8615 6.06153 10.7054 7.25868L9.90071 13.4279C9.7834 14.3272 9.01718 15 8.11023 15V15C7.2208 15 6.46384 14.3523 6.3263 13.4736L5.36145 7.30928Z"
        stroke={stroke}
      />
      <path
        d="M18 10.55C18.3038 10.55 18.55 10.3038 18.55 10C18.55 9.69624 18.3038 9.45 18 9.45V10.55ZM11 9.45H10.45V10.55H11V9.45ZM18 9.45L11 9.45V10.55L18 10.55V9.45Z"
        fill={stroke}
      />
      <path
        d="M5.5 10H3"
        stroke={stroke}
        strokeWidth="1.1"
        strokeLinecap="round"
      />
    </svg>
  )
}

export default IconPath
