/* eslint-disable react/prop-types */
import React from 'react'

const ThumbsUp = (props) => {
  const { fill = '#76758f', stroke = '' } = props
  return (
    <g fill={fill} stroke={stroke}>
      <path
        d="M1.957 9.056v6.232a.925.925 0 001.021.779h3.064v-7.79H2.978a.925.925 0 00-1.021.779z"
        data-name="Path 3461"
      />
      <path
        d="M16.256 8.086h-3.064V7.065l1.022-1.869a1.563 1.563 0 00.061-1.379 1.532 1.532 0 00-1.021-.889l-.766-.194a.541.541 0 00-.511.163L7.82 7.504a2.349 2.349 0 00-.756 1.604v5.107a3.115 3.115 0 002.686 3.059h5.178a2.6 2.6 0 002.5-1.91l1.116-5.102a2.042 2.042 0 00.051-.429c0-1.052-1.317-1.747-2.339-1.747z"
        data-name="Path 3462"
      />
    </g>
  )
}

export default ThumbsUp
