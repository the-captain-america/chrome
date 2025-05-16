# useOnStartFocus Hook

## Overview

The `useOnStartFocus` hook is a utility function designed to focus on a specific DOM element when a component or view becomes active (e.g., a date picker opening). It calculates which element to focus on based on a provided `selectedDate`, a reference (`ref`) to the container holding date elements, and the `isOpen` state.

---

## API

### Parameters

1. **`ref`** (React Ref):

   - A reference to a container where date elements are stored. Each date element should be accessible via a unique `dayKey` (formatted as `yyyy-MM-dd`) and have a `current` property for focusing.

2. **`selectedDate`** (Date | String | null):

   - Represents the currently selected date.
   - Can be:
     - A valid `Date` object.
     - A non-empty string representing a date (e.g., ISO format).
     - `null` or `undefined`, indicating no date is selected.

3. **`isOpen`** (Boolean):
   - A state variable indicating whether the component or view is active/open.

---

### Behavior

1. If `selectedDate` is a **non-empty string**:

   - Attempts to format it using `date-fns`'s `format` function.
   - If the `dayKey` is valid, focuses on the corresponding element within the `ref` container.

2. If `selectedDate` is a **valid `Date` object**:

   - Formats the date and focuses on the corresponding element.

3. If `selectedDate` is **`null` or an invalid string**:

   - Defaults to the current date (`new Date()`).
   - Focuses on the element corresponding to the current date.

4. Focus is delayed using `setTimeout` to ensure the DOM is ready when the focus operation occurs.
