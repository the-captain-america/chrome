import React from 'react'

const IconPath = (props) => {
  const { stroke = '#A9AEB9', fill = 'none' } = props
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path
        d="M4 3.18164C4 2.52904 4.53726 2 5.2 2H14.8C15.4627 2 16 2.52904 16 3.18164V17.4082C16 17.8861 15.4536 18.1663 15.0559 17.8922L10 14.4072L4.94408 17.8922C4.54641 18.1663 4 17.8861 4 17.4082V3.18164Z"
        stroke={stroke}
        fill={fill}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default IconPath
