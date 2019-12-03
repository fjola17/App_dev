import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import { impBlack, impWhite, impRed } from '../../styles/colors';
import Contact from '../../components/Contact';
import { TouchableOpacity } from 'react-native-gesture-handler';

class ContactDetails extends React.Component {
  constructor(props) {
    super(props);
    const { navigation } = this.props;
    this.state = {
      contact: navigation.getParam('contact'),
    };
  }

  static navigationOptions() {
    return {
      title: 'Contact Information',
      headerStyle: {
        backgroundColor: impRed,
      },
      headerTintColor: impBlack,
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 25,
      },
    };
  }

  render() {
    const { contact } = this.state;
    return (
      <View style={styles.container}>
        <Contact contact={contact} />
        <View style={styles.buttonBox}>
          <TouchableOpacity style={styles.buttonBox}>
            <Text style={styles.updateButton}>Update Info</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

/*
ContactDetails.propTypes = {
  photo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.number.isRequired,
}; */

export default ContactDetails;
