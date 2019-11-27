import React from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { takePhoto } from '../../../services/BoardService';
import { Entypo } from '@expo/vector-icons';
import styles from './styles';

class BoardInput extends React.Component{
    state = {
        name : '',
        description: '',
        imgage: '',
        nameError: '',
        submit: false
    }
    
    validate(){ 
        const name = this.state.name;
        let nameError = '';
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
        if(!this.validate()){
            return;
        }
        this.setState({submit:true})
    }
    async takePhoto(){
        const photo = await takePhoto();
    }
    render(){
        let hasErrors = false;
        if(this.state.nameError != ''){
            hasErrors = true;
        }
        return(
            <View>
                <TextInput placeholder="Please enter a name for your board" onChangeText={ (value) => this.setState({name:value, nameError: ''}) } value={this.state.name} />
                <TextInput placeholder="Please enter a description for your board" onChangeText={(text) => this.setState({description:text})} value={this.state.description} />
                <Text>{this.state.nameError}</Text>
                <Button title="Camera roll" onPress={() => this.takePhoto()}></Button>
                <Button disabled={hasErrors} onPress={() => this.handleSubmit()} title="Submit"><Text>Sub</Text></Button>
            </View>
        );
  }
};

export default BoardInput;