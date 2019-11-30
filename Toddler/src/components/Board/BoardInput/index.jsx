import React from 'react';
import { Entypo } from '@expo/vector-icons';
import { View, TextInput, Text, Image, TouchableOpacity, Button } from 'react-native';
import { takePhoto, selectFromCameraRoll } from '../../../services/ImageService';
import { addImage } from '../../../services/FileService';

import styles from './styles';

class BoardInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: -1,
      name: '',
      thumbnailPhoto: 'https://heavyeditorial.files.wordpress.com/2019/11/baby-yoda-toys.jpg?quality=65&strip=all&w=780',
      description: '',
    };
  }

  componentDidMount() {
    const{ id, name, description, thumbnailPhoto } = this.props.board;
    if(id){
      this.setState({id: id});
    }
    if(thumbnailPhoto){
        this.setState({thumbnailPhoto: thumbnailPhoto});
    }
    if(name){
      this.setState({name: name});
    }
    if(description){
      this.setState({description: description});
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
  render(){
    const {id, name, thumbnailPhoto, description} = this.state;
    const board = {id: id, name: name, thumbnailPhoto: thumbnailPhoto, description: description};
    let disabled = false;
    if(!name){
      disabled = true;
    }
    return(
      <View style={styles.view}>
        <TouchableOpacity onPress={() => this.selectFromCameraRoll()}>
          <Text style={styles.data}>Change current image</Text>
          <Image style={styles.babyyoda} source={{uri: thumbnailPhoto}} />
        </TouchableOpacity>
        <Text style={styles.data}>Name</Text>
        <TextInput placeholder="Please enter a name for your board" onChangeText={ (value) => this.setState({name:value}) } value={name} />
        <Text style={styles.data}>Description</Text>
        <TextInput placeholder="Please enter a description for your board" onChangeText={(text) => this.setState({description:text})} value={this.state.description} />
        <TouchableOpacity disabled={disabled} onPress={()=> this.props.create(board) }><Text style={styles.button}>Confirm</Text></TouchableOpacity>
      </View>
    );
  };
};

export default BoardInput;
