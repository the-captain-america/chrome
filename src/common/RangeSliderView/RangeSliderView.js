import React, { useEffect, useRef, useState } from 'react'
import { PropTypes } from 'prop-types'
import {
  RangeSliderContainer,
  RangeSliderItem,
  RangeValue,
} from './RangeSlider.styled'
import { Label } from '@common/Label'

const RangeSliderView = ({
  value: valueProp = 0,
  onChange,
  max = 100,
  min = 1,
  disabled,
  name,
  showTag,
  label,
  width,
}) => {
  const ref = useRef(null)
  const [value, setValue] = useState(0)
  const [percentage, setPercentage] = useState(0)

  const onLocalChange = (e) => {
    if (disabled) {
      return
    }
    onChange({
      value: e.target.value,
      name: e.target.name,
    })
    const {
      target: { min, max, value: currentValue },
    } = e

    setValue(currentValue)
    const percentage = (100 * (currentValue - min)) / (max - min)
    setPercentage(percentage)
  }

  useEffect(() => {
    if (ref) {
      const { current } = ref
      const percentage =
        (100 * (valueProp - current.min)) / (current.max - current.min)
      setPercentage(percentage)
      setValue(valueProp)
    }
  }, [valueProp])

  return (
    <>
      {label && <Label>{label}</Label>}
      <RangeSliderContainer>
        <RangeSliderItem
          onChange={onLocalChange}
          type="range"
          ref={ref}
          min={min}
          max={max}
          name={name}
          value={value}
          disabled={disabled}
          percentage={percentage}
          width={width}
          className={'range-slider'}
        />
        {showTag && (
          <RangeValue class="range-slider__value">{value}</RangeValue>
        )}
      </RangeSliderContainer>
    </>
  )
}

RangeSliderView.defaultProps = {
  disabled: false,
  showTag: false,
  width: '100%',
  onChange: () => {},
  config: {},
  label: '',
}

RangeSliderView.propTypes = {
  dispabled: PropTypes.bool,
  showTag: PropTypes.bool,
  width: PropTypes.string,
  onChange: PropTypes.func,
  config: PropTypes.object,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
}

export { RangeSliderView }
