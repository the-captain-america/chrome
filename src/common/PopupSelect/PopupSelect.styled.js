import styled, { css } from 'styled-components'
import { colors } from '@common/Theme'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  position: relative;
  justify-content: space-between;
  border-radius: 8px;
  transition: all 0.3s ease;

  span.label {
    margin: 0;
    padding: 0;
    font-size: 14px;
    font-weight: 500;
    color: #ffffff;
  }
`

const Wrapper = styled.div`
  position: relative;
  ${(props) =>
    props.$align === 'right' &&
    css`
      margin-left: auto;
    `};
`

const Menu = styled.div`
  border-radius: 4px;
  overflow: hidden;
  border: 1.5px solid rgb(52, 59, 68);
  position: absolute;
  top: calc(100% + 6px);
  right: 0;
  z-index: 100;
  display: flex;
  min-width: 120px;
  width: 100%;
  flex-direction: column;
  transition: all 0.3s ease;
  justify-content: flex-end;
  align-items: flex-end;
  box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.15);
  ul {
    margin: 0;
    padding: 0;
    width: 100%;
    list-style: none;
  }
`

const MenuItem = styled.li`
  margin: 0;
  padding: 0;
  width: 100%;
  list-style: none;
  position: relative;
  padding: 10px 16px;
  background: rgb(40, 46, 51);
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease-in-out;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 3px;
    height: 100%;
    background: ${colors.transparent};
  }
  ${(props) =>
    props.isActive &&
    css`
      background: rgb(34, 40, 46);
      &:before {
        background: ${colors.yellow};
      }
    `};

  svg.SVG.EDIT {
  }
  &:hover {
    background: rgb(34, 40, 46);
    cursor: pointer;
    svg.SVG.EDIT {
    }
  }
  span.label {
    font-size: 14px;
    font-weight: 500;
    user-select: none;
    color: rgb(243, 243, 244);
  }
`

const Footer = styled.div`
  ${(props) =>
    props.enableTopBorder &&
    css`
      border-top: 1.5px solid rgb(52, 59, 68);
    `};
  width: 100%;
  background: #282e32;
  ul,
  li {
    margin: 0;
    padding: 0;
    width: 100%;
    list-style: none;
  }
  li {
    padding: 10px 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
      font-size: 14px;
      font-weight: 500;
      color: rgb(243, 243, 244);
    }
    svg.SVG.TRASH {
      path {
        stroke: ${colors.red};
      }
      line {
        stroke: ${colors.red};
      }
    }
    &:hover {
      background: rgb(34, 40, 46);
      cursor: pointer;
    }
  }
`

export { Container, MenuItem, Wrapper, Menu, Footer }
