import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { ModalElement } from './Modal.styled'

const Modal = ({ className, children, isOpen = false, id, onClose = () => {}, ...props }) => {
  const dialogRef = useRef()

  const handleBackdropClick = (event) => {
    if (event.target === dialogRef.current) onClose()
  }

  return (
    <ModalElement
      id={id}
      role="dialog"
      aria-modal="true"
      ref={dialogRef}
      className={className}
      onClick={handleBackdropClick}
      {...props}
    >
      <div className="modal-content">{children}</div>
    </ModalElement>
  )
}

Modal.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  isOpen: PropTypes.bool.isRequired,
  id: PropTypes.string,
}

export default Modal
