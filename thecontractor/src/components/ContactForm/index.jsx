import React, { Component } from 'react';
import { View, TextInput, Text, Image, TouchableOpacity } from 'react-native';
// import { PropTypes } from 'prop-types';
import styles from './styles';
import { impWhite, impDark, impLighterDark, impRed } from '../../styles/colors';
import { Entypo } from '@expo/vector-icons';

import { selectFromCameraRoll } from '../../services/ImageService';

//Base contact form class component to update or add new contacts
class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: 'https://lumiere-a.akamaihd.net/v1/images/Darth-Vader_6bda9114.jpeg?region=0%2C23%2C1400%2C785&width=768',
      name: "Darth Vader",
      phone: "xxx-xxxx",
      hasImage: false,
    };
  }

  render() {
    const { image, name, phone, hasImage } = this.state;
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: image }} />
        <Text style={styles.textHeader}>Change photo</Text>
        <View style={styles.textBoxAlign}>
          <Entypo style={styles.iconFormat} name="user" />
          {/* <Text style={styles.nameFormat}>{name}</Text> */}
          <TextInput style={styles.nameFormat} placeholder={name} onChangeText={console.log('Add name pressed!')} />
        </View>
        <View style={styles.textBoxAlign}>
          <TouchableOpacity style={styles.touchBox}>
            <Entypo style={styles.iconFormat} name="phone" />
            {/* <Text style={styles.phoneFormat}>{phone}</Text> */}
            <TextInput style={styles.phoneFormat} placeholder={phone} onChangeText={console.log('Add phone pressed!')} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default ContactForm;
