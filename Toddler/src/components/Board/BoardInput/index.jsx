import React from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import styles from './styles';
import Modal from '../../Modal';

class BoardInput extends React.Component{
    state = {
        name : '',
        nameError: ''
    }
    
    updateName(name, value){
        console.log(name, value, this.state)
        this.setState({[name]:value})
    }
    validate(){
        const name = this.state.name;
        let nameError = this.state.nameError;
        if(!name){
            nameError = "Name for the board is required"
        }
        this.setState({nameError});

        if(Object.keys.errors > 0){
            return false;
        }
        return true;
    }
    handleSubmit(){
        if(!this.validate){
            return;
        }
        console.log("I could submit ;)")
    }
    
    render(){
        let hasErrors = false;
        if(this.state.nameError != ''){
            hasErrors = true;
        }
        return(
            <View>
                <TextInput placeholder="Please enter a name for your board" value={this.state.name} onChangeText={ (text) => this.updateName("name",this.text) } />
                <Text>{this.state.nameError}</Text>
                <Button title="Select a image"></Button>
                <Button disabled={hasErrors} onPress={() => this.validate()} title="Submit"><Text>Sub</Text></Button>
            </View>
        );
  }
};

export default BoardInput;