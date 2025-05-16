/* eslint-disable react/prop-types */
import React from 'react'

const IconPath = (props) => {
  const { fill = '#19B244' } = props
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <rect x="6" y="6" width="8" height="8" rx="4" fill={fill} />
    </svg>
  )
}

export default IconPath
