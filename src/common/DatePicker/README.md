# DatePicker Component

A fully accessible, customizable date picker component built using React and `date-fns`. The component supports keyboard navigation, ARIA-compliant dialogs, and seamless user interaction. Inspired by accessibility best practices and WAI-ARIA guidelines.

## TODO

- Depending on where the user had interacted with the calendar, set the focus to the appropriate element when the calendar is closed with either focusing on the trigger button or the input field if the user had pressed the down arrow to toggle the modal.
- Considerations: we default the calendar to be the current date if no date is selected. Question, how should this be represented? Should it be dashed outlined, or should it be filled in with the focus color?
- Selected date (both input and calendar have a selected date) This will appear as a blue background
- aria-selected: Set the day that has this attribute (dashed outline)
- data-status: Set this to be a string of either "focused" or "selected" to determine the color for that day

- if date is not valid (the user has typed in a date that is not valid) when the date picker is opened we should set the focus to todays date
- if the user has typed a valid date then we should set the focus to that date
- listen for changes to the input field (or inspect the value derived from the input field) and if this value becomes invalid at any point, we should set the focus to todays date

Attributes:
data-selected
data-focused

focused: (this will "win" over selected) this will be a solid outline and a solid light blue background
selected: this will be a dashed outline with a transparent background (this will lose out to focused)

## Screen Reader

- As a user I should hear a verbal indication that the modal has opened.

## How things work

- if a user has focused on any given day within the table, and the user proceeds to press either enter or the spacebar, the datepicker will use the "focused date" as the selected date and subsequently close the datepicker and set the input field to the selected date

## Features

- **Keyboard Navigation**:

  - Arrow keys to navigate days.
  - `Home`/`End` keys to jump to the start/end of the month.
  - `PageUp`/`PageDown` keys to navigate months/years.
  - `Enter` or `Space` to select a date.

- **ARIA Compliance**:

  - Accessible dialog structure following WAI-ARIA patterns.
  - `aria-current`, `aria-label`, and `aria-labelledby` for screen reader support.

- **Hooks & Utilities**:

  - `useEscape` to close dialogs with the Escape key.
  - `useOnClickOutside` to close dialogs when clicking outside.
  - `useDisableBodyScroll` to prevent background scrolling.
  - `useCalendarPosition` for dynamic positioning of the calendar.

- **Customizable**:
  - Configurable date format and placeholder.
  - Custom callback for date selection.

## Dependencies

- react: `^18.2.0`
- date-fns: `^2.27.0`

## Installation

```bash
npm install react date-fns
```

## Usage

```jsx
import React from 'react'
import DatePicker from './DatePicker'

const App = () => {
  const handleDateChange = (selectedDate) => {}

  return (
    <DatePicker
      value={new Date()}
      callback={handleDateChange}
      config={{
        format: 'dd/MM/yyyy',
        placeholder: 'Select a date',
        enableInputDescription: true,
      }}
    />
  )
}

export default App
```

## Keyboard Shortcuts

The date picker supports the following keyboard shortcuts:

| **Key**         | **Action**                                             |
| --------------- | ------------------------------------------------------ |
| **Arrow Left**  | Navigate to the previous day.                          |
| **Arrow Right** | Navigate to the next day.                              |
| **Arrow Up**    | Navigate to the previous week.                         |
| **Arrow Down**  | Navigate to the next week.                             |
| **Home**        | Jump to the first day of the current month.            |
| **End**         | Jump to the last day of the current month.             |
| **Page Up**     | Navigate to the previous month (or year with `Shift`). |
| **Page Down**   | Navigate to the next month (or year with `Shift`).     |
| **Enter**       | Select the currently focused date.                     |
| **Space**       | Select the currently focused date.                     |
| **Escape**      | Close the date picker dialog.                          |

## Inspiration and References

This date picker component was inspired by the following resources:

- [CSS-Tricks: Making Calendars with Accessibility and Internationalization in Mind](https://css-tricks.com/making-calendars-with-accessibility-and-internationalization-in-mind/)
- [WAI-ARIA Authoring Practices: Date Picker Dialog Example](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/examples/datepicker-dialog/)
- [Color contrast](https://dequeuniversity.com/color-contrast)

- ✅ add trap focus for shift + tab when the previous active element as focused on the prev month button should focus back on the Ok (submit) button
- ✅ when user has had the focus within the calendar and then proceeds to press the escape key (on keyboard), the focus should return to the trigger button (the button with a calendar icon within it)
- ✅ add the following: when the user has used the down arrow key to toggle the calendar (open and display the calendar panel) and then the user proceeds to press the escape key (on keyboard), the focus should then return to the input field
- ✅ the user should be able to press the excape key to close the calendar panel
- ✅ add the following: when the user selects a date from within the calendar panel, the focus should return to the input field
- ✅ the user should be able to use the arrow keys LEFT, RIGHT, UP, DOWN to navigate the calendar days that are "focused".
- ✅ the user should be able to press the "Enter" key to select the date that is currently "focused" (the date that is currently being navigated by the user)
- ✅ the user should be able to press the "Space" key to select the date that is currently "focused" (the date that is currently being navigated by the user)
- ✅ the user should be able to press the "Page Up" key to navigate to the next month or year (depending on the current view)
- ✅ the user should be able to press the "Page Down" key to navigate to the previous month or year (depending on the current view)
- ✅ the user should be able to press the "End" key to navigate to the last day of the current month
- ✅ the user should be able to press the "Home" key to navigate to the first day of the current month
- ✅ the user should be able to press the "Tab" key to navigate between the calendar controls (calendar header), the calendar days and then the calendar footer (the cancel and ok buttons)
- ✅ the user should be able to press the "Shift + Tab" key to navigate between the calendar footer (the cancel and ok buttons), the calendar days and then the calendar controls (calendar header)
- ✅ Screen reader should read out-loud which button is in focus
