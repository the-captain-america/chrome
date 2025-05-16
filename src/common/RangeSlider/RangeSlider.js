import React, { useState, useEffect } from 'react'
import { PropTypes } from 'prop-types'
import { Label } from '@common/Label'
import {
  RangeSliderContainer,
  RangeContainer,
  RangeInput,
} from './RangeSlider.styled'

const RangeSlider = ({
  onChange,
  mt,
  mb,
  value,
  name,
  label,
  id,
  min,
  max,
  step,
}) => {
  const [sliderVal, setValue] = useState(0)
  const [mouseState, setMouseState] = useState(null)

  useEffect(() => {
    if (!!value && value > 0) {
      setValue(value)
    }
  }, [value])

  const changeCallback = (e) => {
    const { value, name } = e.target
    const numericValue = Number(value) // Convert value to number
    setValue(numericValue)
    onChange({ name, value: numericValue }) // Send numeric value to callback
  }

  useEffect(() => {
    if (mouseState === 'up') {
      onChange({ name, value: sliderVal })
    }
  }, [mouseState])

  return (
    <RangeContainer mt={mt} mb={mb}>
      {label && <Label pb={0}>{label}</Label>}
      <RangeSliderContainer>
        <RangeInput
          id={id}
          min={min}
          max={max}
          step={step}
          minVal={min}
          maxVal={max}
          type="range"
          name={name}
          onChange={changeCallback}
          onMouseDown={() => setMouseState('down')}
          onMouseUp={() => setMouseState('up')}
          value={sliderVal}
        />
      </RangeSliderContainer>
    </RangeContainer>
  )
}

RangeSlider.defaultProps = {
  onChange: () => {},
  min: 1,
  max: 10,
  step: 1,
}

RangeSlider.propTypes = {
  onChange: PropTypes.func,
  min: PropTypes.number,
  max: PropTypes.number,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  mt: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  mb: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  step: PropTypes.number,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export { RangeSlider }
