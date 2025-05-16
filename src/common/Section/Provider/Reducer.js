import Types from './Types'

const InitialState = {
  items: {},
  isExpanded: false,
}

const Reducer = (state = {}, action) => {
  const { type, data } = action
  switch (type) {
    case Types.ADD_ITEM:
      return {
        ...state,
        items: {
          ...state.items,
          [data.id]: data,
        },
      }
    case Types.SET_NAMED_KEY:
      return {
        ...state,
        [data.key]: data.value,
      }
    case Types.SET_EXPANDED:
      return {
        ...state,
        isExpanded: data,
      }
    case Types.SET_SECTION_WIDTH:
      return {
        ...state,
        currentWidth: data,
      }

    default:
      return state
  }
}

export { InitialState }

export default Reducer
