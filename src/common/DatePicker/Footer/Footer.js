import React, { forwardRef } from 'react'
import { FooterControls, FooterButton } from './Footer.styled'

const Footer = forwardRef(({ onCancel = () => {}, onSubmit = () => {} }, ref) => {
  const actions = {
    submit: onSubmit,
    cancel: onCancel,
  }

  const handlePress = ({ name, key }) => {
    if ((key === 'Enter' || key === ' ') && actions[name]) actions[name]()
  }

  return (
    <FooterControls ref={ref}>
      <FooterButton
        className="datepicker-footer-cancel"
        type="button"
        id="datepicker-footer-cancel"
        onClick={onCancel}
        name="cancel"
        onKeyPress={handlePress}
      >
        <span>Cancel</span>
      </FooterButton>
      <FooterButton
        className="datepicker-footer-submit"
        type="button"
        id="datepicker-footer-submit"
        onClick={onSubmit}
        name="submit"
        onKeyPress={handlePress}
      >
        <span>Ok</span>
      </FooterButton>
    </FooterControls>
  )
})

export default Footer
