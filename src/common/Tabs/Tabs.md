# Tabs Component

The `Tabs` component is a React component that provides a tabbed interface for managing and displaying content based on user interaction.

## Props

### `options`

- Type: Array
- Description: An array of tab options, where each option is an object with the following properties:
  - `label` (required): The label to be displayed on the tab button.
  - `value` (required): The value to be used via the `callback`.
  - `content`: The content to be displayed in the associated tab panel.

### `active`

- Type: String
- Default: options[0].value || ''
- Description: The default item value provided as a prop within the options array

### `loading`

- Type: Bool
- Default: false
- Description: The loading state of the component / parent component. It will prevent the callback from being executed while in a loading state and also have a slight css style adjustment

### `callback`

- Type: Function
- Default: () => {}
- Description: This is the components contract / way of communicating the button which was either 'tabbed' or 'clicked' and passing back to the parent a value representing the value property on any of the items within `options`

### `showPanel`

- Type: Bool
- Default: false
- Description: This prop enabled / disables the content sections from rendering under the tab buttons. The content sections are rendered if this prop is enabled and each item within the array of `options` contains a key of `content` and a value correspondingly

## Usage

```jsx
import { Tabs } from 'path-to-your-tabs-component'

const ExampleComponent = () => {
  const tabsOptions = [
    { label: 'Tab 1', value: 'first', content: <div>Content for Tab 1</div> },
    { label: 'Tab 2', value: 'second', content: <div>Content for Tab 2</div> },
    // Add more tab options as needed
  ]

  return (
    <Tabs
      callback={(cb) => handler(cb)}
      options={tabsOptions}
      active={'first'}
      loading={false}
      showPanel
    />
  )
}
```

## Functionality

- The `Tabs` component renders a tab list and associated tab panels.
- Users can navigate between tabs using mouse clicks or keyboard navigation.
- Keyboard navigation includes support for arrow keys, Home, and End keys.

## Implementation Details

- The component uses the `useState` hook to manage the selected tab index.
- It uses the `useRef` hook to store references to tab elements for keyboard navigation.
- Keyboard navigation is implemented through the `onKeyDown` handler.
- Each tab button and tab panel is associated with a unique ID and follows ARIA best practices for accessibility.

## Components

The `Tabs` component relies on the following sub-components:

- `TabContainer`: Wrapper component for the entire tabbed interface.
- `TabList`: Container for the tab buttons.
- `TabButton`: Button representing an individual tab.
- `TabPanelGroup`: Wrapper for the tab panels.
- `TabPanel`: Container for the content associated with each tab.

**Note:** Ensure that the required sub-components (`TabContainer`, `TabList`, `TabButton`, `TabPanelGroup`, `TabPanel`) are appropriately defined and styled according to the implementation of this component and surrounding parent elements / containers.
