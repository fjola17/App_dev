import React from 'react';
import { PropTypes } from 'prop-types';
import Modal from '../../Modal';
import BoardInput from '../BoardInput';

const InputModal = ({ isOpen, closeModal, board, create }) => (
  <Modal isOpen={isOpen} closeModal={closeModal}>
    <BoardInput closeModal={closeModal} board={board} create={create} />
  </Modal>
);

InputModal.propTypes = {
  create: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  board: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    thumbnailPhoto: PropTypes.string,
  }).isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default InputModal;
