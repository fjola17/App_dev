import React from 'react';
import { View, Image, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    const { name, phone, image } = this.props;
    this.state = {
      name,
      phone,
      image,
    };
  }

  render() {
    const { name, phone, image } = this.state;
    return (
      <View style={styles.container}>
        <Image styles={styles.image} source={{ uri: image }} />
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.phone}>{phone}</Text>
      </View>
    );
  }
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};

export default Contact;
