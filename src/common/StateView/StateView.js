import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { Icon } from '@common/Icon'
import { delay } from '@utils/delay'
import { useOnClickOutside } from './hooks/useOnClickOutside'
import { SyntaxPre, syntaxHighlight } from './Syntax'
import { Label } from '@common/Label'
import { Wrapper, StateViewCopyButton, Container } from './StateView.styled'

const StateView = ({
  state,
  theme,
  maxHeight,
  extend,
  minHeight,
  label,
  options = {},
  config = {},
  bgColor,
  ...props
}) => {
  const { enableElipsis } = options
  const [html, setHtml] = useState(null)
  const prevCountRef = useRef(0)

  const { maxWidth = '100%', width } = config

  const [code, setCode] = useState('')
  const codeRef = useRef()
  const copyRef = useRef()
  const [isActive, setIsActive] = useState(false)

  const copyToClipboard = (e) => {
    codeRef.current.select()
    document.execCommand('copy')
    e.target.focus()
    e.preventDefault()
    setIsActive(true)
  }

  useOnClickOutside(copyRef, () => {
    if (!isActive) return
    setIsActive(false)
  })

  useEffect(() => {
    if (!isActive) return
    // setTimeout
    delay(1500).then(() => setIsActive(false))
  }, [isActive])

  useEffect(() => {
    /**
     * assign the latest render value of count to the ref
     * However, assigning a value to ref doesn't re-render the app
     * So, prevCountRef.current in the return statement displays the
     * last value in the ref at the time of render i.e., the previous state value.
     */
    prevCountRef.current = state

    if (prevCountRef !== state) {
      setHtml(syntaxHighlight(JSON.stringify(state, undefined, 4)))
      setCode(JSON.stringify(state, undefined, 4))
    }
  }, [state]) //run this code when the value of count changes

  const createMarkup = () => {
    return {
      __html: html,
    }
  }

  const renderMarkup = () => {
    if (!html) return null
    return (
      <SyntaxPre
        bgColor={bgColor}
        themeType={theme}
        enableElipsis={enableElipsis}
        dangerouslySetInnerHTML={createMarkup()}
      />
    )
  }

  return (
    <>
      {label && (
        <Label className="StateViewLabel" htmlFor={`code`}>
          {label}
        </Label>
      )}
      <Container
        maxHeight={maxHeight}
        minHeight={minHeight}
        extend={extend}
        $maxWidth={maxWidth}
        $width={width}
      >
        <Wrapper
          maxHeight={maxHeight}
          minHeight={minHeight}
          className="StateView"
          {...props}
        >
          {renderMarkup()}
          <textarea
            defaultValue={code}
            placeholder="Code Snippet"
            ref={codeRef}
            name={`code`}
          />
        </Wrapper>
        <StateViewCopyButton
          ref={copyRef}
          className={isActive ? 'is-active' : ''}
          onClick={copyToClipboard}
        >
          <Icon mr={5} name="COPY" size={20} />
          <span className="label">{isActive ? 'Copied...' : `Copy`}</span>
        </StateViewCopyButton>
      </Container>
    </>
  )
}

StateView.defaultProps = {
  state: null,
  theme: 'MONOKI',
  type: 'js',
  label: '',
  height: 0,
}

StateView.propTypes = {
  mt: PropTypes.number,
  mb: PropTypes.number,
  state: PropTypes.any,
  height: PropTypes.number,
  theme: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  maxHeight: PropTypes.number,
  config: PropTypes.shape({
    asCode: PropTypes.bool,
    isCopyVariant: PropTypes.bool,
    layout: PropTypes.shape({
      background: PropTypes.string,
    }),
  }),
}

export { StateView, syntaxHighlight }
