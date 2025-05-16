/* eslint-disable react/prop-types */
import React from 'react'

const Star = (props) => {
  const { fill = 'none', stroke = '#adabbc' } = props
  return (
    <svg viewBox="0 0 14.234 13.64">
      <path
        fill={fill}
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1"
        d="M7.417.95l1.617 3.827 4.14.356a.326.326 0 01.186.572l-3.14 2.72.941 4.047a.326.326 0 01-.486.353L7.117 10.68l-3.556 2.145a.326.326 0 01-.486-.353l.941-4.047L.874 5.704a.326.326 0 01.187-.572l4.14-.356L6.816.95a.326.326 0 01.6 0z"
      />
    </svg>
  )
}

export default Star
