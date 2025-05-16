import { applyLuminance, colors } from '@common/Theme'
import styled from 'styled-components'

const SnackbarContainer = styled.div`
  width: calc(100% - 64px);
  background: #121b2d;
  box-shadow: 0px 10px 27px rgba(18, 27, 45, 0.07),
    0px 6.48148px 15.8125px rgba(18, 27, 45, 0.0531481),
    0px 3.85185px 8.6px rgba(18, 27, 45, 0.0425185),
    0px 2px 4.3875px rgba(18, 27, 45, 0.035),
    0px 0.814815px 2.2px rgba(18, 27, 45, 0.0274815),
    0px 0.185185px 1.0625px rgba(18, 27, 45, 0.0168519);
  border-radius: 4px;
  position: fixed;
  bottom: 24px;
  right: 50%;
  left: 50%;
  overflow: hidden;
  transform: translate(-50%, -50%);
  height: 40px;
  z-index: 99;
`

const SnackbarContent = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`

const SnackbarUndoIcon = styled.button`
  width: 40px;
  height: 40px;
  background: none;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
  background: #121b2d;
  &:hover {
    cursor: pointer;
    background: #121b2d;
  }
`

const SnackbarLabel = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;

  color: rgba(255, 255, 255, 0.8);
`

const SnackbarDescriptor = styled.div`
  font-weight: 600;
  font-size: 14px;
  line-height: 100%;
  margin-left: 4px;
  color: white;
`

const SnackbarActionList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  flex-direction: row;
  justify-content: flex-end;
  margin-left: auto;
  margin-right: 8px;
`

const SnackbarActionItem = styled.li`
  list-style: none;
  color: white;
  font-weight: 500;
  font-size: 12px;
  line-height: 100%;
  text-transform: capitalize;
  padding: 8px;
  border-radius: 4px;
  background: ${colors.green};
  color: black;
  &:hover {
    cursor: pointer;
    background: ${applyLuminance(colors.green, 0.3)};
  }
`

const SnackbarClose = styled.div`
  width: 40px;
  height: 40px;
  background: #121b2d;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-left: 1px solid rgba(255, 255, 255, 0.3);
`

export {
  SnackbarContainer,
  SnackbarContent,
  SnackbarUndoIcon,
  SnackbarLabel,
  SnackbarDescriptor,
  SnackbarActionList,
  SnackbarActionItem,
  SnackbarClose,
}
