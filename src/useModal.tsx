import { useState } from 'react'


  // rajouter fermeture au clic en dehors avec react hook useOnClickOutside

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
