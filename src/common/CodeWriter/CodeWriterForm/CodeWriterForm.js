import React, { useState, useRef, useEffect, forwardRef } from 'react'
import PropTypes from 'prop-types'
import { Input } from '@common/Input'
import { Button } from '@common/Button'
import { Icon } from '@common/Icon'
import styled from 'styled-components'
import { usePrevious } from '@hooks/usePrevious'

const keyCodes = {
  ENTER: 'Enter',
}

const CodeFormContainer = styled.div`
  width: 100%;
`

const CodeWriterForm = forwardRef(
  ({ onSubmit = () => {}, defaultValue = '' }, ref) => {
    const [state, setState] = useState({
      label: '',
      value: '',
    })
    const previousValue = usePrevious(defaultValue)
    const [isFocused, setFocus] = useState(false)
    const labelRef = useRef(null)

    useEffect(() => {
      if (defaultValue !== previousValue) {
        setState((state) => ({ ...state, value: defaultValue }))
      }
    }, [defaultValue])

    const handleClear = () => {
      setState({ value: '', label: '' })
    }

    const handleCreate = () => {
      if (!state.value || !state.value.length) {
        console.warn('No value was added')
        return
      }
      const item = {
        value: state.value,
        label: !!state.label ? state.label : '',
      }
      onSubmit(item)
      handleClear()
      onFocus()
    }

    const onKeyPress = (e) => {
      const key = e.keyCode || e.charCode
      if (key === keyCodes.ENTER || key === 13) {
        handleCreate()
      }
    }

    const onFocus = () => {
      if (labelRef.current) {
        labelRef.current.focus()
        setFocus(true)
      }
    }

    const onBlur = () => {
      setFocus(false)
    }

    const handleChange = (e) => {
      const { name, value } = e.target
      setState((state) => ({ ...state, [name]: value }))
    }

    return (
      <CodeFormContainer ref={ref}>
        <Input
          label="Label"
          name="value"
          value={state.value}
          isFocused={isFocused}
          onBlur={onBlur}
          onKeyPress={onKeyPress}
          onChange={handleChange}
          mt={16}
          variant="secondary"
        />

        <Button mt={16} onClick={handleCreate}>
          <span>Create</span>
          <Icon ml={5} name="ADD" size={20} />
        </Button>
      </CodeFormContainer>
    )
  },
)

CodeWriterForm.defaultProps = {
  callback: () => {},
  data: [],
  showState: true,
  name: 'code-writer-form',
}

CodeWriterForm.propTypes = {
  callback: PropTypes.func,
  showState: PropTypes.bool,
  data: PropTypes.arrayOf(PropTypes.shape({})),
}

export { CodeWriterForm }
