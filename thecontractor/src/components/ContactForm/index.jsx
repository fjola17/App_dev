import React, { Component } from 'react';
import { View, TextInput, Text, Image, TouchableOpacity } from 'react-native';
// import { PropTypes } from 'prop-types';
import styles from './styles';
import { impWhite, impDark, impLighterDark, impRed } from '../../styles/colors';
import { Entypo } from '@expo/vector-icons';

import { takePhoto, selectFromCameraRoll } from '../../services/ImageService';
import { addImage } from '../../services/FileService';

//Base contact form class component to update or add new contacts
class ContactForm extends Component {
  // constructor(props) {
  //   super(props);
  //   const { contact } = this.props;
  //   this.state = {
  //     contact,
  //   }
  // }
  state = {
    image: 'https://lumiere-a.akamaihd.net/v1/images/Darth-Vader_6bda9114.jpeg?region=0%2C23%2C1400%2C785&width=768',
    name: "Darth Vader",
    phone: "xxx-xxxx"
  }

  render() {
    const { image, name, phone } = this.state;
    console.log(image);
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: image }} />
        <Text style={styles.textHeader}>Change photo</Text>
        <View style={styles.textBoxAlign}>
          <Entypo style={styles.iconFormat} name="user" />
          <Text style={styles.nameFormat}>{name}</Text>
        </View>
        <View style={styles.textBoxAlign}>
          <TouchableOpacity style={styles.touchBox}>
            <Entypo style={styles.iconFormat} name="phone" />
            <Text style={styles.phoneFormat}>{phone}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default ContactForm;
