export type ModalWidthType = 'xl' | 'lg' | 'md' | 'sm'
export interface ModalProps {
  isOpened?: boolean
  onClose?: () => void
  modalTitle?: string
  modalContent?: string
}
