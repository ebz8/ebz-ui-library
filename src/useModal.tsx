import { useState } from 'react'

export const useModal = () => {
  const [showModal, setshowModal] = useState<boolean>(false)
  const hideModal = () => setshowModal(false)
  const toggleModal = () => setshowModal((showModal) => !showModal)
  return {
    showModal,
    hideModal,
    toggleModal,
  }
}
