import React, { Component } from 'react';
import { View, TextInput, Text, Image, TouchableOpacity } from 'react-native';
// import { PropTypes } from 'prop-types';
import { Entypo } from '@expo/vector-icons';
import styles from './styles';
// import { impWhite, impDark, impLighterDark, impRed } from '../../styles/colors';

import { selectFromCameraRoll, addImage } from '../../services/ImageService';

// Base contact form class component to update or add new contacts
class ContactForm extends Component {
  constructor(props) {
    super(props);
    // check if props is populated
    const { contact } = this.props;
    this.state = {
      contact,
    };
    // console.log(contact);
  }

  async selectFromCameraRoll() {
    const photo = await selectFromCameraRoll();
    if (photo.length > 0) { await this.addImage(photo); }
  }

  async addImage(imageLocation) {
    const newImage = await addImage(imageLocation);
    const { image } = this.state.contact;
    this.setState({ image: newImage.file });
  }

  render() {
    const { image, name, phone } = this.state.contact;
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.selectFromCameraRoll()}>
          <Text style={styles.iconFormat}>Change photo</Text>
          <Image style={styles.image} source={{ uri: image }} />
        </TouchableOpacity>
        <View style={styles.textBoxAlign}>
          <Entypo style={styles.iconFormat} name="user" />
          <TextInput 
            style={styles.nameFormat}
            placeholder={name}
            onChangeText={(name) => this.setState({name})}
          />
        </View>
        <View style={styles.textBoxAlign}>
          <TouchableOpacity style={styles.touchBox}>
            <Entypo style={styles.iconFormat} name="phone" />
            <TextInput 
              style={styles.phoneFormat}
              placeholder={phone}
              onChangeText={(phone) => this.setState({phone})}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default ContactForm;
