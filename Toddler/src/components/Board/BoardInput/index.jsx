import React from 'react';
import { TouchableHighlight, FormLabel, FormInput, FormValidationMessage, Text } from 'react-native';
import styles from './styles';
import Modal from '../../Modal';
/*class BoardInput extends React.Component{
    componentDidMount({isOpen}){
        this.setState({
            isOpen: isOpen
        })
    }
    handleSubmit(){

    }
    render({isOpen, closeModal}){*/
const BoardInput = ({isOpen, closeModal}) =>{
    return(
        <Modal isOpen={isOpen} closeModal={closeModal}>
            <TouchableHighlight><Text>Sub</Text></TouchableHighlight>
        </Modal>
    )
}

export default BoardInput;