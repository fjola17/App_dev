import React from 'react';
import { Text } from 'react-native';
import Modal from '../Modal';
import ListInput from '../ListInput';

const ListModal = ({ isOpen, closeModal, list, create }) => (
  <Modal isOpen={isOpen} closeModal={closeModal}>
    <ListInput list={list} create={create} />
  </Modal>
);

export default ListModal;