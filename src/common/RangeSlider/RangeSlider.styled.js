import styled, { css } from 'styled-components'
import { responsiveProps } from '@common/Theme'
import { colors } from '@common/Theme'

const customColors = {
  ...colors,
  track: colors.sharkGray,
}

const theme = {
  width: `100%`,
  rangehandlecolor: `${customColors.purple}`,
  rangehandlecolorhover: `${customColors.purple}`,
  rangehandlesize: `18px`,
  rangetrackcolor: `${customColors.track}`,
  rangetrackheight: `6px`,
}

const RangeContainer = styled.div`
  display: flex;
  flex-direction: column;
  ${({ mt }) => responsiveProps('margin-top', mt)};
  ${({ mb }) => responsiveProps('margin-bottom', mb)};
`

const RangeSliderContainer = styled.div`
  padding: 16px 0;
  appearance: none;
  width: 25px;
  height: 25px;
  width: 100%;
  box-sizing: border-box;
  cursor: pointer;
  position: relative;
  top: -8px;
`

const RangeInput = styled.input`
  &::-moz-range-track {
    background: ${theme.rangetrackcolor};
    border: 0;
  }
  &::-moz-focus-inner,
  &::-moz-focus-outer {
    border: 0;
  }
  width: ${theme.width};
  height: ${theme.rangetrackheight};
  border-radius: 5px;
  outline: none;
  margin: 0;
  -webkit-appearance: none;
  &::-webkit-slider-thumb {
    appearance: none;
    width: ${theme.rangehandlesize};
    height: ${theme.rangehandlesize};
    border-radius: 50%;
    background: ${theme.rangehandlecolor};
    border: 2px solid white;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    transform: scale(1);
    position: relative;
    &:hover {
      background: ${theme.rangehandlecolorhover};
      transform: scale(1.15);
      box-shadow: 0 2px 4px 0px rgba(0, 0, 0, 0.12);
    }
  }
  &::-moz-range-thumb {
    width: ${theme.rangehandlesize};
    height: ${theme.rangehandlesize};
    border: 0;
    border-radius: 50%;
    background: ${theme.rangehandlecolor};
    cursor: pointer;
    transition: background 0.15s ease-in-out;
    &:hover {
      background: ${theme.rangehandlecolorhover};
      box-shadow: 0 2px 4px 0px rgba(0, 0, 0, 0.12);
    }
  }
  &:active::-webkit-slider-thumb {
    background: ${theme.rangehandlecolorhover};
  }
  &:active::-moz-range-thumb {
    background: ${theme.rangehandlecolorhover};
  }
  &:focus {
    &::-webkit-slider-thumb {
      box-shadow: 0 2px 4px 0px rgba(0, 0, 0, 0.12);
    }
  }
  ${(props) => {
    const { value, minVal, maxVal } = props
    const customValue = ((value - minVal) / (maxVal - minVal)) * 100
    const bg = `linear-gradient(90deg, ${customColors.purple} ${customValue}%, ${customColors.track} ${customValue}%)`
    return css`
      background: ${bg};
    `
  }}
`

export { RangeSliderContainer, RangeContainer, RangeInput }
