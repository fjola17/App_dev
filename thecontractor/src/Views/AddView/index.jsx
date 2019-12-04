import React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
// import PropTypes from 'prop-types';
import { Entypo } from '@expo/vector-icons';
import styles from './styles';
import { impBlack, impRed } from '../../styles/colors';
import ContactForm from '../../components/ContactForm';

class EditContact extends React.Component {
  static navigationOptions() {
    return {
      title: 'Edit Information',
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

  constructor(props) {
    super(props);
    const { navigation } = this.props;
    this.state = {
      contact: navigation.getParam('contact'),
    };
  }

  render() {
    const { contact, navigation } = this.state;
    return (
      <View style={styles.container}>
        <ContactForm contact={contact} />
        {/* <View style={styles.buttonBox}>
          <TouchableOpacity
            style={styles.buttonBox}
            onPress={() => navigation.navigate('Main', { contact })}
          >
            <Text style={styles.updateButton}>
              <Entypo 
                style={{ fontSize: 25 }}
                name="save"
              />
              {'  '}
              Save Info
            </Text>
          </TouchableOpacity>
        </View> */}
      </View>
    );
  }
};

export default EditContact;
