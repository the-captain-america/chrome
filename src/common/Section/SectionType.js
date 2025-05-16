import React from 'react'

import { SectionTypeGroup, SectionTypeItem } from './Section.styled'

const options = [
  {
    variant: 'default',
    fill: '#E24E33',
    stroke: '#D44126',
  },
  {
    variant: 'high',
    fill: '#E24E33',
    stroke: '#D44126',
  },
  {
    variant: 'medium',
    fill: '#E68A3C',
    stroke: '#E68A3C',
  },
  {
    variant: 'low',
    fill: '#EFCC4C',
    stroke: '#EFCC4C',
  },
  {
    variant: 'fair',
    fill: '#72CEBC',
    stroke: '#72CEBC',
  },
  {
    variant: 'light',
    fill: '#5AAFED',
    stroke: '#5AAFED',
  },
  {
    variant: 'welcome',
    fill: '#6E6BEF',
    stroke: '#6E6BEF',
  },
]

const SectionType = ({ variant = 'default', ...props }) => {
  const items = options.filter(
    (item) => item.variant.toUpperCase() === variant.toUpperCase(),
  )

  const renderType = items.map((item) => (
    <SectionTypeItem
      key={item.variant}
      variant={item.variant}
      bgColor={item.fill}
    />
  ))

  return <SectionTypeGroup style={props.style}>{renderType}</SectionTypeGroup>
}

export default SectionType
