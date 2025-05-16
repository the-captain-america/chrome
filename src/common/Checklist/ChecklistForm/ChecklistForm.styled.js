import { colors } from '@common/Theme'
import styled from 'styled-components'

const FieldRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 16px;
  margin-top: 16px;
  width: 100%;
  span.gap {
    justify-content: center;
    align-items: center;
    display: flex;
    position: relative;
    top: 10px;
    color: white;
  }
`

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  width: 100%;
  padding-bottom: 8px;
  border-bottom: 1px solid rgb(51, 59, 68);

  h1 {
    color: white;
    font-weight: 600;
    font-size: 16px;
    margin: 0;
  }
`

const Group = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0;
  padding: 0;
  margin-bottom: 24px;
`

const CheckFormElement = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid #333b44;
  margin-bottom: 16px;
  padding: 16px;
  border-radius: 6px;
  position: relative;
  background: ${colors.nightSky};
  margin-top: 16px;
`

const CheckFormControl = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 8px;
  border-top: 1px solid #333b44;
  padding-top: 16px;
  margin-bottom: 16px;
  margin-top: 16px;
  gap: 8px;
`

const CheckConnect = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: -32px;
  height: 32px;
  width: 100px;
  background: transparent;
  overflow: hidden;

  &:hover {
    cursor: pointer;
    span.bar {
      background: white;
      &:after {
        background: white;
      }
    }
    span.bottom {
      border-bottom: 2px solid white;
    }
    span.left {
      border-left: 2px solid white;
      &:before {
        background: white;
      }
    }
    span.right {
      border-right: 2px solid white;
      &:before {
        background: white;
      }
    }
  }

  span.bar {
    width: 3px;
    position: absolute;
    height: 100%;
    left: 50%;
    height: 16px;
    transition: all 0.3s ease-in-out;
    width: 2px;
    bottom: 0px;
    background: ${colors.yellow};
    transform: translateX(-50%);

    &:after {
      transition: all 0.3s ease-in-out;
      background: ${colors.yellow};
      content: '';
      height: 10px;
      width: 10px;
      border-radius: 50%;
      position: absolute;
      left: 50%;
      bottom: -5px;
      transform: translateX(-50%);
    }
  }
  span.bottom {
    border-bottom: 2px solid ${colors.yellow};
    height: 16px;
    width: calc(100% - 18px);
    left: 50%;
    transition: all 0.3s ease-in-out;
    transform: translateX(-50%);
    position: absolute;
    bottom: 16px;
  }

  span.left {
    border-left: 2px solid ${colors.yellow};
    height: 16px;
    width: 2px;
    position: absolute;
    left: 8px;
    transition: all 0.3s ease-in-out;
    top: 0;
    &:before {
      transition: all 0.3s ease-in-out;
      content: '';
      position: absolute;
      width: 10px;
      height: 10px;
      left: -6px;
      top: -5px;
      background: ${colors.yellow};
      border-radius: 50%;
    }
  }
  span.right {
    border-right: 2px solid ${colors.yellow};
    height: 16px;
    width: 2px;
    position: absolute;
    right: 8px;
    top: 0;
    transition: all 0.3s ease-in-out;
    &:before {
      content: '';
      transition: all 0.3s ease-in-out;
      position: absolute;
      width: 10px;
      height: 10px;
      left: -4px;
      top: -5px;
      background: ${colors.yellow};
      border-radius: 50%;
    }
  }
  z-index: 1;
`

/* <CheckConnect>
        <span className="left"></span>
        <span className="right"></span>
        <span className="bottom"></span>
        <span className="bar"></span>
      </CheckConnect> */

export {
  FieldRow,
  CheckConnect,
  Header,
  Group,
  CheckFormElement,
  CheckFormControl,
}
