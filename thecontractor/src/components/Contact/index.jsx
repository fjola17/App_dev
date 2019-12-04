import React from 'react';
import { View, Image, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    console.log('Contact: props: ', this.props);
    const { contact } = this.props;
    this.state = {
      contact,
    };
  }

  render() {
    const { contact } = this.state;
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: contact.image }} />
        <View style={styles.textBoxAlign}>
          <Text>icon</Text>
          <Text style={styles.nameFormat}>{contact.name}</Text>
        </View>
        <View style={styles.textBoxAlign}>
          <Text>icon</Text>
          <Text style={styles.phoneFormat}>{contact.phone}</Text>
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
