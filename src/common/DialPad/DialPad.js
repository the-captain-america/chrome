import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Screen, Grid, Button, CallButton } from './DialPad.styled'
import { Icon } from '@common/Icon'

/** Dial-pad definition --------------------------------------------------- */
const DIAL_BUTTONS = [
  { id: '1', number: '1', letters: '' },
  { id: '2', number: '2', letters: 'ABC' },
  { id: '3', number: '3', letters: 'DEF' },
  { id: '4', number: '4', letters: 'GHI' },
  { id: '5', number: '5', letters: 'JKL' },
  { id: '6', number: '6', letters: 'MNO' },
  { id: '7', number: '7', letters: 'PQRS' },
  { id: '8', number: '8', letters: 'TUV' },
  { id: '9', number: '9', letters: 'WXYZ' },
  { id: 'star', number: '•', letters: '' },
  { id: '0', number: '0', letters: '+' },
  { id: 'hash', number: '#', letters: '' },
]

/** Component ------------------------------------------------------------- */
const DialPad = ({ sequence = [] }) => {
  const [activeId, setActiveId] = useState('')

  /* Play the highlight sequence whenever `sequence` changes ------------- */
  useEffect(() => {
    if (!sequence.length) return

    const timers = []
    let offset = 0

    sequence.forEach(({ id = '', duration = 0, delay = 0 }) => {
      // start highlight
      timers.push(setTimeout(() => setActiveId(id), offset))
      // stop highlight
      timers.push(setTimeout(() => setActiveId(''), offset + duration))

      offset += duration + delay // move pointer for next item
    })

    return () => timers.forEach(clearTimeout)
  }, [sequence])

  return (
    <Screen $mt={16} $mb={16}>
      <Grid>
        {DIAL_BUTTONS.map(({ id, number, letters }) => (
          <Button key={id} $isActive={activeId === id}>
            <span className="number">{number}</span>
            <span className="letters">{letters}</span>
          </Button>
        ))}
      </Grid>

      {/* call button can also be animated via id === 'call' */}
      <CallButton $isActive={activeId === 'call'} id="call">
        <Icon name="PHONE" size={32} fill="white" stroke="white" />
      </CallButton>
    </Screen>
  )
}

DialPad.propTypes = {
  /**
   * Sequence of button highlights.
   * `duration` = how long the button stays active (ms)
   * `delay`    = pause *after* that button before the next starts (ms)
   * Example:
   *   [ { id: '1', duration: 250, delay: 100 },
   *     { id: '2', duration: 250, delay: 100 } ]
   */
  sequence: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      duration: PropTypes.number, // highlight length
      delay: PropTypes.number, // gap before next
    }),
  ),
}

DialPad.defaultProps = {
  sequence: [],
}

export default DialPad
