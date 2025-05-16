import { useContext, useCallback } from 'react'
import DropdownContext from '../state/DropdownContext'
import Types from '../state/DropdownTypes'

const useDropdown = () => {
  const [state, dispatch] = useContext(DropdownContext)

  const fetchOptions = useCallback(
    async (query, fetchFn) => {
      try {
        dispatch({ type: Types.SET_LOADING, payload: true })
        const options = await fetchFn(query)
        dispatch({ type: Types.SET_OPTIONS, payload: options })
      } catch (error) {
        dispatch({
          type: Types.SET_ERROR,
          payload: error.message || 'Error fetching options',
        })
      }
    },
    [dispatch],
  )

  const openDropdown = useCallback(() => {
    dispatch({ type: Types.OPEN })
  }, [dispatch])

  const closeDropdown = useCallback(() => {
    dispatch({ type: Types.CLOSE })
  }, [dispatch])

  const selectOption = useCallback(
    (option) => {
      dispatch({ type: Types.SELECT_OPTION, payload: option })
    },
    [dispatch],
  )

  const toggleDropdown = useCallback(() => {
    dispatch({ type: Types.TOGGLE })
  }, [dispatch])

  return {
    state,
    actions: {
      fetchOptions,
      openDropdown,
      toggleDropdown,
      closeDropdown,
      selectOption,
    },
  }
}

export default useDropdown
