import React, { useEffect, useRef, FunctionComponent } from 'react'
import { Dialog, Form, CloseBtn, Content } from './Modal.styled'
import { ModalProps } from './Modal.types'

/**
 *
 *  FUNCTIONAL COMPONENT
 */
export const Modal: FunctionComponent<ModalProps> = ({
  isOpened,
  onClose,
  modalTitle,
  modalContent,
}) => {
  const ref: any = useRef(null)
  // const preventAutoClose = (e: MouseEvent) => e.stopPropagation()

  useEffect(() => {
    isOpened ? ref.current?.showModal() : ref.current?.close()
  }, [isOpened])

  return (
    <Dialog ref={ref} title={modalTitle} className="modal" id="modal">
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
