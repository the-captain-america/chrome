import styled from 'styled-components'
import { flipFn, mlFn, mrFn, rotateFn } from '@common/Theme'

const Svg = styled.svg.attrs({ className: 'SVG' })`
  transition: all 0.2s ease-in-out;
  ${rotateFn};
  ${flipFn};
  ${mlFn};
  ${mrFn};
`

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`

const Group = styled.ul`
  display: flex;
  width: 100%;
  list-style: none;
  margin: 0;
  flex-direction: row;
  padding: 0;
  margin-top: 16px;
  flex-flow: row wrap;
  justify-content: space-between;
  &:after {
    content: '';
    flex: auto;
  }
`

const Item = styled.li`
  box-sizing: border-box;
  list-style: none;
  padding: 0;
  margin: 0;
  max-width: calc(100% / 9);
  width: 100%;
  flex: 1 1 auto;
  min-width: 132px;
  max-width: 254px;
  .icon-size {
    display: none;
  }
  &:hover {
    .icon-size {
      display: block;
    }
  }
`

const ItemContainer = styled.div`
  padding: 16px;
  margin: 5px;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  background: #333b44;
  border: 1px solid #1d1d1d;
  border-radius: 4px;
  flex-direction: column;
  position: relative;
  .copy-custom {
    opacity: 0;
    transition: all 0.1s ease-in-out;
  }
  &:hover {
    .copy-custom {
      opacity: 1;
    }
  }
  .IconContainer {
    margin-left: unset;
  }
`

const Title = styled.h1`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 24px;
  font-size: 16px;
  color: #a9aeb9;
  width: 100%;
`

export { Svg, Container, ItemContainer, Title, Group, Item }
