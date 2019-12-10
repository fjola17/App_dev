import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
// import baseStyles from '../../styles/baseStyles';
import styles from './styles';
import { cinBlack, cinWhite } from '../../styles/colors';
import Cinema from '../../components/Cinema';

class Cinemas extends Component {
  // Set Top navigation header/menu options
  static navigationOptions() {
    return {
      title: 'Cinemas',
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.toolBarText}>
          Cinemas screen!!!
        </Text>
        <Text style={styles.toolBarText}>
          Here be a header and list of cinemas in a flatlist
        </Text>
        <Cinema />
      </View>
    );
  }
}

// Cinemas.propTypes = {

// };


export default Cinemas;
