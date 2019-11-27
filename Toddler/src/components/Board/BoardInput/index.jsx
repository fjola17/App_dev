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
    nameError: '',
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
  validate(){
    const {name} = this.state;
    let nameError = '';
    if(name == ''){
        nameError = "Name for the board is required";
        this.setState({nameError});
        return false
    }
    
    return true;
  }
  handleSubmit(){
    console.log(this.state);
    if(!this.validate()){
        return;
    }
    // set state for the prop here
    this.props.board = {name: name, description: description, thumbnailPhoto: thumbnailPhoto};
    console.log(this.props.board);

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
    this.setState({thumbnailPhoto: newImage});
  }
    
  render(){
    const {thumbnailPhoto} = this.state;
    console.log(thumbnailPhoto);
    return(
      <View>
        <Image style={styles.babyyoda} source={{uri: thumbnailPhoto}} />
        <TextInput placeholder="Please enter a name for your board" onChangeText={ (value) => this.setState({name:value, nameError: ''}) } value={this.state.name} />
        <TextInput placeholder="Please enter a description for your board" onChangeText={(text) => this.setState({description:text})} value={this.state.description} />
        <Text>{this.state.nameError}</Text>
        <Button title="File" onPress={() => this.selectFromCameraRoll()}></Button>
        <Button title="SUBMIT" onPress={() => this.handleSubmit()} title="Submit"><Text>Sub</Text></Button>
      </View>
    );
  };
};

export default BoardInput;
