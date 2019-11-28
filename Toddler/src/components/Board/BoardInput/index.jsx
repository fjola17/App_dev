import React from 'react';
import { Entypo } from '@expo/vector-icons';
import { View, TextInput, Button, Text, Image } from 'react-native';
import { takePhoto, selectFromCameraRoll } from '../../../services/ImageService';
import { addImage } from '../../../services/FileService';

import styles from './styles';

class BoardInput extends React.Component{
  constructor(props){
    super(props);
  }
  state = {
    name : '',
    description: '',
    thumbnailPhoto: 'https://heavyeditorial.files.wordpress.com/2019/11/baby-yoda-toys.jpg?quality=65&strip=all&w=780',
  }
  componentDidMount(){
    const {name, description, thumbnailPhoto} = this.props.board;
    if(thumbnailPhoto){
        this.setState({thumbnailPhoto: thumbnailPhoto})
    }
    if(name){
      this.setState({name:name})
    }
    if(description){
      this.setState({description:description})
    }
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
    this.setState({thumbnailPhoto: newImage.file});
  }
  create(board){
    
  }
  render(){
    const {name, thumbnailPhoto} = this.state;
    let { isOpen, closeModal, board } = this.props;
    let disabled = false;
    if(name.length < 2){
      disabled = true;
    }
    board = this.state;
    return(
      <View>
        <Image style={styles.babyyoda} source={{uri: thumbnailPhoto}} />     
        <TextInput placeholder="Please enter a name for your board" onChangeText={ (value) => this.setState({name:value, nameError: ''}) } value={this.state.name} />
        <Text>Board name must be at least 2 character</Text>
        <TextInput placeholder="Please enter a description for your board" onChangeText={(text) => this.setState({description:text})} value={this.state.description} />
        <Button title="File" onPress={() => this.selectFromCameraRoll()}></Button>
        <Button disabled={disabled} onPress={() => this.create(board)} title="Submit"><Text>Confirm</Text></Button>
      </View>
    );
  };
};

export default BoardInput;
