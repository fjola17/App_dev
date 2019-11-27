import React from 'react';
import Modal from '../../Modal';
import BoardInput from '../BoardInput';
import styles from './styles';

const InputModal = ({ isOpen, closeModal, board }) => (
  <Modal isOpen={isOpen} closeModal={closeModal}>
    <BoardInput closeModal={closeModal} board={board} />
  </Modal>
);

export default InputModal;
