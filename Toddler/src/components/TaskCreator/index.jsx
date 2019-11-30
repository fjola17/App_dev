import React from 'react'
import Modal from '../Modal';
import TaskInput from '../TaskInput';

const TaskCreator = ({isOpen, closeModal, id, create}) => (
    <Modal isOpen={isOpen} closeModal={closeModal}>
        <TaskInput id={id} create={create}/>
    </Modal>
)

export default TaskCreator;