import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import baseStyles from '../../styles/baseStyles';
import styles from './styles';
import { cinBlack, cinWhite } from '../../styles/colors';


class Cinemas extends Component {
  // Set Top navigation header/menu options
  static navigationOptions() {
    return {
      title: 'Home',
      headerStyle: {
        backgroundColor: cinBlack,
      },
      headerTintColor: cinWhite,
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 25,
        textAlign: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
      },
      headerRight: () => (
        <MaterialCommunityIcons
          style={styles.iconHeader}
          name="death-star"
        />
      ),
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
      </View>
    );
  }
}

// Cinemas.propTypes = {

// };


export default Cinemas;
