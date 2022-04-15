import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Modal, ModalProps } from '../src/components/Modal/Modal';

const meta: Meta = {
  title: 'Accessible Modal',
  component: Modal,
};

export default meta;

const Template: Story<ModalProps> = (args) => <Modal {...args} />;

export const Default = Template.bind({});
Default.args = {
  isOpened: true,
  modalContent: 'Test modale affichée',
};

// export const isClosed = Template.bind({});
// isOpened.args = {
//   isOpened: false,
//   modalContent: 'Test modale fermée',
// };
