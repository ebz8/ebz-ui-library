import React, { useEffect, useRef, FunctionComponent } from 'react';
import styled from 'styled-components';


/**
 *
 *  STYLE
 */
export const Dialog = styled.dialog`
  display: flex;
  flex-flow: column wrap;
  min-width: 20ch;
  max-width: 90ch;
  border-radius: 4px;
  border: 1px solid white;
  transition: opacity 0.5s ease;

  &:not([open]) {
    pointer-events: none;
    opacity: 0;
  }

  &::backdrop {
    position: fixed;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    backdrop-filter: blur(5px);
    transition: backdrop-filter 0.5s ease;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-flow: column;
  gap: 1.5rem;
`;

export const CloseBtn = styled.button`
  align-self: flex-end;
  width: 2rem;
  border-radius: 100%;
  border: none;
  aspect-ratio: 1;

  &:hover {
    background-color: grey;
  }
`;

export const Content = styled.article`
  overflow-y: scroll;
  max-block-size: 100%; /* safari */
  overscroll-behavior-y: contain;
  display: grid;
  justify-items: flex-start;
`;

/**
 *
 *  TYPES
 */
export type ModalWidthType = 'xl' | 'lg' | 'md' | 'sm';
export interface ModalProps {
  isOpened?: boolean;
  onClose?: () => void;
  modalTitle?: string;
  modalContent?: string;
}

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
  const ref: any = useRef(null);
  // const preventAutoClose = (e: MouseEvent) => e.stopPropagation()

  useEffect(() => {
    isOpened ? ref.current?.showModal() : ref.current?.close();
  }, [isOpened]);

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
  );
};
