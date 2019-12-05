import React from 'react';
import { View } from 'react-native';
// import PropTypes from 'prop-types';
// import { Entypo } from '@expo/vector-icons';
import styles from './styles';
import { impBlack, impRed } from '../../styles/colors';
import ContactForm from '../../components/ContactForm';
import { AddOrModifyContact } from '../../services/FileService';

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
        textAlign: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
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

  update(val1) {
    const { contact } = this.state;
    AddOrModifyContact(contact, val1);
  }

  render() {
    const { contact } = this.state;
    return (
      <View style={styles.container}>
        <ContactForm contact={contact} update={(val) => this.update(val)} />
      </View>
    );
  }
}

export default EditContact;
