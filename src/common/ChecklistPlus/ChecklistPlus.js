import React, { useEffect, useState } from 'react'

// Helper function to compare two arrays shallowly
const areItemsEqual = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false
  return arr1.every((item, index) => item === arr2[index])
}

const ChecklistPlus = ({ items: propItems = [], callback = () => {} }) => {
  const [localItems, setLocalItems] = useState([])

  useEffect(() => {
    if (!areItemsEqual(propItems, localItems)) {
      setLocalItems(propItems)
    }
  }, [propItems])

  return (
    <div>
      {localItems.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  )
}

export { ChecklistPlus }
