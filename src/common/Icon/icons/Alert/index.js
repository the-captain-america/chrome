/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const IconPath = (props) => {
  const { fill = '#A9AEB9' } = props
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill={fill}>
      <path
        fill={fill}
        fillRule="evenodd"
        d="M10.156 1.312l7.975 13.806c.08.18.13.381.13.596 0 .76-.567 1.377-1.267 1.377l-15.678-.024c-.598-.11-1.055-.671-1.055-1.353 0-.216.05-.418.132-.6v-.001l.005-.01c.037-.08 7.838-13.65 7.967-13.79a1.196 1.196 0 0 1 1.791 0zm-.154 10.125l.256-4.774H8.21l.267 4.774h1.524zm-.768 2.684c.568 0 1.046-.473 1.046-1.023 0-.561-.478-1.034-1.046-1.034-.567 0-1.034.473-1.034 1.034 0 .55.467 1.023 1.034 1.023z"
      />
    </svg>
  )
}

export default IconPath
