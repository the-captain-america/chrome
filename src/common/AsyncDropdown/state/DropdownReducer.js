import Types from './DropdownTypes'

function dropdownReducer(state, action) {
  const { type, payload } = action
  switch (type) {
    case Types.SET_LOADING:
      return { ...state, isLoading: payload }
    case Types.SET_OPTIONS:
      return { ...state, options: payload, isLoading: false, error: null }
    case Types.SET_ERROR:
      return { ...state, error: payload, isLoading: false }
    case Types.OPEN:
      return { ...state, isOpen: true }
    case Types.TOGGLE:
      return { ...state, isOpen: !state.isOpen }
    case Types.CLOSE:
      return { ...state, isOpen: false }
    case Types.SELECT_OPTION:
      return { ...state, selectedOption: payload, isOpen: false }
    default:
      return state
  }
}

export default dropdownReducer
