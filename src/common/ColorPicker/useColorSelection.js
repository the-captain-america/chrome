import { useState, useEffect, useRef } from 'react'
import { useOnClickOutside } from '@hooks/useOnClickOutside'

const useColorSelection = ({
  options = [],
  value = '',
  name = 'swatch',
  callback = () => {},
}) => {
  const [selectedId, setSelectedId] = useState('')
  const [selectedColor, setSelectedColor] = useState('')
  const [copySuccess, setCopySuccess] = useState(false)
  const textAreaRef = useRef(null)
  const refClickOutside = useRef()

  const handleSelected = (item) => {
    if (selectedId === item.id) {
      setSelectedId('')
      callback({ name, action: 'CLEAR', value: item })
      return
    }
    setSelectedId(item.id)
    setSelectedColor(item.value)
    copyToClipboard()
    callback({ name, action: 'UPDATE', value: item })
  }

  const copyToClipboard = () => {
    textAreaRef.current.select()
    document.execCommand('copy')
    setCopySuccess(true)
  }

  useEffect(() => {
    const matchedItem = options.find((option) => option.id === value)
    if (matchedItem) {
      setSelectedId(value)
    } else {
      setSelectedId('')
    }
  }, [value, options])

  useOnClickOutside(refClickOutside, () => {
    setCopySuccess(false)
    if (!copySuccess) {
      callback({
        name,
        action: 'IDLE',
        value: {
          id: selectedId,
          value: selectedColor,
        },
      })
    }
  })

  return {
    selectedId,
    selectedColor,
    textAreaRef,
    refClickOutside,
    handleSelected,
  }
}

export { useColorSelection }
