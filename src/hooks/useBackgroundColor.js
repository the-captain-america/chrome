import { useEffect, useState } from 'react'

const useBackgroundColor = (initialColor) => {
  const [color, setColor] = useState(initialColor)

  useEffect(() => {
    document.body.style.backgroundColor = color
    return () => {
      document.body.style.backgroundColor = initialColor
    }
  }, [color, initialColor])

  return setColor
}

export { useBackgroundColor }
