import React, { useEffect, useRef, FunctionComponent } from 'react'

import { Dialog, Form, CloseBtn, Content } from './Modal.styled'
import { ModalProps } from './Modal.types'

export const Modal: FunctionComponent<ModalProps> = ({
  isOpened,
  onClose,
  modalTitle,
  modalContent,
}) => {
  const ref: any = useRef(null)

  const escFunction = (event: React.KeyboardEvent) => {
    event.key === 'Escape' && onClose()
  }

  useEffect(() => {
    isOpened ? ref.current?.showModal() : ref.current?.close()

    if (typeof ref.current?.showModal != 'function') {
      alert('The <dialog> API is not supported by this browser')
    }
  }, [isOpened])

  return (
    <Dialog
      ref={ref}
      title={modalTitle}
      className="modal"
      id="modal"
      onKeyUp={escFunction}
      onKeyDown={escFunction}
      onClick={(e) => {
        if (
          e.nativeEvent.offsetX < 0 ||
          e.nativeEvent.offsetX > ref.current.offsetWidth ||
          e.nativeEvent.offsetY < 0 ||
          e.nativeEvent.offsetY > ref.current.offsetHeight
        ) {
          onClose()
        }
      }}
    >
      <Form method="dialog">
        <CloseBtn
          autoFocus
          className="controls"
          title="close modal"
          value="close"
          onClick={onClose}
        >
          X
        </CloseBtn>
        <Content className="content">
          <p>{modalContent}</p>
        </Content>
      </Form>
    </Dialog>
  )
}
