import React from 'react'
import { TabUnderlineList, TabButtonUnderlined } from './TabUnderlined.styled'

const TabUnderlined = ({ isActive, onClick, action, children }) => (
  <TabUnderlineList>
    <TabButtonUnderlined
      onClick={(event) => (onClick(event), action(event))}
      isActive={isActive}
    >
      {children}
    </TabButtonUnderlined>
  </TabUnderlineList>
)

export { TabUnderlined }
