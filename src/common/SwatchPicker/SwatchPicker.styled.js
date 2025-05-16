import styled, { css } from 'styled-components'
import { mtFn } from '@common/Theme'
import { colors } from '@common/Theme'

const ColorGroup = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  padding: 0;
  margin: 0;
  flex-wrap: wrap;
  margin-bottom: 16px;
  gap: 16px;
  max-width: 800px;
`

const ListItem = styled.li`
  padding: 16px;
  margin: 0;
  list-style: none;
  padding: 16px;
  display: flex;
  background: ${colors.nightSky};
  border: 1px solid ${colors.sharkGray};
  border-radius: 8px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-basis: 200px;

  span.label {
    margin-top: 8px;
    color: white;
  }
`

const IconContainer = styled.span`
  margin: 0;
  padding: 0;
  display: flex;
`

const ColorSwatch = styled.div`
  border-radius: 50%;
  width: 48px;
  height: 48px;

  ${(props) =>
    props.size &&
    css`
      width: ${props.size}px;
      height: ${props.size}px;
    `};

  padding: 0;
  display: flex;
  align-items: center;
  border: 2px solid #45434a;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  box-shadow: none;
  &:nth-child(1) {
    margin-left: 0px;
  }
  ${(props) =>
    props.bgColor &&
    css`
      background: ${props.bgColor};
    `};
  ${(props) =>
    props.isActive &&
    css`
      border: 2px solid #45434a;
      box-shadow: 0px 0px 0px 2px ${(props) => props.bgColor};
    `};
`

const Container = styled.div``

const ColorContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  ${mtFn};
`

const ColorLabel = styled.span`
  color: #9e9ba6;
  font-size: 14px;
  display: flex;
  font-weight: 500;
  align-items: center;
`

const SwatchContainer = styled.div`
  padding-top: 8px;
  padding-bottom: 8px;
  &.swatch {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 16px;
  }
  &.tile {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 16px;
  }
  ${mtFn};
  form {
    position: absolute;
    left: -999px;
    top: -999px;
  }
  button {
    border: none;
    outline: none;
    padding: 0;
    margin: 0;
    cursor: pointer;
    min-width: 20px;
    min-height: 20px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
  }
`

export {
  ColorGroup,
  ListItem,
  IconContainer,
  Container,
  ColorSwatch,
  ColorContainer,
  ColorLabel,
  SwatchContainer,
}
