import React, { Component } from 'react';
import { View, TextInput, Text, Image, TouchableOpacity } from 'react-native';
// import { PropTypes } from 'prop-types';
import styles from './styles';
import { impWhite, impDark, impLighterDark, impRed } from '../../styles/colors';
import { Entypo } from '@expo/vector-icons';

import { selectFromCameraRoll, addImage } from '../../services/ImageService';

//Base contact form class component to update or add new contacts
class ContactForm extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    if(this.props) {
      //check if props is populated
      const { contact } = this.props;
      this.state = {
        contact,
      };
    } else {
      //if not populated put in default values
      console.log('missing contacts in props');
      const { contact } = [];
      this.state = {
        contact,
      };
    }
    // console.log(this.state.contact.name);
  }

  async selectFromCameraRoll() {
    const photo = await selectFromCameraRoll();
    if (photo.length > 0) { await this.addImage(photo); }
  }

  async addImage(imageLocation) {
    const newImage = await addImage(imageLocation);
    this.setState({ image: newImage.file });
  }

  render() {
    if(!this.state.contact) {
      console.log('missing contacts');
      this.setState({
        contact: {
          image: "https://lumiere-a.akamaihd.net/v1/images/Darth-Vader_6bda9114.jpeg?region=0%2C23%2C1400%2C785&width=768",
          name: "Darth Vader",
          phone: "xxx-xxxx",
        },
      });
    }
    const { image, name, phone } = this.state.contact;
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.selectFromCameraRoll()}>
          <Text style={styles.iconFormat}>Change photo</Text>
          <Image style={styles.image} source={{ uri: image }} />
        </TouchableOpacity>
        <View style={styles.textBoxAlign}>
          <Entypo style={styles.iconFormat} name="user" />
          <TextInput style={styles.nameFormat} placeholder={name} onChangeText={console.log('Add name pressed!')} />
        </View>
        <View style={styles.textBoxAlign}>
          <TouchableOpacity style={styles.touchBox}>
            <Entypo style={styles.iconFormat} name="phone" />
            <TextInput style={styles.phoneFormat} placeholder={phone} onChangeText={console.log('Add phone pressed!')} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default ContactForm;
