import React from 'react'
import PropTypes from 'prop-types'
import { useColorSelection } from './useColorSelection'
import { Container, ColorSwatch, IconContainer } from './SwatchPicker.styled'
import { Icon } from '@common/Icon'

const groupOptions = (options = []) =>
  options.reduce((acc, option) => {
    const categories = option.categories?.length
      ? option.categories
      : ['Uncategorized']
    categories.forEach((category) => {
      if (!acc[category]) acc[category] = []
      acc[category].push(option)
    })
    return acc
  }, {})

const SwatchPicker = ({ options, value, name, callback, mt }) => {
  const { selectedId, textAreaRef, refClickOutside, handleSelected } =
    useColorSelection({ options, value, name, callback })

  const groupedOptions = groupOptions(options)

  return (
    <Container ref={refClickOutside} mt={mt}>
      {Object.entries(groupedOptions).map(([category, items]) => (
        <div key={category}>
          <h3 className="swatch-heading">{category}</h3>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {items.map((item) => (
              <ColorSwatch
                key={item.id}
                bgColor={item.value}
                title={item.label || item.id}
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
      ))}
      <textarea
        readOnly
        ref={textAreaRef}
        value={selectedId}
        style={{ opacity: 0 }}
      />
    </Container>
  )
}

SwatchPicker.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      categories: PropTypes.arrayOf(PropTypes.string),
    }),
  ).isRequired,
  value: PropTypes.string,
  name: PropTypes.string,
  callback: PropTypes.func,
  mt: PropTypes.number,
}

export { SwatchPicker }
