import React from 'react';
import { View, Image, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

class SmallContact extends React.Component {
  constructor(props) {
    super(props);
    const { name, image } = this.props;
    this.state = {
      name,
      image,
    };
  }

  render() {
    const { name, image } = this.state;
    return (
      <View style={styles.container}>
        <Image styles={styles.image} source={{ uri: image }} />
        <Text style={styles.name}>{name}</Text>
      </View>
    );
  }
}

SmallContact.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default SmallContact;
