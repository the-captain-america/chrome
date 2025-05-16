import React, { useRef, useState, useEffect, Fragment } from 'react'
import { Icon } from '@common/Icon'
import PropTypes from 'prop-types'
import ClickOutside from '@hooks/useClickOutside'
import { isEitherEmpty } from '@utils/ramda'
import {
  SelectContainerGroup,
  SelectStyle,
  SelectOption,
  SelectChevron,
  SelectedItem,
  SelectIcon,
  SelectOuter,
  SelectOuterContainer,
  SelectContainer,
  SelectLabel,
  Label,
  SelectFieldElement,
} from './Select.styled'
import { useOnClickOutside } from '@hooks/useOnClickOutside'
const defaultOption = { label: 'Select', value: 'Select', index: 0 }

const getDefault =
  (value = '') =>
  (options = []) => {
    const foundOption = options.find((option) => option.value === value)
    const hasMatch = Boolean(foundOption)
    if (!hasMatch) return defaultOption
    return foundOption
  }

const Select = ({
  name,
  callback,
  options,
  disabled,
  value,
  placeholder,
  label,
  mt,
  mb,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [highlightedIndex, setHighlightedIndex] = useState(0)
  const containerRef = useRef(null)
  const selectFieldRef = useRef(null)
  const selectedItemRef = useRef(null)
  const scrollRef = useRef(null)

  const handleOpen = () => {
    if (disabled) return
    setIsOpen((prev) => !prev)
  }

  useEffect(() => {
    if (!isOpen) return
    if (containerRef.current) {
      containerRef.current.focus()
    }
    // If no value is selected, default to first item; otherwise, use the index of the selected value.
    if (!value) {
      setHighlightedIndex(0)
    } else {
      const index = options.findIndex((item) => item.value === value)
      setHighlightedIndex(index >= 0 ? index : 0)
    }
  }, [isOpen, value, options])

  const handleClose = () => {
    setIsOpen(false)
  }

  const onSelect = (e, item) => {
    e.stopPropagation()
    callback({ name, value: item.value })
    setIsOpen(false)
    // After selection, move focus back to the toggle.
    if (selectedItemRef.current) {
      selectedItemRef.current?.focus()
    }
  }

  // Update selection if the external value changes.
  useEffect(() => {
    const option = getDefault(value)(options)
    if (option.value === value) return
    callback({ name, value: option.value })
    // eslint-disable-next-line
  }, [value])

  // Global escape key listener as a fallback.
  useEffect(() => {
    if (!isOpen) return
    const handleKeyDownGlobal = (e) => {
      if (e.key === 'Escape') {
        if (
          selectFieldRef.current &&
          selectFieldRef.current.contains(document.activeElement)
        ) {
          handleClose()
        }
      }
    }
    document.addEventListener('keydown', handleKeyDownGlobal)
    return () => {
      document.removeEventListener('keydown', handleKeyDownGlobal)
    }
  }, [isOpen])

  // Handle keyboard navigation for the dropdown.
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setHighlightedIndex((prev) => Math.min(prev + 1, options.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setHighlightedIndex((prev) => Math.max(prev - 1, 0))
    } else if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      const selectedItem = options[highlightedIndex]
      if (selectedItem) {
        callback({ name, value: selectedItem.value })
        setIsOpen(false)
        if (selectedItemRef.current) {
          selectedItemRef.current.focus()
        }
      }
    } else if (e.key === 'Escape') {
      e.preventDefault()
      handleClose()
    }
  }

  // Auto-scroll logic: when highlightedIndex changes, check if the element is fully visible in the container.
  const prevHighlightedIndexRef = useRef(highlightedIndex)

  useEffect(() => {
    if (isOpen && scrollRef.current) {
      const highlightedElement = document.getElementById(
        `select-option-${highlightedIndex}`,
      )
      if (highlightedElement) {
        const elementHeight =
          highlightedElement.getBoundingClientRect().height + 3

        if (highlightedIndex > prevHighlightedIndexRef.current) {
          // Scrolled down: scroll down by one element's height
          scrollRef.current.scrollBy({
            top: elementHeight,
            behavior: 'smooth',
          })
        } else if (highlightedIndex < prevHighlightedIndexRef.current) {
          // Scrolled up: scroll up by one element's height
          scrollRef.current.scrollBy({
            top: -elementHeight,
            behavior: 'smooth',
          })
        }
      }
    }
    prevHighlightedIndexRef.current = highlightedIndex
  }, [highlightedIndex, isOpen])

  const renderItems = (items) => {
    if (isEitherEmpty(items)) {
      return (
        <SelectOption role="option" isActive>
          <SelectLabel className="option-label">None</SelectLabel>
          <SelectIcon className="icon-container">
            <Icon name="CHECKMARK" size={20} />
          </SelectIcon>
        </SelectOption>
      )
    }
    return items.map((item, index) => (
      <SelectOption
        id={`select-option-${index}`}
        key={item.label}
        role="option"
        isActive={item.value === value}
        isFocused={index === highlightedIndex}
        onClick={(e) => onSelect(e, item)}
      >
        <SelectLabel className="option-label">{item.label}</SelectLabel>
        {item.value === value && (
          <SelectIcon className="icon-container">
            <Icon name="CHECKMARK" size={20} />
          </SelectIcon>
        )}
      </SelectOption>
    ))
  }

  useOnClickOutside(selectFieldRef, () => {
    if (!isOpen) return
    handleClose()
  })

  const renderSelectedOption = (value) => {
    const selectedOption = getDefault(value)(options)
    return (
      <SelectedItem
        ref={selectedItemRef}
        role="button"
        tabIndex="0"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        isDisabled={disabled}
        isActive={selectedOption.value !== ''}
        className={selectedOption.value !== '' ? 'is-active' : ''}
        onClick={handleOpen}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            handleOpen()
          }
        }}
      >
        {selectedOption.label && (
          <SelectLabel isSelected className="option-label">
            {selectedOption.label}
          </SelectLabel>
        )}
        <SelectChevron className="icon">
          <Icon rotate={isOpen ? 0 : 180} name="CHEVRON" size={20} />
        </SelectChevron>
      </SelectedItem>
    )
  }

  if (isEitherEmpty(options) || !label || !label.length) {
    return null
  }

  return (
    <SelectFieldElement
      mb={mb}
      mt={mt}
      ref={selectFieldRef}
      role="combobox"
      aria-expanded={isOpen}
      aria-haspopup="listbox"
      aria-owns="select-listbox"
    >
      {label && <Label className="label">{label}</Label>}
      <SelectStyle isActive={isOpen} {...props}>
        <ClickOutside callback={handleClose}>
          <SelectContainer isActive={isOpen}>
            {renderSelectedOption(value)}
            {isOpen && (
              <SelectOuterContainer
                id="select-listbox"
                role="listbox"
                tabIndex={0}
                ref={containerRef}
                onKeyDown={handleKeyDown}
              >
                <SelectOuter ref={scrollRef}>
                  <SelectContainerGroup>
                    {renderItems(options)}
                  </SelectContainerGroup>
                </SelectOuter>
              </SelectOuterContainer>
            )}
          </SelectContainer>
        </ClickOutside>
      </SelectStyle>
    </SelectFieldElement>
  )
}

Select.defaultProps = {
  disabled: false,
  label: '',
  placeholder: '',
  options: [],
  value: '',
}

Select.propTypes = {
  value: PropTypes.string,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.any.isRequired,
      index: PropTypes.number,
      sequence: PropTypes.number,
    }),
  ),
  callback: PropTypes.func.isRequired,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  fieldLabel: PropTypes.string,
}

export { Select }
