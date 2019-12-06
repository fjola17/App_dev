import React from 'react';
import { View, Text } from 'react-native';
// import PropTypes from 'prop-types';
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles';
import { impBlack, impRed } from '../../styles/colors';
import Contact from '../../components/Contact';

class ContactDetails extends React.Component {
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

  constructor(props) {
    super(props);
    const { navigation } = this.props;
    this.state = {
      contact: navigation.getParam('contact'),
    };
  }

  render() {
    const { contact } = this.state;
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Contact contact={contact} />
        <View style={styles.boxContainer}>
          <TouchableOpacity
            style={styles.buttonBox}
            onPress={() => navigation.navigate('EditContact', { contact, Screen: '' })}
          >
            <Text style={styles.updateButton}>
              <Entypo
                style={{ fontSize: 25 }}
                name="arrow-with-circle-up"
              />
              {'  '}
              Update Info
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default ContactDetails;
