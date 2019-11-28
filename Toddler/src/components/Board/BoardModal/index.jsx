import React from 'react';
import Modal from '../../Modal';
import BoardInput from '../BoardInput';

const InputModal = ({ isOpen, closeModal, board, create }) => {
    return(
  <Modal isOpen={isOpen} closeModal={closeModal}>
    <BoardInput closeModal={closeModal} board={board} create={create} />
  </Modal>
    )
};

export default InputModal;