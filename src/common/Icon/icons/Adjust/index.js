import React from 'react'

const IconPath = (props) => {
  const { stroke = '#A9AEB9' } = props
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.7479 6.75006L9.4053 6.72436L9.40992 5.22437L17.7525 5.25006C18.1667 5.25134 18.5015 5.58816 18.5002 6.00237C18.4989 6.41658 18.1621 6.75133 17.7479 6.75006ZM1.74999 5.21049L4.88906 5.21045L4.88908 6.71045L1.75001 6.71049C1.3358 6.71049 1 6.37471 1 5.9605C0.999995 5.54628 1.33578 5.21049 1.74999 5.21049Z"
        fill="#a9aeb9"
      />
      <circle
        cx="6.75"
        cy="6"
        r="2.4"
        className="circle"
        transform="rotate(180 6.75 6)"
        stroke="#a9aeb9"
        strokeWidth="1.2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.75 13.0001C18.75 13.4143 18.4142 13.7501 18 13.7501L16 13.7501L16 12.2501L18 12.2501C18.4142 12.2501 18.75 12.5859 18.75 13.0001ZM2.00013 12.9571C2.002 12.5429 2.3393 12.2086 2.75351 12.2105L11.5034 12.25L11.4966 13.75L2.74673 13.7105C2.33253 13.7086 1.99826 13.3713 2.00013 12.9571Z"
        fill="#a9aeb9"
      />
      <circle
        cx="14"
        cy="13"
        className="circle"
        r="2.4"
        transform="rotate(180 14 13)"
        stroke="#a9aeb9"
        strokeWidth="1.2"
      />
    </svg>
  )
}

export default IconPath
