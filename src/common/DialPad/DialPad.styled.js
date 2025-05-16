import { colors, responsiveProps } from '@common/Theme'
import styled, { css, keyframes } from 'styled-components'

export const Screen = styled.div.attrs({ className: 'screen' })`
  max-width: 250px; /* iPhone SE width */
  height: 568px; /* iPhone SE height */
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 6px;

  box-sizing: border-box;
  ${({ $mt }) => responsiveProps('margin-top', $mt)};
  ${({ $mr }) => responsiveProps('margin-right', $mr)};
  ${({ $mb }) => responsiveProps('margin-bottom', $mb)};
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 12px;
  flex: 1;
`

const pulse = keyframes`
  0%   { transform: scale(1);   }
  50%  { transform: scale(0.9); }
  100% { transform: scale(1);   }
`

const circleBase = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 70px;
  height: 70px;
  background: #555;
  color: #fff;
  position: relative;
  &:hover {
    cursor: pointer;
  }
  &:focus-visible {
    outline: none;
    &:after {
      content: '';
      position: absolute;
      z-index: 2;
      background: transparent;
      transition: none;
      border: 2px solid #368e8c;
      width: calc(100% + 12px);
      height: calc(100% + 12px);
      border-radius: 50%;
      left: -6px;
      top: -6px;
    }
  }
  &:active {
    outline: none;
    &:after {
      content: '';
      position: absolute;
      z-index: 2;
      background: transparent;
      transition: none;
      border: 2px solid #368e8c;
      width: calc(100% + 12px);
      height: calc(100% + 12px);
      border-radius: 50%;
      left: -6px;
      top: -6px;
    }
  }
`

export const Button = styled.button`
  ${circleBase};
  border: none;
  outline: none;
  cursor: default;
  margin: 0 auto;
  ${({ $isActive }) =>
    $isActive &&
    css`
      animation: ${pulse} 0.3s ease-in-out;
      background: #888;
    `};

  span.number {
    font-size: 24px;
    font-weight: 600;
    line-height: 1;
  }

  span.letters {
    font-size: 12px;
    line-height: 1;
    margin-top: 2px;
  }
`

export const CallButton = styled.button`
  ${circleBase};
  margin: 24px auto 0;
  width: 80px;
  height: 80px;
  border: 1.5px solid #353b43;
  background: ${colors.green};
  font-size: 32px;
  outline: none;
  &:active {
    &:after {
      display: none;
    }
  }
  ${({ $isActive }) =>
    $isActive &&
    css`
      animation: ${pulse} 0.3s ease-in-out;
      background: #888;
    `}
`
