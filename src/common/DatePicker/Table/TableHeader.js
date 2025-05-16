import React from 'react'
import styled from 'styled-components'

const StyledTableHeader = styled.thead`
  background: transparent;
  height: 32px;
  abbr {
    color: rgb(255, 255, 255);
  }
  th {
    color: #323232;
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    position: relative;
  }
  abbr {
    padding-bottom: 16px;
    display: block;
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 1px;
      background: #dadada;
      bottom: 8px;
      left: 0;
    }
  }
`

const abbrLookup = {
  Sun: 'Sunday',
  Mon: 'Monday',
  Tue: 'Tuesday',
  Wed: 'Wednesday',
  Thu: 'Thursday',
  Fri: 'Friday',
  Sat: 'Saturday',
}

const TableHeader = () => (
  <StyledTableHeader className="datepicker-table-header">
    <tr>
      {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
        <th key={day}>
          <abbr title={abbrLookup[day]}>{day}</abbr>
        </th>
      ))}
    </tr>
  </StyledTableHeader>
)

export default TableHeader
