import React from 'react'
import { toUpper, keys, includes } from 'ramda'
import { Primary, Secondary } from './TabRounded.styled'

const TabButtonRounded = ({ variant = 'PRIMARY', children, ...props }) => {
  const config = {
    PRIMARY: (
      <Primary className="primary" {...props}>
        {children}
      </Primary>
    ),
    SECONDARY: (
      <Secondary className="secondary" {...props}>
        {children}
      </Secondary>
    ),
  }

  if (!includes(toUpper(variant), keys(config))) {
    return
  }

  return config[toUpper(variant) || 'PRIMARY']
}

const TabRounded = ({ isActive, variant, onClick, action, children }) => {
  return (
    <TabButtonRounded
      variant={variant}
      onClick={(event) => (onClick(event), action(event))}
      isActive={isActive}
    >
      <span>{children}</span>
    </TabButtonRounded>
  )
}

export { TabRounded }
