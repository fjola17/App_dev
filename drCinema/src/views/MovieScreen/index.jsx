import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
// import baseStyles from '../../styles/baseStyles';
import styles from './styles';
import { cinBlack, cinWhite } from '../../styles/colors';


class Cinemas extends Component {
  // Set Top navigation header/menu options
  static navigationOptions() {
    return {
      title: 'Movie view',
    };
  }

  render() {
    const { navigation } = this.props
    const movie = navigation.getParam('movie');
    const { item } = movie;
    const { title, poster, year, plot } = item;
    return (
      <View style={styles.container}>
        <Text style={styles.toolBarText}>
          {title}
        </Text>
        <Text style={styles.toolBarText}>
          {plot}
        </Text>
      </View>
    );
  }
}

// Cinemas.propTypes = {

// };


export default Cinemas;
