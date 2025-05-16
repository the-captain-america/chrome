/* eslint-disable react/prop-types */
import React from 'react'

const Calendar = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <g id="Icon">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9 11H7V13H9V11ZM13 11H11V13H13V11ZM17 11H15V13H17V11ZM19 4H18V2H16V4H8V2H6V4H5C3.89 4 3.01 4.9 3.01 6L3 20C3 21.1 3.89 22 5 22H19C20.1 22 21 21.1 21 20V6C21 4.9 20.1 4 19 4ZM19 20H5V9H19V20Z"
          fill="#A9AEB9"
        />
        <mask
          id="calendar-mask"
          style={{ maskType: 'luminance' }}
          maskUnits="userSpaceOnUse"
          x="3"
          y="2"
          width="18"
          height="20"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9 11H7V13H9V11ZM13 11H11V13H13V11ZM17 11H15V13H17V11ZM19 4H18V2H16V4H8V2H6V4H5C3.89 4 3.01 4.9 3.01 6L3 20C3 21.1 3.89 22 5 22H19C20.1 22 21 21.1 21 20V6C21 4.9 20.1 4 19 4ZM19 20H5V9H19V20Z"
            fill="white"
          />
        </mask>
        <g mask="url(#calendar-mask)"></g>
      </g>
    </svg>
  )
}

export default Calendar
