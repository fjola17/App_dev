import React from 'react'
import PropTypes from 'prop-types';
import Modal from '../Modal';
import TaskInput from '../TaskInput';

const TaskCreator = ({
  isOpen, closeModal, id, create
}) => (
  <Modal isOpen={isOpen} closeModal={closeModal}>
    <TaskInput id={id} create={create} />
  </Modal>
);

TaskCreator.propTypes = {
  isOpen: PropTypes.bool,
  closeModal: PropTypes.func,
  id: PropTypes.number,
  create: PropTypes.func,
}

export default TaskCreator;
