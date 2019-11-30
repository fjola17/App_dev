import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal';
import TaskInput from '../TaskInput';

const TaskCreator = ({
  isOpen, closeModal, id, create,
}) => (
  <Modal isOpen={isOpen} closeModal={closeModal}>
    <TaskInput id={id} create={create} />
  </Modal>
);

TaskCreator.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  create: PropTypes.func.isRequired,
};

export default TaskCreator;
