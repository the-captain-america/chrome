/* eslint-disable react/prop-types */
import React from 'react'

const IconPath = (props) => {
  const { stroke = '#A9AEB9', fill = 'none' } = props
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill={fill}>
      <path
        d="M2 4C2 2.89543 2.89543 2 4 2H7.33312V16C7.33312 17.1046 6.43769 18 5.33312 18H4C2.89543 18 2 17.1046 2 16V4Z"
        stroke={stroke}
        strokeWidth="1.5"
      />
      <path
        d="M7.33337 2H12.6665V8.10959C12.6665 9.21416 11.7711 10.1096 10.6665 10.1096H9.33337C8.22881 10.1096 7.33337 9.21416 7.33337 8.10959V2Z"
        stroke={stroke}
        strokeWidth="1.5"
      />
      <path
        d="M12.667 2H16.0001C17.1047 2 18.0001 2.89543 18.0001 4V13.3699C18.0001 14.4744 17.1047 15.3699 16.0001 15.3699H14.667C13.5624 15.3699 12.667 14.4744 12.667 13.3699V2Z"
        stroke={stroke}
        strokeWidth="1.5"
      />
    </svg>
  )
}

export default IconPath
