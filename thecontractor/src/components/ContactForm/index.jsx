import React, { Component } from 'react';
import { View, TextInput, Text, Image, TouchableOpacity } from 'react-native';
// import { PropTypes } from 'prop-types';
import styles from './styles';
import { impWhite, impDark, impLighterDark, impRed } from '../../styles/colors';

import { selectFromCameraRoll } from '../../services/ImageService';

//Base contact form class component to update or add new contacts
class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      phone: '',
      image: 'https://heavyeditorial.files.wordpress.com/2019/11/baby-yoda-toys.jpg?quality=65&strip=all&w=780',
      hasImage: false,
    };
  }

  render() {
    const { name, phone, image, hasImage } = this.state;
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={console.log("Edit image pressed!")}>
          <Text style={styles.textHeader}>Change photo</Text>

          <Image style={{ height: 200, width: 200 }} source={{uri: this.state.image}} />
        </TouchableOpacity>

        <Text style={styles.textHeader}>Name:</Text>
        <TextInput placeholder="Your Name" onChangeText={console.log('Add name pressed!')} />
        <Text style={styles.textHeader}>Phone</Text>
        <TextInput placeholder="Your phone: 666-6666" onChangeText={console.log('Add phone pressed!')} />
        <TouchableOpacity onPress={console.log('Create new contact button pressed')}>
          <Text style={styles.button}>Update or Add New</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default ContactForm;
