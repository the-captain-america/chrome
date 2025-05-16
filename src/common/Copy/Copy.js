import React, { useRef, useState } from 'react'
import { useOnClickOutside } from '@hooks/useOnClickOutside'
import { prop } from 'ramda'
import styled from 'styled-components'

const Container = styled.div`
  form {
    position: absolute;
    left: -999px;
    top: -999px;
  }
  button {
    border: none;
    outline: none;
    padding: 0;
    margin: 0;
    cursor: pointer;
    min-width: 20px;
    min-height: 20px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
  }
`

const Copy = ({ value = '', config = {}, callback = () => {}, children }) => {
  const [copySuccess, setCopySuccess] = useState(false)
  const textAreaRef = useRef(null)
  const refClickOutside = useRef()

  const layoutStyle = prop('layout')(config)
  const buttonStyle = prop('button')(config)

  useOnClickOutside(refClickOutside, () => {
    setCopySuccess(false)
    if (copySuccess) return
    callback(false)
  })

  const copyToClipboard = (e) => {
    textAreaRef.current.select()
    document.execCommand('copy')
    e.target.focus()
    setCopySuccess(true)
    callback(true)
  }

  return (
    <Container style={layoutStyle}>
      {document.queryCommandSupported('copy') && (
        <button
          ref={refClickOutside}
          className={copySuccess ? 'copy is-active' : 'copy'}
          style={buttonStyle}
          onClick={copyToClipboard}
        >
          {children}
        </button>
      )}
      <form>
        <textarea readOnly ref={textAreaRef} value={value} />
      </form>
    </Container>
  )
}

export { Copy }
