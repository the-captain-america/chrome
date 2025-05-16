import Types from './Types'

const initialState = {}

const Reducer = (state = {}, action) => {
  const { type, data } = action
  switch (type) {
    case Types.UPDATE:
      return {
        ...state,
        [data.key]: data.value,
      }

    default:
      return state
  }
}

export { initialState }

export default Reducer
