import { useEffect } from 'react'

function useOptions(curr, prev, setter) {
  useEffect(() => {
    if (prev !== curr) {
      setter(curr)
    }
  }, [curr, prev, setter])
}

export default useOptions
