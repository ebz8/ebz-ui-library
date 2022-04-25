import React from 'react'
import { Meta, Story } from '@storybook/react'
import { useArgs } from '@storybook/client-api'

import { ModalProps } from '../src/Modal.types'
import { Modal } from '../src/Modal'
import { useModal } from '../src/useModal'

const meta: Meta = {
  title: 'Modal',
  component: Modal,
  argTypes: { isOpened: { control: { boolean: true } } },
  args: {
    modalContent: 'Test',
    onClose: () => {},
  },
}
export default meta

const Template: Story<ModalProps> = ({ onClose, ...args }) => {
  const [{ isOpened }, updateArgs] = useArgs()
  const { showModal, hideModal, toggleModal } = useModal()

  const handleHideModal = () => updateArgs({ isOpened: toggleModal() })

  return <Modal isOpened={showModal} onClose={handleHideModal} {...args} />
}

export const Default = Template.bind({})