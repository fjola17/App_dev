import React from 'react';
import { View, Image, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import { impWhite, impDark, impLighterDark, impRed } from '../../styles/colors';
import editContact from '../../components/ContactForm';

class EditContact extends React.Component {
  render() {
    console.log('Add new Contact view');
    return (
      <View>
        <Text>add Contact </Text>
      </View>
    );
  }
}

export default EditContact;
