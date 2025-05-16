import React from 'react'

const Atom = ({
  stroke = '#A9AEB9',
  strokeThree = 'rgb(247, 192, 58)',
  strokeSeven = 'rgb(247, 192, 58)',
}) => (
  <svg width="42" height="44" viewBox="0 0 79 86" fill="none">
    <circle
      cx="40"
      className="circle-one"
      cy="7"
      r="4.25"
      stroke={stroke}
      strokeWidth="2"
    />
    <circle
      cx="72"
      className="circle-two"
      cy="25"
      r="4.25"
      stroke={stroke}
      strokeWidth="2"
    />
    <circle
      cx="72"
      className="circle-three"
      cy="61"
      r="4.25"
      stroke={strokeThree}
      strokeWidth="2"
    />
    <circle
      cx="40"
      className="circle-four"
      cy="79"
      r="4.25"
      stroke={stroke}
      strokeWidth="2"
    />
    <circle
      cx="7"
      className="circle-five"
      cy="61"
      r="4.25"
      stroke={stroke}
      strokeWidth="2"
    />
    <circle
      cx="7"
      className="circle-six"
      cy="24"
      r="4.25"
      stroke={stroke}
      strokeWidth="2"
    />
    <circle
      cx="40"
      className="circle-seven"
      cy="43"
      r="4.25"
      stroke={strokeSeven}
      strokeWidth="2"
    />
    <path
      d="M68 27L44.5 41M36 45.5L11.5 59.5M11 26.5L36 41M44 45.5L68 59M35.5 8L11 22M44.5 8L68.5 22M72 29.5V56.5M68.5 64L44.5 78M10.5 64L35.5 78.5M7 56.5V28.5"
      stroke={stroke}
      strokeWidth="2"
    />
  </svg>
)

export default Atom
