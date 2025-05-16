import { useEffect, useState } from 'react'

function useHoldingShift(defaultState = false) {
  const [isHoldingShift, setIsHoldingShift] = useState(defaultState)

  useEffect(() => {
    function downHandler({ key }) {
      if (key === 'Shift') {
        setIsHoldingShift(true)
      }
    }

    function upHandler({ key }) {
      if (key === 'Shift') {
        setIsHoldingShift(false)
      }
    }

    window.addEventListener('keydown', downHandler)
    window.addEventListener('keyup', upHandler)

    return () => {
      window.removeEventListener('keydown', downHandler)
      window.removeEventListener('keyup', upHandler)
    }
  }, [])

  return isHoldingShift
}

export default useHoldingShift
