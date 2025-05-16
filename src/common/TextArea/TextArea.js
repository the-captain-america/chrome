import React, { forwardRef, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import {
  Primary,
  FieldLabel,
  FieldForm,
  TextAreaButton,
} from './TextArea.styled'
import { FieldGroup } from '@common/FieldGroup'
import { Icon } from '@common/Icon'

import { useOnClickOutside } from '@hooks/useOnClickOutside'

const TextArea = forwardRef(
  (
    {
      config,
      label,
      variant,
      mb,
      mt,
      rows,
      readOnly,
      value,
      maxHeight,
      ...props
    },
    ref,
  ) => {
    const { isCopyVariant, layoutStyle } = config || {}
    const refClickOutside = useRef()

    const TextField = Primary

    const [isActive, setIsActive] = useState(false)
    const textAreaRef = useRef(null)

    const copyToClipboard = (e) => {
      textAreaRef.current.select()
      document.execCommand('copy')
      e.target.focus()
      e.preventDefault()
      setIsActive(true)
    }

    useOnClickOutside(refClickOutside, () => {
      if (!isActive) return
      setIsActive(false)
    })

    return (
      <FieldGroup
        variant={label && label.length ? 'ELEMENT' : 'FRAGMENT'}
        mb={mb}
        mt={mt}
      >
        {label && <FieldLabel>{label}</FieldLabel>}
        <TextField
          style={layoutStyle}
          ref={ref}
          rows={rows}
          value={value}
          readOnly={readOnly}
          maxHeight={maxHeight}
          {...props}
        />
        {isCopyVariant && (
          <TextAreaButton isActive={isActive} onClick={copyToClipboard}>
            <span>{isActive ? 'Copied' : 'Copy'}</span>
            <Icon
              ml={5}
              stroke={isActive ? 'black' : 'white'}
              name="COPY"
              size={20}
            />
          </TextAreaButton>
        )}
        {isCopyVariant && (
          <FieldForm ref={refClickOutside}>
            <textarea readOnly ref={textAreaRef} value={value} />
          </FieldForm>
        )}
      </FieldGroup>
    )
  },
)

TextArea.defaultProps = {
  rows: 6,
  label: '',
  readOnly: false,
  config: {
    isCopyVariant: true,
  },
}

TextArea.propTypes = {
  rows: PropTypes.number,
  readOnly: PropTypes.bool,
  label: PropTypes.string,
  config: PropTypes.shape({
    isCopyVariant: PropTypes.bool,
  }),
}

export { TextArea }
