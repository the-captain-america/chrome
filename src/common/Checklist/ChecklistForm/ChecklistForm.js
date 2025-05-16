import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { Input } from '@common/Input'
import { colors } from '@common/Theme'
import { Button } from '@common/Button'
import { Icon } from '@common/Icon'
import { uuid } from '@utils/uuid'
import { StateView } from '@common/StateView'

import {
  FieldRow,
  Group,
  CheckFormElement,
  CheckFormControl,
  Header,
} from './ChecklistForm.styled'

import { applyIndexByMap, transmuteArrayToObject } from '../utils'
import { Toggle } from '@common/Toggle'
import { applySequenceByMap, isEmptyObject } from '@utils/ramda'

const FORM_ACTIONS = {
  CREATE: 'CREATE',
  CATEGORY_FORM: 'CATEGORY_FORM',
}

const categoryItems = [
  {
    label: 'label',
    value: 'N/A',
    id: uuid(),
  },
]

const defaultItems = (key) => [
  {
    key: 'feature',
    value: !!key ? key : 'N/A',
    id: uuid(),
  },
  {
    key: 'label',
    value: 'N/A',
    id: uuid(),
  },
]

const componentConfig = (key, isCategoryForm) => ({
  defaultState: {
    showCode: false,
    isLocalCategoryForm: !!isCategoryForm,
    label: '',
    items: isCategoryForm ? categoryItems : defaultItems(key),
  },
})

const convertOutput = (state) => {
  if (!state.label || !state.label.length) return null
  if (isEmptyObject(state)) return null

  const reorderedItems = applyIndexByMap('index')(state.items)
  const sequencedItems = applySequenceByMap(reorderedItems)
  const children = sequencedItems.reduce((acc, item) => {
    const { value, label } = item
    const entry = {
      sequence: item.sequence,
      index: item.index,
      id: item.id,
      label: label,
      value: value,
    }

    return [...acc, entry]
  }, [])

  const result = {
    [state.label]: {
      label: state.label,
      children: children || [],
    },
  }

  return result
}

const ChecklistForm = ({ callback, config }) => {
  const { formDefaultKey, isCategoryForm = false } = config || {}
  const [state, setState] = useState(
    componentConfig(formDefaultKey, isCategoryForm).defaultState,
  )

  const onChangeChildren = (e, index) => {
    const { value, name } = e.target
    const items = [...state.items]
    items[index][name] = value
    setState((state) => ({ ...state, items }))
  }

  const onChange = (e) => {
    const { value, name } = e.target
    setState((state) => ({ ...state, [name]: value }))
  }

  const handleAddField = () => {
    setState((state) => ({
      ...state,
      items: [...state.items, { key: '', value: '', id: uuid() }],
    }))
  }

  const onToggle = ({ name, value }) => {
    setState((state) => ({ ...state, [name]: value }))
  }

  const onRemoveItem = (index) => {
    const items = [...state.items]

    items.splice(index, 1)
    setState((state) => ({ ...state, items }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (!state.items || !state.items.length) return
    if (!!state.isLocalCategoryForm) {
      console.warn('You are attempting to use a category form')
      return
    }
    callback({
      action: FORM_ACTIONS.CREATE,
      value: transmuteArrayToObject(state.items),
    })
  }

  const renderForm = () => {
    if (!state.items || !state.items.length) return null
    const defaultResult = state.items.map((_, index) => {
      return (
        <FieldRow key={index}>
          <Input
            name={'key'}
            label="Key"
            value={state.items[index].key}
            onChange={(e) => onChangeChildren(e, index)}
          />
          <span className="gap">:</span>
          <Input
            name="value"
            label="Value"
            value={state.items[index].value}
            onChange={(e) => onChangeChildren(e, index)}
          />
          <Button variant="red" mt={28} onClick={() => onRemoveItem(index)}>
            <Icon name="CLOSE" stroke={colors.red} size={20} />
          </Button>
        </FieldRow>
      )
    })
    const categoryResult = state.items.map((_, index) => {
      return (
        <FieldRow key={index}>
          <Input
            name={'label'}
            label="Key"
            value={state.items[index].label}
            onChange={(e) => onChangeChildren(e, index)}
          />
          <Input
            name="value"
            label="Value"
            value={state.items[index].value}
            onChange={(e) => onChangeChildren(e, index)}
          />
          <Button variant="red" mt={28} onClick={() => onRemoveItem(index)}>
            <Icon name="CLOSE" stroke={colors.red} size={20} />
          </Button>
        </FieldRow>
      )
    })
    return (
      <Group>
        {state.isLocalCategoryForm ? categoryResult : defaultResult}
      </Group>
    )
  }

  return (
    <CheckFormElement onSubmit={onSubmit}>
      <Header>
        <h1>Add Item</h1>
        <div style={{ display: 'flex', gap: '12px' }}>
          <Toggle
            name="isLocalCategoryForm"
            isActive={state.isLocalCategoryForm}
            onChange={onToggle}
            label={`Category`}
          />
          <Toggle
            name="showCode"
            isActive={state.showCode}
            onChange={onToggle}
            label={`Show output`}
          />
        </div>
      </Header>
      {state.isLocalCategoryForm && (
        <FieldRow>
          <Input
            name="label"
            label="Label"
            onChange={onChange}
            value={state.label}
          />
        </FieldRow>
      )}
      {renderForm()}

      {state.showCode && <StateView state={convertOutput(state)} />}

      <CheckFormControl>
        <Button type="button" variant="purple" onClick={handleAddField}>
          {state.isLocalCategoryForm ? (
            <span className="label">Add Item</span>
          ) : (
            <span className="label">Add Field</span>
          )}
          <Icon ml={5} name="ADD" stroke={colors.purple} size={20} />
        </Button>
        <Button
          type="button"
          variant="red"
          onClick={() => callback({ action: 'CANCEL' })}
        >
          <span>Cancel</span>
          <Icon ml={5} name="RETURN" stroke={colors.red} size={20} />
        </Button>
        <Button type="submit" variant="green">
          <span>Create</span>
          <Icon ml={5} name="ADD" stroke={colors.green} size={20} />
        </Button>
      </CheckFormControl>
    </CheckFormElement>
  )
}

ChecklistForm.propTypes = {
  callback: PropTypes.func,
}

ChecklistForm.defaultProps = {
  callback: () => {},
}

export { ChecklistForm }
