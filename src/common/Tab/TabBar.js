import React, { useState } from 'react'
import { TabContainer, TabGroup } from './TabBar.styled'
import { toUpper } from 'ramda'

const TabBar = ({ children, variant, active, ...props }) => {
  const [activeTab, setActiveTab] = useState(active)

  const config = {
    PRIMARY: 'PRIMARY',
    SECONDARY: 'SECONDARY',
    DEFAULT: 'DEFAULT',
  }

  const activeSetter = (name) => () => setActiveTab(name)

  const asTabItem = (name) => {
    const isActive = name === activeTab
    const onClick = activeSetter(name)

    return {
      isActive,
      onClick,
      key: name,
    }
  }

  return (
    <TabContainer variant={config[toUpper(variant || 'DEFAULT')]}>
      <TabGroup variant={config[toUpper(variant || 'DEFAULT')]} {...props}>
        {children(asTabItem)}
      </TabGroup>
    </TabContainer>
  )
}

export { TabBar }
