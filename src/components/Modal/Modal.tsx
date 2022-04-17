import React, { FunctionComponent, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import "../Modal/Modal.style.css"

//export interface ModalProps extends HTMLAttributes<HTMLDialogElement> {
export interface ModalProps {
  isOpened?: boolean;
  onClose?: () => void;
  modalTitle?: string;
  modalContent?: string;
}
/**
 *
 *  Modal functional component
 */
export const Modal: FunctionComponent<ModalProps> = ({
  isOpened,
  onClose,
  modalTitle,
  modalContent,
}) => {
  const ref: any = useRef(null);

  useEffect(() => {
    isOpened ? ref.current?.showModal() : ref.current?.close();
  }, [isOpened]);

  const modal = (
    <dialog ref={ref} title={modalTitle} className="modal" id="modal">
      <form method="dialog">
        <button
          autoFocus
          className="controls"
          title="close modal"
          value="close"
          onClick={onClose}
        >
          X
        </button>
        <article className="content">
          <p>{modalContent}</p>
        </article>
      </form>
    </dialog>
  );
  return isOpened ? ReactDOM.createPortal(modal, document.body) : null;
};
