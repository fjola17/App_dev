import React, { Component } from 'react';
import { View, TextInput, Text, Image, TouchableOpacity } from 'react-native';
import { PropTypes } from 'prop-types';
import { Entypo } from '@expo/vector-icons';
import styles from './styles';
import { selectFromCameraRoll, addImage } from '../../services/ImageService';
import { impLighterDark } from '../../styles/colors';

// Base contact form class component to update or add new contacts
class ContactForm extends Component {
  constructor(props) {
    super(props);
    // check if props is populated
    const { contact } = this.props;
    const { image, name, phone } = contact;
    this.state = {
      image,
      name,
      phone,
    };
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
    const { image, name, phone } = this.state;
    const val = { image, name, phone };
    const { update } = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.imageBoxStyle}
          onPress={() => this.selectFromCameraRoll()}
        >
          <Image
            style={styles.image}
            source={{ uri: image }}
          />
          <Entypo
            style={styles.changePhoto}
            name="camera"
          />
        </TouchableOpacity>
        <View style={styles.textBoxAlign}>
          <Entypo style={styles.iconFormat} name="user" />
          <TextInput
            style={styles.nameFormat}
            placeholder="Evil name"
            placeholderTextColor={impLighterDark}
            multiline
            onChangeText={(nam) => this.setState({ name: nam })}
            value={name}
          />
        </View>
        <View style={styles.textBoxAlign}>
          <TouchableOpacity style={styles.touchBox}>
            <Entypo style={styles.iconFormat} name="phone" />
            <TextInput
              style={styles.phoneFormat}
              placeholder="phone"
              placeholderTextColor={impLighterDark}
              keyboardType="phone-pad"
              maxLength={10}
              textContentType="telephoneNumber"
              onChangeText={(ph) => this.setState({ phone: ph })}
              value={phone}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.boxContainer}>
          <TouchableOpacity
            style={styles.buttonBox}
            onPress={() => update(val)}
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

ContactForm.propTypes = {
  update: PropTypes.func.isRequired,
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default ContactForm;
