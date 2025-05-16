# Async Dropdown Component

The Async Dropdown Component is a highly customizable React component that supports asynchronous data fetching, default selection, clear control, and full keyboard accessibility. It is built with a modular design that allows you to override the default rendering of its parts (input, options, loader, label, placeholder, activator, etc.) using custom render functions.

## Features

- **Asynchronous Options Fetching:**  
  Retrieve options from a remote API using a custom fetch function (`fetchFn`). If not provided, a static list of options is used.
- **Default Selection:**  
  Initialize the dropdown with a preselected option via the `value` prop.
- **Debounced Input:**  
  Limits API calls or local filtering by debouncing user input.
- **Clear Control:**  
  A built-in clear button allows users to quickly clear the input text.
- **Keyboard Navigation:**  
  Supports arrow key navigation (up/down) to visually highlight options and the Enter key to select the highlighted option—all while keeping focus on the input.
- **Custom Rendering:**  
  Override default renderings (input, options, loader, label, placeholder, activator) using custom render functions.
- **Accessibility:**  
  Uses ARIA attributes (e.g., `role="combobox"`, `aria-expanded`, `aria-controls`) to ensure the component is accessible.
- **Custom Styling:**  
  Built with styled-components; extend styles using the `extend` prop.

## Installation

Make sure your project includes React and styled-components. Then add the component files to your project.

```bash
npm install react styled-components
# or
yarn add react styled-components
```

## Usage Example

Below is a basic example of how to integrate the Async Dropdown component in your project. In this example, the parent component provides a custom fetch function (`fetchFn`) to retrieve options from a local API endpoint.

```jsx
import React from 'react'
import Dropdown from './Dropdown' // your async dropdown component

const MyComponent = () => {
  // Define a fetch function for asynchronous options.
  const fetchOptionsFromApi = async (query) => {
    const response = await fetch(
      `/api/options?query=${encodeURIComponent(query)}`,
    )
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const data = await response.json()
    // Assume the API returns: { status: "SUCCESS", payload: [...] }
    return data.payload
  }

  // Callback for when an option is selected.
  const handleSelect = (selectedOption) => {
    console.log('Selected option:', selectedOption)
  }

  return (
    <div>
      <h1>Select an Option</h1>
      <Dropdown
        fetchFn={fetchOptionsFromApi} // Asynchronous fetch function
        placeholder="Type to search..."
        debounceDelay={300}
        onSelect={handleSelect}
        config={{
          showInitialOptions: false,
          maxHeight: 300,
          zIndex: 100,
          bgColor: 'rgb(40, 46, 51)',
        }}
      />
    </div>
  )
}

export default MyComponent
```

## Props API

**fetchFn**

- _Type:_ Function
- _Description:_ Function to fetch options asynchronously. Receives the query string as a parameter and returns a Promise resolving to an array of options.
- _Usage:_ For dynamic, API-driven options.

**options (staticOptions)**

- _Type:_ Array
- _Description:_ A static list of options. Each option can be an object (with at least a `label` and `value` property) or a string.
- _Usage:_ For a fixed list of options when no async fetching is required.

**config**

- _Type:_ Object
- _Description:_ A configuration object for customizing dropdown behavior.
- _Properties:_
  - `showInitialOptions` (Boolean): Preload and display all options when input is empty.
  - `maxHeight` (Number): Maximum height (in pixels) of the dropdown list.
  - `zIndex` (Number): z-index for the dropdown.
  - `bgColor` (String): Background color for the dropdown list.

**label**

- _Type:_ String
- _Description:_ Label text for the dropdown (enhances accessibility).

**renderInput**

- _Type:_ Function
- _Description:_ Custom render function for the input element. Receives an object containing input props and a forwarded ref.
- _Usage:_ Use this to override the default input rendering.

**renderLoader**

- _Type:_ Function
- _Description:_ Custom render function for the loading indicator.
- _Usage:_ Override the default loading component.

**renderOptions**

- _Type:_ Function
- _Description:_ Custom render function for each option. Receives an object containing option properties (including `className`, `aria-selected`, etc.).
- _Usage:_ Customize the appearance of each dropdown option.

**renderLabel**

- _Type:_ Function
- _Description:_ Custom render function for the label element.
- _Usage:_ Override default label rendering.

**renderPlaceholder**

- _Type:_ Function
- _Description:_ Custom render function for the placeholder element.
- _Usage:_ Override default placeholder rendering.

**renderActivator**

- _Type:_ Function
- _Description:_ Custom render function for the activator (e.g., dropdown arrow). If not provided, a default activator is used.
- _Usage:_ Customize the dropdown toggler.

**extend**

- _Type:_ Any
- _Description:_ Extra styles or props passed to the main dropdown container.
- _Usage:_ For additional styling customizations.

**placeholder (prop)**

- _Type:_ String
- _Description:_ Placeholder text for the input when empty.
- _Usage:_ Provides guidance to the user about what to type.

**debounceDelay**

- _Type:_ Number
- _Description:_ Delay (in milliseconds) for debouncing input changes.
- _Usage:_ Controls the frequency of API calls or filtering while typing.

**onSelect**

- _Type:_ Function
- _Description:_ Callback executed when an option is selected. Receives the selected option as an argument.
- _Usage:_ Handle side effects or state updates after a selection is made.

**value (defaultValue)**

- _Type:_ Any
- _Description:_ Default value for pre-selecting an option (for static options).
- _Usage:_ Initialize the dropdown with a preselected option based on its value.

## How It Works

1. **Initialization:**  
   The component starts with an empty input and manages internal state for the dropdown's open/closed status, active option index (for keyboard navigation), and default selection.

2. **Debounced Input:**  
   User input is debounced to limit API calls or local filtering frequency.

3. **Option Fetching:**

   - When a `fetchFn` is provided, the component uses it to fetch options asynchronously based on the query.
   - For static options, local filtering is applied. If `showInitialOptions` is true, all options are preloaded.

4. **Default Selection:**  
   If a default value is provided, the component looks up the matching option and sets it as selected.

5. **Keyboard Navigation:**  
   The component supports arrow key navigation (up/down) to visually highlight options while keeping focus on the input. Pressing Enter selects the highlighted option.

6. **Clear Control:**  
   A clear button appears when text is present. Clicking it clears the input, resets navigation state, and returns focus to the input.

7. **Custom Rendering & Accessibility:**  
   Custom render functions allow full control over the UI of individual parts, while ARIA attributes (such as `role="combobox"`, `aria-expanded`, etc.) ensure accessibility.

## API Server Route Example

Below is an example Express server route that supports the async dropdown’s query functionality:

```js
startRoutes.get(`${basePath}/items/search`, async (req, res) => {
  try {
    // Retrieve resource data from a JSON file.
    const resourceData = getResourceData()
    const query = req.query.query || ''

    // Filter items by performing a case-insensitive search on the label.
    const items = resourceData.items || []
    const filteredItems = items.filter(
      (item) =>
        item.label && item.label.toLowerCase().includes(query.toLowerCase()),
    )

    res.status(200).json({
      status: 'SUCCESS',
      payload: filteredItems,
    })
  } catch (error) {
    console.error('Error searching items:', error)
    res.status(500).json({
      status: 'ERROR',
      message: 'Failed to search items',
    })
  }
})
```

## JSON File Structure

Here’s an example of how your JSON file (e.g., `./data/start.json`) might be structured:

```json
{
  "items": [
    {
      "value": "93",
      "label": "(93) Afghanistan"
    },
    {
      "value": "355",
      "label": "(355) Albania"
    },
    {
      "value": "213",
      "label": "(213) Algeria"
    }
  ]
}
```

## Component Structure Overview

- **Dropdown Component:**  
  Manages input, option fetching/filtering, default selection, keyboard navigation, and overall state management.
  Integrates:
  - `RenderInput`: Customizable input field.
  - `RenderPlaceholder`: Element to display placeholder text.
  - `RenderActivator`: Toggler for the dropdown.
  - `DropdownClear`: Button to clear the input.
  - `RenderOptions`: Renders each option with keyboard navigation and auto-scroll support.
  - `RenderLoader`: Loader displayed during option fetching.
  - `RenderLabel`: Accessible label for the dropdown.
- **Custom Hooks & Utils:**
  - `useDebounce`: Debounces input changes.
  - `useOnClickOutside`: Closes the dropdown when clicking outside.
  - `useEscapeKey`: Closes the dropdown when the Escape key is pressed.
  - `useDropdown`: Manages dropdown state via context.
  - `filterOptions`: Filters static options based on the query.

## Conclusion

The Async Dropdown Component provides a robust and flexible solution for creating searchable, asynchronous dropdowns in React applications. With support for custom rendering, keyboard navigation, default selection, clear control, and accessibility features, this component can be adapted to a wide variety of use cases. For further customization or troubleshooting, please refer to the component source code and adjust the render functions or styling as needed.
