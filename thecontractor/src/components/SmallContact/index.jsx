import React from 'react';
import { TouchableOpacity, View, Image, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

class SmallContact extends React.Component {
  constructor(props) {
    super(props);
    const { contact, navigation } = this.props;
    this.state = {
      contact,
      navigation,
    };
  }

  render() {
    const { contact, navigation } = this.state;
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.touchBox} onPress={() => navigation.navigate('ContactDetails', { contact })}>
          <Image style={styles.image} source={{ uri: contact.image }} />
          <Text style={styles.nameFormat}>{contact.name}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

SmallContact.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default SmallContact;
