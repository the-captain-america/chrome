import React from 'react'

const ChevronLeft = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="12" fill="white" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15 16.2075L10.6734 12L15 7.7925L13.668 6.5L8 12L13.668 17.5L15 16.2075Z"
      fill="#999999"
    />
    <mask
      id="chrevronLeftMask"
      style={{ maskType: 'luminance' }}
      maskUnits="userSpaceOnUse"
      x="8"
      y="6"
      width="7"
      height="12"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 16.2075L10.6734 12L15 7.7925L13.668 6.5L8 12L13.668 17.5L15 16.2075Z"
        fill="white"
      />
    </mask>
    <g mask="url(#chrevronLeftMask)"></g>
  </svg>
)

export default ChevronLeft
