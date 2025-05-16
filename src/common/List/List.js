import React, { useEffect, useState } from 'react'

import { Section } from '@common/Section'
import { Button } from '@common/Button'
import { Icon } from '@common/Icon'
import { useDispatch } from 'react-redux'
import { DefaultState } from '@common/DefaultState'
import { Modal } from '@common/Modal'
import { Row, Col } from '@common/Grid'
import { usePortal as Portal } from '@hooks/usePortal'
import { RenderList } from './RenderList'
// import { deleteResource, updateResource } from '@state/resource'
import { Input } from '@common/Input'

import { Group, ListContainer, ListControls } from './List.styled'
import { Select } from '@common/Select'

const lookupNote =
  (items = []) =>
  (id) =>
    items.find((item) => item.id === id)

const categoryOptions = [
  {
    label: 'Git',
    value: 'git',
    index: 0,
  },
  {
    label: 'Jira',
    value: 'jira',
    index: 6,
  },
  {
    label: 'Splunk',
    value: 'splunk',
    index: 1,
  },
  {
    label: 'Jest',
    value: 'jest',
    index: 2,
  },
  {
    label: 'Cypress',
    value: 'cypress',
    index: 3,
  },
  {
    label: 'Terminal',
    value: 'terminal',
    index: 4,
  },
  {
    label: 'Commands',
    value: 'commands',
    index: 5,
  },
]

const typeOptions = [
  {
    label: 'js',
    value: 'js',
    index: 0,
  },
  {
    label: 'html',
    value: 'html',
    index: 1,
  },
  {
    label: 'scss',
    value: 'scss',
    index: 2,
  },
  {
    label: 'text',
    value: 'text',
    index: 3,
  },
  {
    label: 'bash',
    value: 'bash',
    index: 4,
  },
]

const NoteEditor = ({ callback, items = [], activeId = '' }) => {
  const [state, setState] = useState({
    label: '',
    value: '',
    category: '',
    type: 'js',
  })

  useEffect(() => {
    const foundNote = lookupNote(items)(activeId)
    if (foundNote) setState(foundNote)
  }, [activeId])

  const onChange = (e) => {
    const { value, name } = e.target
    setState((state) => ({
      ...state,
      [name]: value,
    }))
  }

  const handleSelect = ({ name, value }) => {
    setState((state) => ({
      ...state,
      [name]: value,
    }))
  }

  const onSubmit = () => {
    if (!state.label || !state.value) return
    callback(state)
  }

  return (
    <>
      <ListContainer>
        <Row>
          <Col xs={12} sm={12}>
            <Input
              mt={16}
              label="Label"
              variant="secondary"
              placeholder="Label"
              onChange={onChange}
              value={state.label}
              name={`label`}
            />
            <Input
              mt={16}
              label="Value"
              variant="secondary"
              placeholder="Copied string.."
              onChange={onChange}
              value={state.value}
              name={`value`}
            />
          </Col>
          <Col xs={6} sm={6}>
            <Select
              name="category"
              value={state.category}
              label="Choose Category"
              mt={16}
              options={categoryOptions}
              callback={handleSelect}
            />
          </Col>

          <Col xs={6} sm={6}>
            <Select
              name="type"
              mt={16}
              label="Choose Type"
              callback={handleSelect}
              options={typeOptions}
              value={state.type}
            />
          </Col>
        </Row>
      </ListContainer>
      <ListControls>
        <Button label="Update Note" onClick={onSubmit}>
          <Icon ml={6} name="SAVE" stroke="white" size={20} />
        </Button>
      </ListControls>
    </>
  )
}

const getItems = (items) => items.filter((item) => item.active !== false)

const List = ({
  items: itemsList,
  priority,
  height,
  title,
  children,
  id,
  ...props
}) => {
  const dispatch = useDispatch()
  const [updateMode, setupdateMode] = useState(false)
  const [activeNoteId, setActiveNote] = useState(-1)

  const items = getItems(itemsList)

  const handleEdit = ({ id }) => {
    setupdateMode(true)
    setActiveNote(id)
  }

  const handleCallback = () => {}

  const handleCallbackCreate = ({ action }) => {
    if (action === 'CLOSE') {
      setupdateMode(false)
      return
    } else if (action === 'OPENED') {
      setupdateMode(true)
    }
  }

  const onUpdateNote = (payload) => {
    setActiveNote(-1)
    // dispatch(updateResource(payload))
  }

  const onRemove = ({ id }) => {
    // if (id) {
    //   dispatch(deleteResource(id))
    // }
  }

  if (!items || items.length <= 0) {
    return <DefaultState />
  }

  return (
    <Section
      title={title}
      priority={priority}
      id={id}
      path="src/features/List/List.js"
    >
      {children}
      <Group maxHeight={height}>
        <RenderList
          onEdit={handleEdit}
          onRemove={onRemove}
          callback={handleCallback}
          items={items}
          title={title}
          data={props.data}
        />
      </Group>
      {updateMode && activeNoteId !== -1 && items.length && (
        <Portal selector={`#note-${id}`}>
          <Modal
            callback={handleCallbackCreate}
            config={{ hasExpand: false }}
            title="Update Note"
          >
            <NoteEditor
              items={items}
              activeId={activeNoteId}
              callback={onUpdateNote}
            />
          </Modal>
        </Portal>
      )}
      <div id={`note-${id}`} />
    </Section>
  )
}

List.defaultProps = {
  height: 600,
  title: '',
  items: [],
  priority: '',
  id: '',
}

export { List }
