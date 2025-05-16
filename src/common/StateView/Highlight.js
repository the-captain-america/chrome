import React from 'react'
import Highlight from 'react-highlight'
import styled from 'styled-components'
import prettier from 'prettier/standalone'
import babylon from 'prettier/parser-babel'

const HighlightContainer = styled.div`
  padding: 3px;
  overflow: hidden;
  border-radius: 15px;
`

const getCodeType = (type) =>
  ({
    js: 'javascript',
    html: 'html',
  }[type])

const formatCode = (code) => {
  const formattedCode = prettier.format(code, {
    parser: 'babel',
    plugins: [babylon],
  })
  return formattedCode
}

const HighlightView = ({ type = 'js', code = ``, ...props }) => {
  if (!type || !code) return null
  const result = formatCode(code)
  return (
    <HighlightContainer className="HighlightContainer" {...props}>
      <Highlight language={getCodeType(type)}>{result}</Highlight>
    </HighlightContainer>
  )
}

export { HighlightView }
