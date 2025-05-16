import React, {
  useState,
  useRef,
  useEffect,
  useId,
  memo,
  useCallback,
} from 'react'
import useOnClickOutside from '../hooks/useOnClickOutside'
import useDebounce from '../hooks/useDebounce'
import useDropdown from '../hooks/useDropdown'
import useEscapeKey from '../hooks/useEscapeKey'
import filterOptions from '../utils/filterOptions'

import RenderOptions from './RenderOptions'
import RenderInput from './RenderInput'
import RenderLoader from './RenderLoader'
import RenderLabel from './RenderLabel'
import RenderPlaceholder from './RenderPlaceholder'
import RenderActivator from './RenderActivator'

import DropdownClear from './DropdownClear'

import {
  DropdownContainer,
  DropdownListDialog,
  DropdownWrapper,
} from './Dropdown.styled'

const Dropdown = ({
  fetchFn,
  options: staticOptions,
  config = {},
  label = '',
  renderInput,
  renderLoader,
  renderOptions,
  renderLabel,
  renderPlaceholder,
  renderActivator,
  extend,
  name = '',
  placeholder = 'Select',
  debounceDelay = 300,
  onSelect = () => {},
  value: defaultValue = null,
}) => {
  const inputId = useId()
  const containerRef = useRef(null)
  const inputRef = useRef(null)
  const {
    state,
    actions: {
      fetchOptions,
      selectOption,
      closeDropdown,
      toggleDropdown,
      openDropdown,
    },
  } = useDropdown()
  const { isOpen, options, isLoading } = state
  const [inputValue, setInputValue] = useState('')

  // Track whether the default selection has been applied.
  const defaultSelectedRef = useRef(false)
  // State to control the external active index for keyboard navigation.
  const [externalActiveIndex, setExternalActiveIndex] = useState(null)

  const {
    showInitialOptions = false,
    maxHeight = 300,
    zIndex = 100,
    bgColor = 'white',
  } = config
  const hasFetchFn = !!fetchFn

  const debouncedInput = useDebounce(
    inputValue,
    hasFetchFn ? debounceDelay : 20,
  )

  // Fetch options based on the debounced input.
  useEffect(() => {
    if (debouncedInput) {
      if (hasFetchFn) {
        // Call fetchFn with the debounced input to get options.
        fetchOptions(debouncedInput, async () => await fetchFn(debouncedInput))
      } else if (staticOptions) {
        // Filter static options based on the input.
        const filtered = filterOptions(staticOptions, debouncedInput)
        fetchOptions(debouncedInput, async () => filtered)
      }
    }
  }, [debouncedInput, staticOptions, fetchOptions, hasFetchFn, fetchFn])

  // Preload options when there is no input.
  useEffect(() => {
    if (!debouncedInput) {
      if (hasFetchFn && showInitialOptions) {
        // Preload initial options using fetchFn with an empty query.
        fetchOptions('', async () => await fetchFn(''))
      } else if (!hasFetchFn && staticOptions && showInitialOptions) {
        // Preload initial static options.
        fetchOptions('', async () => staticOptions)
      }
    }
  }, [
    debouncedInput,
    hasFetchFn,
    staticOptions,
    showInitialOptions,
    fetchOptions,
    fetchFn,
  ])

  // Apply default selection if provided.
  useEffect(() => {
    defaultSelectedRef.current = false
    if (
      !hasFetchFn &&
      staticOptions &&
      defaultValue !== null &&
      defaultValue !== undefined
    ) {
      const foundOption = staticOptions.find((option) =>
        typeof option === 'object'
          ? option.value === defaultValue
          : option === defaultValue,
      )

      const defaultOption =
        typeof foundOption === 'object'
          ? { ...foundOption, name: name }
          : { name: name, value: foundOption }

      if (foundOption) {
        const { name, ...rest } = defaultOption
        selectOption(rest)
        setInputValue(defaultOption.label || '')
        onSelect(defaultOption)
        defaultSelectedRef.current = true
      }
    }
  }, [defaultValue, staticOptions, hasFetchFn, onSelect, selectOption])

  // Update input value and open dropdown if necessary.
  const handleInputChange = useCallback(
    (e) => {
      const newValue = e.target.value
      setInputValue(newValue)
      if (newValue.trim() !== '' && !isOpen) {
        openDropdown()
      }
    },
    [isOpen, openDropdown],
  )

  const handleOptionClick = useCallback(
    (option) => {
      selectOption(option)
      setInputValue(option?.label || '')
      onSelect({ ...option, name })
      closeDropdown()
      inputRef.current.focus() // Return focus to the input.
      setExternalActiveIndex(null)
    },
    [onSelect, name, selectOption, closeDropdown],
  )

  const handleEscape = useCallback(() => {
    closeDropdown()
  }, [closeDropdown])

  const handleInputClick = useCallback(() => {
    openDropdown()
  }, [openDropdown])

  // Keyboard handler on the input for arrow navigation.
  const handleInputKeyDownWrapper = useCallback(
    (event) => {
      if (event.key === 'ArrowDown') {
        event.preventDefault()
        if (!isOpen) {
          openDropdown()
        }
        setExternalActiveIndex((prev) =>
          prev === null || prev === undefined
            ? 0
            : (prev + 1) % (options?.length || 1),
        )
      } else if (event.key === 'ArrowUp') {
        event.preventDefault()
        if (!isOpen) {
          openDropdown()
        }
        setExternalActiveIndex((prev) =>
          prev === null || prev === undefined
            ? 0
            : (prev - 1 + (options?.length || 1)) % (options?.length || 1),
        )
      } else if (event.key === 'Enter') {
        if (externalActiveIndex !== null && options && options.length > 0) {
          event.preventDefault()
          handleOptionClick(options[externalActiveIndex])
        }
      }
    },
    [isOpen, openDropdown, options, externalActiveIndex, handleOptionClick],
  )

  // Handler for clear button.
  const handleClear = useCallback(() => {
    setInputValue('')
    setExternalActiveIndex(null)
    closeDropdown()
    inputRef.current.focus()
  }, [closeDropdown])

  useOnClickOutside(containerRef, closeDropdown)
  useEscapeKey(containerRef, handleEscape)

  return (
    <DropdownContainer
      className="dropdown-container"
      ref={containerRef}
      extend={extend}
    >
      {label && renderLabel && (
        <RenderLabel render={renderLabel} label={label} htmlFor={inputId} />
      )}
      <DropdownWrapper className="dropdown-wrapper">
        <RenderInput
          renderInput={renderInput}
          value={inputValue}
          onChange={handleInputChange}
          onClick={handleInputClick}
          onKeyDown={handleInputKeyDownWrapper}
          id={inputId}
          ref={inputRef}
          isOpen={isOpen}
        />
        <DropdownClear
          onClear={handleClear}
          zIndex={zIndex + 2}
          visible={String(inputValue).trim().length > 0}
        />
        <RenderPlaceholder
          visible={!inputValue}
          id={inputId}
          render={renderPlaceholder}
          placeholder={placeholder}
        />
        <RenderActivator
          renderActivator={renderActivator}
          onClick={toggleDropdown}
          isOpen={isOpen}
          zIndex={zIndex + 1}
        />
      </DropdownWrapper>
      {isOpen && (
        <DropdownListDialog
          className="dropdown-list-wrapper"
          $bgColor={bgColor}
          $zIndex={zIndex}
          $maxHeight={maxHeight}
          id={`${inputId}-dialog}`}
          role="dialog"
          aria-labelledby={inputId}
        >
          {isLoading ? (
            <RenderLoader render={renderLoader} />
          ) : (
            <RenderOptions
              options={options}
              render={renderOptions}
              isOpen={isOpen}
              zIndex={zIndex}
              bgColor={bgColor}
              id={inputId}
              maxHeight={maxHeight}
              onClick={handleOptionClick}
              externalActiveIndex={externalActiveIndex}
              setExternalActiveIndex={setExternalActiveIndex}
            />
          )}
        </DropdownListDialog>
      )}
    </DropdownContainer>
  )
}

export default memo(Dropdown)
