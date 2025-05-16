import styled, { css } from 'styled-components'
import { mbFn, mtFn } from '@common/Theme'
import { colors } from '@common/Theme'

const CalendarContainer = styled.div`
  position: relative;
  ${mtFn};
  ${mbFn};
`

const CalendarDateView = styled.div`
  padding: 13px 10px 12px 11px;
  min-height: 48px;
  border: 1.5px solid rgb(51, 59, 68);
  transition: all 0.2s ease-in-out;
  background: #282e33;
  border-radius: 4px;
  position: relative;
  ${mbFn};
  ${mtFn};
  span {
    font-size: 15px;
    color: white;
  }

  .IconContainer {
    border-radius: 5px;
    background: #3a393e;
    width: 38px;
    height: 38px;
    border-radius: 4px;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    right: 4px;
    background: transparent;
    border: 2px solid transparent;
    transition: all 0.2s ease-in-out;
    &:hover {
      background: #02afec;
      svg > g {
        stroke: white;
      }
    }
  }
  ${(props) =>
    props.isActive &&
    css`
      .IconContainer {
        background: #02afec;
        svg > g {
          stroke: white;
        }
      }
    `}
`

const DayWeekNames = styled.div`
  &.day {
    width: 100%;
    padding: 12px;
    cursor: pointer;
    display: flex;
    border: 1px solid transparent;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
  }

  &.weekNames {
    color: #9e9e9e;
    cursor: default;
  }
`

const CalendarControls = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 8px;
  gap: 8px;
  justify-content: flex-end;
`

const CalendarStyled = styled.section`
  padding: 0;
  .changeMonth {
    margin: 0px 20px;
  }

  .header {
    display: flex;
    align-items: center;
  }

  .currentMonth {
    position: relative;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    font-size: 16px;
    margin-left: auto;
    font-size: 16px;
    margin-left: auto;
    padding-right: 8px;
  }

  .day {
    width: 100%;
    padding: 12px;
    cursor: pointer;
    display: flex;
    border: 1px solid transparent;
    justify-content: center;
    align-items: center;
    border: 1px solid transparent;
    border-radius: 4px;
    &:hover {
      border: 1px solid ${colors.green};
    }
  }

  .weekNames {
    color: #9e9e9e;
    cursor: default;
  }

  .weekContainer {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
  }

  .inactiveDay {
    color: #9e9e9e;
  }
  .today {
    border: 1px solid rgb(176, 58, 238);
    background: rgba(176, 58, 238, 0.2);
    transition: all 0.2s ease-in-out;
    &:hover {
      border: 1px solid rgb(176, 58, 238);
      background: rgba(176, 58, 238, 0.4);
      color: black;
    }
  }

  .selectedDay {
    color: white;
    background: rgba(58, 238, 184, 0.36);
    border: 1px solid ${colors.green};
    width: 100%;
    margin: 0;
    padding: 12px;
    height: 100%;
    /* color: #254194; */
    color: black;
  }

  .navIcon {
    width: 20px;
    height: 20px;
    padding: 8px;
    cursor: pointer;
  }

  .navIcon:hover {
    border-radius: 50%;
    background: #efefee;
  }

  .todayButton {
    /* border: 1px solid #e0e0e0; */
    border-radius: 5px;
    padding: 7px 12px;
    cursor: pointer;
    border: 1px solid transparent;
    margin-right: 8px;
    transition: all 0.2s ease-in-out;
  }

  .todayButton:hover {
    background: transparent;
    border: 1px solid #e0e0e0;
  }
`

const CalendarPosition = styled.div`
  position: absolute;
  left: 0;
  max-width: 410px;
  min-width: 410px;
  width: 100%;
  padding: 16px;
  border-radius: 4px;
  color: #b2b2b2;
  z-index: 999;
  background: #282e33;
  border: 1.5px solid rgb(51, 59, 68);
  /* box-shadow: 0 6px 14px 0 rgb(120 120 120 / 18%); */
  box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 10px 0px;
  ${(props) =>
    props.fromTop &&
    css`
      top: 0;
      bottom: unset;
    `}
`

const Label = styled.label`
  font-weight: 300;
  font-size: 14px;
  color: #b2b2b2;
  line-height: 20px;
`

export {
  CalendarContainer,
  CalendarDateView,
  DayWeekNames,
  CalendarControls,
  Label,
  CalendarStyled,
  CalendarPosition,
}
