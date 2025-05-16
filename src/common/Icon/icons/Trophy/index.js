/* eslint-disable react/prop-types */
import React from 'react';

const IconPath = props => {
  const { stroke = '#A9AEB9' } = props;
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path
        d="M6 5H3.5V6.5C3.5 7.88071 4.61929 9 6 9M6 9V3H14V9M6 9C6 11.2091 7.79086 13 10 13M14 5H16.5V6.5C16.5 7.88071 15.3807 9 14 9M14 9C14 11.2091 12.2091 13 10 13M10 13V16.5M7.5 16.5H12.5"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IconPath;
