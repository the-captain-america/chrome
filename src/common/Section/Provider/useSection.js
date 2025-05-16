import { useContext, useCallback } from 'react'
import Context from './Context'
import Types from './Types'

const roundDown = (value) => {
  if (typeof value === 'string') {
    value = parseFloat(value)
  }
  if (!value || isNaN(value)) {
    return 0
  }
  const rounded = Math.round(value)
  return rounded > 0 ? rounded : 0
}

const useSection = () => {
  const [state, dispatch] = useContext(Context)

  const setExpanded = useCallback(
    (data) => {
      dispatch({
        type: Types.SET_EXPANDED,
        data,
      })
    },
    [dispatch],
  )

  const setSectionWidth = useCallback(
    (data) => {
      dispatch({
        type: Types.SET_SECTION_WIDTH,
        data: roundDown(data),
      })
    },
    [dispatch],
  )

  const actions = {
    setExpanded,
    setSectionWidth,
  }

  return { state, actions }
}

export default useSection
