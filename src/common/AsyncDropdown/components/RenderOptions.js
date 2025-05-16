import React, { useEffect, useRef } from 'react'
import { DropdownListItem, DropdownListBox } from './Dropdown.styled'
import { Text } from '@common/Text'
import { colors } from '@common/Theme'

const RenderOptions = ({
  options,
  id,
  zIndex,
  maxHeight,
  bgColor,
  render,
  isOpen,
  onClick,
  externalActiveIndex, // provided by the parent component
}) => {
  const listRef = useRef(null)

  // When the external active index changes, scroll that option into view.
  useEffect(() => {
    if (
      listRef.current &&
      externalActiveIndex !== null &&
      externalActiveIndex !== undefined
    ) {
      const activeElement = listRef.current.querySelector(
        `.dropdown-list-item[data-index="${externalActiveIndex}"]`,
      )
      if (activeElement) {
        activeElement.scrollIntoView({ block: 'nearest', inline: 'nearest' })
      }
    }
  }, [externalActiveIndex])

  if (!options || !options.length) {
    return (
      <DropdownListItem className="dropdown-list-default">
        <Text color={colors.white}>No options available</Text>
      </DropdownListItem>
    )
  }

  return (
    <DropdownListBox
      role="listbox"
      className="dropdown-list"
      id={`${id}-listbox`}
      ref={listRef}
      $zIndex={zIndex}
      $maxHeight={maxHeight}
      $bgColor={bgColor}
    >
      {options.map((option, index) => {
        const isActive = index === externalActiveIndex
        const optionProps = {
          label: option?.label,
          value: option?.value,
          // Add an 'active' class if this option is currently active.
          className: `dropdown-list-item ${isActive ? 'active' : ''}`,
          onClick: () => onClick(option),
          isOpen,
          index,
          // Use a data attribute so we can locate the active element.
          'data-index': index,
          id: option.id || `option-${index}`,
          'aria-selected': isActive,
        }

        return (
          <React.Fragment key={option.id || index}>
            {render(optionProps)}
          </React.Fragment>
        )
      })}
    </DropdownListBox>
  )
}

export default RenderOptions
