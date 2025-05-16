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
  externalActiveIndex,
}) => {
  const listRef = useRef(null)

  // When the active (highlighted) index changes, scroll that option into view.
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
          className: `dropdown-list-item ${isActive ? 'active' : ''}`,
          // Pass the event along to the parent onClick handler.
          onClick: (e) => onClick(e, option),
          isOpen,
          index,
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
