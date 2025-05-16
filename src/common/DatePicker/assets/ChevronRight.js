import React from 'react'

const ChevronRight = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <circle id="Shape" cx="12" cy="12" r="12" fill="white" />
    <g id="Icon">
      <path
        id="Shape_2"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 16.2075L13.3266 12L9 7.7925L10.332 6.5L16 12L10.332 17.5L9 16.2075Z"
        fill="#323232"
      />
      <mask
        id="chevronRightMask"
        style={{ maskType: 'luminance' }}
        maskUnits="userSpaceOnUse"
        x="9"
        y="6"
        width="7"
        height="12"
      >
        <path
          id="Shape_3"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9 16.2075L13.3266 12L9 7.7925L10.332 6.5L16 12L10.332 17.5L9 16.2075Z"
          fill="white"
        />
      </mask>
      <g mask="url(#chevronRightMask)"></g>
    </g>
  </svg>
)

export default ChevronRight
