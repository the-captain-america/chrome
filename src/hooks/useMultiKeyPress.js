import { useEffect, useState } from 'react'

const useMultiKeyPress = (targetKeys) => {
  const [keysPressed, setKeysPressed] = useState(new Set())

  // Helper to add a key to the set
  const downHandler = ({ key }) => {
    setKeysPressed((prevState) => {
      const newPressed = new Set(prevState)
      newPressed.add(key)
      return newPressed
    })
  }

  // Helper to remove a key from the set
  const upHandler = ({ key }) => {
    setKeysPressed((prevState) => {
      const newPressed = new Set(prevState)
      newPressed.delete(key)
      return newPressed
    })
  }

  // Check if all target keys are pressed
  const areAllKeysPressed = targetKeys.every((key) => keysPressed.has(key))

  useEffect(() => {
    // Attach event listeners for keydown and keyup
    window.addEventListener('keydown', downHandler)
    window.addEventListener('keyup', upHandler)

    return () => {
      // Cleanup event listeners when component unmounts
      window.removeEventListener('keydown', downHandler)
      window.removeEventListener('keyup', upHandler)
    }
  }, []) // Empty dependency array to run the effect only once

  return areAllKeysPressed
}

export { useMultiKeyPress }
