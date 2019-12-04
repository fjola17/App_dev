import React from 'react';
import { View, Image, Text } from 'react-native';
import { TouchableOpacity, Platform, Linking } from 'react-native-gesture-handler';
import { Entypo } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import styles from './styles';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    const { contact } = this.props;
    this.state = {
      contact,
    };
  }

  MakeAPhoneCall() {
    const { contact } = this.state;
    console.log ( 'Contact: MakeAPhoneCall: ', contact);
    let phoneNumber = '';
    /*
    if (Platform.OS === 'android') {
      phoneNumber = `tel:${contact.phone}`;
    } else {
      phoneNumber = `telprompt:${contact.phone}`;
    } */
    phoneNumber = `telprompt:${contact.phone}`;
    Linking.openURL(phoneNumber);
  }

  render() {
    const { contact } = this.state;
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: contact.image }} />
        <View style={styles.textBoxAlign}>
          <Entypo style={styles.iconFormat} name="user" />
          <Text style={styles.nameFormat}>{contact.name}</Text>
        </View>
        <View style={styles.textBoxAlign}>
          <TouchableOpacity style={styles.touchBox} onPress={() => this.MakeAPhoneCall()}>
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
