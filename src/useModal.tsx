import { useState } from 'react'

export const useModal = () => {
  const [isOpened, setIsOpened] = useState<boolean>(false)
  // const toggle = () => setIsOpened(!isOpened)
  const toggleModal = () => setIsOpened((isOpened) => !isOpened)
  return {
    isOpened,
    toggleModal,
  }
}
