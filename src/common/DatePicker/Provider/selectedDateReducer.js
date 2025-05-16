import {
  startOfMonth,
  endOfMonth,
  subYears,
  addYears,
  subMonths,
  addMonths,
  subDays,
  addDays,
  subWeeks,
  addWeeks,
} from 'date-fns'

import {
  TOGGLE_MODAL,
  SET_MODAL_OPEN,
  SET_MODAL_CLOSE,
  SET_INPUT_VALUE,
  SET_PREVIOUS_YEAR,
  SET_NEXT_YEAR,
  SET_PREVIOUS_MONTH,
  SET_NEXT_MONTH,
  SET_PREVIEW_DATE,
  SET_SELECTED_DATE,
  SET_PREVIOUS_DAY,
  SET_NEXT_DAY,
  SET_PREVIOUS_WEEK,
  SET_NEXT_WEEK,
  SET_DATE_NEXT_MONTH,
  SET_DATE_PREVIOUS_MONTH,
  SET_DATE_NEXT_YEAR,
  SET_DATE_PREVIOUS_YEAR,
  SET_MONTH_START,
  SET_MONTH_END,
} from './DateTypes'

const setModalOpen = (state) => ({
  ...state,
  modal: true,
})

const setModalClose = (state) => ({
  ...state,
  modal: false,
})

const toggleModal = (state) => ({
  ...state,
  modal: !state.modal,
})

const setPreviousYear = (state) => ({
  ...state,
  focusedDate: startOfMonth(subYears(state.focusedDate, 1)),
})

const setInputValue = (state, action) => ({
  ...state,
  inputValue: action.payload,
})

const setNextYear = (state) => ({
  ...state,
  focusedDate: startOfMonth(addYears(state.focusedDate, 1)),
})

const setPreviousMonth = (state) => ({
  ...state,
  focusedDate: startOfMonth(subMonths(state.focusedDate, 1)),
})

const setNextMonth = (state) => ({
  ...state,
  focusedDate: startOfMonth(addMonths(state.focusedDate, 1)),
})

const setSelectedDate = (state, action) => {
  return {
    ...state,
    focusedDate: action.payload,
    selectedDate: action.payload,
  }
}

const setPreviousDay = (state) => ({
  ...state,
  focusedDate: subDays(state.focusedDate, 1),
})

const setNextDay = (state) => ({
  ...state,
  focusedDate: addDays(state.focusedDate, 1),
})

const setPreviousWeek = (state) => ({
  ...state,
  focusedDate: subWeeks(state.focusedDate, 1),
})

const setNextWeek = (state) => ({
  ...state,
  focusedDate: addWeeks(state.focusedDate, 1),
})

const setDatePreviousMonth = (state) => ({
  ...state,
  focusedDate: subMonths(state.focusedDate, 1),
})

const setDateNextYear = (state) => ({
  ...state,
  focusedDate: addYears(state.focusedDate, 1),
})

const setMonthStart = (state) => ({
  ...state,
  focusedDate: startOfMonth(state.focusedDate),
})

const setMonthEnd = (state) => ({
  ...state,
  focusedDate: endOfMonth(state.focusedDate),
})

const setDatePreviousYear = (state) => ({
  ...state,
  focusedDate: subYears(state.focusedDate, 1),
})

const setDateNextMonth = (state) => ({
  ...state,
  focusedDate: addMonths(state.focusedDate, 1),
})

const setFocus = (state, action) => ({
  ...state,
  focusedDate: action.payload,
})

const selectedDateReducer = (state, action) => {
  if (!action.type) {
    return state
  }
  switch (action.type) {
    case SET_INPUT_VALUE:
      return setInputValue(state, action)
    case SET_MODAL_OPEN:
      return setModalOpen(state)
    case SET_MODAL_CLOSE:
      return setModalClose(state)
    case TOGGLE_MODAL:
      return toggleModal(state)
    case SET_PREVIOUS_YEAR:
      return setPreviousYear(state)
    case SET_NEXT_YEAR:
      return setNextYear(state)
    case SET_PREVIOUS_MONTH:
      return setPreviousMonth(state)
    case SET_NEXT_MONTH:
      return setNextMonth(state)
    case SET_DATE_NEXT_MONTH:
      return setDateNextMonth(state)
    case SET_SELECTED_DATE:
      return setSelectedDate(state, action)
    case SET_PREVIOUS_DAY:
      return setPreviousDay(state)
    case SET_NEXT_DAY:
      return setNextDay(state)
    case SET_PREVIOUS_WEEK:
      return setPreviousWeek(state)
    case SET_NEXT_WEEK:
      return setNextWeek(state)
    case SET_DATE_PREVIOUS_MONTH:
      return setDatePreviousMonth(state)
    case SET_DATE_PREVIOUS_YEAR:
      return setDatePreviousYear(state)
    case SET_DATE_NEXT_YEAR:
      return setDateNextYear(state)
    case SET_MONTH_START:
      return setMonthStart(state)
    case SET_MONTH_END:
      return setMonthEnd(state)
    case SET_PREVIEW_DATE:
      return setFocus(state, action)
    default:
      throw new Error(`Unhandled action type: ${action.type}`)
  }
}

export default selectedDateReducer
