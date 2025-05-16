import React from 'react'
import { TabList, TabButton } from './Tab.styled'

const Tab = ({ isActive, onClick, action, children }) => (
  <TabList>
    <TabButton
      onClick={(event) => (onClick(event), action(event))}
      isActive={isActive}
    >
      {children}
    </TabButton>
  </TabList>
)

export { Tab }
