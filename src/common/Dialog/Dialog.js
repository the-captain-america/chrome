import React, { useRef, useEffect } from 'react'
import { useDialog } from './DialogProvider'
import { DialogElement } from './Dialog.styled'

const Dialog = ({ className, children }) => {
  const { isOpen, closeDialog } = useDialog()
  const dialogRef = useRef()

  useEffect(() => {
    if (isOpen && dialogRef.current) {
      dialogRef.current.showModal()
    }
    return () => {
      if (dialogRef.current && dialogRef.current.open) {
        dialogRef.current.close()
      }
    }
  }, [isOpen])

  return isOpen ? (
    <DialogElement
      role="dialog"
      aria-hidden={!isOpen}
      ref={dialogRef}
      className={className}
      id="dialog-element"
      ariaModal
    >
      <div className="dialog__content">
        <button onClick={closeDialog} aria-label="Close dialog">
          Close
        </button>
        {children}
      </div>
    </DialogElement>
  ) : (
    <div>{children}</div>
  )
}

export { Dialog }
