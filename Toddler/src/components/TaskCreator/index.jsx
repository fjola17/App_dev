import React from 'react'
import { Text} from 'react-native';
import Modal from '../Modal';
//import TaskInput from 

const TaskCreator = ({isOpen, closeModal, id}) => (
    <Modal isOpen={isOpen} closeModal={closeModal}><Text>Guay</Text></Modal>
)

export default TaskCreator;