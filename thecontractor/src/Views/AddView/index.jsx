import React from 'react';
import { View, Image, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
// import PropTypes from 'prop-types';
import styles from './styles';
import { Entypo } from '@expo/vector-icons';
import { impBlack, impWhite, impDark, impLighterDark, impRed } from "../../styles/colors";
import ContactForm from '../../components/ContactForm';

class EditContact extends React.Component {
  constructor(props) {
    super(props);
    const { navigation } = this.props;
    this.state = {
      contact: navigation.getParam('contact'),
    }
  }
 
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

  render() {
    const { contact, navigation } = this.state;
    return (
      <View style={styles.container}>
        <ContactForm contact={contact} />
        <View style={styles.buttonBox}>
          <TouchableOpacity style={styles.buttonBox} onPress={() => navigation.navigate('Main')}>
              <Text style={styles.updateButton}>
                <Entypo style={{fontSize: 25}} name="save" />  Save Info
              </Text>
            </TouchableOpacity>
        </View>
      </View>
    );
  }
};

export default EditContact;
