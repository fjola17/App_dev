import React from 'react';
import { Text } from 'react-native';
import Modal from '../Modal';
import ListInput from '../ListInput';

const ListModal = ({ isOpen, closeModal, listid, create }) => (
  <Modal isOpen={isOpen} closeModal={closeModal}>
    <ListInput listid={listid} create={create} />
  </Modal>
);

export default ListModal;