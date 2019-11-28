import React from 'react';
import Modal from '../Modal';
import {Text} from 'react-native'

const ListModal = ({ isOpen, closeModal, list, create }) => (
  <Modal isOpen={isOpen} closeModal={closeModal}>
    <Text>Hello there obi wan here</Text>
  </Modal>
);

export default ListModal;