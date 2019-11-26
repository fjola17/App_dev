import React from 'react';
import styles from './styles';
import Modal from '../../Modal';
import BoardInput from '../BoardInput';

const InputModal = ({isOpen, closeModal}) =>{
    return(
        <Modal isOpen={isOpen} closeModal={closeModal}>
            <BoardInput />
        </Modal>
    )
}

export default InputModal;