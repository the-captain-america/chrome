import { format, addYears, subYears, addMonths, subMonths } from 'date-fns'
import selectedDateReducer from './selectedDateReducer'
import {
  TOGGLE_MODAL,
  SET_MODAL_OPEN,
  SET_MODAL_CLOSE,
  SET_INPUT_VALUE,
  SET_PREVIOUS_YEAR,
  SET_NEXT_YEAR,
  SET_PREVIOUS_MONTH,
  SET_NEXT_MONTH,
  SET_DATE_NEXT_MONTH,
  SET_DATE_PREVIOUS_MONTH,
  SET_DATE_NEXT_YEAR,
  SET_DATE_PREVIOUS_YEAR,
  SET_MONTH_END,
  SET_MONTH_START,
  SET_PREVIEW_DATE,
  SET_SELECTED_DATE,
  SET_NEXT_WEEK,
  SET_PREVIOUS_DAY,
  SET_NEXT_DAY,
  SET_PREVIOUS_WEEK,
} from './DateTypes'

describe('selectedDateReducer', () => {
  const initialState = {
    modal: false,
    focusedDate: new Date(2025, 0, 1),
    inputValue: '',
    selectedDate: null,
  }

  describe('modal actions', () => {
    it('should toggle modal state', () => {
      const state = selectedDateReducer(initialState, { type: TOGGLE_MODAL })
      expect(state.modal).toBe(true)

      const toggledState = selectedDateReducer(state, { type: TOGGLE_MODAL })
      expect(toggledState.modal).toBe(false)
    })

    it('should open modal', () => {
      const state = selectedDateReducer(initialState, { type: SET_MODAL_OPEN })
      expect(state.modal).toBe(true)
    })

    it('should close modal', () => {
      const state = selectedDateReducer({ ...initialState, modal: true }, { type: SET_MODAL_CLOSE })
      expect(state.modal).toBe(false)
    })
  })

  describe('input actions', () => {
    it('should set input value', () => {
      const state = selectedDateReducer(initialState, { type: SET_INPUT_VALUE, payload: '01/01/2025' })
      expect(state.inputValue).toBe('01/01/2025')
    })
  })

  describe('date navigation actions', () => {
    it('should set focused date to previous year', () => {
      const state = selectedDateReducer(initialState, { type: SET_PREVIOUS_YEAR })
      expect(format(state.focusedDate, 'yyyy-MM-dd')).toBe('2024-01-01')
    })

    it('should set focused date to next year', () => {
      const state = selectedDateReducer(initialState, { type: SET_NEXT_YEAR })
      expect(format(state.focusedDate, 'yyyy-MM-dd')).toBe('2026-01-01')
    })

    it('should set focused date to previous month', () => {
      const state = selectedDateReducer(initialState, { type: SET_PREVIOUS_MONTH })
      expect(format(state.focusedDate, 'yyyy-MM-dd')).toBe('2024-12-01')
    })

    it('should set focused date to next month', () => {
      const state = selectedDateReducer(initialState, { type: SET_NEXT_MONTH })
      expect(format(state.focusedDate, 'yyyy-MM-dd')).toBe('2025-02-01')
    })

    it('should set focused date to next month without resetting to start', () => {
      const state = selectedDateReducer(initialState, { type: SET_DATE_NEXT_MONTH })
      expect(format(state.focusedDate, 'yyyy-MM-dd')).toBe(
        format(addMonths(initialState.focusedDate, 1), 'yyyy-MM-dd')
      )
    })

    it('should set focused date to previous month without resetting to start', () => {
      const state = selectedDateReducer(initialState, { type: SET_DATE_PREVIOUS_MONTH })
      expect(format(state.focusedDate, 'yyyy-MM-dd')).toBe(
        format(subMonths(initialState.focusedDate, 1), 'yyyy-MM-dd')
      )
    })

    it('should set focused date to next year without resetting to start', () => {
      const state = selectedDateReducer(initialState, { type: SET_DATE_NEXT_YEAR })
      expect(format(state.focusedDate, 'yyyy-MM-dd')).toBe(
        format(addYears(initialState.focusedDate, 1), 'yyyy-MM-dd')
      )
    })

    it('should set focused date to previous year without resetting to start', () => {
      const state = selectedDateReducer(initialState, { type: SET_DATE_PREVIOUS_YEAR })
      expect(format(state.focusedDate, 'yyyy-MM-dd')).toBe(
        format(subYears(initialState.focusedDate, 1), 'yyyy-MM-dd')
      )
    })

    it('should set focused date to the previous day', () => {
      const state = selectedDateReducer(initialState, { type: SET_PREVIOUS_DAY })
      expect(format(state.focusedDate, 'yyyy-MM-dd')).toBe('2024-12-31')
    })

    it('should set focused date to the next day', () => {
      const state = selectedDateReducer(initialState, { type: SET_NEXT_DAY })
      expect(format(state.focusedDate, 'yyyy-MM-dd')).toBe('2025-01-02')
    })

    it('should set focused date to the previous week', () => {
      const state = selectedDateReducer(initialState, { type: SET_PREVIOUS_WEEK })
      expect(format(state.focusedDate, 'yyyy-MM-dd')).toBe('2024-12-25')
    })

    it('should set focused date to the next week', () => {
      const state = selectedDateReducer(initialState, { type: SET_NEXT_WEEK })
      expect(format(state.focusedDate, 'yyyy-MM-dd')).toBe('2025-01-08')
    })
  })

  describe('month navigation actions', () => {
    it('should set focused date to start of the month', () => {
      const state = selectedDateReducer(
        {
          ...initialState,
          focusedDate: new Date(2025, 0, 15),
        },
        { type: SET_MONTH_START }
      )
      expect(format(state.focusedDate, 'yyyy-MM-dd')).toBe('2025-01-01')
    })

    it('should set focused date to end of the month', () => {
      const state = selectedDateReducer(
        {
          ...initialState,
          focusedDate: new Date(2025, 0, 15),
        },
        { type: SET_MONTH_END }
      )
      expect(format(state.focusedDate, 'yyyy-MM-dd')).toBe('2025-01-31')
    })
  })

  describe('preview date actions', () => {
    it('should set preview date (focusedDate)', () => {
      const previewDate = new Date(2025, 10, 20)
      const state = selectedDateReducer(initialState, { type: SET_PREVIEW_DATE, payload: previewDate })

      expect(state.focusedDate).toEqual(previewDate)
    })
  })

  describe('selected date actions', () => {
    it('should set selected date', () => {
      const selectedDate = new Date(2025, 5, 15)
      const state = selectedDateReducer(initialState, { type: SET_SELECTED_DATE, payload: selectedDate })
      expect(state.selectedDate).toEqual(selectedDate)
      expect(state.focusedDate).toEqual(selectedDate)
    })
  })
})
