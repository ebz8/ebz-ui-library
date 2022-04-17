import React from 'react'
import { Meta, Story } from '@storybook/react'

import { ModalProps } from '../src/Modal.types'
import { Modal } from '../src/Modal'
import { useModal } from '../src/useModal'

const meta: Meta = {
  title: 'Accessible Modal',
  component: Modal,
}
export default meta

const Template: Story<ModalProps> = (args) => <Modal {...args} />

// export function Demo = () => {
//     const { isOpened, toggle } = useModal()
// }

export const Default = Template.bind({})
Default.args = {
  isOpened: false,
  onClose: {},
  modalContent: 'Test modale affichée',
}

// export const isClosed = Template.bind({});
// isOpened.args = {
//   isOpened: false,
//   modalContent: 'Test modale fermée',
// };
