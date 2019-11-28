import React from 'react';
import { Entypo } from '@expo/vector-icons';
import { View, TextInput, Text, Image, TouchableOpacity } from 'react-native';
import { takePhoto, selectFromCameraRoll } from '../../../services/ImageService';
import { addImage } from '../../../services/FileService';
import { Form } from 'react-native-form';
import Modal from '../../Modal';

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
      this.setState({name:name});
    }
    if(description){
      this.setState({description:description});
    }
  }
  refreshIfModalIsclosed(){
    this.setState({
      name : '',
      description: '',
      thumbnailPhoto: 'https://heavyeditorial.files.wordpress.com/2019/11/baby-yoda-toys.jpg?quality=65&strip=all&w=780',
    })
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
  render(){
    const {name, thumbnailPhoto} = this.state;
    const { isOpen, closeModal } = this.props;
    let disabled = false;
    if(name.length < 2){
      disabled = true;
    }
    const board = this.state;
    return(
      <Modal isOpen={isOpen} closeModal={closeModal}>
        <Image style={styles.babyyoda} source={{uri: thumbnailPhoto}} />
        <TouchableOpacity onPress={() => this.selectFromCameraRoll()}><Entypo style={styles.img} name="image" /><Text>Change image</Text></TouchableOpacity>    
        <TextInput placeholder="Please enter a name for your board" onChangeText={ (value) => this.setState({name:value, nameError: ''}) } value={this.state.name} />
        <Text>Board name must be at least 2 character</Text>
        <TextInput placeholder="Please enter a description for your board" onChangeText={(text) => this.setState({description:text})} value={this.state.description} />
        <TouchableOpacity disabled={disabled} onPress={()=> this.props.create(board) }><Text>Confirm</Text></TouchableOpacity>
      </Modal>
    );
  };
};

export default BoardInput;
