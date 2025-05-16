import React, {
  forwardRef,
  useEffect,
  createRef,
  useRef,
  useCallback,
} from 'react'
import { useSelectedDate, withDatePickerProvider } from './Provider'
import {
  format,
  addDays,
  subDays,
  addWeeks,
  subWeeks,
  addMonths,
  subMonths,
  addYears,
  subYears,
  startOfMonth,
  endOfMonth,
  parse,
  isValid,
} from 'date-fns'

import useOnClickOutside from './useOnClickOutside'
import useCalendarEscape from './useCalendarEscape'
import useCalendarDays from './useCalendarDays'
import useOnStartFocus from './useOnStartFocus'

import { Container, Wrapper, ScreenReaderText } from './DatePicker.styled'

import Header from './Header'
import Modal from './Modal'
import Footer from './Footer'
import Trigger from './Trigger/Trigger'
import Input, { InputDescription, Label } from './Input'
import { Table, TableHeader, TableBody } from './Table'

import {
  SET_SELECTED_DATE,
  SET_PREVIEW_DATE,
  SET_PREVIOUS_DAY,
  SET_NEXT_DAY,
  SET_PREVIOUS_WEEK,
  SET_NEXT_WEEK,
  SET_DATE_PREVIOUS_MONTH,
  SET_DATE_PREVIOUS_YEAR,
  SET_DATE_NEXT_MONTH,
  SET_DATE_NEXT_YEAR,
  SET_MONTH_START,
  SET_MONTH_END,
  SET_MODAL_CLOSE,
  TOGGLE_MODAL,
  SET_INPUT_VALUE,
} from './Provider/DateTypes'
import { UPDATE } from './Provider/DateActions'

const parseDateString = (dateString = '') => {
  if (!dateString) {
    return new Date()
  }
  const parsedDate = parse(dateString, 'dd/MM/yyyy', new Date())
  return isValid(parsedDate) ? parsedDate : new Date()
}

const DatePickerComponent = forwardRef(
  ({ callback = () => {}, label = '' }, ref) => {
    const {
      state: {
        focusedDate,
        selectedDate,
        value,
        id,
        modal,
        config: remapConfig,
        mb,
        mt,
      },
      dispatch,
    } = useSelectedDate()
    const config = {
      ...remapConfig,
      format: 'dd/MM/yyyy',
    }

    useEffect(() => {
      if (value) {
        const parsedDate = parseDateString(value)
        dispatch({ type: SET_SELECTED_DATE, payload: parsedDate })
        dispatch({ type: SET_PREVIEW_DATE, payload: parsedDate })
        dispatch({ type: SET_INPUT_VALUE, payload: value })
      }
    }, [value, dispatch])

    const wrapperRef = useRef(null)
    const daysRef = useRef({})
    const triggerRef = useRef(null)
    const calendarTableRef = useRef(null)
    const headerRef = useRef(null)
    const footerRef = useRef(null)

    const days = useCalendarDays(focusedDate)

    const setInputValue = (value) => {
      const derivedValue = format(value, config?.format)
      dispatch({ type: SET_INPUT_VALUE, payload: derivedValue })
    }

    const handleTrap = (e) => {
      const footerSubmitButton = footerRef.current.querySelector(
        '#datepicker-footer-submit',
      )
      const headerPrevMonthButton =
        headerRef.current.querySelector('#previous-month')

      // Early return if the required elements are not found
      if (!footerSubmitButton || !headerPrevMonthButton) {
        return
      }

      if (e.key === 'Tab') {
        if (e.shiftKey) {
          // Handle Shift + Tab
          if (document.activeElement === headerPrevMonthButton) {
            e.preventDefault()
            footerSubmitButton.focus() // Focus back to the submit button
          }
        } else {
          // Handle Tab
          if (document.activeElement === footerSubmitButton) {
            e.preventDefault()
            headerPrevMonthButton.focus() // Focus back to the previous button
          }
        }
      }
    }

    useEffect(() => {
      if (!modal) return
      if (!footerRef.current) return

      const headerPrevious = headerRef.current.querySelector('#previous-month')
      const footerSubmit = footerRef.current.querySelector(
        '#datepicker-footer-submit',
      )

      if (!footerSubmit || !headerPrevious) return

      // Add event listener for keydown
      document.addEventListener('keydown', handleTrap)

      // Cleanup on unmount
      return () => {
        document.removeEventListener('keydown', handleTrap)
      }
    }, [modal])

    days.forEach((day) => {
      const dayKey = format(day, 'yyyy-MM-dd')
      if (!daysRef || !daysRef.current || !daysRef.current[dayKey]) {
        daysRef.current[dayKey] = createRef()
      }
    })

    const closeModal = useCallback((event) => {
      dispatch({ type: SET_MODAL_CLOSE })
    }, [])

    useCalendarEscape(() => {
      closeModal()
      triggerRef.current?.focus()
    })

    const toggleDialog = () => {
      dispatch({ type: TOGGLE_MODAL })
    }

    useOnClickOutside(wrapperRef, closeModal)

    const handleSelectedDate = (day) => {
      dispatch({ type: SET_SELECTED_DATE, payload: day })
      if (callback) callback({ action: UPDATE, value: day })
      setInputValue(day)
    }

    const handleSubmit = () => {
      dispatch({ type: SET_SELECTED_DATE, payload: focusedDate })
      setInputValue(focusedDate)
      dispatch({ type: SET_MODAL_CLOSE })
      triggerRef?.current.focus()
      if (callback) callback({ action: UPDATE, value: focusedDate })
    }

    const handleCancel = () => {
      dispatch({ type: SET_MODAL_CLOSE })
      triggerRef?.current.focus()
    }

    const handleFocusedDate = (date) => {
      dispatch({ type: SET_SELECTED_DATE, payload: date })
      setInputValue(date)
      dispatch({ type: SET_MODAL_CLOSE })
      triggerRef?.current.focus()
      if (callback) callback({ action: UPDATE, value: date })
    }

    const handleTableKeyPress = (e) => {
      const { key, shiftKey } = e

      // Check if the event target is within the calendar ref
      if (
        calendarTableRef.current &&
        calendarTableRef.current.contains(document.activeElement)
      ) {
        // Prevent default browser scrolling for navigation keys
        if (
          [
            ' ',
            'Enter',
            'PageUp',
            'PageDown',
            'End',
            'Home',
            'ArrowLeft',
            'ArrowUp',
            'ArrowRight',
            'ArrowDown',
          ].includes(key)
        ) {
          e.preventDefault()
        }

        let newDate

        switch (key) {
          case 'Enter':
          case ' ':
            handleFocusedDate(focusedDate)
            break
          case 'PageUp':
            newDate = shiftKey
              ? addYears(focusedDate, 1)
              : addMonths(focusedDate, 1)
            dispatch({
              type: shiftKey ? SET_DATE_NEXT_YEAR : SET_DATE_NEXT_MONTH,
            })
            break
          case 'PageDown':
            newDate = shiftKey
              ? subYears(focusedDate, 1)
              : subMonths(focusedDate, 1)
            dispatch({
              type: shiftKey ? SET_DATE_PREVIOUS_YEAR : SET_DATE_PREVIOUS_MONTH,
            })
            break
          case 'End':
            newDate = endOfMonth(focusedDate)
            dispatch({ type: SET_MONTH_END })
            break
          case 'Home':
            newDate = startOfMonth(focusedDate)
            dispatch({ type: SET_MONTH_START })
            break
          case 'ArrowLeft':
            newDate = subDays(focusedDate, 1)
            dispatch({ type: SET_PREVIOUS_DAY })
            break
          case 'ArrowUp':
            newDate = subWeeks(focusedDate, 1)
            dispatch({ type: SET_PREVIOUS_WEEK })
            break
          case 'ArrowRight':
            newDate = addDays(focusedDate, 1)
            dispatch({ type: SET_NEXT_DAY })
            break
          case 'ArrowDown':
            newDate = addWeeks(focusedDate, 1)
            dispatch({ type: SET_NEXT_WEEK })
            break
          default:
            break
        }

        if (newDate) dispatch({ type: SET_PREVIEW_DATE, payload: newDate })
      }
    }

    useEffect(() => {
      if (!focusedDate) return

      const dayKey = format(focusedDate, 'yyyy-MM-dd')
      const dayElement = daysRef.current[dayKey]?.current

      // Check if the active element is inside the controls
      if (
        headerRef.current &&
        headerRef.current.contains(document.activeElement)
      ) {
        return // Do not focus on the day if the controls are focused
      }

      // Focus the day if the controls are not focused
      dayElement?.focus()
    }, [focusedDate, headerRef])

    useOnStartFocus(daysRef, selectedDate, modal)

    const selectLabel = !selectedDate
      ? 'Choose date'
      : `Change date, ${format(selectedDate, 'd MMMM yyyy, EEEE')}`

    return (
      <Container className="datepicker-feature" $mb={mb} $mt={mt}>
        {label && (
          <Label
            className="datepicker-label"
            id={`${id}-label`}
            htmlFor={`${id}-input`}
            $mb={8}
          >
            {label}
          </Label>
        )}
        <Wrapper className="datepicker-wrapper" ref={wrapperRef}>
          <Input ref={ref} callback={callback} />
          <Trigger
            ref={triggerRef}
            onClick={toggleDialog}
            icon={config?.icon}
            ariaLabel={selectLabel}
          />
          {modal && (
            <Modal
              onClose={closeModal}
              isOpen
              transform={{
                xs: `translateX(-50%)`,
              }}
              top={{
                xs: 64,
              }}
              left={{
                xs: '50%',
              }}
              id={`${id}-modal`}
              className="dialog-datepicker"
              aria-label="Date Picker"
              aria-describedby={id}
            >
              <Header
                ref={headerRef}
                enableYearControls={config?.enableYearControls}
              />
              <Table
                className="datepicker-calendar"
                ref={calendarTableRef}
                onKeyDown={handleTableKeyPress}
                aria-label="Calendar"
              >
                <TableHeader />
                <TableBody ref={daysRef} callback={handleSelectedDate} />
              </Table>
              <Footer
                onCancel={handleCancel}
                onSubmit={handleSubmit}
                ref={footerRef}
              />
            </Modal>
          )}
        </Wrapper>
        {config?.enableInputDescription && config?.format && (
          <InputDescription
            className="datepicker-description"
            id={`${id}-description`}
          >
            <ScreenReaderText>
              date format:
              {config?.format}
            </ScreenReaderText>
          </InputDescription>
        )}
      </Container>
    )
  },
)

const DatePicker = withDatePickerProvider(DatePickerComponent)
export default DatePicker
