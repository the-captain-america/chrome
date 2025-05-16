import styled, { css } from 'styled-components'

const RangeSliderContainer = styled.div`
  padding: 16px;
  appearance: none;
  width: 25px;
  height: 25px;
  width: 100%;
  box-sizing: border-box;
  cursor: pointer;
  ${(props) =>
    props.padding &&
    css`
      padding: ${props.padding};
    `}
`

const colors = {
  orange: `#FF5A45`,
  light: `#ff998c`,
  track: `#d7dcdf`,
}

const theme = {
  width: `100%`,
  rangehandlecolor: `${colors.orange}`,
  rangehandlecolorhover: `${colors.orange}`,
  rangehandlesize: `18px`,
  rangetrackcolor: `${colors.track}`,
  rangetrackheight: `6px`,
  rangelabelcolor: `${colors.orange}`,
  rangelabelwidth: `60px`,
}

const RangeSliderItem = styled.input`
  // Firefox Overrides
  &::-moz-range-track {
    background: ${theme.rangetrackcolor};
    border: 0;
  }

  &::-moz-focus-inner,
  &::-moz-focus-outer {
    border: 0;
  }
  padding: 0 0 0 100px;
  width: ${theme.width};
  -webkit-appearance: none;
  ${(props) =>
    props.label &&
    css`
      width: calc(100% - ${theme.rangelabelwidth} + 13px);
    `}
  ${(props) =>
    props.width &&
    css`
      width: ${props.width};
    `}
  height: ${theme.rangetrackheight};
  border-radius: 5px;
  outline: none;
  margin: 0;
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

  &:active::-webkit-slider-thumb {
    background: ${theme.rangehandlecolorhover};
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

  &:active::-moz-range-thumb {
    background: ${theme.rangehandlecolorhover};
  }

  // Focus state
  &:focus {
    &::-webkit-slider-thumb {
      box-shadow: 0 2px 4px 0px rgba(0, 0, 0, 0.12);
    }
  }

  ${(props) => {
    const { percentage } = props
    const bg = `linear-gradient(90deg, ${colors.orange} ${percentage}%, ${
      colors.track
    } ${percentage + 0.1}%)`
    return css`
      background: ${bg};
      padding-left: 100%;
      width: 100%;
    `
  }}

  ${(props) =>
    props.disabled &&
    css`
      &::-webkit-slider-thumb {
        display: none;
        opacity: 0;
      }
      &::-moz-range-thumb {
        display: none;
        opacity: 0;
      }
      &:active::-webkit-slider-thumb {
        display: none;
        opacity: 0;
      }
      &:active::-moz-range-thumb {
        display: none;
        opacity: 0;
      }
      &:focus {
        display: none;
        opacity: 0;
      }
    `}
`

// Range Label
const RangeValue = styled.span.attrs({ className: 'range-slider__value' })`
  display: inline-block;
  position: relative;
  width: ${theme.rangelabelwidth};
  color: ${colors.orange};
  line-height: 20px;
  text-align: center;
  border-radius: 3px;
  background: ${theme.rangelabelcolor};
  padding: 5px 10px;
  margin-left: 8px;
  &:after {
    position: absolute;
    top: 8px;
    left: -7px;
    width: 0;
    height: 0;
    border-top: 7px solid transparent;
    border-right: 7px solid ${theme.rangelabelcolor};
    border-bottom: 7px solid transparent;
    content: '';
  }
`

export { RangeSliderContainer, RangeSliderItem, RangeValue }
