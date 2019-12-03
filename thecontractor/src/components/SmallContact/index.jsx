import React from 'react';
import { TouchableOpacity, View, Image, Text } from 'react-native';
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

  /*
  onPress = () => {
    // TODO: Navigate to Contact Details
  }*/

  render() {
    const { name, image } = this.state;
    return (
      <View syle={styles.container}>
        <Image style={{ width: 50, height: 50 }} source={{ uri: image }} />
        <Text style={styles.text}>{name}</Text>
      </View>
    );
  }
}

SmallContact.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default SmallContact;
