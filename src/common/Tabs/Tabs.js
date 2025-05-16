import React, { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import {
  TabContainer,
  TabList,
  TabButton,
  TabPanelGroup,
  TabPanel,
} from './Tabs.styled'

const Tabs = ({ callback, options, active, loading, extend, showPanel }) => {
  const defaultIndex = !!options
    ? options.findIndex((item) => item.value === active)
    : 0
  const [selectedIndex, setSelectedIndex] = useState(defaultIndex ?? 0)

  // Setup a ref object in preparation for each tab ref (setTabFocus will use this to focus on the tab element)
  const tabRefs = useRef({})
  const ref = useRef(null)

  const handleClick = (e, index) => {
    e.preventDefault()

    // Prevent the following code block from executing if the loading prop is true (eg: parent fetching data)
    if (loading) return

    // Set the selected index
    setSelectedIndex(index)

    const itemAtIndex = options[index]
    // Check if the item exists to avoid potential errors
    const cbValue = itemAtIndex ? itemAtIndex.value : options[0].value
    callback(cbValue)
  }

  const setTabFocus = (index) => {
    const tab = tabRefs.current[index]
    if (tab) {
      // focus() will call the state setter
      // to display the associated tabpanel
      tab.focus()
    }
  }

  // onKeyDown handler for tab elements
  const onKeyDown = (event) => {
    // Prevent the following code block from executing if the loading prop is true (eg: parent fetching data)
    if (loading) return

    const count = options.length
    const nextTabValue = (selectedIndex + 1) % count
    const prevTabValue = (selectedIndex - 1 + count) % count
    const firstTabValue = 0
    const lastTabValue = count - 1

    const nextTab = () => setTabFocus(nextTabValue)
    const prevTab = () => setTabFocus(prevTabValue)
    const firstTab = () => setTabFocus(firstTabValue)
    const lastTab = () => setTabFocus(lastTabValue)

    const keyIndexMap = {
      ArrowRight: nextTabValue,
      ArrowLeft: prevTabValue,
      Home: firstTabValue,
      End: lastTabValue,
    }

    const keyMap = {
      ArrowRight: nextTab,
      ArrowLeft: prevTab,
      Home: firstTab,
      End: lastTab,
    }

    // setup the selected index method to execute
    const action = keyMap[event.key]
    // Get the item at the selected index using the keyIndexMap and the key pressed
    const itemAtIndex = options[keyIndexMap[event.key]]
    // Check if the item exists to avoid potential errors (if options array is undefined or is empty, this code block would not be excecuted given no element will render to click on)
    const cbValue = itemAtIndex ? itemAtIndex.value : options[0].value

    if (action && !!itemAtIndex.value) {
      event.preventDefault()
      action()
      callback(cbValue)
    }
  }

  const handleFocus = () => {
    if (ref.current) {
      const tab = tabRefs.current[selectedIndex]
      if (tab) {
        // focus() will call the state setter
        // to display the associated tabpanel
        tab.focus()
      }
    }
  }

  // Set the selected index when the defaultIndex (comprised of the active prop) changes
  useEffect(() => {
    // Set the selected index
    setSelectedIndex(defaultIndex ?? 0)
  }, [defaultIndex])

  const renderTabList = () => {
    if (!options || !options.length) return null
    return options.map((tab, index) => (
      <TabButton
        key={`tab-${index}`}
        onKeyDown={onKeyDown}
        isLoading={loading}
        type="button"
        className={selectedIndex === index ? 'tabbutton active' : 'tabbutton'}
        onFocus={() => setSelectedIndex(index)}
        tabIndex={selectedIndex === index ? 0 : -1}
        ref={(element) => (tabRefs.current[index] = element)}
        onClick={(e) => handleClick(e, index)}
        role="tab"
        aria-controls={`panel-id-${index}`}
        aria-selected={selectedIndex === index}
        id={`tab-id-${index}`}
      >
        {tab.label && <span>{tab.label}</span>}
      </TabButton>
    ))
  }

  const renderTabPanel = () => {
    if (!options || !showPanel) return null
    return options.map((tab, index) => (
      <TabPanel
        key={`tabpanel-${index}`}
        hidden={selectedIndex !== index}
        role="tabpanel"
        tabIndex={0}
        className="tabpanel-item"
        aria-labelledby={`tab-id${index}`}
        id={`panel-id-${index}`}
      >
        {tab.content}
      </TabPanel>
    ))
  }

  // Prevents the render of the tabs if the options array is empty
  if (!options || !options.length) return null

  return (
    <TabContainer extend={extend}>
      <TabList
        onClick={handleFocus}
        role="tablist"
        aria-orientation="horizontal"
        ref={ref}
      >
        {renderTabList()}
      </TabList>
      {!!options && options.length && (
        <TabPanelGroup className="tabpanel-group">
          {renderTabPanel()}
        </TabPanelGroup>
      )}
    </TabContainer>
  )
}

Tabs.defaultProps = {
  showPanel: false,
  callback: () => {},
  active: '',
  loading: false,
}

Tabs.propTypes = {
  showPanel: PropTypes.bool,
  callback: PropTypes.func,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      content: PropTypes.node,
    }),
  ).isRequired,
  active: PropTypes.string,
  loading: PropTypes.bool,
}

export { Tabs }
