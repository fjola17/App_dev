import React, { Component } from 'react';
import { View, TextInput, Text, Image, TouchableOpacity } from 'react-native';
import { PropTypes } from 'prop-types';
import styles from './styles';
import { impWhite, impDark, impLighterDark, impRed } from '../../styles/colors';

// import { takePhoto, selectFromCameraRoll } from '../../../services/ImageService';
// import { addImage } from '../../../services/FileService';

//Base contact form class component to update or add new contacts
class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: -1,
      name: '',
      phone: '',
      image: 'https://heavyeditorial.files.wordpress.com/2019/11/baby-yoda-toys.jpg?quality=65&strip=all&w=780',
    };
  }

  componentDidMount() {
    const { contact } = this.props;
    const { id, name, phone, image } = contact;
    if (id) {
      this.setState({ id });
    }
    if (name) {
      this.setState({ name });
    }
    if (phone) {
      this.setState({ phone });
    }
    if (image) {
      this.setState({ image });
    }
  }

  async takePhoto() {
    const photo = await takePhoto();
    if (photo.lenght > 0) {
      await this.addImage(photo);
    }
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
    const { id, name, phone, image } = this.state;
    const contact = { id, name, phone, image };
    const { create } = this.props;
    let disabled = false;
    if (!name) {
      disabled = true;
    }
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.selectFromCameraRoll()}>
          <Text style={styles.textHeader}>Change photo</Text>
          <Image style={ heigh: 200, width: 200 } source={{ uri: image }} />
        </TouchableOpacity>

        <Text style={styles.textHeader}>Name:</Text>
        <TextInput placeholder="Your Name" onChangeText={(value) => this.setState({ name: value })} value={name} />
        <Text style={styles.textHeader}>Phone</Text>
        <TextInput placeholder="Your phone number: 666-6666" onChangeText={(text) => this.setState({ phone: text })} value={phone} />
        <TouchableOpacity disabled={disabled} onPress={() => create(contact)}>
          <Text style={[styles.button, disabled ? { color: 'rgba(155, 155, 155, .5)' } : {}]}>Update or Add New</Text>
        </TouchableOpacity>
      </View>
    );
  }
}


ContactForm.propTypes = {
  create: PropTypes.func.isRequired,
  contact: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    phone: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
};

export default ContactForm;
