import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Container, SwapButton, SwapLabel, SwapSwatch } from './Swapper.styled'
import { Icon } from '@common/Icon'
import { Error } from '@common/Error'
import { Text } from '@common/Text'

const Swapper = ({
  options = [],
  value: defaultValue = '',
  onSelect = () => {},
  name = 'swapper',
  mt,
  mb,
  variant,
}) => {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const initialIndex = options.findIndex(
      (option) => option.value === defaultValue,
    )
    if (initialIndex !== -1) {
      setActiveIndex(initialIndex)
    }
  }, [defaultValue, options])

  const handleSwap = () => {
    const nextIndex = (activeIndex + 1) % options.length
    setActiveIndex(nextIndex)
    onSelect({ action: 'UPDATE', value: options[nextIndex], name })
  }

  const activeOption = options?.[activeIndex]

  if (!options || !options.length || !activeOption) {
    return (
      <Container $width="calc(100% - 32px)">
        <Error title="No options detected" variant="warning">
          <Text>You need to provide options</Text>
        </Error>
      </Container>
    )
  }

  const renderGraphic = (option) => {
    if (variant === 'icon') {
      return <Icon name={option.icon} size={20} />
    }
    return <SwapSwatch bgColor={option.value} />
  }

  return (
    <Container $mb={mb} $mt={mt}>
      <SwapButton onClick={handleSwap} type="button">
        {renderGraphic(activeOption)}
        <SwapLabel className="visually-hidden">{activeOption.label}</SwapLabel>
      </SwapButton>
    </Container>
  )
}

Swapper.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      icon: PropTypes.elementType.isRequired,
    }),
  ).isRequired,
  value: PropTypes.string,
  onSelect: PropTypes.func,
  name: PropTypes.string,
}

export { Swapper }
