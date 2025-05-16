# Validate Component

## Use Cases

- Use this component to validate states of the application as you traverse the flow.
- Provide this component an array of options with a key of label and a value of any type.

## Example

```js
<Validate
  options={[
    {
      label: 'values.flightRelated',
      value: values.flightRelated,
    },
    {
      label: 'values.isManualEntryEnabled',
      value: values.isManualEntryEnabled,
    },
    { label: 'values.isFlightSelected', value: values.isFlightSelected },
    { label: 'values.bookingReference', value: values.bookingReference },
  ]}
/>
```

# Section

## Use Cases

- Use this component to render buttons which can be used to force update the states of the formik component TBD
- Provide this component a list of toggles as children which can act as a way to visualise / interact with the application state.

## Examples

```js
<Section>
  <Toggle
    isActive={Boolean(values.flightRelated)}
    onChange={(value) => setFieldValue('flightRelated', value)}
    title={`flightRelated`}
  />
  <Toggle
    isActive={values.isManualEntryEnabled}
    onChange={(value) => setFieldValue('isManualEntryEnabled', value)}
    title="isManualEntryEnabled"
  />
  <Toggle
    isActive={values.isFlightSelected}
    onChange={(value) => setFieldValue('isFlightSelected', value)}
    title="isFlightSelected"
  />
  <Toggle
    isActive={Boolean(values.bookingReference)}
    onChange={(value) =>
      setFieldValue('bookingReference', value ? 'BR1234' : '')
    }
    title="bookingReference"
  />
  <Toggle
    isActive={Boolean(values.pnrCode)}
    onChange={(value) => setFieldValue('pnrCode', value ? 'CODE66' : '')}
    title="pnrCode"
  />
  <Toggle
    isActive={Boolean(values.pnr)}
    onChange={(value) => setFieldValue('pnr', value ? 'PNR123' : '')}
    title="pnr"
  />
  <Toggle
    isActive={values.flight.arrival !== ''}
    onChange={(value) =>
      setFieldValue(
        'flight',
        value
          ? {
              arrival: 'WTB',
              arrival_city: 'Toowoomba (Brisbane West Wellcamp)',
              arrival_label:
                'Toowoomba (Brisbane West Wellcamp), Australia (WTB)',
              carrier: 'QDo',
              departure: 'SYD',
              departureDate: 'Thursday 14 July 2022',
              departure_city: 'Sydney',
              departure_label: 'Sydney, Australia (SYD)',
              number: 'QF123',
            }
          : {
              arrival: '',
              arrival_city: '',
              arrival_label: '',
              carrier: '',
              departure: '',
              departureDate: '',
              departure_city: '',
              departure_label: '',
              number: '',
            },
      )
    }
    title="flight"
  />
</Section>
```
