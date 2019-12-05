import React, { Component } from 'react';
import { View, TextInput, Text, Image, TouchableOpacity } from 'react-native';
// import { PropTypes } from 'prop-types';
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './styles';
// import { impWhite, impDark, impLighterDark, impRed } from '../../styles/colors';
import { AddOrModifyContact } from '../../services/FileService';
import { selectFromCameraRoll, addImage } from '../../services/ImageService';
import { impLighterDark, impDark, impOrange } from '../../styles/colors';

// Base contact form class component to update or add new contacts
class ContactForm extends Component {
  constructor(props) {
    super(props);
    // check if props is populated
    const { image, name, phone } = this.props.contact;
    // const { contact } = this.props;
    this.state = {
      image,
      name,
      phone,
    };
    // const curr = this.state;
    // console.log(`Curr in constructor is: ${curr.name}`);
  }

  async selectFromCameraRoll() {
    const photo = await selectFromCameraRoll();
    if (photo.length > 0) { await this.addImage(photo); }
  }

  async addImage(imageLocation) {
    const newImage = await addImage(imageLocation);
    const { image } = this.state;
    this.setState({ image: newImage.file });
  }

  render() {
    // console.log(`Curr in constructor is: ${contact}`);
    const curr = this.state;
    console.log(`Curr in render is: ${curr.name}`);
    const { image, name, phone } = this.state;
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.selectFromCameraRoll()}>
          <Image style={styles.image} source={{ uri: image }} />
        </TouchableOpacity>
        <Text style={styles.changePhoto}>
          <Entypo
            style={styles.changePhoto}
            name="camera"
          />
        </Text>
        <View style={styles.textBoxAlign}>
          <Entypo style={styles.iconFormat} name="user" />
          <TextInput 
            style={styles.nameFormat}
            placeholder={name}
            placeholderTextColor={impLighterDark}
            onChangeText={() => this.setState({ name })}
          />
        </View>
        <View style={styles.textBoxAlign}>
          <TouchableOpacity style={styles.touchBox}>
            <Entypo style={styles.iconFormat} name="phone" />
            <TextInput
              style={styles.phoneFormat}
              placeholder={phone}
              placeholderTextColor={impLighterDark}
              onChangeText={() => this.setState({ phone })}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.boxContainer}>
          <TouchableOpacity
            style={styles.buttonBox}
            onPress={console.log(`Save button curr: ${curr.name}, data: ${name}`)}
            // onPress={console.log(`Save button curr: ${curr.name}`)}
            // onPress={AddOrModifyContact(contact, this.state)}
          >
            <Text style={styles.updateButton}>
              <Entypo 
                style={{ fontSize: 25 }}
                name="save"
              />
              {'  '}
              Save Info
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default ContactForm;
