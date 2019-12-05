import React from 'react';
import { View, Image, Text, Linking } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Entypo } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import makeAPhoneCall from '../../services/CallService';
import styles from './styles';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    const { contact } = this.props;
    this.state = {
      contact,
    };
  }

  render() {
    const { contact } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.imageBoxStyle}>
          <Image
            style={styles.image}
            source={{ uri: contact.image }} 
          />
        </View>
        <View style={styles.textBoxAlign}>
          <Entypo style={styles.iconFormat} name="user" />
          <Text style={styles.nameFormat}>{contact.name}</Text>
        </View>
        <View style={styles.textBoxAlign}>
          <TouchableOpacity style={styles.touchBox} onPress={() => makeAPhoneCall(contact.phone)}>
            <Entypo style={styles.iconFormat} name="phone" />
            <Text style={styles.phoneFormat}>{contact.phone}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
/*
Contact.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
}; */

export default Contact;
