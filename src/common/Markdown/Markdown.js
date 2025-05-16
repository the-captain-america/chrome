import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { TextArea } from '@common/TextArea'

const Markdown = () => {
  const [state, setState] = React.useState({
    md: `To request a copy of a tax invoice for up to two years after purchase visit the Tax invoice (link) page. A tax invoice is available for the following products, for bookings from Australia only: \n- eTicketBags \n- Seats \n - Carbon offset \n`,
  })

  const onChange = (e) => {
    const { name, value } = e.target
    setState({
      [name]: value,
    })
  }

  const onClear = () => {
    setState({
      md: '',
    })
  }

  return (
    <MarkdownContainer>
      <TextArea name="md" rows={10} onChange={onChange} value={state.md} />
      <button mt={16} mb={16} onClick={onClear}>
        Clear
      </button>
      {state.md && <ReactMarkdown>{state.md}</ReactMarkdown>}
    </MarkdownContainer>
  )
}

export { Markdown }
