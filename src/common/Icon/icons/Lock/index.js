/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const IconPath = (props) => {
  const { stroke = '#A9AEB9' } = props
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path
        d="M12.8571 7.58824V6.05882C12.8571 4.36948 11.578 3 10 3C8.42204 3 7.14286 4.36948 7.14286 6.05882V7.58824M6.42857 16H13.5714C14.3604 16 15 15.3153 15 14.4706V9.11765C15 8.27298 14.3604 7.58824 13.5714 7.58824H6.42857C5.63959 7.58824 5 8.27298 5 9.11765V14.4706C5 15.3153 5.63959 16 6.42857 16Z"
        stroke={stroke}
        strokeWidth="1.5"
      />
    </svg>
  )
}

export default IconPath
