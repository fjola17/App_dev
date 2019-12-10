import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
// import baseStyles from '../../styles/baseStyles';
import styles from './styles';
import { cinBlack, cinWhite } from '../../styles/colors';


class CinemaDetails extends Component {
  // Set Top navigation header/menu options
  static navigationOptions() {
    return {
      title: 'Cinema details',
    };
  }

  render() {
    const { navigation } = this.props;
    const theater = navigation.getParam('theater');
    const { item } = theater;
    const { city, description, name, phone } = item;
    const address = item["address\t"];
    return (
      <View style={styles.container}>
        <Text style={styles.toolBarText}>
          CinemaDetails!!!
        </Text>
        <Text style={styles.toolBarText}>{name}</Text>
        <Text style={styles.toolBarText}>{address}</Text>
        <Text style={styles.toolBarText}>{city}</Text>
        <Text style={styles.toolBarText}>{phone}</Text>
        <Text>{description}</Text>
        <Text style={styles.toolBarText}>
          Here be a header and list of Movies in a flatlist
        </Text>
      </View>
    );
  }
}

// CinemaDetails.propTypes = {

// };


export default CinemaDetails;
