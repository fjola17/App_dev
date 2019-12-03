import React from 'react';
import { TouchableOpacity, View, Image, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

class SmallContact extends React.Component {
  constructor(props) {
    super(props);
    const { contacts } = this.props;
    this.state = {
      contacts
    };
  }

  render() {
    const { contacts } = this.state;
    return (
      <View syle={styles.container}>
        <TouchableOpacity>
          <Image style={{ width: 50, height: 50 }} source={{ uri: contacts.image }} />
          <Text style={styles.text}>{contacts.name}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

/*
SmallContact.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}; */

export default SmallContact;
