import { mbFn, mtFn } from '@common/Theme'
import styled from 'styled-components'

const Container = styled.div`
  margin-bottom: 16px;
`
const Button = styled.button`
  padding: 16px;
  background: #cad4e8;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  outline: none;
  ${mbFn};
  ${mtFn};
  border: 1px solid transparent;
  color: white;
  background: rgb(51, 59, 68);
`

const Close = styled.div`
  width: 40px;
  height: 40px;
  background: rgb(29, 29, 29);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-left: auto;
  border-radius: 4px;
  border: 1px solid transparent;
`

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

const Item = styled.li`
  padding: 16px;
  border: 1px solid rgb(247, 192, 58);
  margin-top: 8px;
  border-radius: 6px;
  border-radius: 4px;
  background: rgb(40, 46, 51);
  list-style: none;
  user-select: none;
  align-items: center;
  display: flex;

  span {
    color: rgb(247, 192, 58);
  }
`

export { Button, Item, List, Close, Container }
