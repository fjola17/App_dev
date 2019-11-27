import React from 'react';
import { View, TextInput, Button, Text, Image } from 'react-native';
import { takePhoto, selectFromCameraRoll } from '../../../services/BoardService';
import { addImage } from '../../../services/FileService';
import { Entypo } from '@expo/vector-icons';
import styles from './styles';

class BoardInput extends React.Component{
    state = {
        name : '',
        description: '',
        thumbnailPhoto: 'https://heavyeditorial.files.wordpress.com/2019/11/baby-yoda-toys.jpg?quality=65&strip=all&w=780',
        nameError: '',
        submit: this.props.isOpen,
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
        if(photo.lenght > 0){ await this.addImage(photo); }
    }
    async selectFromCameraRoll(){
        const photo = await selectFromCameraRoll();
        if (photo.length > 0) { await this.addImage(photo); }
    }
    async addImage(imageLocation) {
        const newImage = await addImage(imageLocation);
        this.setState({image: newImage})
    }
    render(){
        let hasErrors = false;
        if(this.state.nameError != ''){
            hasErrors = true;
        }
        const image = this.state.thumbnailPhoto;
        return(
            <View>
                <Image style={styles.babyyoda} source={{uri: image}} />
                <TextInput placeholder="Please enter a name for your board" onChangeText={ (value) => this.setState({name:value, nameError: ''}) } value={this.state.name} />
                <TextInput placeholder="Please enter a description for your board" onChangeText={(text) => this.setState({description:text})} value={this.state.description} />
                <Text>{this.state.nameError}</Text>
                <Button title="Camera roll" onPress={() => this.takePhoto()}></Button>
                <Button title="File" onPress={() => this.selectFromCameraRoll()}></Button>
                <Button disabled={hasErrors} onPress={() => this.handleSubmit()} title="Submit"><Text>Sub</Text></Button>
            </View>
        );
  };
};

export default BoardInput;