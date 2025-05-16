import React, { useState, useEffect, useRef } from 'react'
import { Icon } from '@common/Icon'
import { prop } from 'ramda'
import {
  IconContainer,
  ColorSwatch,
  ListItem,
  SwatchContainer,
} from './ColorPicker.styled'
import { colorSwatches } from '@common/Theme'
import { useOnClickOutside } from '@hooks/useOnClickOutside'
import { Line } from '@common/Line'

// Transform the colorSwatches into options.
const getEntries = (colorSwatches) =>
  colorSwatches.map((item, index) => ({
    label: item.label,
    value: item.color,
    id: index.toString(), // convert to string for consistency
    categories: item.group || [],
  }))

const defaultOptions = getEntries(colorSwatches)

// Returns a matched item by id.
const getMachedId = (id) => (options) =>
  options.find((metaItem) => {
    const foundId = prop('id')(metaItem)
    if (!foundId) return false
    return typeof foundId === 'string' && foundId === id
  })

const ColorPicker = ({
  value,
  variant,
  options,
  callback,
  name = 'picker',
  mt,
}) => {
  const [selectedId, setSelectedId] = useState('')
  const [selectedColor, setSelectedColor] = useState('')
  const [copySuccess, setCopySuccess] = useState(false)
  const textAreaRef = useRef(null)
  const refClickOutside = useRef()

  // Determine the variant style.
  const isSwatchVariant = !!variant && variant.toUpperCase() === 'SWATCH'

  useOnClickOutside(refClickOutside, () => {
    setCopySuccess(false)
    if (copySuccess) return
  })

  const copyToClipboard = () => {
    textAreaRef.current.select()
    document.execCommand('copy')
    setCopySuccess(true)
  }

  const handleSelected = (item) => {
    if (selectedId === item.id) {
      setSelectedId('')
      return
    }
    setSelectedId(item.id)
    setSelectedColor(item.value)
    const data = getMachedId(item.id)(options)
    callback({
      action: 'UPDATE',
      value: data,
      name,
    })
  }

  useEffect(() => {
    if (!value || value.length <= 0) return
    const hasMatch = getMachedId(value)(options)
    if (hasMatch) {
      setSelectedId(value)
      callback({
        action: 'UPDATE',
        value: value,
        name,
      })
      return
    } else {
      callback('CLEAR')
      setSelectedId('')
    }
    // eslint-disable-next-line
  }, [value])

  useEffect(() => {
    if (!selectedColor) return
    copyToClipboard()
    // eslint-disable-next-line
  }, [selectedColor])

  // Group options by category.
  // If an option belongs to more than one category, it will appear in each group.
  // Options with no category are grouped under 'uncategorized'.
  const groupOptions = (options) =>
    options.reduce((acc, option) => {
      const cats =
        option.categories && option.categories.length > 0
          ? option.categories
          : ['uncategorized']
      cats.forEach((cat) => {
        if (!acc[cat]) {
          acc[cat] = []
        }
        acc[cat].push(option)
      })
      return acc
    }, {})

  const groupedOptions = groupOptions(options)

  // Render grouped swatches (for the swatch variant).
  const renderGroupedSwatches = (groupedOptions) =>
    Object.entries(groupedOptions).map(([category, items]) => (
      <div
        key={category}
        className="swatch"
        style={{ display: 'flex', flexDirection: 'row' }}
      >
        <h3
          style={{
            margin: '8px 0',
            fontSize: '14px',
            textTransform: 'capitalize',
          }}
        >
          {category}
        </h3>
        <div
          className="swatch"
          style={{
            display: 'flex',
            gap: '8px',
            flexDirection: 'row',
          }}
        >
          {items.map((item) => (
            <ColorSwatch
              key={item.label}
              bgColor={item.value}
              size={24}
              isActive={item.id === selectedId}
              onClick={() => handleSelected(item)}
            >
              {item.id === selectedId && (
                <IconContainer>
                  <Icon
                    name="CHECKMARK"
                    size={20}
                    fill="transparent"
                    stroke="black"
                  />
                </IconContainer>
              )}
            </ColorSwatch>
          ))}
        </div>
      </div>
    ))

  // Render grouped tiles (for non-swatch variant).
  // This example uses a ListItem wrapper, and includes the label and categories.
  const renderGroupedTiles = (groupedOptions) =>
    Object.entries(groupedOptions).map(([category, items]) => (
      <div key={category}>
        <h3
          style={{
            margin: '8px 0',
            fontSize: '14px',
            color: 'rgb(178, 178, 178)',
            textTransform: 'capitalize',
          }}
        >
          {category}
        </h3>
        <div style={{ display: 'flex', flexDirection: 'row', gap: '8px' }}>
          {items.map((item) => (
            <ListItem key={item.label}>
              <ColorSwatch
                bgColor={item.value}
                isActive={item.id === selectedId}
                onClick={() => handleSelected(item)}
              >
                {item.id === selectedId && (
                  <IconContainer>
                    <Icon
                      name="CHECKMARK"
                      size={20}
                      fill="transparent"
                      stroke="black"
                    />
                  </IconContainer>
                )}
              </ColorSwatch>
              <span className="label">{item.label}</span>
            </ListItem>
          ))}
        </div>
        <Line mb={0} />
      </div>
    ))

  const result = isSwatchVariant
    ? renderGroupedSwatches(groupedOptions)
    : renderGroupedTiles(groupedOptions)

  return (
    <SwatchContainer
      ref={refClickOutside}
      className={isSwatchVariant ? 'swatch' : 'tile'}
      mt={mt}
    >
      {result}
      <form>
        <textarea readOnly ref={textAreaRef} value={selectedColor} />
      </form>
    </SwatchContainer>
  )
}

ColorPicker.defaultProps = {
  options: defaultOptions,
  callback: () => {},
  value: '-1',
  label: '',
}

export { ColorPicker }
