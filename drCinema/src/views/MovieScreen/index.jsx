import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Text, View, Image } from 'react-native';
// import baseStyles from '../../styles/baseStyles';
import styles from './styles';
import { cinBlack, cinWhite } from '../../styles/colors';


class Cinemas extends Component {
  // Set Top navigation header/menu options
  static navigationOptions() {
    return {
      title: 'Movie',
    };
  }

  render() {
    const { navigation } = this.props
    const movie = navigation.getParam('movie');
    const { item } = movie;
    const { title, poster, year, plot } = item;

    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{ uri: poster }}
            resizeMode='contain'
          />
        </View>
        <Text style={styles.titleText}>
          {title}
        </Text>
        <Text style={styles.infoText}>
          {year}
        </Text>
        <Text style={styles.description}>
          {plot}
        </Text>
      </View>
    );
  }
}

// Cinemas.propTypes = {

// };


export default Cinemas;
