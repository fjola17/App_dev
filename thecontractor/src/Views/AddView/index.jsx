import React from 'react';
import { View, KeyboardAvoidingView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './styles';
import { impBlack, impRed } from '../../styles/colors';
import ContactForm from '../../components/ContactForm';
import { AddOrModifyContact } from '../../services/FileService';

class EditContact extends React.Component {
  static navigationOptions() {
    return {
      title: 'Edit Contact',
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

  update(val1) {
    const { contact } = this.state;
    const { navigation } = this.props;
    AddOrModifyContact(contact, val1);
    navigation.navigate('Main');
  }

  render() {
    const { contact } = this.state;
    return (
      <View style={styles.container}>
        <KeyboardAvoidingView behavior="position" enabled="true">
          <ContactForm contact={contact} update={(val) => this.update(val)} />
        </KeyboardAvoidingView>
      </View>
    );
  }
}

export default EditContact;
