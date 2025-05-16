import styled, { css } from 'styled-components'
import { mbFn, mtFn } from '@common/Theme'

const Label = styled.span`
  font-weight: 300;
  font-size: 14px;
  color: rgb(178, 178, 178);
  line-height: 20px;
  position: relative;
  z-index: 1;
  padding-bottom: 8px;
`

const SwitchGroup = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  padding: 8px 8px 9px 8px;
  width: 100%;
  display: flex;
  border-radius: 4px;
  justify-content: flex-start;
  border: 1.5px solid #333b44;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  background: #1f2428;
  &:before {
    content: '';
    /* background: #202428; */
    background: rgb(40 46 50);
    height: calc(100% - 16px);
    position: absolute;
    left: 8px;
    top: 8px;
    border-radius: 4px;
    transform: translateX(0);
    transition: transform 200ms;
    ${(props) => props.width && `width: ${props.width}px`};
    width: 50%;
  }

  ${(props) =>
    props.isActive &&
    css`
      li {
        &:first-of-type {
          span {
            color: rgb(178, 178, 178);
          }
        }
      }
      &:before {
        transform: translateX(calc(100% - 16px));
        transition: transform 200ms linear;
      }
    `};
`

const Switch = styled.li`
  ${mtFn};
  ${mbFn};

  padding: 0;
  margin: 0;
  flex: 1;
  background: transparent;

  width: 50%;
  text-align: center;
  letter-spacing: 1px;
  position: relative;
  border-radius: 4px;
  padding: 4px;
  display: flex;
  justify-content: center;
`

const SwitchLabel = styled.span`
  font-weight: 300;
  font-size: 14px;
  color: white;
  line-height: 20px;
  position: relative;
  z-index: 1;
  user-select: none;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  display: block;
  text-align: center;
  max-width: 130px;
`

export { Switch, SwitchGroup, Label, SwitchLabel }
