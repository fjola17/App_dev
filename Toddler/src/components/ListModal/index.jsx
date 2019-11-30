import React from 'react';
import { PropTypes } from 'prop-types';
import Modal from '../Modal';
import ListInput from '../ListInput';

const ListModal = ({ isOpen, closeModal, listid, create }) => (
  <Modal isOpen={isOpen} closeModal={closeModal}>
    <ListInput listid={listid} create={create} />
  </Modal>
);

ListModal.propTypes = {
  create: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  listid: PropTypes.number.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default ListModal;
